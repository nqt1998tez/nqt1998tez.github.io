import {BookOpen,ChevronRight,Gamepad2,Settings2} from "lucide-react";
import {Ribbon} from "./shared";

const steps=[
  {icon:Gamepad2,title:"Mở game",text:"Vào Kiếm Thế Origin và chọn nhân vật muốn dùng Agent Auto."},
  {icon:Settings2,title:"Mở Agent Auto",text:"Mở bảng Agent Auto trong game, chọn nhóm chức năng cần dùng."},
  {icon:BookOpen,title:"Chọn chức năng",text:"Bật thiết lập phù hợp, lưu cấu hình và tra cứu hướng dẫn khi cần."}
];

export default function Steps(){
  return <section id="start" className="relative scroll-mt-20 px-4 py-16 text-white sm:px-6" aria-label="Sử dụng trong 3 bước">
    <Ribbon>Sử dụng trong 3 bước</Ribbon>
    <div className="mx-auto mt-10 grid max-w-6xl gap-5 lg:grid-cols-3 lg:gap-8">
      {steps.map(({icon:Icon,title,text},i)=><article key={title} data-deco="1" className="gl relative rounded-3xl p-7">
        <div className="flex items-center gap-4">
          <span className="gl gl-accent grid h-14 w-14 shrink-0 place-items-center rounded-full text-white"><Icon size={26}/></span>
          <span className="text-4xl font-extrabold text-white/25">0{i+1}</span>
        </div>
        <h3 className="mt-5 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/70">{text}</p>
        {i<steps.length-1&&<ChevronRight aria-hidden="true" size={26} className="absolute -right-6 top-1/2 hidden -translate-y-1/2 text-white/40 lg:block"/>}
      </article>)}
    </div>
  </section>;
}
