import {useEffect,useState} from "react";
import {Expand,X} from "lucide-react";
import type {GuideImage} from "../../data/guide/types";
export default function GameScreenshot({image,priority=false,featured=false,compact=false,delay=0}:{image:GuideImage;priority?:boolean;featured?:boolean;compact?:boolean;delay?:number}){
  const [open,setOpen]=useState(false);
  const [failed,setFailed]=useState(false);
  useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",onKey);return()=>window.removeEventListener("keydown",onKey)},[open]);
  if(failed)return null;
  return <>
    <figure data-reveal style={{transitionDelay:delay?`${delay}ms`:undefined}} className="screenshot-card min-w-0">
      <div className={"screenshot-inner min-w-0 overflow-hidden rounded-xl border bg-[#0b1222] "+(featured?"screenshot-featured border-gold/25":"border-white/10")}>
        <button type="button" className="group relative block w-full p-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold" aria-label={"Phóng to: "+image.alt} onClick={()=>setOpen(true)}>
          <img src={image.src} alt={image.alt} loading={priority?"eager":"lazy"} onError={()=>setFailed(true)} className={"w-full rounded-lg object-contain "+(featured?"max-h-[440px] xl:max-h-[480px]":"max-h-[440px]")}/>
          <span className="screenshot-expand absolute bottom-4 right-4 rounded-lg bg-slate-950/80 p-2 text-white backdrop-blur-sm"><Expand size={18}/></span>
        </button>
      </div>
      {image.caption&&<figcaption className={"px-1 pt-2.5 text-xs leading-6 text-slate-400 "+(compact?"hidden sm:block":"pb-1")}>{image.caption}</figcaption>}
    </figure>
    {open&&<div role="dialog" aria-modal="true" aria-label={image.alt} className="lightbox-fade fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-8" onClick={()=>setOpen(false)}>
      <button type="button" autoFocus aria-label="Đóng ảnh" className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800 text-white" onClick={()=>setOpen(false)}><X size={24}/></button>
      <img src={image.src} alt={image.alt} className="lightbox-zoom max-h-[85dvh] max-w-full object-contain" onClick={e=>e.stopPropagation()}/>
    </div>}
  </>;
}
