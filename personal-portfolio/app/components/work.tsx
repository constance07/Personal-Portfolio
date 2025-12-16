/*Functionality Imports */
import {useState} from 'react'
import { Link } from 'react-router-dom';
import Image from 'next/image';
import { useEffect } from 'react';
/*Styled Imports*/
import '../globals.css';
import { Pixelify_Sans } from 'next/font/google';
const pixelify_Sans = Pixelify_Sans({ subsets: ["latin"], weight: "400",});
const pixelify_Sans_Bold = Pixelify_Sans({ subsets: ["latin"], weight: "700",});
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
import WGTT from '@/app/images/WGTT.jpg';
/* Icon Imports */
import js from '@/app/images/skills/js.jpg';
import python from '@/app/images/skills/python.jpg';
import java from '@/app/images/skills/java.jpg';
import C from  '@/app/images/skills/C.jpg';
import html from '@/app/images/skills/html.jpg';
import css from '@/app/images/skills/css.jpg';
import react from '@/app/images/skills/react.jpg';
import next from  '@/app/images/skills/next.jpg';
import chakra from '@/app/images/skills/chakra.jpg';
import git from '@/app/images/skills/git.jpg';
import vercel from '@/app/images/skills/vercel.jpg';
import figma from '@/app/images/skills/figma.jpg';

export default function Work(){
    
    return(
        <div className = "section" id='workSection'>
            <div className="workContainer">
                <h1 id ="workTitle" className={be_Vietnam_Pro.className}>
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> I <div id = 'blueTag' className={pixelify_Sans_Bold.className}> REALLY </div> LIKE TO BUILD AND DESIGN STUFF. <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div></h1> 
                
                <div className='displayContainer'>
                    <a id ="wgttLink" href = "https://wevegottotalk.net/">
                    <div className='displayBackground'>
                    <div id="displayTitle" className={be_Vietnam_Pro.className}>We've Got To Talk</div>
                    <div id="displayDisc" className={be_Vietnam_Pro_Light.className}>A card game promoting self-love beyond external labels and obligation through a cycle of 'Think', 'Do', and 'State' prompts. </div>
                    <Image
                        src = {WGTT}
                        alt = 'Weve Got To Talk Image'
                        id = 'WGTT'
                      
                        ></Image>
                    </div>
                    </a>
                </div>
                <div id="resumeTitle" className={be_Vietnam_Pro_Light.className}>Want to know about the other cool things I do?<br></br>
                <div id = "resumeLinkA" className={pixelify_Sans.className}> Check out my resume <a href = "https://docs.google.com/document/d/1joId81v81lhTnqoQxQcvKa-fOUb8AgJDw6EbUtR1-xs/edit?usp=sharing" id = "resumeLinkB" className={pixelify_Sans.className}>here</a></div>.</div>
                <h2 id ="skillsTitle" className={be_Vietnam_Pro.className}>
                    <div className='skillsSection'></div>
                    <div id = 'h2Tags' className={pixelify_Sans_Bold.className}>&lt;h2&gt;</div> SKILLS <div id = 'h2Tags' className={pixelify_Sans_Bold.className}>&lt;/h2&gt;</div>
                </h2>
                <div id='techStack' className={be_Vietnam_Pro_Light.className}>
                    <div id = 'techItem'>
                        <Image
                        src = {js}
                        width={25}
                        height={32}
                        alt = 'Javascript jpg'
                       
                        id = "jsItem"
                        className='skillItem'>
                        </Image>
                    JavaScript</div>

                    <div id = 'techItem'>
                        <Image
                        src = {python}
                        width={25}
                        height={32}
                        alt = 'Python jpg'
                        
                        className='skillItem'>
                        </Image>
                    Python</div>
                   
                    <div id = 'techItem'>
                        <Image
                        src = {java}
                        width={25}
                        height={32}
                        alt = 'Java jpg'
                       
                        className='skillItem'>
                        </Image>
                    Java</div>

                    <div id = 'techItem'>
                        <Image
                        src = {C}
                        width={25}
                        height={32}
                        alt = 'C jpg'
                 
                        className='skillItem'>
                        </Image>
                    C</div>

                    <div id = 'techItem'>
                        <Image
                        src = {html}
                        width={25}
                        height={32}
                        alt = 'HTML jpg'
                       
                        className='skillItem'>
                        </Image>
                        HTML</div>

                    <div id = 'techItem'>
                        <Image
                        src = {css}
                        width={25}
                        height={32}
                        alt = 'CSS jpg'
                       
                        className='skillItem'>
                        </Image>
                        CSS</div>

                    <div id = 'techItem'>
                        <Image
                        src = {react}
                        width={30}
                        height={32}
                        alt = 'React jpg'
                        
                        className='skillItem'>
                        </Image>
                        React</div>

                    <div id = 'techItem'>
                        <Image
                        src = {next}
                        width={28}
                        height={32}
                        alt = 'Next jpg'
                
                        className='skillItem'>
                        </Image>                        
                        Next.js</div>

                    <div id = 'techItem'>
                        <Image
                        src = {chakra}
                        width={28}
                        height={32}
                        alt = 'ChakraUI jpg'
                        
                        className='skillItem'>
                        </Image>    
                        Chakra UI</div>


                    <div id = 'techItem'>
                        <Image
                        src = {git}
                        width={28}
                        height={32}
                        alt = 'Git jpg'
                       
                        className='skillItem'>
                        </Image>                               
                        Git</div>

                    <div id = 'techItem'>
                        <Image
                        src = {vercel}
                        width={28}
                        height={32}
                        alt = 'Vercel jpg'
                      
                        className='skillItem'>
                        </Image>  
                        Vercel</div>

                    <div id = 'techItem'>
                        <Image
                        src = {figma}
                        width={19}
                        height={32}
                        alt = 'Figma jpg'
                   
                        className='skillItem'>
                        </Image>      
                    Figma</div>

                </div>
            </div>
        </div>
    )
}