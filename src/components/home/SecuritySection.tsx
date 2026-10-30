import {ShieldCheck,KeyRound,UserRoundCheck} from "lucide-react";

export default function SecuritySection(){
  return <section aria-labelledby="security-heading" className="border-y border-white/10 bg-[#111c30]">
    <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
      <div data-reveal className="flex max-w-3xl items-start gap-4 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold"><ShieldCheck size={24}/></div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Bảo mật &amp; quyền riêng tư</p>
          <h2 id="security-heading" className="mt-2 text-2xl font-bold sm:text-3xl">Tài khoản game do chính bạn kiểm soát</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">Agent Auto không thu thập, lưu trữ hoặc gửi tên tài khoản và mật khẩu game của bạn về máy chủ Agent Auto.</p>
        </div>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div data-reveal style={{transitionDelay:"70ms"}} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4 sm:p-5"><KeyRound className="mt-0.5 shrink-0 text-gold" size={21}/><div><h3 className="font-semibold">Không cần cung cấp mật khẩu game trên website</h3><p className="mt-2 text-sm leading-6 text-slate-300">Thông tin đăng nhập game không dùng để quản lý hoặc đồng bộ thiết lập trên website.</p></div></div>
        <div data-reveal style={{transitionDelay:"140ms"}} className="flex gap-3 rounded-xl border border-white/10 bg-white/[.03] p-4 sm:p-5"><UserRoundCheck className="mt-0.5 shrink-0 text-gold" size={21}/><div><h3 className="font-semibold">Thiết lập theo từng nhân vật</h3><p className="mt-2 text-sm leading-6 text-slate-300">Bạn quản lý các tùy chọn Auto theo nhân vật; không cần chia sẻ thông tin đăng nhập game.</p></div></div>
      </div>
    </div>
  </section>;
}
