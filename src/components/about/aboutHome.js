import "./style.scss";

import { ReactComponent as Adultos } from "../../img/adultos.svg";
import { ReactComponent as Talleres } from "../../img/talleres.svg";
import { ReactComponent as Nutricion } from "../../img/nutricion.svg";
const observerOptions = {
  root: null,
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function AboutHome() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(document.getElementsByClassName("card fadeup"));

    for (let section of sections) {
      observer.observe(section);
    }
  });

  const handlerClick = async (redirect) => {
    window.location.href = "https://turaizpsicologia.com/" + redirect;
  };

  return (
    <div class="containerAbout" id="servicios">
      <div class="about">
        <div class="inner">
          <div class="inner__headings">
            <h2 class="inner__head">
              Las talleres y supervisiones pueden ser presenciales u{" "}
              <span class="inner__clr">online.</span>
            </h2>
          </div>
          <div class="inner__content">
            <p class="inner__text">
              Los talleres y supervisiones presenciales se imparten en distintos
              puntos de Madrid. Si quieres más información te animamos a
              contactar con nosotras.
            </p>
          </div>
        </div>
        <div class="cards-grid">
          <div class="card fadeup" id="Supervisiones">
            <Adultos style={{ width: "100%", height: "40%" }}></Adultos>
            <div class="card__body">
              <h4 class="card__head">Psicología</h4>
              <p class="card__content">
                Nuestras sesiones se realizan bajo un enfoque integrador,
                adaptándonos a las necesidades de cada caso.
              </p>

              <div
                class="btn btn-three"
                style={{ width: "100%", marginTop: 20 }}
                onClick={() => handlerClick("psicologia")}
              >
                <span class="text-btn"> Información</span>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="Supervisiones">
            <Talleres style={{ width: "100%", height: "40%" }}></Talleres>
            <div class="card__body">
              <h4 class="card__head">Talleres y Supervisiones</h4>
              <p class="card__content">
                Se trata de unos grupos de supervisión estáticos, de máximo
                cinco personas, en los cuales tendrás nuevas herramientas,
                enfoques e intentaremos darte luz en todo lo que podamos.
              </p>

              <div
                class="btn btn-three"
                style={{ width: "100%", marginTop: 20 }}
                onClick={() => handlerClick("talleres")}
              >
                <span class="text-btn"> Información</span>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="Supervisiones">
            <Nutricion style={{ width: "100%", height: "40%" }}></Nutricion>
            <div class="card__body">
              <h4 class="card__head">Nutrición</h4>
              <p class="card__content">
                Mejora tu salud y figura a través de una alimentación
                equilibrada, sin pasar hambre, sin efecto rebote, sin necesidad
                de usar suplementos y disfrutando cada una de tus comidas.
              </p>

              <div
                class="btn btn-three"
                style={{ width: "100%", marginTop: 20 }}
                onClick={() => handlerClick("nutricion")}
              >
                <span class="text-btn"> Información</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHome;
