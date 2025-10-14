'use client'
/*Functionality Imports */
import {useState} from 'react';
import Image from 'next/image';
/*Styling Imports */
import '../globals.css';
import github from '@/app/images/github.jpg';
import goodreads from '@/app/images/goodreads.jpg';
import linkedIn from '@/app/images/linkedIn.jpg';
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
            <a href = 'https://www.linkedin.com/in/serenity-buckner-885503266/ '  target="_blank" >
            <Image
                src = {linkedIn}
                alt = 'linkedIn logo'
                id = 'linkedIn'
            ></Image>
            </a>
            <a href = 'https://github.com/constance07' target="_blank" >
            <Image
                src = {github}
                alt = 'github logo'
                id = 'github'
            ></Image>
            </a>
            <a href = 'https://www.goodreads.com/user/show/162003264-serenity-buckner' target="_blank"  ><Image
                src = {goodreads}
                alt = 'goodreads logo'
                id = 'goodreads'
            ></Image>
            </a>
        </div>
        <p id = 'ownershipTag' className={be_Vietnam_Pro_VLight.className}>© 2025 Serenity Buckner. All Rights Reserved</p>
        
    </div>
)

}
