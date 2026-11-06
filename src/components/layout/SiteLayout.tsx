import {useState} from "react";
import {BookOpen,Menu,X} from "lucide-react";
import {Button} from "../ui";
import Logo from "./Logo";
import Home from "../home/HomePage";
import Docs from "../../features/docs/DocsPage";
import {useHashPage} from "../../hooks/useHashPage";
import type {Page} from "../../data/guide/types";

export default function SiteLayout(){
  const [page,go]=useHashPage();
  const [mobile,setMobile]=useState(false);
  const home=()=>go("home");
  const homeAt=(id:string)=>{if(page!=="home"){location.hash="/home";setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"}),80)}else document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})};

  const navLinks=[
    {label:"Trang chủ",active:page!=="docs",onClick:()=>{home();setMobile(false)}},
    {label:"Tính năng",onClick:()=>{homeAt("features");setMobile(false)}},
    {label:"Hướng dẫn",active:page==="docs",onClick:()=>{go("docs");setMobile(false)}},
    {label:"Câu hỏi thường gặp",onClick:()=>{homeAt("faq");setMobile(false)}}
  ];

  return <div className="min-h-screen bg-background text-white">
    <header className={"site-header sticky top-0 z-40 border-b border-white/10"+(page==="home"?" site-header--kto":"")}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[74px] lg:px-8">
        <button aria-label="Trang chủ" onClick={home}><Logo/></button>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(link=><button key={link.label} className={"nav-link text-sm"+(link.active?" active":"")} onClick={link.onClick}>{link.label}</button>)}
        </nav>
        <div className="hidden md:block"><Button size="sm" className="cta-shine" onClick={()=>go("docs")}><BookOpen size={16}/> Xem hướng dẫn</Button></div>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</Button>
      </div>
      {mobile&&<nav className="border-t border-white/10 bg-deep px-4 py-3 md:hidden">
        {navLinks.map(link=><button key={link.label} className="nav-link block w-full text-left" onClick={link.onClick}>{link.label}</button>)}
      </nav>}
    </header>

    {page==="docs"?<Docs/>:<Home go={go}/>}

    <footer className="border-t border-white/10 bg-deep">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-xs text-slate-400 sm:px-6 md:grid-cols-[1.2fr_auto_1.2fr] md:items-center lg:px-8">
        <div><Logo/><p className="mt-3 max-w-xs leading-6">Agent Auto · Công cụ hỗ trợ người chơi Kiếm Thế Origin trên PC và điện thoại.</p></div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <button className="nav-link text-sm" onClick={()=>homeAt("features")}>Tính năng</button>
          <button className="nav-link text-sm" onClick={()=>go("docs")}>Hướng dẫn</button>
          <button className="nav-link text-sm" onClick={()=>homeAt("faq")}>Câu hỏi thường gặp</button>
        </nav>
        <div className="md:text-right">
          <p className="leading-6">Không thu thập, lưu trữ hoặc gửi tài khoản và mật khẩu game về máy chủ Agent Auto.</p>
          <p className="mt-2 text-slate-500">Artwork Kiếm Thế Origin sử dụng từ nội dung chính thức do VNG công bố.</p>
        </div>
      </div>
    </footer>
  </div>;
}
