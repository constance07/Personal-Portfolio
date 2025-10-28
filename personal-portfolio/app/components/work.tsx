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
export default function Work(){
    
    return(
        <>
            <div className="workContainer">
                <h1 id ="workTitle" className={be_Vietnam_Pro.className}>
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> I <div id = 'blueTag' className={pixelify_Sans_Bold.className}> REALLY </div> ! LIKE TO BUILD AND DESIGN STUFF. 
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div></h1> 
                
                <div className='displayContainer'>
                    <div className='displayBackground'>
                    <div id="displayTitle" className={be_Vietnam_Pro.className}>We've Got To Talk</div>
                    <div id="displayDisc" className={be_Vietnam_Pro_Light.className}>A card game promoting self-love beyond external labels and obligation through a cycle think, act, and action prompts. </div>
                    <Image
                        src = {WGTT}
                        alt = 'Weve Got To Talk Image'
                        id = 'WGTT'
                        quality={40}
                        ></Image>
                    </div>
                </div>
                <div id="resumeTitle" className={be_Vietnam_Pro_Light.className}>Want to know about the other cool things I do?<div id = "resumeLinkA" className={pixelify_Sans.className}> Check out my resume <a href = "https://docs.google.com/document/d/1joId81v81lhTnqoQxQcvKa-fOUb8AgJDw6EbUtR1-xs/edit?usp=sharing" id = "resumeLinkB" className={pixelify_Sans.className}>here</a></div>.</div>
            </div>
        </>
    )
}