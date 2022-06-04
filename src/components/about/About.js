import React from "react";
import imagen from "../../media/Foto.png"
import "./About.css";
import cv from "../about/Fernandez_Agustin_Eligio_CV.pdf"
import resume from "../about/Fernandez_Agustin_Eligio_Resume.pdf"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3> Hola mi nombre es Agustín, soy Desarrollador Full Stack y Desarrollador de Juegos</h3>
        <p >
          Me inicié en el mundo del desarrollo de videojuegos cuando comencé la carrera de "Programador y Diseñador de Videojuegos" en la universidad "Da vinci" de Argentina.
          Me desarrollé como Full Stack developer en el coding bootcamp de plataforma 5, que es una institución que forma a Full Stack Jr.
        </p>
        <br />
        <p >
          Tuve la oportunidad de crear 3 proyectos como Full Stack Developer, una página de película (TMBD), un E-commerce y una aplicación para móviles,
          También tengo otros 3 proyectos gracias a mi facultad, un juego en 2d (space shotter), un juego 3d parecido al resident evil y un último juego de tanques para celulares.
          ¡Muy pronto están deployados en la web para que puedan ver las páginas web y jugar los juegos!
        </p>
        <br />
        <p>
          Soy una persona muy activa, responsable, muy cooperativa y trabajadora en equipo, algo que aprendí en todos los proyectos que estuve fue a cooperar y buscar lo mejor para los proyectos
          también el aprendizaje rápido fue una cualidad que adquirí en el bootcamp, ya que aprendía tecnologías nuevas todos los días.
        </p>
        <button>
          <div>
            <a href={cv} download> Descargar cv </a>
          </div>
        </button>
        <button>
          <div>
            <a href={resume} download> Download Resume </a>
          </div>
        </button>
      </div>
      <div className="about-img">
        <img src={imagen} className="img" />
      </div>
    </div>
  );
};

export default About;
