import React from 'react';
import './styles.css';

import Topinho from "../Topinho";
import Menu from "../Menu";
import Links from "../Links";
import Produtos from "../Produtos";
import Baixe from "../Baixe";
import Footer from "../Footer";
import Carrocel from "../Carrocel";
import Copyright from "../Copyright";


export default function Home() {
    return (
        <>
            <Topinho />
            <Menu />
            <Links />
            <Baixe />
            <Carrocel />
            <Produtos />
                        
            <Footer />
            <Copyright />
        </>
    );
}
