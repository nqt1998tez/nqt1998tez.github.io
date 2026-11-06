import {Play} from "lucide-react";
import type {Page} from "../../data/guide/types";
import {ArrowButton,Dots,Ribbon,gameImage,useSlider} from "./shared";

const slides=[
  {src:"home/hud-overview.webp",title:"Bảng Agent Auto trong game"},
  {src:"home/settings-overview.webp",title:"Trang thiết lập ⚙ đầy đủ"},
  {src:"home/train-in-action.webp",title:"Luyện công tự động"},
  {src:"getting-started/open-agent-auto.webp",title:"Mở Agent Auto chỉ một lần bấm"},
  {src:"getting-started/fixed-party.webp",title:"Tổ đội cố định nhiều máy"},
  {src:"getting-started/switch-mode.webp",title:"Đổi chế độ train nhanh"}
];

export default function Highlights({go}:{go:(p:Page)=>void}){
  const slider=useSlider(slides.length,6000);
  const n=slides.length;
  const at=(offset:number)=>slides[(slider.index+offset+n)%n];
  const view=[-1,0,1];

  return <section id="highlights2" className="relative isolate overflow-hidden py-16" aria-label="Tính năng nổi bật" onMouseEnter={()=>slider.hold(true)} onMouseLeave={()=>slider.hold(false)}>
    <Ribbon>Tính năng nổi bật</Ribbon>
    <div className="relative mx-auto mt-8 max-w-[1500px]" data-pwc-controlled="highlights">
      <div className="fx-cover grid grid-cols-1 items-center gap-4 px-4 md:grid-cols-[1fr_1.7fr_1fr] md:px-0">
        {view.map(o=>{const s=at(o);return <button key={o+"-"+s.src} data-deco="1" type="button" tabIndex={o===0?0:-1} aria-hidden={o!==0} onClick={()=>o===0?go("docs"):o<0?slider.prev():slider.next()} className={"gl group relative rounded-3xl p-2 "+(o===0?"":"hidden opacity-55 md:block "+(o<0?"fx-cover-l":"fx-cover-r"))}>
          <img src={gameImage(s.src)} alt={o===0?s.title:""} loading="lazy" className="aspect-video w-full rounded-2xl object-cover"/>
          <span className="absolute inset-2 grid place-items-center rounded-2xl bg-black/20 transition-colors group-hover:bg-black/10"><span className="gl grid h-14 w-14 place-items-center rounded-full text-white"><Play size={24} fill="currentColor"/></span></span>
          <span className="absolute inset-x-2 bottom-2 rounded-b-2xl bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-8 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">{s.title}</span>
        </button>})}
      </div>
      <ArrowButton dir="prev" label="Tính năng trước" id="highlights-prev" onClick={slider.prev} className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 md:grid"/>
      <ArrowButton dir="next" label="Tính năng sau" id="highlights-next" onClick={slider.next} className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 md:grid"/>
    </div>
    <div className="mt-5 flex items-center justify-center gap-4">
      <ArrowButton dir="prev" label="Tính năng trước" onClick={slider.prev} className="md:hidden"/>
      <Dots count={n} index={slider.index} onSelect={slider.set} id="highlights"/>
      <ArrowButton dir="next" label="Tính năng sau" onClick={slider.next} className="md:hidden"/>
    </div>
  </section>;
}
