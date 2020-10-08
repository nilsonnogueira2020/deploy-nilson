import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaSearchLocation } from 'react-icons/fa';
import fav from "../../assets/fav.jpg"

export default function Links() {
    return (
        <section >
<span className="topolinks">
<ul>

    <li>
        <Link className="style-link" to="/"><FaSearchLocation size={20} color="yellow" />Informe seu CEP </Link>
    </li>

    <li>
        <Link className="style-link" to="/portfolio">seja <img className="fav"src={fav} alt="favicon" /> mais</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos"><img className="fav"src={fav} alt="favicon" /> empresas</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos">vote na gente</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos">baixe o app</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos">receba hoje</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos">produtos importados</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos">venda com a gente</Link>
    </li>
    <li>
        <Link className="style-link" to="/quemsomos"><img className="fav"src={fav} alt="favicon" />oferta do dia</Link>
    </li>
   
</ul>

</span>

        </section>
    );
}