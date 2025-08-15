import Image from "next/image";
import Header from "../Components/Header";
import Banner from "./Banner/page";
import About from "./About/page";
import Counter from "./Counter/page";
import CoreBusiness from "./CoreBusiness/page";
import Expertise from "./Expertise/page";
import Client from "./Client/page";
import Help from "./Help/page";
// import Insights from "./Insights/page";
import Insights from "../Components/Insights"
import News from"./News/page";
import Footer from "../Components/Footer";
import Contact from"./Contact/page";
import Pebbanner from "./Pebbanner/page"
import Projectpeb from "./Projectpeb/page";
import Aboutpeb from "./Aboutpeb/page";
import Platform from "./Platform/page";
import Totalsolution from"./Totalsolution/page";
import Pebbrand from  "./Pebbrand/page";
import Pebcall from"./Pebcall/page";
import Media from "./Media/page"
import Menupage from "./Menupage/page";
import System from "./System/page";
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
