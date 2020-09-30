import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/portfolio">Portfólio</Link>
                    </li>
                    <li>
                        <Link to="/quemsomos">Quem Somos</Link>
                    </li>
                </ul>

            </nav>
        </>
    );
}
