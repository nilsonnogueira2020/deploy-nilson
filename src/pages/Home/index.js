import React from 'react';
import './styles.css';

import Menu from "../Menu";
import Footer from "../Footer";
import Carrocel from "../Carrocel";

export default function Home() {
    return (
        <>
            <Menu />
            <hr />
            <Carrocel />
            <h1>HOME</h1>
            <Footer />
        </>
    );
}
