import React from 'react';
import "../styles/Banner.css";
import minhaImagem from "../Assets/74cb7cc28b6604f1e737e52a11e122e293e951db.png";
import { BiSolidSchool } from "react-icons/bi";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";


function Banner() {
  return (
    <>
    <section className="banner-content">
        <div className="banner-titulo">
          <h1>onde tudo faz sentido.</h1>
          <p>FAAMA - Faculdade Adventistada da Amazônia</p>
        </div>
      </section>
      <section className="banner-container">
        <div className="quadrado lateral-sombra"></div>
          <img src={minhaImagem} alt="Destaque" className="imagem-estudante"/>
          <div className="quadrado lateral-sombra"></div>
        </section>

       <section className="informacao-ensino">
          <h2>Conheça nossa rede de ensino.</h2>
  
        <div className="informacao">
          <i><BiSolidSchool /> 9.589 unidades escolares </i>
          <i><PiStudentBold /> 264.741 alunos </i>
          <i><LiaChalkboardTeacherSolid /> 111.476 professores </i>
        </div>
      </section>
    </>
  );
}

export default Banner;