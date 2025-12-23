/*Functionality Imports */
'use client';
import Image from 'next/image';
import {useState} from 'react';
import straightHeadshot from '@/app/images/straightHeadshot.jpg'
/*Styled Imports*/
import '../globals.css';
import { Pixelify_Sans } from 'next/font/google';
const pixelify_Sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "400",
});
import { Be_Vietnam_Pro} from 'next/font/google';
const pixelify_SansBold = Pixelify_Sans({subsets: ["latin"], weight: "700",});
const pixelify_SansSemiBold = Pixelify_Sans({subsets: ["latin"], weight: "500",});
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Hero(){
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
            const overlay = parent.document.querySelector(".blank") as HTMLElement;
            overlay.classList.add("overlayFadeIn")
       }
       {/* Disable Overlay */}
       const disableOverlay = () => {
           const overlay = parent.document.querySelector(".blank") as HTMLElement;
            overlay.classList.add("overlayFadeOut")
            setTimeout(() => {
                    /* Fade Out */
                    overlay.classList.remove("overlayFadeOut")
                    overlay.classList.remove("overlayFadeIn")
                }, 200)
            
       }
       {/* Active Link */}
       const enableActiveAboutLink= () => {
            const aboutActive = parent.document.querySelector("li.activeAbout") as HTMLElement;
            aboutActive.style.color = 'blue';
       }
    
        /*Scroll Navigation*/
        if(typeof window !== 'undefined'){
        const navLinks = document.querySelectorAll<HTMLAnchorElement>('.navList a');
        const sections = document.querySelectorAll<HTMLElement>('.section');
        
        let currentSection = 'heroSection';
    
        window.addEventListener('scroll', () => {
            sections.forEach(section => {
                if(window.scrollY + window.innerHeight / 4>= section.offsetTop){ 
                currentSection = section.id;
                }
            });
    
            navLinks.forEach(link => {
            if(link.href.includes(currentSection)) {
                    link.classList.add('active');
            }else {
                link.classList.remove('active');
            }
        });
        });
    }
    return(
        
        <div className='section' id = "heroSection">

        <div className={be_Vietnam_Pro.className}>
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
                        <a className = 'activeMobile' href ='#heroSection'><li>Home</li></a>
                        <a href ='#aboutSection'><li>About</li></a>
                        <a href ='#workSection'><li>Work</li></a>
                        <a href ="#blogSection"><li>Blog</li></a>
                        <a href ="#contactSection"><li>Contact</li></a>
                    </ul>    
            </nav>


    {/*ON DESKTOP*/}   
        {/*Navigation Bar*/} 
        <div className='placeHolderNav'>
        <nav className ='navContainer'>
            <a href ='/'><span id = "devLogo" className={be_Vietnam_Pro.className}>SB</span></a>
            <ul className='navList'>
                {/*Pages*/}
                        <a className='active' href ='#heroSection'><li>Home</li></a>
                        <a  href ='#aboutSection'><li>About</li></a>
                        <a  href ='#workSection'><li>Work</li></a>
                        <a  href ="#blogSection"><li>Blog</li></a>
                        <a  href ="#contactSection"><li>Contact</li></a>
            </ul> 
        </nav>  
        <div className='navBackgroundContainer'>
        <div className='navBackground'></div></div>
        </div>
        </div>
    
        <div className='heroContainer'>
            {/*My Headshot*/}
            <div className='headshotContainer'>
                <Image
                    src = {straightHeadshot}
                    width={500}
                    height={350}

                    alt = 'Headshot of Serenity'
                    className='straightHeadshot'>
            </Image>
            </div>
            {/* Introduction*/}
            <div className='titleContainer'>
            <div className = 'title'>
                <h3 id ='firstPartTitle' className= {be_Vietnam_Pro.className}>Hello, my name is</h3>
                <h3 id ='secondPartTitle'className= {be_Vietnam_Pro.className}>Serenity Buckner.</h3>
                <h3 id='thirdPartTitleA' className= {be_Vietnam_Pro.className}>I Innovate with <div id='thirdPartTitleB' className={pixelify_Sans.className}> Principle.</div></h3>

            </div>
            {/* Disc*/}
            <p id = "personalDisc" className={be_Vietnam_Pro_Light.className}> <span id = 'pTags' className={pixelify_Sans.className}>&lt;p&gt;</span> I want to combine my passion for computers, logic, and algorithms with social impact — particularly in application to autonomous systems — as I explore the bounds of ethical technology.  <span id = 'pTags' className={pixelify_Sans.className}>&lt;/p&gt;</span></p>
            </div>
        </div>
        </div>
    )
}