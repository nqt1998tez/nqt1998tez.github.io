import {useMemo,useState,type ReactNode} from "react";
import {ChevronDown} from "lucide-react";
import {guides} from "../../data/guide";
import {groups,type Page} from "../../data/guide/types";
import {Ribbon} from "./shared";

const PAGE_SIZE=10;
const kindLabel:Record<string,string>={toggle:"Bật / tắt",number:"Số",activity:"Hoạt động",select:"Chọn",choice:"Lựa chọn","time-range":"Khung giờ",text:"Chữ"};
const rankStyle=["bg-amber-400/80","bg-slate-300/70","bg-orange-400/70"];

function Select({label,value,onChange,children}:{label:string;value:string;onChange:(v:string)=>void;children:ReactNode}){
  return <label className="relative block"><span className="sr-only">{label}</span>
    <select value={value} onChange={e=>onChange(e.target.value)} className="gl h-11 w-full appearance-none rounded-full pl-4 pr-9 text-base font-medium text-white focus:border-white/60 focus:outline-none sm:text-sm [&>option]:text-slate-900">{children}</select>
    <ChevronDown size={18} className="pointer-events-none absolute right-3 top-3 text-white/70"/>
  </label>;
}

export default function FeatureTable({go}:{go:(p:Page)=>void}){
  const [group,setGroup]=useState(groups[0].id);
  const [section,setSection]=useState("");
  const [kind,setKind]=useState("");
  const [page,setPage]=useState(1);
  const inGroup=useMemo(()=>guides.filter(g=>g.group===group),[group]);
  const sections=useMemo(()=>Array.from(new Set(inGroup.map(g=>g.section))),[inGroup]);
  const kinds=useMemo(()=>Array.from(new Set(inGroup.map(g=>g.kind))),[inGroup]);
  const rows=useMemo(()=>inGroup.filter(g=>(!section||g.section===section)&&(!kind||g.kind===kind)),[inGroup,section,kind]);
  const pages=Math.max(1,Math.ceil(rows.length/PAGE_SIZE));
  const current=Math.min(page,pages);
  const view=rows.slice((current-1)*PAGE_SIZE,current*PAGE_SIZE);
  const pick=(id:string)=>{setGroup(id);setSection("");setKind("");setPage(1)};

  return <section id="features" className="relative isolate scroll-mt-20 overflow-hidden py-16 text-white" aria-label="Bảng tính năng">
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      <Ribbon>Bảng tính năng</Ribbon>
      <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3">
        <Select label="Chọn mục" value={section} onChange={v=>{setSection(v);setPage(1)}}><option value="">Tất cả mục</option>{sections.map(s=><option key={s} value={s}>{s}</option>)}</Select>
        <Select label="Chọn loại" value={kind} onChange={v=>{setKind(v);setPage(1)}}><option value="">Tất cả loại</option>{kinds.map(k=><option key={k} value={k}>{kindLabel[k]||k}</option>)}</Select>
      </div>

      <div role="tablist" aria-label="Nhóm tính năng" className="mt-6 mb-3 flex justify-start gap-2 overflow-x-auto px-1 sm:justify-center">
        {groups.map(g=><button key={g.id} role="tab" type="button" aria-selected={group===g.id} data-pwc-interaction={"feature-tab-"+g.id} onClick={()=>pick(g.id)} className={"gl min-h-10 shrink-0 rounded-full px-5 text-sm font-semibold transition "+(group===g.id?"gl-accent text-white":"text-white/70 hover:text-white")}>{g.name}</button>)}
      </div>

      <div data-deco="1" data-pwc-controlled="feature-tab" className="gl rounded-3xl p-3 sm:p-5">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-center text-sm">
            <thead><tr className="text-xs font-semibold uppercase tracking-wider text-white/55"><th className="w-12 py-2 sm:w-16">Hạng</th><th className="py-2 text-left">Tính năng</th><th className="hidden py-2 text-left sm:table-cell">Mục</th><th className="w-24 py-2 sm:w-28">Loại</th></tr></thead>
            <tbody>
              {view.map((g,i)=>{const n=(current-1)*PAGE_SIZE+i;return <tr key={g.id} style={{"--i":i} as React.CSSProperties} onClick={()=>go("docs")} className="fx-row cursor-pointer border-t border-white/10 transition hover:bg-white/10">
                <td className="py-2"><span className={"mx-auto grid h-7 w-7 place-items-center rounded-full text-xs font-bold "+(n<3?rankStyle[n]+" text-white":"text-white/60")}>{n+1}</span></td>
                <td className="py-2 pr-2 text-left font-semibold sm:pr-3">{g.title}<span className="block text-xs font-normal text-white/55 sm:hidden">{g.section}</span></td>
                <td className="hidden py-2 pr-3 text-left text-white/65 sm:table-cell">{g.section}</td>
                <td className="py-2 text-xs text-white/65 sm:text-sm">{kindLabel[g.kind]||g.kind}</td>
              </tr>})}
              {!view.length&&<tr><td colSpan={4} className="py-8 text-white/60">Không có tính năng phù hợp.</td></tr>}
            </tbody>
          </table>
        </div>
        <nav aria-label="Phân trang" className="mt-3 flex flex-wrap items-center justify-center gap-1">
          {Array.from({length:pages},(_,i)=>i+1).map(p=><button key={p} type="button" aria-current={p===current} data-pwc-interaction={"feature-page-"+p} onClick={()=>setPage(p)} className={"h-9 min-w-9 rounded-full px-3 text-sm font-semibold transition "+(p===current?"bg-white/30 text-white":"text-white/70 hover:bg-white/10")}>{p}</button>)}
        </nav>
      </div>
      <p className="mx-auto mt-5 max-w-xl text-center text-xs text-white/60">Mọi thiết lập lưu theo nhân vật trong game. Bấm một dòng để mở hướng dẫn.</p>
    </div>
  </section>;
}
