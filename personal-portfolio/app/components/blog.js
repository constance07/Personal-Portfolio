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
import perfect from '@/app/images/perfect.jpg';
/*Video Carousel*/
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

 

export default function Blog(){

    /*Video Carousel*/
     const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'center',
        
     })

    const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])



    return(
    <div className = "section" id='blogSection'>
       
        <div id='blogContainer' className={be_Vietnam_Pro.className}>
            <div className='blogContent'>

                <h1 id ="blogTitle" className={be_Vietnam_Pro.className}>
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> FUN FACT: I  <div id = 'blueTag' className={pixelify_Sans_Bold.className}> DO </div> HAVE A LIFE OUTSIDE MY COMPUTER ! <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div></h1> 

                <div className='blogSubtitle'>
                    <div id = 'h3TagsA' className={pixelify_Sans_Bold.className}>&lt;h3&gt;</div><h3 id = "blogSubtitleText" className={pixelify_Sans_Bold.className}>(*At least, that's what I like to tell myself)<div id = 'h3TagsA' className={pixelify_Sans_Bold.className}>&lt;/h3&gt;</div></h3>
                </div>
                
                <a id = "blogPost"href = "/posts/TheMetamorphosis_FranzKafka.pdf" download = "The Metamorphosis - A Vermins Hunger For Humanity">
                <div className='blogPostContainer'>
                        <Image
                        src = {meta}
                        width={75}
                        height={105}
                        alt = 'Franz Kafka The Metamorphosis jpg'
                   
                        id = "metaBook"
                        className='skillItem'>
                        </Image>
                    <div className = "blogPostContent">
                        <div id="blogPostTitle" className={be_Vietnam_Pro.className}>The Metamorphosis: A Vermin's Hunger for Humanity<br></br></div>
                        <p id = "blogPostDisc" className={be_Vietnam_Pro_Light.className}>Kafka has a tendency to juxtapose the familiar with the dark, mysterious, and fearsome.</p>
                    </div>
                </div>
                </a>

                <a id = "blogPost"href = "/posts/PerfectBlue.pdf" download = "Perfect Blue - Or, The Illusion of 'Self'">
                <div className='blogPostContainer'>
                        <Image
                        src = {perfect}
                        width={75}
                        height={105}
                        alt = 'Satoshi Kon Perfect Blue jpg'
                       
                        id = "perfectBook"
                        className='skillItem'>
                        </Image>
                    <div className = "blogPostContent">
                        <div id="blogPostTitle" className={be_Vietnam_Pro.className}>Perfect Blue: Or, The Illusion of 'Self'<br></br></div>
                        <p id = "blogPostDisc" className={be_Vietnam_Pro_Light.className}>What does Mima Kirigoe's struggle to transition from a teen j-pop idol to full-time actress tell us about our own identity and personas?</p>
                    </div>
                </div>
                </a>
            </div>

            <div className='emblaCenter'>
                <div className="embla" >
                    <div className='embla__viewport' ref={emblaRef}>
                    <div className="embla__container">
                    <div className="embla__slide"  controls preload="none" width={50} height={300} poster = "/images/aWoman.jpg">   
                    <a href='https://drive.google.com/file/d/1-rzIxKvFlL1wlwaCImbZebyo9hzHxlI2/view?usp=sharing'>
                            <Image
                                src = "/images/aWoman.jpg"
                                width={200}
                                height={300}
                                className='emblaImage'
                                alt = "musicCover"
                                >
                            </Image>  
                    </a>
                    </div>
                    <div className="embla__slide">
                    <a href='https://drive.google.com/file/d/1Air5c00Y-jZ39Tlc2Wktzq54P6ZY_aTB/view?usp=sharing'>
                            <Image
                                src = "/images/forgetHer.jpg"
                                width={200}
                                height={300}
                                className='emblaImage'
                                alt = "musicCover"
                                >
                            </Image>
                    </a>               
                    </div>
                    <div className="embla__slide" >
                    <a href='https://drive.google.com/file/d/1mjz0JadK13VyVFnF6_71UI6Po1ScCA2A/view?usp=sharing'>
                            <Image
                                src = "/images/brainStew.jpg"
                                width={200}
                                height={300}
                                className='emblaImage'
                                alt = "musicCover"
                                >
                            </Image>
                    </a>                            
                    </div>
                    <div className="embla__slide">
                    <a href='https://drive.google.com/file/d/1RFeqWO_CyoDusKpzxSaxsAW-XCFLiUWW/view?usp=drive_link'>
                            <Image
                                src = "/images/theMoments.jpg"
                                width={200}
                                height={300}
                                className='emblaImage'
                                alt = "musicCover"
                                >
                            </Image>
                    </a>             
                    </div>
                </div>
                </div>
            </div>

        <div id ='controlButtons'>
            <button id = "embla__prev" className={pixelify_Sans.className} onClick={scrollPrev}>&lt;</button>
            <button id="embla__next" className={pixelify_Sans.className} onClick={scrollNext}>&gt;</button>
        </div>

        </div>
        </div>
    
    </div>)
}