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

{/*General Imports*/}
import { ToastContainer, toast } from 'react-toastify';

export default function Contact(){
    
   {/*Empty Form*/}
    const initialFormData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialFormData);

    {/*Update Input Value*/}
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    {/*Send to personal Email*/}
    const handleSubmit = async(event) => {
        {/*Dont let field be empty*/}
        event.preventDefault();

        {/* Grab HTML Elements */}
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");

        {/*Valid Email*/}
        const emailErrorB = document.getElementById("inputB"); 
        const validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 

        if(!formData.name || !emailErrorB.value.match(validEmail) || !formData.subject|| !formData.message){
            {/*If field is not valid, add error */}
            if(!formData.name) {nameError.innerHTML = "* Please insert your name"};
            if(!emailErrorB.value.match(validEmail)){emailError.innerHTML = "* Please insert a valid email"}
            if(!formData.subject){subjectError.innerHTML = "* Please insert a subject"}
            if(!formData.message){ messageError.innerHTML = "* Please type your message"};

            {/*If field is now valid, remove error */}
            if(formData.name) {nameError.innerHTML = ""};
            if(emailErrorB.value.match(validEmail)){emailError.innerHTML = ""};
            if(formData.subject){subjectError.innerHTML = ""}
            if(formData.message){messageError.innerHTML = ""};

            toast.error('Please check all input fields.');
            return false;
        }

        {/*Make sure all errors are removed*/}
        nameError.innerHTML = "";
        emailError.innerHTML = "";
        subjectError.innerHTML = "";
        messageError.innerHTML = "";

        try{
            const response = await fetch('/api/send', {
                method: 'POST',
                body: JSON.stringify({...formData}),
            });
        /*Email Sent !*/
            setFormData(initialFormData);
            toast.success("Email was sent sucessfully!");
        } catch(error){
        /*Email Error !*/
            toast.error('Oops, looks like something went wrong ', error);
        } 
    };
    return(
        <div className='section' id = "contactSection">
                <div className='contactContainer'>
                {/*Title*/}
                <div id = "contactTitle" className= {be_Vietnam_Pro.className}>
                    <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;h1&gt;</div> LET'S CONNECT ! <div id = 'h1Tags' className={pixelify_Sans_Bold.className}>&lt;/h1&gt;</div>
                </div>
                {/*Sub-Title*/}
                <div id = "contactSubTitle" className= {pixelify_Sans_Bold.className}>
                    <div id = 'h3TagsB'>&lt;h3&gt;</div> Ask me anything, or just say hi... <div id = 'h3TagsB' className = {pixelify_Sans_Bold.className}>&lt;/h3&gt;</div>
                </div>
                
                    
                {/*Form*/}
                <div className = "">
                    <form name = "conctactForm" onSubmit = {handleSubmit} className='form' >
                        <fieldset className='formField'>
                            <h2 id='formSubTitles' className = {be_Vietnam_Pro.className} >NAME</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "nameError"></div>
                                <input 
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='inputA' 
                                type = 'text'
                                name = 'name'
                                value = {formData.name}
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {be_Vietnam_Pro.className}>E-MAIL</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "emailError"></div>
                                <input  
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='inputB'
                                type = 'text' 
                                name = 'email'
                                value = {formData.email} 
                                onChange={handleChange}/>

                            <h2 id='formSubTitles' className = {be_Vietnam_Pro.className}>SUBJECT</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "subjectError"></div>
                                <input 
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='inputC' 
                                type = 'text'
                                name = 'subject'
                                value = {formData.subject}
                                onChange={handleChange}/>


                            <h2 id='formSubTitles' className = {be_Vietnam_Pro.className}>MESSAGE</h2>
                            <div className = {be_Vietnam_Pro_VLight.className} id = "messageError"></div>
                            <textarea  
                                className= {be_Vietnam_Pro_VLight.className} 
                                id='textArea' 
                                name = 'message' 
                                value = {formData.message} 
                                onChange={handleChange}>
                            </textarea>

                        </fieldset>
                            <button id = "submit" className={pixelify_Sans_Bold.className}>
                               Send
                            </button>
                            <div className= {be_Vietnam_Pro_VLight.className} >
                                <ToastContainer/>
                            </div >
                    </form>
                </div>
            </div>
        </div>
    )
}