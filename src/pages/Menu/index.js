import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import { FaUserCircle, FaSearch, FaRegHeart, FaShoppingCart, FaSearchLocation } from 'react-icons/fa';

import logo from "../../assets/logo.jpg"

export default function Menu() {
    return (
        <section>
            
            <span>
             <ul>
                 <li>   
            <img className="logo"src={logo} alt="logo" />
                </li>
                <li>
            <form>
                   <ul>
                    <li>
                <input type="search" name="name" placeholder="busque aqui seu produto" /></li> 
                <li><button type="submit">< FaSearch size={30} color="red"/></button></li>
                
                </ul>
            </form>
            </li>
            <li className="user">
            <FaUserCircle size={30} color="white" />
            </li>
            <li className="user">
            <FaRegHeart size={30} color="white" />
            </li>
            <li className="cart">
            <FaShoppingCart size={30} color="white" />
            </li>
            </ul>
            </span>
            <span>
        
            

            </span>

            <span>

                <ul>
                
                    <li>
                        <Link className="style-link" to="/"><FaSearchLocation size={20} color="yellow" />Informe seu Cep </Link>
                    </li>

                    <li>
                        <Link className="style-link" to="/portfolio">seja a mais</Link>
                    </li>
                    <li>
                        <Link className="style-link" to="/quemsomos">a empresas</Link>
                    </li>
                    <li>
                        <Link className="style-link" to="/quemsomos">vote na gente</Link>
                    </li>
                    <li>
                        <Link className="style-link" to="/quemsomos">baixe o app</Link>
                    </li>
                   
                </ul>
                
            </span>
        </section>
        

    );
}
