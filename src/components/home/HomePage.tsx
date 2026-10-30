import {ArrowRight,Check,MapPin,Users,Swords,Clock,Gift,BookOpen} from "lucide-react";
import {Badge,Button} from "../ui";
import IconCard from "./IconCard";
import GameScreenshot from "./GameScreenshot";
import {landingImages} from "../../data/guide/images";
import SecuritySection from "./SecuritySection";
import type {Page} from "../../data/guide/types";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const features=[
  {icon:MapPin,title:"Luyện công",description:"Lưu bãi, đổi bãi khi hết quái, thiết lập lửa trại và tu luyện."},
  {icon:Users,title:"Tổ đội",description:"PT cứng, tự mời, duyệt, đi theo và phối hợp đội trưởng."},
  {icon:Swords,title:"Chiến đấu",description:"Thứ tự chiêu khi PK/luyện công, điều kiện giữ và dồn chiêu KS Boss."},
  {icon:Clock,title:"Hoạt động",description:"Nghĩa Quân, Thương Hội, phó bản, Truy Nã và những hoạt động đã được triển khai."},
  {icon:Gift,title:"Tiện ích",description:"Phúc lợi, Hiệp Nghĩa, Đồ Giám, Gia tộc và Bang hội."},
  {icon:BookOpen,title:"Hướng dẫn cụ thể",description:"Tra cứu theo nhóm, mô tả chức năng, các bước và lưu ý quan trọng."}
];

export default function Home({go}:{go:(p:Page)=>void}){
  useScrollReveal();
  return <>
    <section className="hero-glow border-b border-white/5">
      <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-8 px-4 py-14 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.04fr)] lg:px-8 lg:py-24">
        <div className="hero-entrance">
          <Badge>KIẾM THẾ ORIGIN • PC & ĐIỆN THOẠI</Badge>
          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">Agent Auto<br/><span className="gradient-text">Luyện công thông minh.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300">Quản lý bãi luyện, phối hợp tổ đội, chiến đấu và thực hiện các hoạt động trong Kiếm Thế Origin. Tài liệu hướng dẫn bám theo thiết lập thực tế của Agent Auto.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" onClick={()=>go("docs")}>Xem hướng dẫn <ArrowRight size={17}/></Button>
            <Button size="lg" variant="outline" onClick={()=>go("account")}>Xem giao diện quản lý</Button>
          </div>
          <ul className="hero-entrance hero-entrance-later2 mt-8 flex flex-wrap gap-2.5">
            {["Cấu hình theo nhân vật","Hoạt động ngay trong game","Có tài liệu tra cứu"].map(t=><li key={t} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3.5 py-1.5 text-[13px] text-slate-200"><Check size={14} className="text-gold"/>{t}</li>)}
          </ul>
        </div>
        <div className="hero-entrance hero-entrance-later min-w-0 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Ảnh chụp trong game</span>
            <span className="text-xs text-slate-400">Bấm ảnh để phóng to</span>
          </div>
          <GameScreenshot image={landingImages[0]} priority featured/>
          <div className="grid grid-cols-2 gap-3">{landingImages.slice(1).map((img,i)=><GameScreenshot key={img.src} image={img} compact delay={70+i*70}/>)}</div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div data-reveal className="mb-10">
        <Badge>TÍNH NĂNG</Badge>
        <h2 className="mt-4 text-3xl font-bold">Đầy đủ cho hành trình trong game</h2>
        <p className="mt-3 subtle">Tìm hiểu từng chức năng và cách bật trong trang hướng dẫn.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f,i)=><IconCard key={f.title} {...f} onClick={()=>go("docs")} delay={i*70}/>)}
      </div>
    </section>
    <SecuritySection/>
    <section data-reveal className="border-y border-white/10 bg-[#111c30]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center lg:px-8">
        <div><h2 className="text-2xl font-bold">Không biết bật chức năng nào?</h2><p className="mt-2 subtle">Thư viện hướng dẫn có thể tìm kiếm theo đúng tên mục trong game.</p></div>
        <Button onClick={()=>go("docs")}>Mở thư viện hướng dẫn <ArrowRight size={16}/></Button>
      </div>
    </section>
  </>;
}
