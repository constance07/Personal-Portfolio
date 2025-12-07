'use client'
import Image from "next/image";
import PreLoader from "./components/preloader/preloader";
import { useEffect } from "react";
/*Pages*/
import Hero from "./components/hero";
import About from "./components/about";
import Work from "./components/work";
import Footer from "./components/footer";
import Blog from './components/blog';
import Contact from './components/contact';
import {Pixelify_Sans} from 'next/font/google';

export default function Home() {

  return (
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
  <>
    <PreLoader/>
    <Hero/>
    <About/>
    <Work/>
    <Blog/>
    <Contact/>
    <Footer/>
  </>

  )
}
