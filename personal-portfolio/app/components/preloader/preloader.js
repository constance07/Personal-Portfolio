'use client'
/*Functionality Imports */
import { useEffect } from 'react';
/*Styling Imports */
import './preloader.css'
import '@/app/globals.css';
import { Pixelify_Sans } from 'next/font/google';
const pixelify_Sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "400",
});

export default function PreLoader(){
        useEffect(() => {
            const logoContainer= document.querySelector(".preLoader")
            const logoText = document.querySelector(".texts-container")
            setTimeout(() => {
                /* Fade Out */
                logoContainer.classList.add("fadeOut")
                logoText.classList.add("fadeOut")
                    /* Delete Element */
                    setTimeout(() => {
                        logoContainer.remove();
                        logoText.remove();
                        document.body.classList.add("overflowShow")
                    }, 800)
            }, 2500)
        }, [])

    return(
        <div className = {pixelify_Sans.className}>  
            <div className="preLoader">
                <div className="texts-container">
                    <span id = "first-Letter">S</span>
                    <span id = "second-Letter">B</span>
                </div>
            </div>
        </div>      
    )
}