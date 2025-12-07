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
                    <video className="embla__slide"  controls preload="none" width={50} height={300} poster = "/images/aWoman.jpg">   
                        <source src="/videos/aWoman.mp4" type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English">
                            </track>
                    </video>
                    <video className="embla__slide"  controls preload="none" width={100} height={300} poster = "/images/forgetHer.jpg">
                        <source src="/videos/forgetHer.mp4" type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English">
                            </track>                  
                    </video>
                    <video className="embla__slide"  controls preload="none" width={100} height={300} poster = "/images/brainStew.jpg">
                        <source src="/videos/brainStew.mp4" type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English">
                            </track>                  
                    </video>
                    <video className="embla__slide"  controls preload="none" width={100} height={300} poster = "/images/theMoments.jpg">
                        <source src="/videos/theMoments.mp4" type="video/mp4" />
                            <track
                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English">
                            </track>                  
                    </video>
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