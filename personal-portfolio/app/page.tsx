
'use client'
import Image from "next/image";
import Navigation from "./components/navigation";
import PreLoader from "./components/preloader/preloader";

import {Pixelify_Sans} from 'next/font/google';

export default function Home() {

  return (
  <>
    <PreLoader/>
    <Navigation/>
  </>

  )
}
