import {ArrowRight,BookOpen} from "lucide-react";
import type {Page} from "../../data/guide/types";

export default function FinalCta({go}:{go:(p:Page)=>void}){
  const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
  return <section className="px-4 pb-20 pt-6 text-white sm:px-6" aria-label="Bắt đầu sử dụng">
    <div data-deco="1" className="gl mx-auto max-w-4xl rounded-3xl px-6 py-14 text-center sm:px-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[.2em] text-cyan-200">Sẵn sàng bắt đầu</p>
      <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">Dùng ngay trong game,<br/><span className="bg-gradient-to-r from-white via-cyan-200 to-sky-300 bg-clip-text text-transparent">không cần làm quen dashboard</span></h2>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={()=>go("docs")} className="gl gl-accent inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white hover:brightness-125"><BookOpen size={17}/> Xem hướng dẫn sử dụng</button>
        <button type="button" onClick={()=>scrollTo("features")} className="gl inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-white hover:bg-white/15">Xem tính năng <ArrowRight size={17}/></button>
      </div>
    </div>
  </section>;
}
