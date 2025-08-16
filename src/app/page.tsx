import Image from "next/image";
import Header from "../Components/Header";
// import Banner from "./banner/page";
// import About from "./about/page";
// import Counter from "./counter/page";
// import CoreBusiness from "./coreBusiness/page";
// import Expertise from "./expertise/page";
// import Client from "./client/page";
// import Help from "./help/page";

import Insights from "../Components/Insights"
import Footer from "../Components/Footer";
import HelpP from "../Components/HelpP";
import ClientP from "../Components/ClientP";
import ExpertiseP from "../Components/ExpertiseP";
import CoreBusinessP from "../Components/CoreBusinessP";
import CounterP from "../Components/CounterP";
import AboutP from "../Components/AboutP";
import BannerP from "../Components/BannerP";

// import News from"./news/page";
// import Contact from"./contact/page";
// import Pebbanner from "./pebbanner/page"
// import Projectpeb from "./projectpeb/page";
// import Aboutpeb from "./Aboutpeb/page";
// import Platform from "./platform/page";
// import Totalsolution from"./totalsolution/page";
// import Pebbrand from  "./pebbrand/page";
// import Pebcall from"./pebcall/page";
// import Media from "./media/page"
// import Menupage from "./menupage/page";
// import System from "./system/page";

export default function Home() {
  return (
    
    <>
    {/* <System/> */}
    <Header/>
    <BannerP/>
    <AboutP/>
    <CounterP/>
    <CoreBusinessP/>
    <ExpertiseP/>
    <ClientP/>
    <HelpP/>
    <Insights/>
    <Footer/>
    {/* <Menupage/> */}
    
    </>
  );
}
