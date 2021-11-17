import "./style.scss";
import { ReactComponent as Salud } from "../../img/salud-mental.svg";
import { ReactComponent as Yoga } from "../../img/yoga.svg";
import { ReactComponent as Pasion } from "../../img/pasion.svg";
import { ReactComponent as Honestidad } from "../../img/honestidad.svg";
import { ReactComponent as Mejora } from "../../img/mejora.svg";
function Services() {
  return (
    <div class="containerValores" id="valores">
      <div class="services">
        <div style={{ marginTop: "20px" }}>
          <h2 class="service-title color">Los valores</h2>
          <h2 class="service-title">que impartimos en </h2>
          <h2 class="service-title color">las terapias</h2>
        </div>
        <div class="center">
          <div class="circle">
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
          <div class="circle">
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
          <div class="circle">
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
          <div class="circle">
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
          <div class="circle">
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
