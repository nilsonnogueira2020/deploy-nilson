import React from 'react';
import './styles.css';


import { FaUserCircle, FaSearch, FaRegHeart, FaShoppingCart } from 'react-icons/fa';

import logo from "../../assets/logo.jpg"

export default function Menu() {
    return (
        <section className="menu">
            
            <span >
             <ul>
                 <li className="spacelogo">   
            <img className="logo"src={logo} alt="logo" />
                </li>
                
            <form>
                   <ul>
                    <li>
                <input type="search" name="name" placeholder="busque aqui seu produto" /></li> 
                <li><button type="submit">< FaSearch size={30} color="red"/></button></li>
                
                </ul>
            </form>
            
            <li className="user">
            <FaUserCircle size={30} color="white" /><span className="logando">olá, faça seu login ou cadastre-se</span>
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
