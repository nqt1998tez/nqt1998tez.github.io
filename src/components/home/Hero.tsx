import {useEffect,useRef} from "react";
import {BookOpen,HelpCircle,LayoutList,Rocket,ShieldCheck,Star} from "lucide-react";
import type {Page} from "../../data/guide/types";
import PetalField from "./PetalField";
import {homeImage} from "./shared";

const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
const sparks=[[8,62,0],[22,28,2.2],[42,20,1.3],[58,70,3.2],[78,32,5.2],[92,60,.8]];
const DEPTH=[[-10,-6],[14,6],[28,12],[-36,14]];

export default function Hero({go}:{go:(p:Page)=>void}){
  const hero=useRef<HTMLElement>(null);
  const layers=useRef<(HTMLDivElement|null)[]>([]);
  const wind=useRef(0);

  useEffect(()=>{
    const el=hero.current;
    if(!el||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const coarse=window.matchMedia("(pointer: coarse)").matches;
    let tx=0,ty=0,cx=0,cy=0,raf=0,running=false,visible=true;
    const apply=()=>{
      layers.current.forEach((n,i)=>{if(n)n.style.transform=`translate3d(${(cx*DEPTH[i][0]).toFixed(1)}px,${(cy*DEPTH[i][1]).toFixed(1)}px,0)`});
      wind.current=cx;
    };
    const tick=(t:number)=>{
      if(!visible){running=false;return}
      if(coarse){tx=Math.sin(t/3800)*.4;ty=Math.cos(t/5200)*.22}
      cx+=(tx-cx)*.07;cy+=(ty-cy)*.07;
      apply();
      if(!coarse&&Math.abs(tx-cx)<.002&&Math.abs(ty-cy)<.002){running=false;return}
      raf=requestAnimationFrame(tick);
    };
    const start=()=>{if(!running&&visible){running=true;raf=requestAnimationFrame(tick)}};
    const seen=new IntersectionObserver(([e])=>{visible=e.isIntersecting;el.classList.toggle("h2-off",!visible);if(visible&&coarse)start()});
    seen.observe(el);
    if(coarse)start();
    return()=>{cancelAnimationFrame(raf);seen.disconnect();};
  },[]);

  const tiles=[
    {label:"Hướng dẫn",icon:BookOpen,run:()=>go("docs")},
    {label:"Tính năng",icon:LayoutList,run:()=>scrollTo("features")},
    {label:"Bảo mật",icon:ShieldCheck,run:()=>scrollTo("security2")},
    {label:"Hỏi đáp",icon:HelpCircle,run:()=>scrollTo("faq")}
  ];
  const rise=(d:number)=>({"--d":d+"s"} as React.CSSProperties);

  const open=[
    {label:"Hướng dẫn",icon:BookOpen,run:()=>go("docs")},
    {label:"Tính năng",icon:LayoutList,run:()=>scrollTo("features")},
    {label:"Hoạt động",icon:Rocket,run:()=>scrollTo("activities2")},
    {label:"Nổi bật",icon:Star,run:()=>scrollTo("highlights2")},
    {label:"Bảo mật",icon:ShieldCheck,run:()=>scrollTo("security2")},
    {label:"Hỏi đáp",icon:HelpCircle,run:()=>scrollTo("faq")}
  ];

  return <div data-hero="1" className="h2-pin"><section ref={hero} className="h2-hero relative isolate h-[100svh] min-h-[620px] overflow-hidden bg-[#07121c]" aria-label="Agent Auto">
    <div className="h2-depth" style={{"--dy":60,"--sc":.22} as React.CSSProperties}><div className="h2-layer" ref={n=>{layers.current[0]=n}}>
      <img src={homeImage("bg_origin.webp")} alt="" aria-hidden="true" className="absolute inset-[-3%] h-[106%] w-[106%] max-w-none object-cover object-[center_30%]"/>
    <div aria-hidden="true" className="absolute inset-0 bg-black/20"/>
    </div></div>
    <div aria-hidden="true" className="h2-rays"/>
    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_58%,rgba(90,150,200,.22),transparent_55%)]"/>

    <div className="h2-depth hidden md:block" style={{"--dy":40,"--sc":.18} as React.CSSProperties}><div className="h2-layer" ref={n=>{layers.current[1]=n}}>
      <img src={homeImage("char3.webp")} alt="" aria-hidden="true" className="h2-float absolute bottom-0 left-[8%] h-[72%] w-auto max-w-none h2-back" style={{"--fd":"9s"} as React.CSSProperties}/>
      <img src={homeImage("char4.webp")} alt="" aria-hidden="true" className="h2-float absolute bottom-0 right-[8%] h-[72%] w-auto max-w-none h2-back" style={{"--fd":"10s","--fo":"-2s"} as React.CSSProperties}/>
    </div></div>
    <div className="h2-depth" style={{"--dx":-72,"--dy":0,"--sc":0} as React.CSSProperties}><div className="h2-layer" ref={n=>{layers.current[2]=n}}>
      <img src={homeImage("char1.webp")} alt="" aria-hidden="true" className="h2-float absolute bottom-0 left-[-14%] hidden h-[94%] w-auto max-w-none md:left-[-5%] md:block" style={{"--fd":"7.5s"} as React.CSSProperties}/>
    </div></div>
    <div className="h2-depth" style={{"--dx":72,"--dy":0,"--sc":0} as React.CSSProperties}><div className="h2-layer" ref={n=>{layers.current[3]=n}}>
      <img src={homeImage("char5.webp")} alt="" aria-hidden="true" className="h2-float absolute right-[-10%] top-[3%] h-[40%] w-auto max-w-none md:bottom-0 md:right-[-4%] md:top-auto md:h-[96%]" style={{"--fd":"8.5s","--fo":"-1.2s"} as React.CSSProperties}/>
    </div></div>

    {sparks.map(([x,y,d],i)=><span key={i} aria-hidden="true" className="h2-spark" style={{left:x+"%",top:y+"%",animationDelay:d+"s"}}/>)}
    <PetalField wind={wind}/>
    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-[#07121c]/30 via-transparent to-[#07121c]"/>

    <div className="h2-copy relative z-10 mx-auto flex h-full max-w-wide flex-col items-center justify-end px-4 pb-14 pt-24 text-center sm:px-6">
      <p className="h2-rise gl max-w-full rounded-3xl px-4 py-2 text-center text-[10px] font-semibold leading-snug tracking-[.12em] text-white/90 sm:rounded-full sm:px-5 sm:text-[11px] sm:tracking-[.18em]" style={rise(.1)}>CÔNG CỤ HỖ TRỢ NGƯỜI CHƠI KIẾM THẾ ORIGIN</p>
      <h1 className="mt-3">
        <img src={homeImage("banner_text.webp")} alt="Agent Auto - Auto Kiếm Thế Origin, PC và điện thoại" className="h2-rise mx-auto block h-auto w-[min(88vw,600px)] [filter:drop-shadow(0_6px_18px_rgba(0,0,0,.55))]" style={rise(.25)}/>
      </h1>
      <div className="mt-9 grid w-full max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
        {tiles.map((t,i)=><div key={t.label} data-deco="1" style={rise(.65+i*.1)} className="h2-rise"><button type="button" onClick={t.run} className={"h2-tile gl flex h-full min-h-[88px] w-full flex-col items-center justify-center gap-2 rounded-2xl px-2 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"}><t.icon size={26}/>{t.label}</button></div>)}
      </div>
      <p className="h2-rise mt-5 flex flex-wrap justify-center gap-x-3 text-xs font-medium text-white/90" style={rise(1.1)}>
        <button type="button" className="underline-offset-2 hover:underline" onClick={()=>go("docs")}>Hướng dẫn sử dụng</button><span aria-hidden="true">|</span>
        <button type="button" className="underline-offset-2 hover:underline" onClick={()=>scrollTo("security2")}>Bảo mật tài khoản</button><span aria-hidden="true">|</span>
        <button type="button" className="underline-offset-2 hover:underline" onClick={()=>scrollTo("faq")}>Câu hỏi thường gặp</button>
      </p>
    </div>
    <div className="h2-open" aria-label="Chức năng chính">
      {open.map((o,i)=><button key={o.label} type="button" onClick={o.run} style={{"--i":i} as React.CSSProperties} data-deco="1" className="h2-open-card"><o.icon size={30}/><span>{o.label}</span></button>)}
    </div>
    <button type="button" aria-label="Cuộn xuống" onClick={()=>scrollTo("features")} className="h2-cue"/>
  </section></div>;
}
