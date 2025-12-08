/*Styled Imports*/
import '../globals.css';
import { Pixelify_Sans } from 'next/font/google';
const pixelify_Sans = Pixelify_Sans({ subsets: ["latin"], weight: "400",});
const pixelify_Sans_Bold = Pixelify_Sans({ subsets: ["latin"], weight: "700",});
import { Be_Vietnam_Pro} from 'next/font/google';
{/*VBold*/}const be_Vietnam_Pro = Be_Vietnam_Pro({subsets: ['latin'], weight: '800'})
{/*Light*/}const be_Vietnam_Pro_Light = Be_Vietnam_Pro({subsets: ['latin'], weight: '300'})
{/*VLight*/}const be_Vietnam_Pro_VLight = Be_Vietnam_Pro({subsets: ['latin'], weight: '200'})
import Image from 'next/image';
import bodyShot from '@/app/images/bodyShot.jpg';

export default function About(){
    return(
        <div className = 'section' id = "aboutSection">
            <div className="aboutContainer">
                <h1 id ="aboutTitle" className={be_Vietnam_Pro.className}>
                <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> GET TO KNOW <div id = 'blueTag' className={pixelify_Sans_Bold.className}> ME </div> ! <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div></h1> 
                   <div className = "discWrapper">
                    {/*My Headshot*/}
                        <div className='bodyShotContainer'>
                            <Image
                                src = {bodyShot}
                                width={2000}
                                height={350}
                                alt ='Conference photo of Serenity'
                   
                                className='bodyShot'>
                            </Image>
                            </div>
                <div id ='aboutDisc' className={be_Vietnam_Pro_Light.className}>
                    <p> I am currently pursuing a degree in Computer Science with a concentration in Artificial Intelligence, alongside a second major in Philosophy with an Ethics concentration. <br></br><br></br>As technology continues to evolve, I’m committed to approaching software development with a human-centered mindset. It’s important to me that programmers are not only technically skilled, but also value society by operating with clear moral principles.
                        <br></br><br></br>With this perspective, I aim to make a meaningful social impact.
                        <br></br><br></br>I dream big, but I’m not really trying to create anything revolutionary, haha. I simply want to help foster more love in the world: love between people and love within self. I truly believe that technology is a powerful tool such that, when harnessed correctly, can help breed this super-awesome-incredible-extraordinary power.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}