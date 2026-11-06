import {useEffect,useMemo,useState} from "react";
import {guides} from "../../data/guide";
import {groups} from "../../data/guide/types";

const rail:[string,string][]=[["top","Đầu trang"],["features","Tính năng"],["activities2","Hoạt động"],["highlights2","Nổi bật"],["start","Bắt đầu"],["security2","Bảo mật"],["faq","Hỏi đáp"]];
const goTo=(id:string)=>id==="top"?window.scrollTo({top:0,behavior:"smooth"}):document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});

/** Thanh tiến độ cuộn + chấm điều hướng bên phải + vệt sáng theo chuột. */
export function ScrollRail(){
  const [active,setActive]=useState("top");
  useEffect(()=>{
    const els=rail.slice(1).map(([id])=>document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const pick=()=>{
      let cur="top";
      for(const e of els)if(e.getBoundingClientRect().top<window.innerHeight*.5)cur=e.id;
      setActive(cur);
    };
    pick();
    window.addEventListener("scroll",pick,{passive:true});
    return()=>window.removeEventListener("scroll",pick);
  },[]);
  return <>
    <div aria-hidden="true" className="fx-progress"/>
    <nav aria-label="Điều hướng nhanh" className="fx-rail">
      {rail.map(([id,label])=><button key={id} type="button" aria-label={label} aria-current={active===id} onClick={()=>goTo(id)}><span>{label}</span><i/></button>)}
    </nav>
  </>;
}

/** Dải chữ chạy ngang theo cuộn + số liệu đếm lên, thẻ nghiêng 3D. */
export function ScrollBand(){
  const names=useMemo(()=>guides.filter(g=>g.kind==="activity").map(g=>g.title),[]);
  const stats=[
    {n:guides.length,label:"Tính năng"},
    {n:names.length,label:"Hoạt động tự động"},
    {n:groups.length,label:"Nhóm thiết lập"},
    {n:2,label:"Nền tảng: PC và điện thoại"}
  ];
  return <section className="fx-band" aria-label="Số liệu Agent Auto">
    <div className="fx-band-glow" aria-hidden="true"/>
    <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4">
      {stats.map(s=><div key={s.label}>
        <div data-deco="1" className="fx-stat">
          <span className="fx-stat-n" data-count={s.n}>{s.n}</span>
          <span className="fx-stat-l">{s.label}</span>
        </div>
      </div>)}
    </div>
  </section>;
}
