import React from 'react';
import './styles.css';

import produto01 from "../../assets/ar1.png"
import produto02 from "../../assets/ar2.png"
import produto03 from "../../assets/ar3.png"
import produto04 from "../../assets/ar4.png"

export default function Produtos() {
    return (
        
        <section className="centro">
                <span>
                    <ul>
                        <li><h2>os mais vendidos de hoje</h2></li>
                    </ul>
                </span>
                <div className="artigos">
                    <article>
                        <img src={produto01} alt="produto01"  />
                        <p className="pa">R$ 2199,00</p>
                        <h6 className="pa">12x de 183,25 s/juros</h6>
                    </article>
                    <article>
                        <img src={produto02} alt="produto02"  />
                        <p className="pa">R$ 2199,00</p>
                        <h6 className="pa">12x de 183,25 s/juros</h6>
                    </article>
                    <article>
                        <img src={produto03} alt="produto03"  />
                        <p className="pa">R$ 2199,00</p>
                        <h6 className="pa">12x de 183,25 s/juros</h6>
                    </article>
                    <article>
                        <img src={produto04} alt="produto04"  />
                        <p className="pa">R$ 2199,00</p>
                        <h6 className="pa">12x de 183,25 s/juros</h6>
                    </article>
                </div>

            </section>
            
        
    );
}