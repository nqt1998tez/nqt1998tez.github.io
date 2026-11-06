import {useMemo,useState} from "react";
import {guides} from "../../data/guide";
import type {Page} from "../../data/guide/types";
import {ArrowButton,Ribbon,gameImage,homeImage} from "./shared";

const chars=["char1","char3","char5","char4","char2"];
const icons=[1,3,4,6,7,8,9,11,12,13,15,16,18,19];

export default function ActivityShowcase({go}:{go:(p:Page)=>void}){
  const activities=useMemo(()=>guides.filter(g=>g.kind==="activity"),[]);
  const sections=useMemo(()=>Array.from(new Set(activities.map(a=>a.section))),[activities]);
  const [index,setIndex]=useState(0);
  const total=activities.length;
  const active=activities[index];
  if(!active)return null;
  const step=(d:number)=>setIndex(v=>(v+d+total)%total);

  return <section id="activities2" className="relative isolate overflow-hidden text-white" aria-label="Hoạt động tự động">
    <div className="pb-2 pt-16"><Ribbon>Hoạt động tự động</Ribbon></div>
    <div className="mx-auto grid max-w-wide items-center gap-6 px-4 py-8 sm:px-6 md:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:px-10">
      <div className="mx-auto w-full max-w-sm sm:max-w-md"><div className="fx-noglare relative aspect-[4/5] w-full" data-pwc-controlled="activity">
        <img key={chars[index%chars.length]} src={homeImage(chars[index%chars.length]+".webp")} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-contain drop-shadow-2xl [animation:fadeIn_.4s_ease] [transform:translateZ(50px)]"/>
      </div></div>
      <div className="min-w-0 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-200">{active.section}</p>
        <h3 className="mt-1 bg-gradient-to-r from-white via-cyan-200 to-sky-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">{active.title}</h3>
        <div role="tablist" aria-label="Loại hoạt động" className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          {sections.map(s=>{const on=active.section===s;return <button key={s} role="tab" type="button" aria-selected={on} data-pwc-interaction={"activity-section-"+s} onClick={()=>setIndex(activities.findIndex(a=>a.section===s))} className={"gl min-h-10 rounded-full px-5 text-sm font-semibold transition "+(on?"gl-accent text-white":"text-white/70 hover:text-white")}>{s}</button>})}
        </div>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-white/80 md:mx-0">{active.description}</p>
        <div data-deco="1" className="mx-auto mt-5 max-w-md gl rounded-2xl p-1.5 md:mx-0">
          <img src={gameImage("home/train-in-action.webp")} alt="Agent Auto đang chạy trong game" loading="lazy" className="aspect-video w-full rounded-xl object-cover"/>
        </div>
        <button type="button" onClick={()=>go("docs")} className="gl gl-accent mt-5 min-h-11 rounded-full px-7 text-sm font-semibold text-white hover:brightness-125">Xem hướng dẫn</button>
      </div>
    </div>

    <div className="relative px-2 py-4 sm:px-6 lg:px-10">
      <div data-deco="1" className="gl mx-auto flex max-w-wide items-center gap-1 rounded-3xl px-2 py-1">
        <ArrowButton dir="prev" label="Hoạt động trước" id="activity-prev" onClick={()=>step(-1)} className="shrink-0"/>
        <div role="tablist" aria-label="Danh sách hoạt động" className="flex min-w-0 flex-1 gap-1 overflow-x-auto py-1 [scrollbar-width:none]">
          {activities.map((a,i)=><button key={a.id} role="tab" type="button" aria-selected={i===index} data-pwc-interaction={"activity-"+i} onClick={()=>setIndex(i)} className={"flex min-h-[76px] w-[88px] shrink-0 flex-col items-center justify-center gap-1 rounded-2xl px-1 text-center text-[11px] font-semibold leading-tight transition "+(i===index?"bg-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)]":"text-white/65 hover:bg-white/10")}>
            <img src={homeImage("icon-"+icons[i%icons.length]+".webp")} alt="" aria-hidden="true" loading="lazy" className="h-9 w-9"/>
            <span className="line-clamp-2">{a.title}</span>
          </button>)}
        </div>
        <ArrowButton dir="next" label="Hoạt động sau" id="activity-next" onClick={()=>step(1)} className="shrink-0"/>
      </div>
    </div>
  </section>;
}
