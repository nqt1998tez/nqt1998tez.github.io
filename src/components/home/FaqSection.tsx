import {useState} from "react";
import {ChevronDown} from "lucide-react";

const faqs=[
  ["Agent Auto dùng trên nền tảng nào?","Agent Auto hỗ trợ Kiếm Thế Origin trên PC và điện thoại, với logic Auto chạy trong game."],
  ["Có cần đăng nhập website để dùng Auto không?","Không. Website hiện dùng để giới thiệu và tra cứu hướng dẫn; các thiết lập Auto được thao tác trong game."],
  ["Agent Auto có lưu tài khoản hoặc mật khẩu game không?","Không. Agent Auto không thu thập, lưu trữ hoặc gửi tài khoản và mật khẩu game về máy chủ Agent Auto."],
  ["Thiết lập có dùng chung cho mọi nhân vật không?","Không. Cấu hình được lưu theo từng nhân vật để mỗi nhân vật có thể dùng thiết lập riêng."],
  ["Tìm hướng dẫn từng chức năng ở đâu?","Chọn Hướng dẫn trên thanh menu. Nội dung được chia theo Luyện công, Tổ đội, Chiến đấu, Hoạt động, Tiện ích và Hiển thị."],
  ["Agent Auto có miễn phí không?","Phiên bản đang dùng được chia sẻ miễn phí trong cộng đồng người chơi Kiếm Thế Origin."]
];

export default function FaqSection(){
  const [open,setOpen]=useState(-1);
  const columns=[faqs.filter((_,i)=>i%2===0),faqs.filter((_,i)=>i%2===1)];

  return <section id="faq" className="mx-auto flex min-h-screen max-w-6xl scroll-mt-20 flex-col justify-center px-4 py-16 sm:px-6 sm:py-20">
    <div data-reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="section-kicker">CÂU HỎI THƯỜNG GẶP</p>
      <h2 className="section-title">Thông tin cần biết trước khi dùng</h2>
    </div>
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
      {columns.map((column,colIndex)=><div key={colIndex} className="grid content-start gap-4">
        {column.map(([question,answer])=>{const index=faqs.findIndex(f=>f[0]===question);const active=open===index;return <div key={question} data-reveal data-deco="tl-br" className={`faq-item ${active?"open":""} rounded-xl border border-white/10 bg-surface2`}>
          <button type="button" aria-expanded={active} className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold sm:text-base" onClick={()=>setOpen(active?-1:index)}>
            <span>{question}</span><ChevronDown size={18} className={`shrink-0 text-slate-400 transition-transform ${active?"rotate-180 text-gold":""}`}/>
          </button>
          <div className="faq-answer"><div><p className="border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-400">{answer}</p></div></div>
        </div>})}
      </div>)}
    </div>
  </section>;
}
