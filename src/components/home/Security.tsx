import {Check,ShieldCheck} from "lucide-react";
import {Ribbon} from "./shared";

const points=["Không thu thập tài khoản game","Không lưu mật khẩu game","Không gửi thông tin đăng nhập về máy chủ","Cấu hình Auto lưu theo từng nhân vật"];

export default function Security(){
  return <section id="security2" className="scroll-mt-20 px-4 py-16 text-white sm:px-6" aria-label="An toàn và quyền riêng tư">
    <Ribbon>An toàn &amp; quyền riêng tư</Ribbon>
    <div data-deco="1" className="gl mx-auto mt-10 grid max-w-5xl gap-8 rounded-3xl p-7 sm:p-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
      <div className="flex items-start gap-5">
        <span className="gl gl-accent grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-white"><ShieldCheck size={32}/></span>
        <h3 className="text-2xl font-bold sm:text-3xl">Tài khoản game do chính bạn kiểm soát</h3>
      </div>
      <ul className="grid gap-3.5 text-sm text-white/85 sm:grid-cols-2 lg:grid-cols-1">
        {points.map(p=><li key={p} className="flex items-center gap-3"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/25 text-emerald-200"><Check size={14}/></span>{p}</li>)}
      </ul>
    </div>
  </section>;
}
