import {useMemo,useState} from "react";
import {Search} from "lucide-react";
import {guides} from "../../data/guide";
import {groups,type Page} from "../../data/guide/types";
import {ArrowButton,Dots,gameImage,useSlider} from "./shared";

const slides=[
  {src:"home/hud-overview.webp",title:"Bảng Agent Auto gọn ngay trong game"},
  {src:"home/settings-overview.webp",title:"Trang thiết lập chi tiết theo nhân vật"},
  {src:"home/train-in-action.webp",title:"Luyện công tự động tại bãi"},
  {src:"getting-started/fixed-party.webp",title:"Tổ đội cố định giữa nhiều máy"}
];
const tabs=["activities","train","combat","team"].map(id=>groups.find(g=>g.id===id)!);

export default function Promo({go}:{go:(p:Page)=>void}){
  const slider=useSlider(slides.length);
  const [tab,setTab]=useState(tabs[0].id);
  const [query,setQuery]=useState("");
  const items=useMemo(()=>{
    const q=query.trim().toLocaleLowerCase("vi");
    return guides.filter(g=>g.group===tab&&(!q||(g.title+" "+g.section).toLocaleLowerCase("vi").includes(q)));
  },[tab,query]);
  const shown=items.slice(0,7);

  return <section className="text-white" aria-label="Tin mới">
    <div className="mx-auto grid max-w-wide gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
      <div onMouseEnter={()=>slider.hold(true)} onMouseLeave={()=>slider.hold(false)} onFocus={()=>slider.hold(true)} onBlur={()=>slider.hold(false)}>
        <div data-deco="1" className="gl relative aspect-video rounded-3xl p-2"><div className="h-full overflow-hidden rounded-2xl">
          <div className="flex h-full transition-transform duration-500 ease-out" style={{transform:`translateX(-${slider.index*100}%)`}}>
            {slides.map((s,i)=><button key={s.src} type="button" aria-hidden={i!==slider.index} tabIndex={i===slider.index?0:-1} onClick={()=>go("docs")} className="relative block h-full w-full shrink-0 overflow-hidden rounded-2xl">
              <img src={gameImage(s.src)} alt={s.title} loading={i?"lazy":"eager"} className="h-full w-full object-cover"/>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-5 pt-12 text-left text-sm font-semibold text-white sm:text-base">{s.title}</span>
            </button>)}
          </div></div>
          <ArrowButton dir="prev" label="Ảnh trước" id="promo-prev" onClick={slider.prev} className="absolute left-4 top-1/2 -translate-y-1/2 scale-90"/>
          <ArrowButton dir="next" label="Ảnh sau" id="promo-next" onClick={slider.next} className="absolute right-4 top-1/2 -translate-y-1/2 scale-90"/>
        </div>
        <Dots count={slides.length} index={slider.index} onSelect={slider.set} id="promo" className="mt-2" inactive="bg-white/35"/>
      </div>

      <div className="min-w-0">
        <div role="tablist" aria-label="Nhóm tin" className="gl flex flex-wrap gap-1 rounded-full p-1.5">
          {tabs.map(t=><button key={t.id} role="tab" type="button" aria-selected={tab===t.id} data-pwc-interaction={"news-tab-"+t.id} onClick={()=>setTab(t.id)} className={"min-h-10 rounded-full px-4 text-sm font-semibold transition "+(tab===t.id?"bg-white/25 text-white shadow-[inset_0_1px_0_rgba(255,255,255,.4)]":"text-white/65 hover:bg-white/10 hover:text-white")}>{t.name}</button>)}
        </div>
        <ul data-deco="1" data-pwc-controlled="news-tab" className="gl mt-3 min-h-[266px] rounded-3xl px-3 py-2">
          {shown.map((g,i)=><li key={g.id} className="fx-row" style={{"--i":i} as React.CSSProperties}><button type="button" onClick={()=>go("docs")} className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-2 py-2 text-left text-sm text-white/90 transition last:border-b-0 hover:bg-white/10 hover:text-white"><span className="min-w-0 truncate">{g.title}</span><span className="shrink-0 text-xs text-white/50">{g.section}</span></button></li>)}
          {!shown.length&&<li className="py-6 text-sm text-white/60">Không có mục phù hợp.</li>}
        </ul>
        <div className="mt-3 flex items-center gap-2">
          <label className="relative min-w-0 flex-1"><span className="sr-only">Tìm tính năng</span>
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm tính năng, thiết lập…" className="gl h-11 w-full rounded-full px-4 pr-11 text-base text-white placeholder:text-white/50 focus:border-white/60 focus:outline-none sm:text-sm"/>
            <Search size={17} className="pointer-events-none absolute right-4 top-3 text-white/70"/>
          </label>
          <button type="button" onClick={()=>go("docs")} className="gl gl-accent min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold text-white hover:brightness-125">Xem thêm</button>
        </div>
      </div>
    </div>
  </section>;
}
