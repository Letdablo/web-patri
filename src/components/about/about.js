import "./style.scss";
import { ReactComponent as Family } from "../../img/family.svg";
import { ReactComponent as Juvenil } from "../../img/juvenil.svg";
import { ReactComponent as Preja } from "../../img/pareja.svg";
import { ReactComponent as Infantil } from "../../img/infantil.svg";
import { ReactComponent as Adultos } from "../../img/adultos.svg";
function About() {
  return (
    <div class="containerAbout" id="servicios">
      <div class="about">
        <div class="inner">
          <div class="inner__headings">
            <h2 class="inner__head">
              Las terapias podran ser presenciales u{" "}
              <span class="inner__clr">online.</span>
            </h2>
          </div>
          <div class="inner__content">
            <p class="inner__text">
              Dentro de la modalidad presencial, las terapias podrán ser
              impartidas en distintos puntos de Madrid, si quieres más
              información os animamos a contactar con nosotras.
            </p>
          </div>
        </div>
        <div class="cards-grid">
          <div class="card">
            <Infantil style={{ width: "100%", height: "40%" }}></Infantil>
            <div class="card__body">
              <h4 class="card__head">Terapia Infantil</h4>
              <p class="card__content">
                Baso mi terapia en juegos más dinámicos con los más peques.
                Además, busco el apoyo familiar para llevarla a cabo.
              </p>
            </div>
          </div>
          <div class="card">
            <Family style={{ width: "100%", height: "40%" }}></Family>
            <div class="card__body">
              <h4 class="card__head">Terapia Familiar</h4>
              <p class="card__content">
                Cuando nace un problema en casa, es recomendable abordarlo
                cuanto antes. Te ayudo a resolver los conflictos que puedan
                surgir y reducir el malestar que genera.
              </p>
            </div>
          </div>
          <div class="card">
            <Preja style={{ width: "100%", height: "40%" }}></Preja>
            <div class="card__body">
              <h4 class="card__head">Terapia Pareja</h4>
              <p class="card__content">
                Los conflictos en la pareja pueden surgir en cualquier momento
                de la relación. Para ello, realizo las sesiones buscando una
                buena comunicación y aportando un clima agradable y cómodo para
                ello.
              </p>
            </div>
          </div>
          <div class="card">
            <Juvenil style={{ width: "100%", height: "40%" }}></Juvenil>
            <div class="card__body">
              <h4 class="card__head">Terapia Adolescentes</h4>
              <p class="card__content">
                Esta etapa es complicada y pueden aparecer hechos que se escapen
                de tus manos. Te ayudo a ponerles nombre, a buscar objetivos y a
                cumplir metas.
              </p>
            </div>
          </div>
          <div class="card">
            <Adultos style={{ width: "100%", height: "40%" }}></Adultos>
            <div class="card__body">
              <h4 class="card__head">Terapia Adultos</h4>
              <p class="card__content">
                Las sesiones las enfoco dependiendo de la problemática, buscando
                tu bienestar, ayudándote a aceptarlas y superarlas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
