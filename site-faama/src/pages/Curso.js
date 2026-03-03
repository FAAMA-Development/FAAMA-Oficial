import Navbar from '../components/Navbar';
import "../styles/Curso.css";

function Curso() {
    return (
        <>
            <Navbar />
            <section className='container'>
                <div>
                    <h1>CURSOS</h1>
                    <p>Cursos ofertados na Faculdade Adventista da Amazônia</p>
                    <div className="container-cursos">
                        <div className="card card-direito"></div>
                        <div className="card card-teologia"></div>
                        <div className="card card-ads"></div>
                        <div className="card card-pedagogia"></div>
                        <div className="card card-psicologia"></div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Curso;