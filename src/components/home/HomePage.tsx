import {useScrollReveal} from "../../hooks/useScrollReveal";
import {useImmersive} from "../../hooks/useImmersive";
import {ScrollBand,ScrollRail} from "./Fx";
import type {Page} from "../../data/guide/types";
import FaqSection from "./FaqSection";
import Hero from "./Hero";
import Promo from "./Promo";
import FeatureTable from "./FeatureTable";
import ActivityShowcase from "./ActivityShowcase";
import Highlights from "./Highlights";
import Info from "./Info";
import Steps from "./Steps";
import Security from "./Security";
import FinalCta from "./FinalCta";

export default function Home({go}:{go:(p:Page)=>void}){
  useScrollReveal();
  useImmersive();
  return <div className="font-kto gl-page">
    <div className="gl-orbs" aria-hidden="true"/>
    <ScrollRail/>
    <Hero go={go}/>
    <Promo go={go}/>
    <ScrollBand/>
    <FeatureTable go={go}/>
    <ActivityShowcase go={go}/>
    <Highlights go={go}/>
    <Steps/>
    <Security/>
    <FaqSection/>
    <FinalCta go={go}/>
    <Info go={go}/>
  </div>;
}
