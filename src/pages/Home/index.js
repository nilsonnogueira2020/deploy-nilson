import React from 'react';
import './styles.css';

import Topinho from "../Topinho";
import Menu from "../Menu";
import Links from "../Links";
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
            <hr />
            <Baixe />
            <Carrocel />
            <h1>HOME</h1>
            <Footer />
            <Copyright />
        </>
    );
}
