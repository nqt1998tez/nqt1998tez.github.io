import {useEffect,useRef,type MutableRefObject} from "react";

type Petal={x:number;y:number;s:number;vy:number;vx:number;ph:number;sway:number;sf:number;rot:number;vr:number;flip:number;vf:number;alpha:number;tone:number};

const rand=(a:number,b:number)=>a+Math.random()*(b-a);

/** Hoa rơi lác đác: ít cánh, rơi chậm, đung đưa và lật nhẹ; gió lấy theo hướng chuột. */
export default function PetalField({wind}:{wind:MutableRefObject<number>}){
  const ref=useRef<HTMLCanvasElement>(null);

  useEffect(()=>{
    const canvas=ref.current;
    const box=canvas?.parentElement;
    if(!canvas||!box||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const ctx=canvas.getContext("2d");
    if(!ctx)return;

    let w=0,h=0,raf=0,last=0,visible=true;
    const dpr=Math.min(window.devicePixelRatio||1,1.5);
    let petals:Petal[]=[];

    const spawn=(p:Petal,initial:boolean)=>{
      p.x=rand(-0.05,1.05)*w;
      p.y=initial?rand(0,h):-rand(12,h*0.5);
      p.s=rand(6,13);
      p.vy=rand(20,44);
      p.vx=rand(-6,8);
      p.ph=rand(0,Math.PI*2);
      p.sway=rand(14,34);
      p.sf=rand(0.5,1.1);
      p.rot=rand(0,Math.PI*2);
      p.vr=rand(-1,1);
      p.flip=rand(0,Math.PI*2);
      p.vf=rand(1.2,2.6);
      p.alpha=rand(0.55,0.92);
      p.tone=Math.random();
    };

    const resize=()=>{
      w=box.clientWidth;h=box.clientHeight;
      canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
      const count=w<640?7:12;
      petals=Array.from({length:count},()=>{const p={} as Petal;spawn(p,true);return p});
    };

    const makeSprite=(top:string,bottom:string)=>{
      const c=document.createElement("canvas");c.width=c.height=48;
      const g=c.getContext("2d")!;
      g.translate(24,24);
      const grad=g.createLinearGradient(0,-10,0,10);grad.addColorStop(0,top);grad.addColorStop(1,bottom);
      g.fillStyle=grad;g.shadowColor="rgba(255,170,200,.5)";g.shadowBlur=6;
      g.beginPath();g.moveTo(0,-10);
      g.bezierCurveTo(9.5,-5.5,7,7.5,0,10);g.bezierCurveTo(-7,7.5,-9.5,-5.5,0,-10);
      g.closePath();g.fill();
      return c;
    };
    const sprites=[makeSprite("#fff0f4","#ff9dbb"),makeSprite("#ffffff","#ffd3df")];

    const draw=(p:Petal)=>{
      const k=p.s/10,fx=0.25+Math.abs(Math.cos(p.flip))*0.75,cos=Math.cos(p.rot),sin=Math.sin(p.rot);
      ctx.setTransform(dpr*cos*k*fx,dpr*sin*k*fx,-dpr*sin*k,dpr*cos*k,dpr*p.x,dpr*p.y);
      ctx.globalAlpha=p.alpha;
      ctx.drawImage(sprites[p.tone<0.7?0:1],-24,-24);
    };

    const tick=(t:number)=>{
      if(!visible){raf=0;return}
      if(box.parentElement?.classList.contains("h2-done")){last=0;raf=requestAnimationFrame(tick);return}
      raf=requestAnimationFrame(tick);
      const dt=Math.min((t-(last||t))/1000,0.05);
      last=t;
      ctx.setTransform(1,0,0,1,0,0);
      ctx.clearRect(0,0,canvas.width,canvas.height);
      const air=wind.current*26;
      for(const p of petals){
        p.y+=p.vy*dt;
        p.x+=(Math.sin(t/1000*p.sf+p.ph)*p.sway*0.5+p.vx+air)*dt;
        p.rot+=p.vr*dt;
        p.flip+=p.vf*dt;
        if(p.y>h+20||p.x<-30||p.x>w+30)spawn(p,false);
        draw(p);
      }
    };

    const watcher=new ResizeObserver(resize);
    watcher.observe(box);
    const seen=new IntersectionObserver(([e])=>{visible=e.isIntersecting;last=0;if(visible&&!raf)raf=requestAnimationFrame(tick)});
    seen.observe(box);
    resize();
    raf=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(raf);watcher.disconnect();seen.disconnect()};
  },[wind]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5] h-full w-full"/>;
}
