import React from 'react';
import './styles.css';

import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaSignLanguage } from 'react-icons/fa';

import logo2 from "../../assets/logo2.jpg"

export default function Footer() {
    return (
        <section className="rodape">
            
            <span>
             <ul>
                 <li>   
            <img className="logo"src={logo2} alt="logo2" />
                </li>
                
            <form>
                   <ul>
                <li className="user">
                <FaSignLanguage size={30} color="blue" /> <span>Acessibilidade</span>           
                </li>       
                 
                <li><button className="saiba" type="submit"><p className="copy">saiba mais</p></button></li>
                
                </ul>
            </form>
            
            
            <li className="user">
            <FaYoutube size={30} color="grey" />            
            </li>
            <li className="cart">
            <FaFacebookF size={30} color="grey" />
            </li>
            <li className="cart">
            <FaInstagram size={30} color="grey" />
            </li>
            <li className="user">
            <FaTwitter size={30} color="grey" />
            </li>
            
            </ul>
            </span>
            
        </section>
        

    );
}