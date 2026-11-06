import {useEffect,useState,type ReactNode} from "react";
import {ChevronLeft,ChevronRight} from "lucide-react";

export const homeImage=(name:string)=>new URL("images/home2/"+name,document.baseURI).href;
export const gameImage=(path:string)=>new URL("images/game/"+path,document.baseURI).href;

export function useSlider(length:number,ms=5000){
  const [index,setIndex]=useState(0);
  const [held,setHeld]=useState(false);
  useEffect(()=>{
    if(held||length<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const timer=setInterval(()=>setIndex(v=>(v+1)%length),ms);
    return()=>clearInterval(timer);
  },[held,length,ms]);
  return {index,set:setIndex,hold:setHeld,next:()=>setIndex(v=>(v+1)%length),prev:()=>setIndex(v=>(v-1+length)%length)};
}

export function Ribbon({children}:{children:ReactNode}){
  return <h2 className="mx-auto flex w-fit max-w-full items-center gap-3 text-center">
    <span aria-hidden="true" className="hidden h-px w-16 bg-gradient-to-r from-transparent to-white/50 sm:block md:w-28"/>
    <span className="gl gl-accent rounded-full px-7 py-2 text-lg font-bold tracking-wide text-white sm:px-10 sm:text-2xl">{children}</span>
    <span aria-hidden="true" className="hidden h-px w-16 bg-gradient-to-l from-transparent to-white/50 sm:block md:w-28"/>
  </h2>;
}

export function ArrowButton({dir,onClick,label,id,className=""}:{dir:"prev"|"next";onClick:()=>void;label:string;id?:string;className?:string}){
  const Icon=dir==="prev"?ChevronLeft:ChevronRight;
  return <button type="button" aria-label={label} data-pwc-interaction={id} onClick={onClick} className={"gl grid h-12 w-12 place-items-center rounded-full text-white transition hover:scale-105 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 "+className}><Icon size={22}/></button>;
}

export function Dots({count,index,onSelect,id,className="",inactive="bg-white/40"}:{count:number;index:number;onSelect:(i:number)=>void;id:string;className?:string;inactive?:string}){
  return <div className={"flex items-center justify-center gap-1 "+className}>
    {Array.from({length:count},(_,i)=><button key={i} type="button" aria-label={"Mục "+(i+1)} aria-current={i===index} data-pwc-interaction={id+"-"+i} onClick={()=>onSelect(i)} className="grid h-6 w-6 place-items-center"><span className={"block h-2.5 rounded-full transition-all "+(i===index?"w-7 bg-gradient-to-r from-cyan-300 to-sky-400":"w-2.5 "+inactive)}/></button>)}
  </div>;
}
