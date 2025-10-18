'use client'
import Image from "next/image";
import Navigation from "../components/navigation";
import About from "./about";
import Footer from "../components/footer";

import {Pixelify_Sans} from 'next/font/google';

export default function Home() {

  return (
  <>
    <Navigation/>
    <About/>
    <Footer/>
  </>

  )
}