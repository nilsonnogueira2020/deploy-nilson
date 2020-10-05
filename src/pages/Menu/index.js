import React from 'react';
import './styles.css';

import { FaUserCircle, FaSearch, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

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
            <FaUserCircle size={30} color="white" /><p>olá, faça seu login ou cadastre-se</p>
            </li>
            <li className="user">
            <FaRegHeart size={30} color="white" />
            </li>
            <li className="cart">
            <FaShoppingCart size={30} color="white" />
            </li>
            </ul>
            </span>
        </section>
        

    );
}
