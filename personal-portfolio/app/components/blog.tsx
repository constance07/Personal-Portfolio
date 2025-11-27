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
import meta from '@/app/images/meta.jpg';


export default function Blog(){

    return(
    <div id='blogSection'>
        <div id='blogContainer' className={be_Vietnam_Pro.className}>
            
            <div className='blogContent'>
                
                <h1 id ="blogTitle" className={be_Vietnam_Pro.className}>
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> FUN FACT, I  <div id = 'blueTag' className={pixelify_Sans_Bold.className}> DO </div> HAVE A LIFE OUTSIDE MY COMPUTER !
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div></h1> 

                <div className='blogSubtitle'>
                    <div id = 'h3TagsA' className={pixelify_Sans_Bold.className}>&lt;h3&gt;</div><h3 id = "blogSubtitleText" className={pixelify_Sans_Bold.className}>(*At least, that's what I like to tell myself)</h3><div id = 'h3TagsA' className={pixelify_Sans_Bold.className}>&lt;/h3&gt;</div>
                </div>
                
                <a id = "blogPost1"href = "/posts/TheMetamorphosis_FranzKafka.pdf" download = "The Metamorphosis - A Vermins Hunger For Humanity">
                <div className='blogPostContainer'>
                    
                        <Image
                        src = {meta}
                        width={75}
                        height={105}
                        alt = 'Franz Kafka The Metamorphosis jpg'
                        quality = {100}
                        id = "metaBook"
                        className='skillItem'>
                        </Image>
                    


                    <div className = "blogPostContent">
                        <div id="blogPostTitle" className={be_Vietnam_Pro.className}>The Metamorphosis: A Vermin's Hunger for Humanity<br></br></div>
                        <p id = "blogPostDisc" className={be_Vietnam_Pro_Light.className}>Kafka has a tendency to juxtapose the familiar with the dark, mysterious, and fearsome.</p>
                    </div>
                
                </div>
                </a>
            </div>
            
        </div>
    
    </div>)
}