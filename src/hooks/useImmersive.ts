import {useEffect} from "react";

/**
 * Bộ máy hiệu ứng cuộn dùng chung cho trang chủ, không cần thư viện ngoài.
 * Đọc các thuộc tính trên phần tử:
 *  data-hero            : khối cao bọc hero (hero dính màn hình), nhận --h (0..1): 0 = trang chủ, 1 = đã mở ra
 *  data-scrub="kiểu"    : up | flip | left | right | zoom, nhận --e (0..1) khi lướt vào màn hình
 *  data-parallax="n"    : trượt dọc theo cuộn (n * khoảng cách tới giữa màn hình), nhận --py
 *  data-marquee="1|-1"  : chữ chạy ngang theo cuộn, nhận --mp (0..1)
 *  data-count="số"      : đếm số khi lướt tới
 *  data-deco="tl-br"    : cặp góc cố định (không ngẫu nhiên)
 *  data-deco            : card được gắn 2 hình viền ở 2 góc đối xứng chéo ngẫu nhiên (tl+br hoặc tr+bl)
 * Gốc trang nhận --sp (tiến độ cuộn cả trang).
 */
const clamp=(v:number,a=0,b=1)=>Math.min(b,Math.max(a,v));

export function useImmersive(){
  useEffect(()=>{
    const diagonals=[["tl","br"],["tr","bl"]];
    document.querySelectorAll<HTMLElement>("[data-deco]").forEach(el=>{
      const fixed=el.dataset.deco?.split("-");
      if(fixed&&fixed.length===2){el.dataset.c1=fixed[0];el.dataset.c2=fixed[1];return}
      const d=diagonals[Math.floor(Math.random()*2)];
      const swap=Math.random()<.5;
      el.dataset.c1=d[swap?1:0];el.dataset.c2=d[swap?0:1];
    });
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const root=document.documentElement;
    root.classList.add("fx-on");
    const hero=document.querySelector<HTMLElement>("[data-hero]");
    const scrub=Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    const par=Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const marq=Array.from(document.querySelectorAll<HTMLElement>("[data-marquee]"));
    const bar=document.querySelector<HTMLElement>(".fx-progress");
    let queued=false,raf=0,lastH=-1;

    const update=()=>{
      queued=false;
      const vh=window.innerHeight,sy=window.scrollY;
      const max=root.scrollHeight-vh;
      if(bar)bar.style.setProperty("--sp",(max>0?clamp(sy/max):0).toFixed(4));
      if(hero){
        const r=hero.getBoundingClientRect(),h=clamp(-r.top/Math.max(1,r.height-vh));
        if(Math.abs(h-lastH)>.004||h===0||h===1){lastH=h;hero.style.setProperty("--h",h.toFixed(3))}
        hero.classList.toggle("h2-opened",h>.55);
        hero.classList.toggle("h2-done",h>.9);
      }
      for(const el of scrub){
        const r=el.getBoundingClientRect();
        if(r.top>vh+240)continue;
        el.style.setProperty("--e",clamp((vh-r.top)/(vh*.55)).toFixed(3));
      }
      for(const el of par){
        const p=el.parentElement;if(!p)continue;
        const r=p.getBoundingClientRect();
        if(r.bottom<-100||r.top>vh+100)continue;
        const lim=r.height*.1;
        el.style.setProperty("--py",clamp((r.top+r.height/2-vh/2)*Number(el.dataset.parallax||0),-lim,lim).toFixed(1)+"px");
      }
      for(const el of marq){
        const r=el.getBoundingClientRect();
        if(r.bottom<-100||r.top>vh+100)continue;
        const dir=Number(el.dataset.marquee)<0?-1:1;
        const p=clamp((vh-r.top)/(vh+r.height));
        el.style.setProperty("--mp",(dir>0?p:1-p).toFixed(3));
      }
    };
    const req=()=>{if(!queued){queued=true;raf=requestAnimationFrame(update)}};
    window.addEventListener("scroll",req,{passive:true});
    window.addEventListener("resize",req);
    update();

    // đếm số khi lướt tới
    const counters=Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const timers:number[]=[];
    const io=new IntersectionObserver(es=>{
      for(const e of es){
        if(!e.isIntersecting)continue;
        io.unobserve(e.target);
        const el=e.target as HTMLElement,to=Number(el.dataset.count)||0,t0=performance.now();
        const run=(t:number)=>{
          const k=clamp((t-t0)/1500),v=1-Math.pow(1-k,3);
          el.textContent=String(Math.round(to*v));
          if(k<1)timers.push(requestAnimationFrame(run));
        };
        timers.push(requestAnimationFrame(run));
      }
    },{threshold:.6});
    counters.forEach(c=>{c.textContent="0";io.observe(c)});

    return()=>{
      cancelAnimationFrame(raf);timers.forEach(cancelAnimationFrame);io.disconnect();
      window.removeEventListener("scroll",req);window.removeEventListener("resize",req);
      counters.forEach(c=>{c.textContent=c.dataset.count||""});
      root.classList.remove("fx-on");
    };
  },[]);
}
