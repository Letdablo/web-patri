import "./style.scss";
import { ReactComponent as Salud } from "../../img/salud-mental.svg";
import { ReactComponent as Yoga } from "../../img/yoga.svg";
import { ReactComponent as Pasion } from "../../img/pasion.svg";
import { ReactComponent as Honestidad } from "../../img/honestidad.svg";
import { ReactComponent as Mejora } from "../../img/mejora.svg";

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

function Services() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(
      document.getElementsByClassName("circle fadeupSvg")
    );

    for (let section of sections) {
      observer.observe(section);
    }
  });

  return (
    <div class="containerValores" id="valores">
      <div class="services">
        <div style={{ marginTop: "20px" }}>
          <h2 class="service-title color" style={{ fontSize: 40 }}>
            Los valores
          </h2>
          <h2 class="service-title"> que impartimos en las terapias </h2>
        </div>
        <div class="center">
          <div class="circle fadeupSvg">
            {" "}
            <Yoga></Yoga>
          </div>
          <br></br>
          <span>Bienestar</span>
          <div class="text-service">
            <span>
              Realizamos la búsqueda de satisfacción personal para así conseguir
              una mejora en la armonía consigo mismo y el entorno.
            </span>
          </div>
        </div>
        <div class="center">
          <div class="circle fadeupSvg">
            {" "}
            <Salud></Salud>
          </div>
          <br></br>
          <span>Salud</span>
          <div class="text-service">
            <span>
              Juntos encontraremos la forma de fortalecer tu estado de bienestar
              y equilibrio.
            </span>
          </div>
        </div>
        <div class="center">
          <div class="circle fadeupSvg">
            {" "}
            <Pasion></Pasion>
          </div>
          <br></br>
          <span>Pasión</span>
          <div class="text-service">
            <span>
              Nuestro amor por la Psicología hace que no dejemos de aprender
              para ofrecer lo mejor en cada sesión.
            </span>
          </div>
        </div>
        <div class="center">
          <div class="circle fadeupSvg">
            {" "}
            <Honestidad></Honestidad>
          </div>
          <br></br>
          <span>Compromiso</span>
          <div class="text-service">
            <span>
              Nuestro deber como profesionales es mejorar día a día para
              adecuarnos a cada persona.
            </span>
          </div>
        </div>
        <div class="center">
          <div class="circle fadeupSvg">
            {" "}
            <Mejora></Mejora>
          </div>
          <br></br>
          <span>Superación</span>
          <div class="text-service">
            <span>
              Fruto de cada proceso terapéutico en base a los objetivos que
              marquemos durante la evaluación.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
