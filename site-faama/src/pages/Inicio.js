import { Link } from 'react-router-dom';
import fotoAluna from '../Assets/Ellipse 1.png';
import educacaoImagem from '../Assets/Group 62.png';
import seta from '../Assets/weui_arrow-filled.png';
import Banner from "../Components/Banner";
import "../styles/Inicio.css";

function Inicio() {
  return (
    <>
      <Banner />
      <section className="container">
        <div className="container-cursos">
          <div className="card cima card-direito"></div>
          <div className="card baixo card-teologia"></div>
          <div className="card cima card-ads"></div>
          <div className="card baixo card-pedagogia"></div>
          <div className="card cima card-psicologia"></div>
        </div>
        <div className="educacao-container">
          <img src={educacaoImagem} alt="Destaque" className="imagem-educacao" />
          <button className="botao-saiba-mais">saiba mais</button>
        </div>
        <div className='faama-container'>
          <h2>ALUNOS</h2>
          <h3>sobre a FAAMA:</h3>
          <img src={fotoAluna} alt="foto aluna" className="foto-aluna" />
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec efficitur, ex sed sagittis vehicula, massa orci rutrum
            elit, vitae laoreet odio diam sit amet massa. Nulla non
            tristique augue, nec maximus quam"</p>
          <p>Maria, aluna de Enfermagem</p>
          <Link to="/cursos">
            <button className='proxima-pagina'>
              <img src={seta} alt="proxima página" />
            </button>
          </Link>
        </div>
      </section>
    </>
  )
};

export default Inicio;