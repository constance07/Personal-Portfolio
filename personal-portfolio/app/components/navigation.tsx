'use client';

/*Styling Imports */
import '../globals.css';
/*Functionality Imports */
import {useState} from 'react';
import { Pixelify_Sans } from 'next/font/google';

const pixelify_Sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "400",
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

    return(
        <div className={pixelify_Sans.className}>
        {/*ON MOBILE*/}    
        {/*Hamburger Menu*/}
            <nav id = "navOpen" className="hamburgerContainer" >
                <span id = "devLogo" className={pixelify_Sans.className}>SB</span>
                {/*Collapsed*/}
                <div className='hamburgerIconBackground'>
                    <div className = "hamburgerIcon" onClick={() => {
                        setMenuOpen(!menuOpen);
                        disableScroll();
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
                                }}></span>
                            <span id = "2x" onClick={() => {
                                setMenuOpen(!menuOpen);
                                enableScroll();
                                }}></span>
                        </div>
                    {/*Pages*/}
                        <a className = "active-link" href ='/'><li>.ABOUT ( )</li></a>
                        <a className = "active-link" href ='/cards'><li>.WORK ( )</li></a>
                        <a className = "active-link" href ="/about"><li>.BLOG ( )</li></a>
                        <a className = "active-link" href ="/contact"><li>.CONTACT( )</li></a>
                    </ul>    
            </nav>


    {/*ON DESKTOP*/}   
        {/*Navigation Bar*/} 
        <nav className ='navContainer'>
            <ul>
                {/*Pages*/}
                    <a className = "active-link" href ='/'><li>.ABOUT ( )</li></a>
                    <a className = "active-link" href ='/cards'><li>.WORK ( )</li></a>
                    <a className = "active-link" href ="/about"><li>.BLOG ( )</li></a>
                    <a className = "active-link" href ="/contact"><li>.CONTACT( )</li></a>
            </ul>
        </nav>  
        </div>
    )
       
    
}