import type {Guide} from "./types";
import {guideImages} from "./images";
import activitySetting0 from "../../features/docs/groups/activities/settings/activities-truyen-cong-tu-ngoi-thien-khi-khong-co-nguoi-truyen-cong-00h00-03h50.json";
import activitySetting1 from "../../features/docs/groups/activities/settings/activities-truyen-cong-nhan-loi-truyen-cong.json";
import activitySetting2 from "../../features/docs/groups/activities/settings/activities-truyen-cong-nhan-truyen-cong-bang-hoi.json";
import activitySetting3 from "../../features/docs/groups/activities/settings/activities-truyen-cong-tu-cap.json";
import activitySetting4 from "../../features/docs/groups/activities/settings/activities-truyen-cong-ten.json";
import activitySetting5 from "../../features/docs/groups/activities/settings/activities-truyen-cong-xin-truyen-cong-bang-hoi.json";
import activitySetting6 from "../../features/docs/groups/activities/settings/activities-truyen-cong-xin-truyen-cong-su-phu.json";
import activitySetting7 from "../../features/docs/groups/activities/settings/activities-truyen-cong-thoi-gian-xin-truyen-cong.json";
import activitySetting8 from "../../features/docs/groups/activities/settings/activities-truyen-cong-xin-truyen-cong-sau-moi.json";
import train0 from "../../features/docs/groups/train/features/train-khi-la-thanh-vien-pt-cung.json";
import train1 from "../../features/docs/groups/train/features/train-tu-doi-trang-thai-chien-dau.json";
import train2 from "../../features/docs/groups/train/features/train-chuyen-bai-sau-khi-het-quai.json";
import train3 from "../../features/docs/groups/train/features/train-du-lua-trai-khi-co.json";
import train4 from "../../features/docs/groups/train/features/train-o-lai-bai.json";
import train5 from "../../features/docs/groups/train/features/train-mo-tu-luyen-x10.json";
import train6 from "../../features/docs/groups/train/features/train-dung-bich-loa-xuan.json";
import combat0 from "../../features/docs/groups/combat/features/combat-thu-tu-chieu-khi-pk.json";
import combat1 from "../../features/docs/groups/combat/features/combat-thu-tu-chieu-khi-luyen-cong.json";
import combat2 from "../../features/docs/groups/combat/features/combat-ks-boss-ks-boss.json";
import combat3 from "../../features/docs/groups/combat/features/combat-ks-boss-giu-chieu-khi-mau-boss-duoi.json";
import combat4 from "../../features/docs/groups/combat/features/combat-ks-boss-don-chieu-khi-mau-boss-duoi.json";
import combat5 from "../../features/docs/groups/combat/features/combat-ks-boss-don-chieu-khi-boss-con.json";
import teamSetting0 from "../../features/docs/groups/team/features/team-chung-agent-auto-lo-to-doi.json";
import teamSetting1 from "../../features/docs/groups/team/features/team-theo-sau-khoang-cach-gan-nhat.json";
import teamSetting2 from "../../features/docs/groups/team/features/team-theo-sau-khoang-cach-xa-nhat.json";
import teamSetting3 from "../../features/docs/groups/team/features/team-theo-sau-giu-vi-tri-khi-doi-truong-trong-thuong.json";
import teamSetting4 from "../../features/docs/groups/team/features/team-theo-sau-cho-doi-truong-quay-lai.json";
import teamSetting5 from "../../features/docs/groups/team/features/team-theo-sau-dong-bo-trang-thai-chien-dau-khi-la-doi-truong.json";
import teamSetting6 from "../../features/docs/groups/team/features/team-pt-cung-luon-nhan-lenh-dieu-khien-cua-doi-truong.json";
import teamSetting7 from "../../features/docs/groups/team/features/team-pt-cung-tu-trieu-hoi-thanh-vien.json";
import teamSetting8 from "../../features/docs/groups/team/features/team-moi-va-duyet-tu-dong-moi-doi.json";
import teamSetting9 from "../../features/docs/groups/team/features/team-moi-va-duyet-tu-dong-xin-vao-doi.json";
import teamSetting10 from "../../features/docs/groups/team/features/team-moi-va-duyet-tu-dong-y-duyet-vao-doi.json";
import teamSetting11 from "../../features/docs/groups/team/features/team-moi-va-duyet-chi-duyet-khi-nguoi-xin-o-trong-bai-train.json";
import teamSetting12 from "../../features/docs/groups/team/features/team-moi-va-duyet-kick-nguoi-uu-tien-thap-hon-khi-doi-day.json";
import teamSetting13 from "../../features/docs/groups/team/features/team-moi-va-duyet-thoi-gian-cho-tu-lap-doi.json";
import teamSetting14 from "../../features/docs/groups/team/features/team-moi-va-duyet-xin-vao-doi-bang-lenh-pt.json";
import teamSetting15 from "../../features/docs/groups/team/features/team-moi-va-duyet-nhan-lenh-pm-mat-tu-thanh-vien-khac.json";
import teamSetting16 from "../../features/docs/groups/team/features/team-doi-truong-luon-xin-key-doi-truong.json";
import teamSetting17 from "../../features/docs/groups/team/features/team-doi-truong-tu-choi-chuyen-quyen-doi-truong-khi-train.json";
import utility0 from "../../features/docs/groups/utility/features/utility-phuc-loi-nhan-phuc-loi-mien-phi.json";
import utility1 from "../../features/docs/groups/utility/features/utility-phuc-loi-uy-thac-kinh-nghiem.json";
import utility2 from "../../features/docs/groups/utility/features/utility-phuc-loi-nhan-lai-thuong.json";
import utility3 from "../../features/docs/groups/utility/features/utility-phuc-loi-mua-qua-vip.json";
import utility4 from "../../features/docs/groups/utility/features/utility-thu-thap-hiep-nghia.json";
import utility5 from "../../features/docs/groups/utility/features/utility-thu-thap-do-giam.json";
import utility6 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-doi-qua-gia-toc.json";
import utility7 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-mua-do-cho-gia-toc.json";
import utility8 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-gop-gia-toc.json";
import utility9 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-khai-mo-bang-hoi.json";
import utility10 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-luong-gia-toc.json";
import utility11 from "../../features/docs/groups/utility/features/utility-gia-toc-bang-hoi-li-xi.json";
import display0 from "../../features/docs/groups/display/features/display-man-hinh-tam-nhin.json";
import display1 from "../../features/docs/groups/display/features/display-man-hinh-hien-vong-pham-vi-danh.json";
import personal0 from "../../features/docs/groups/activities/features/personal/personal-nghia-quan.json";
import personal1 from "../../features/docs/groups/activities/features/personal/personal-thuong-hoi.json";
import personal2 from "../../features/docs/groups/activities/features/personal/personal-ngoi-thien-tinh-tam.json";
import personal3 from "../../features/docs/groups/activities/features/personal/personal-truyen-cong.json";
import personal4 from "../../features/docs/groups/activities/features/personal/personal-dao-kho-bau.json";
import personal5 from "../../features/docs/groups/activities/features/personal/personal-hiep-khach-dao.json";
import personal6 from "../../features/docs/groups/activities/features/personal/personal-lau-lan-me-tung.json";
import personal7 from "../../features/docs/groups/activities/features/personal/personal-dau-truong.json";
import personal8 from "../../features/docs/groups/activities/features/personal/personal-pho-ban-lenh-bai.json";
import family0 from "../../features/docs/groups/activities/features/family/family-chuyen-hang-gia-toc.json";
import family1 from "../../features/docs/groups/activities/features/family/family-vo-lam-cao-thu.json";
import teamActivity0 from "../../features/docs/groups/activities/features/team/team-pho-ban-nghia-quan.json";
import teamActivity1 from "../../features/docs/groups/activities/features/team/team-pho-ban-quan-doanh.json";
import teamActivity2 from "../../features/docs/groups/activities/features/team/team-truy-na.json";
export {groups,names} from "./types";
const base:Guide[]=[
{id:"start",title:"Bắt đầu sử dụng Agent Auto",group:"start",section:"Làm quen",description:"Giới thiệu cách mở Agent Auto, các chế độ hoạt động và vào trang thiết lập trong game.",kind:"intro"},
{id:"spots",title:"Thêm và quản lý bãi luyện",group:"train",section:"Bãi luyện",description:"Đứng tại vị trí muốn luyện công, dùng nút Thêm tọa độ cạnh mic Đội để lưu bãi Dã Ngoại / Tần Lăng. Kiểm tra danh sách bãi trước khi chuyển sang LC.",kind:"intro"},
{id:"modes",title:"LC, Tạm dừng và PK",group:"start",section:"Làm quen",description:"Nút Chế độ chuyển giữa LC (Luyện công), Tạm dừng và PK. Chọn đúng chế độ trước khi bật hoạt động tự động.",kind:"intro"},
{id:"pt",title:"Lập và xóa PT cứng",group:"team",section:"PT cứng",description:"Sử dụng nút điều khiển tổ đội trong game để Lập / Xóa PT cứng. Các thành viên xác nhận yêu cầu trong 30 giây; mỗi nhân vật tự giữ danh sách riêng.",kind:"intro"},
{id:"saving",title:"Lưu cấu hình trên trang ⚙",group:"start",section:"Làm quen",description:"Mở trang ⚙ trong game, sửa thiết lập rồi bấm Lưu. Đóng bằng dấu ✕ để áp dụng những mục đã lưu; mục chưa bấm Lưu sẽ bị bỏ.",kind:"intro"}
];

const settings=[activitySetting0,activitySetting1,activitySetting2,activitySetting3,activitySetting4,activitySetting5,activitySetting6,activitySetting7,activitySetting8,train0,train1,train2,train3,train4,train5,train6,combat0,combat1,combat2,combat3,combat4,combat5,teamSetting0,teamSetting1,teamSetting2,teamSetting3,teamSetting4,teamSetting5,teamSetting6,teamSetting7,teamSetting8,teamSetting9,teamSetting10,teamSetting11,teamSetting12,teamSetting13,teamSetting14,teamSetting15,teamSetting16,teamSetting17,utility0,utility1,utility2,utility3,utility4,utility5,utility6,utility7,utility8,utility9,utility10,utility11,display0,display1];
const activities=[personal0,personal1,personal2,personal3,personal4,personal5,personal6,personal7,personal8,family0,family1,teamActivity0,teamActivity1,teamActivity2];
const slug=(value:string)=>value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
export const guides:Guide[]=[...base,...settings.map(s=>({id:`s-${slug(s.group)}-${slug(s.section)}-${slug(s.label)}`,title:s.label,group:s.group,section:s.section,description:s.tip,kind:s.kind})),...activities.map(a=>({id:`a-${slug(a.group)}-${slug(a.name)}`,title:a.name,group:"activities",section:a.group,description:a.description,kind:"activity"}))];
for(const guide of guides){guide.images=guideImages[guide.id]}
export const firstGuide=guides[0].id;
