'use client'
import Image from "next/image";
import Navigation from "./components/navigation";
import PreLoader from "./components/preloader/preloader";
/*Pages*/
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Footer from "./components/footer";
import Blog
 from "./components/blog";
import {Pixelify_Sans} from 'next/font/google';

export default function Home() {

  return (
  <>
    <PreLoader/>
    <Navigation/>
    <Hero/>
    <About/>
    <Work/>
    <Blog/>
    <Footer/>
  </>

  )
}
