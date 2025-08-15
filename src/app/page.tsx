import Image from "next/image";
import Header from "../Components/Header";
import Banner from "./banner/page";
import About from "./about/page";
import Counter from "./counter/page";
import CoreBusiness from "./coreBusiness/page";
import Expertise from "./expertise/page";
import Client from "./client/page";
import Help from "./help/page";
// import Insights from "./Insights/page";
import Insights from "../Components/Insights"
import News from"./news/page";
import Footer from "../Components/Footer";
import Contact from"./contact/page";
import Pebbanner from "./pebbanner/page"
import Projectpeb from "./projectpeb/page";
import Aboutpeb from "./Aboutpeb/page";
import Platform from "./platform/page";
import Totalsolution from"./totalsolution/page";
import Pebbrand from  "./pebbrand/page";
import Pebcall from"./pebcall/page";
import Media from "./media/page"
import Menupage from "./menupage/page";
import System from "./system/page";
export default function Home() {
  return (
    
    <>
    {/* <System/> */}
    <Header/>
    <Banner/>
    <About/>
    <Counter/>
    <CoreBusiness/>
    <Expertise/>
    <Client/>
    <Help/>
    <Insights/>
    <Footer/>
    {/* <Menupage/> */}
    
    </>
  );
}
