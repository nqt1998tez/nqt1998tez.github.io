import {BookOpen,HelpCircle,LayoutList,ShieldCheck} from "lucide-react";
import Logo from "../layout/Logo";
import type {Page} from "../../data/guide/types";

const scrollTo=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"});
const rows=[
  ["Tên sản phẩm","Agent Auto"],
  ["Dành cho","Kiếm Thế Origin"],
  ["Thiết bị","PC và điện thoại"],
  ["Thiết lập","Lưu theo nhân vật trong game"],
  ["Tài khoản","Không thu thập, lưu trữ hay gửi tài khoản và mật khẩu game"]
];

export default function Info({go}:{go:(p:Page)=>void}){
  const links=[
    {label:"Hướng dẫn",icon:BookOpen,run:()=>go("docs")},
    {label:"Tính năng",icon:LayoutList,run:()=>scrollTo("features")},
    {label:"Bảo mật",icon:ShieldCheck,run:()=>scrollTo("security2")},
    {label:"Hỏi đáp",icon:HelpCircle,run:()=>scrollTo("faq")}
  ];
  return <section id="info2" className="scroll-mt-20 px-4 py-14 text-white sm:px-6" aria-label="Thông tin sản phẩm">
    <div data-deco="1" className="gl mx-auto grid max-w-4xl items-center gap-8 rounded-3xl p-6 sm:p-10 md:grid-cols-[auto_1fr]">
      <div className="gl mx-auto rounded-2xl px-6 py-5"><Logo/></div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
        {rows.map(([k,v])=><div key={k} className="contents"><dt className="font-semibold text-cyan-200">{k}</dt><dd>{v}</dd></div>)}
      </dl>
    </div>
    <nav aria-label="Liên kết nhanh" className="gl mx-auto mt-6 flex max-w-3xl flex-wrap justify-center rounded-full p-1.5">
      {links.map(l=><button key={l.label} type="button" onClick={l.run} className="flex min-h-10 items-center gap-2 rounded-full px-5 text-xs font-semibold tracking-wider text-white/75 transition hover:bg-white/15 hover:text-white"><l.icon size={15}/>{l.label}</button>)}
    </nav>
  </section>;
}
