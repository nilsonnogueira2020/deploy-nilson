import React from 'react';
import './styles.css';

import Topinho from "../Topinho";
import Menu from "../Menu";
import Links from "../Links";
import Footer from "../Footer";
import Carrocel from "../Carrocel";

export default function Home() {
    return (
        <>
            <Topinho />
            <Menu />
            <Links />
            <hr />
            <Carrocel />
            <h1>HOME</h1>
            <Footer />
        </>
    );
}
