'use client';
import NavigationBar from "./Navbar/page";
import Footer from "./Footer/page";
import SliderCarousel from "./carousel/page"
import GenreList from "./genres/page";
// import { Carousel } from "./Slider/page";


export default function Home() {


  return (
    <main className="bg-black">
     <NavigationBar/>
     <SliderCarousel/>
      <GenreList/>
    
      <Footer/>

    </main>
  );
}

