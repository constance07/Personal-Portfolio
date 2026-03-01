'use client'
/*Functionality Imports */
import { useEffect } from 'react';
/*Styling Imports */
import './preloader.css'
import '@/app/globals.css';
import { Be_Vietnam_Pro, Google_Sans_Code } from 'next/font/google';
const googleSansCode = Google_Sans_Code({subsets: ["latin"], weight: "700"});
const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ["latin"], weight: "700"});

export default function PreLoader(){
        useEffect(() => {
            const logoContainer= document.querySelector(".preLoader") as HTMLElement;
            const logoText = document.querySelector(".texts-container")  as HTMLElement;
            const body =document.body;
            setTimeout(() => {
                /* Fade Out */
                logoContainer.classList.add("fadeOut")
                logoText.classList.add("fadeOut")
                
                    /* Delete Element */
                    setTimeout(() => {
                        logoContainer.remove();
                        logoText.remove();;
                        document.body.classList.add("overflowShow")
                    }, 750)
            }, 2500)
        }, [])

    return(
        <div className = {be_Vietnam_Pro.className}>  
            <div className="preLoader">
                <div className="texts-container">
                    <span id = "first-Letter">S</span>
                    <span id = "second-Letter">B</span>
                </div>
            </div>
        </div>      
    )
}