import {Clock,MapPin,Swords,Users,Gift,MonitorSmartphone} from "lucide-react";
export type Page="home"|"docs"|"account"|"login";
export type GuideImage={src:string;alt:string;caption?:string};
export type Guide={id:string;title:string;group:string;section:string;description:string;kind:string;images?:GuideImage[]};
export const groups=[{id:"activities",name:"Hoạt động",icon:Clock},{id:"train",name:"Luyện công",icon:MapPin},{id:"combat",name:"Chiến đấu",icon:Swords},{id:"team",name:"Lập đội",icon:Users},{id:"utility",name:"Tiện ích",icon:Gift},{id:"display",name:"Hiển thị",icon:MonitorSmartphone}];
export const names=Object.fromEntries(groups.map(g=>[g.id,g.name]));