import React from 'react';
import './styles.css';

import Topinho from "../Topinho";
import Menu from "../Menu";
import Footer from "../Footer";
import Carrocel from "../Carrocel";

export default function Home() {
    return (
        <>
            <Topinho />
            <Menu />
            <hr />
            <Carrocel />
            <h1>HOME</h1>
            <Footer />
        </>
    );
}
