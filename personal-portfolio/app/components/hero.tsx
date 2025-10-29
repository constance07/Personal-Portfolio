/*Functionality Imports */
import Image from 'next/image';
import straightHeadshot from '@/app/images/straightHeadshot.jpg'
/*Styled Imports*/
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

export default function Hero(){
    return(
        <div className='heroContainer'>
            {/*My Headshot*/}
            <div className='headshotContainer'>
                <Image
                    src = {straightHeadshot}
                    width={350}
                    height={350}
                    alt = 'Headshot of Serenity'
                    quality = {100}
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
            <p id = "personalDisc" className={be_Vietnam_Pro_Light.className}> <span id = 'pTags' className={pixelify_Sans.className}>&lt;p&gt;</span> Etiam aliquam libero pretium magna vehicula, eu porta risus sollicitudin. 
                Vivamus eleifend augue at massa dictum, nec maximus  . 
            Curabitur scelerisque euismod efficitur. <span id = 'pTags' className={pixelify_Sans.className}>&lt;/p&gt;</span></p>
            </div>
        </div>
    )
}