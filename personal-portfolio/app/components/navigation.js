'use client';
/*Functionality Imports */
import {useState} from 'react';
/*Styling Imports */
import '../globals.css';
import { Pixelify_Sans } from 'next/font/google';

const pixelify_SansBold = Pixelify_Sans({
    subsets: ["latin"],
    weight: "700",
});
const pixelify_SansSemiBold = Pixelify_Sans({
    subsets: ["latin"],
    weight: "500",
});

export default function Navigation(){
    {/*State for Hamburger*/}
    const [menuOpen, setMenuOpen] = useState(false);

    {/* Disable Website Scrolling */}
   const disableScroll = () => {
        parent.document.body.classList.remove("overflowShow");
        parent.document.body.classList.add("overflowHidden");
   }

    {/* Enable Website Scrolling */}
   const enableScroll = () => {
        parent.document.body.classList.remove("overflowHidden");
        parent.document.body.classList.add("overflowShow");
   }
   {/* Enable Overlay */}
   const enableOverlay = () => {
        const overlay = parent.document.querySelector(".blank")
        overlay.classList.add("overlayFadeIn")
   }
   {/* Disable Overlay */}
   const disableOverlay = () => {
       const overlay = parent.document.querySelector(".blank")
        overlay.classList.add("overlayFadeOut")
        setTimeout(() => {
                /* Fade Out */
                overlay.classList.remove("overlayFadeOut")
                overlay.classList.remove("overlayFadeIn")
            }, 200)
        
   }
   {/* Active Link */}
   const enableActiveAboutLink= () => {
        const aboutActive = parent.document.querySelector("li.activeAbout");
        aboutActive.style.color = 'blue';
   }
    return(
        <div className={pixelify_SansBold.className}>
        {/*ON MOBILE*/}    
        <div className='blank'></div>
        {/*Hamburger Menu*/}
            <nav id = "navOpen" className="hamburgerContainer" >
                <a className = "active-link" href ='/'><span id = "devLogoMobile" className={pixelify_SansBold.className}>SB</span></a>
                {/*Collapsed*/}
                <div className='hamburgerIconBackground'>
                    <div className = "hamburgerIcon" onClick={() => {
                        setMenuOpen(!menuOpen);
                        disableScroll();
                        enableOverlay();
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
              </div>
                {/*Expanded(ON-CLICK)*/}
                    <ul className = {menuOpen ? "open" : ""}>
                    {/*Close Button*/}
                        <div id = "close-Button">
                            <span id = "1x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                disableOverlay();
                                }}></span>
                            <span id = "2x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                disableOverlay();
                                }}></span>
                        </div>
                    {/*Pages*/}
                        <a className = "active-link" href ='../about'><li>.ABOUT ( )</li></a>
                        <a className = "active-link" href ='../work'><li>.WORK ( )</li></a>
                        <a className = "active-link" href ="../blog/"><li>.BLOG ( )</li></a>
                        <a className = "active-link" href ="../contact/"><li>.CONTACT( )</li></a>
                    </ul>    
            </nav>


    {/*ON DESKTOP*/}   
        {/*Navigation Bar*/} 
        <nav className ='navContainer'>
            <a href ='/'><span id = "devLogo" className={pixelify_SansBold.className}>SB</span></a>
            <ul>
                {/*Pages*/}
                    <a href ='../about'><li className = "activeAbout" >.ABOUT ( )</li></a>
                    <a href ='../work'><li id = "activeWork">.WORK ( )</li></a>
                    <a href ="../blog"><li id = "activeWork">.BLOG ( )</li></a>
                    <a href ="../contact"><li id = "activeContact">.CONTACT( )</li></a>
            </ul>
        </nav>  
        </div>
    )
       
    
}