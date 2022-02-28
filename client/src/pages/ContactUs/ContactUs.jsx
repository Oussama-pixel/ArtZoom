import React, { useEffect } from 'react'
import "./contactUs.scss"
import {Map} from '../../components/Map/Map.jsx'
import {AiOutlineSend} from 'react-icons/ai'
export default function ContactUs() {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className='contactUs'>
            <div className="background">
                <div className="contact-us-arrow-one">

                </div>
                <div className="contact-us-arrow-two">

                </div>
                <div className="contact-us-arrow-three">
                    
                </div>
            </div>
            <div className="content">
                <div className="header">
                    <div className="info">
                        <div className="title">
                            <h1>
                                Avez vous des questions? <br></br>Contactez Nous!
                            </h1>
                        </div>
                        <div className="desc">
                            <p>
                                Si vous avez des questions ou des questions, un membre du personnel sera toujours heureux de vous aider. N'hésitez pas à nous contacter par téléphone ou par email et nous ne manquerons pas de vous répondre dans les plus brefs délais.
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/products/image55.jpeg" alt="" />
                    </div>
                </div>
                <div className="map">
                    <Map/>
                </div>
                <div className="contacts">
                    <div className="title">
                        <h1>
                            CONTACT
                        </h1>
                    </div>
                    <div className="info">
                        <p>
                            Si vous avez des questions ou des questions, un membre du personnel sera toujours heureux de vous aider. N'hésitez pas à nous contacter par téléphone, fax ou e-mail et nous ne manquerons pas de vous répondre en conséquence.
                        </p>
                        <p>
                            <strong>Nous sommes ouverts:</strong>
                        </p>
                        <div className='horaires'>
                            <p>
                                Du <u>Lundi</u>  au <u>Vendredi</u> :  09:00 à 17:00
                            </p>
                        </div>
                        <div className='horaires'>
                            <p>
                               
                            </p>
                            <p>
                                Le <u>Samedi</u> du 09:00 à 14:00 
                            </p>
                        </div>

                        <div className="email-and-phone">
                            <div className="left">
                                <div>
                                    <h4>
                                        Email
                                    </h4>
                                    <p>
                                        artzoom4000@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="right">
                                <div>
                                    <h4>
                                        Telephone
                                    </h4>
                                    <p>
                                        0640760574
                                    </p>
                                </div>
                                <div>
                                    <h4>
                                        Address
                                    </h4>
                                    <p>
                                        26 BIS rue Ibn Khaldoun Ville nouvelle Meknes 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send-email">
                    <div className="title">
                        <h1>
                            EMAIL 
                        </h1>
                    </div>
                    <div className="form">
                        <div className="row">
                            <input type="text" placeholder='Your Name'/>
                            <input type="text" placeholder='Your Email'/>
                        </div>
                        <div className="row">
                            <textarea name="your_message" id="" cols="55" rows="5" placeholder='Your Message'>

                            </textarea>
                        </div>
                        <div className="row">
                            <button className="send">
                                <h4>Send</h4> <AiOutlineSend/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
