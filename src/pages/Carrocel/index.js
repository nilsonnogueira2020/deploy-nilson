import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import imagem01 from "../../assets/imagem01.jpg"
import imagem02 from "../../assets/imagem02.jpg"
import img03 from "../../assets/img03.jpg"
import img04 from "../../assets/img04.jpg"
import img05 from "../../assets/img05.jpg"
import img06 from "../../assets/img06.jpg"
import img07 from "../../assets/img07.jpg"
import img08 from "../../assets/img08.jpg"
import img09 from "../../assets/img09.jpg"
import img11 from "../../assets/img11.jpg"
import img12 from "../../assets/img12.jpg"
import img13 from "../../assets/img13.jpg"
import img14 from "../../assets/img14.jpg"
import img15 from "../../assets/img15.jpg"
import img16 from "../../assets/img16.jpg"
import img17 from "../../assets/img17.jpg"

export default function Carrocel() {
    return (
        
    <>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagem01}
      alt="Primeiro slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagem02}
      alt="Segundo slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img03}
      alt="Terceiro slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img04}
      alt="Quarto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img05}
      alt= "Quinto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img06}
      alt="Sexto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img07}
      alt="Setimo slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img08}
      alt="Oitavo slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img09}
      alt="Nono slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img11}
      alt="Decimo primeiro slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img12}
      alt="Decimo segundo slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img13}
      alt="Decimo terceiro slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img14}
      alt="Decimo quarto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img15}
      alt="Decimo quinto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img16}
      alt="Decimo sexto slide"
    />
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src={img17}
      alt="Decimo setimo slide"
    />
  </Carousel.Item>
</Carousel>
  </>
  

    );
}