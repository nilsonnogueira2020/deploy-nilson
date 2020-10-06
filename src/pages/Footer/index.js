import React from 'react';
import './styles.css';

import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaAccessibleIcon, FaHandHolding, FaHandLizard } from 'react-icons/fa';

import logo2 from "../../assets/logo2.jpg"

export default function Footer() {
    return (
        <section className="rodape">
            
            <span>
             <ul>
                 <li>   
            <img className="logo"src={logo2} alt="logo2" />
                </li>
                <li>
            <form>
                   <ul>
                <li className="user">
                <FaHandLizard size={30} color="blue" />            
                </li>       
                 
                <li><button className="saiba" type="submit"><p className="copy">saiba mais</p></button></li>
                
                </ul>
            </form>
            
            </li>
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
            <span className="copy">B2W - Companhia Digital / CNPJ: 00.776.574/0006-60 / Inscrição Estadual: 85.687.08-5 / Endereço Rua Sacadura Cabral, 102 - Rio de Janeiro, RJ - 20081-902 / atendimento.acom@americanas.com</span>
        </section>
        

    );
}