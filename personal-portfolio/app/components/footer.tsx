'use client'
/*Functionality Imports */
import {useState} from 'react';
/*Styling Imports */
import '../globals.css';
import { Pixelify_Sans } from 'next/font/google';
const pixelify_Sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "400",
});
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})

export default function Footer(){
    return( 
    <div className='footerContainer'>
        <h3 id = "smallDevLogo" className={pixelify_Sans.className}>SB</h3>
        <div className='icons'>
            
        </div>
        <p id = 'ownershipTag' className={be_Vietnam_Pro_VLight.className}>©2025 Serenity Buckner | All Rights Reserved</p>
        
    </div>
)

}
