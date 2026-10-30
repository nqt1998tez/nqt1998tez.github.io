import type {GuideImage} from "./types";
const root=new URL("images/game/",document.baseURI).href;
const image=(path:string,alt:string,caption?:string):GuideImage=>({src:root+path,alt,caption});
export const guideImages:Record<string,GuideImage[]>={
  start:[image("getting-started/open-agent-auto.webp","Nút mở Agent Auto trong game"),image("getting-started/open-settings.webp","Bảng Agent Auto và nút Thiết Lập")],
  spots:[image("getting-started/add-train-spot.webp","Nút Thêm tọa độ"),image("train/train-spot-list.webp","Menu quản lý bãi luyện")],
  modes:[image("getting-started/switch-mode.webp","Nút chế độ LC","Ảnh minh họa trạng thái LC; các trạng thái khác không xuất hiện trong ảnh.")],
  pt:[image("getting-started/fixed-party.webp","Menu Lập và Xóa PT cứng","Các nút đang mờ khi nhân vật chưa ở trong đội.")],
  saving:[image("getting-started/open-settings.webp","Nút Thiết Lập để mở trang cài đặt"),image("home/settings-overview.webp","Trang thiết lập Agent Auto trong game")],
  "s-train-lua-trai-du-lua-trai-khi-co":[image("train/campfire-settings.webp","Cài đặt lửa trại")],
  "s-combat-thu-tu-chieu-khi-pk":[image("combat/skill-order.webp","Thứ tự kỹ năng khi PK và luyện công")],
  "s-combat-thu-tu-chieu-khi-luyen-cong":[image("combat/skill-order.webp","Cài đặt thứ tự kỹ năng")],
  "s-combat-ks-boss-ks-boss":[image("combat/boss-ks-settings.webp","Thiết lập KS Boss")],
  "s-team-pt-cung-luon-nhan-lenh-dieu-khien-cua-doi-truong":[image("team/fixed-party-settings.webp","Thiết lập PT cứng")],
  "s-team-theo-sau-khoang-cach-gan-nhat":[image("team/follow-leader-settings.webp","Cài đặt theo đội trưởng")],
  "s-utility-phuc-loi-nhan-phuc-loi-mien-phi":[image("utility/welfare-settings.webp","Các tùy chọn nhận phúc lợi")],
  "a-ca-nhan-nghia-quan":[image("activities/personal/yijun.webp","Dòng Nhiệm Vụ Nghĩa Quân trong bảng Agent Auto")],
  "a-ca-nhan-thuong-hoi":[image("activities/personal/merchant-guild.webp","Các thiết lập Thương Hội")]
};
export const landingImages:GuideImage[]=[
image("home/hud-overview.webp","Bảng Agent Auto trên màn hình game","Bảng điều khiển Agent Auto"),
image("home/settings-overview.webp","Trang thiết lập Agent Auto trong game","Trang thiết lập"),
image("home/train-in-action.webp","Nhân vật luyện công với Agent Auto","Luyện công thực tế")
];
