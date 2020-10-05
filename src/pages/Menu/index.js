import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaLaptop } from 'react-icons/fa';
import logo from "../../assets/logo.jpg"

export default function Menu() {
    return (
        <section>
            
            <span>

            <img className="logo"src={logo} alt="logo" />

            </span>

            <span>

                <ul>
                    <li>
                        <Link className="style-link" to="/">Home</Link>
                    </li>

                    <li>
                        <Link className="style-link" to="/portfolio">Portfólio</Link>
                    </li>
                    <li>
                        <Link className="style-link" to="/quemsomos">Quem Somos</Link>
                    </li>
                </ul>
                <FaLaptop size={50} />
            </span>
        </section>

    );
}
