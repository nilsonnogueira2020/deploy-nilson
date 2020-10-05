import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaSearchLocation } from 'react-icons/fa';


export default function Links() {
    return (
        <section className="topolinks">
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