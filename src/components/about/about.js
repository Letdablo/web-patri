import "./style.scss";
import { ReactComponent as Family } from "../../img/family.svg";
import { ReactComponent as Juvenil } from "../../img/juvenil.svg";
import { ReactComponent as Preja } from "../../img/pareja.svg";
import { ReactComponent as Infantil } from "../../img/infantil.svg";
import { ReactComponent as Adultos } from "../../img/adultos.svg";

import { loadStripe } from "@stripe/stripe-js";

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

function About() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(document.getElementsByClassName("card fadeup"));

    for (let section of sections) {
      observer.observe(section);
    }
  });

  const handlerClick = async (type, multi) => {
    let price =
      type === "bono"
        ? multi
          ? "price_1K9UPnJViAryizK2qjGzUBMB"
          : "price_1KZySyJViAryizK2JJmgubNS"
        : multi
        ? "price_1K9URCJViAryizK2rlKSdCHk"
        : "price_1KZyS7JViAryizK2wGYCt8aK";
    if (type === "supervision") price = "price_1KlVGTJViAryizK2BJwBRvLa";
    const stripe = await loadStripe(
      "pk_live_51K9SLSJViAryizK2JDdKmrhcERn1kfwZ7IoyUJmhktmq7FMuDzBXqjSqtzK6bFStQM33QNT96LxL0UuGtAjQRGA200m4kVctR2"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price,
          quantity: 1,
        },
      ],

      mode: "payment",
      successUrl: "https://turaizpsicologia.com/success",
      cancelUrl: "https://turaizpsicologia.com/cancel",
    });
  };

  return (
    <div class="containerAbout" id="servicios">
      <div class="about">
        <div class="inner">
          <div class="inner__headings">
            <h2 class="inner__head">
              Las terapias pueden ser presenciales u{" "}
              <span class="inner__clr">online.</span>
            </h2>
          </div>
          <div class="inner__content">
            <p class="inner__text">
              Las terapias presenciales se imparten en distintos puntos de
              Madrid. Si quieres más información te animamos a contactar con
              nosotras.
            </p>
          </div>
        </div>
        <div class="cards-grid">
          <div class="card fadeup" idf="infantil">
            <Infantil style={{ width: "100%", height: "40%" }}></Infantil>
            <div class="card__body">
              <h4 class="card__head">Terapia Infantil</h4>
              <p class="card__content">
                Basamos nuestra terapia en juegos más dinámicos con los más
                peques. Además, buscamos el apoyo familiar para llevarla a cabo.
              </p>
              <br></br>
              <div class="gridButtons">
                <div class="box-3">
                  <div class="btn btn-three" onClick={handlerClick}>
                    <span class="text-btn">Una sesión</span>
                  </div>
                </div>
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("bono")}
                  >
                    <span class="text-btn">Bono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="adolescente">
            <Juvenil style={{ width: "100%", height: "40%" }}></Juvenil>
            <div class="card__body">
              <h4 class="card__head">Terapia Adolescentes</h4>
              <p class="card__content">
                Esta etapa es complicada y pueden aparecer hechos que se escapen
                de tus manos. Te ayudo a ponerles nombre, a buscar objetivos y a
                cumplir metas.
              </p>
              <br></br>
              <div class="gridButtons">
                <div class="box-3">
                  <div class="btn btn-three" onClick={handlerClick}>
                    <span class="text-btn">Una sesión</span>
                  </div>
                </div>
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("bono")}
                  >
                    <span class="text-btn">Bono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="adultos">
            <Adultos style={{ width: "100%", height: "40%" }}></Adultos>
            <div class="card__body">
              <h4 class="card__head">Terapia Adultos</h4>
              <p class="card__content">
                Las sesiones las enfoco dependiendo de la problemática, buscando
                tu bienestar, ayudándote a aceptarlas y superarlas.
              </p>
              <br></br>
              <div class="gridButtons">
                <div class="box-3">
                  <div class="btn btn-three" onClick={handlerClick}>
                    <span class="text-btn">Una sesión</span>
                  </div>
                </div>
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("bono")}
                  >
                    <span class="text-btn">Bono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="familiar">
            <Family style={{ width: "100%", height: "40%" }}></Family>
            <div class="card__body">
              <h4 class="card__head">Terapia Familiar</h4>
              <p class="card__content">
                Cuando nace un problema en casa, es recomendable abordarlo
                cuanto antes. Te ayudo a resolver los conflictos que puedan
                surgir y reducir el malestar que genera.
              </p>
              <div class="gridButtons">
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("single", true)}
                  >
                    <span class="text-btn">Una sesión</span>
                  </div>
                </div>
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("bono", true)}
                  >
                    <span class="text-btn">Bono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="pareja">
            <Preja style={{ width: "100%", height: "40%" }}></Preja>
            <div class="card__body">
              <h4 class="card__head">Terapia Pareja</h4>
              <p class="card__content">
                Los conflictos en la pareja pueden surgir en cualquier momento
                de la relación. Para ello, realizo las sesiones buscando una
                buena comunicación y aportando un clima agradable y cómodo para
                ello.
              </p>
              <div class="gridButtons">
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("single", true)}
                  >
                    <span class="text-btn">Una sesión</span>
                  </div>
                </div>
                <div class="box-3">
                  <div
                    class="btn btn-three"
                    onClick={() => handlerClick("bono", true)}
                  >
                    <span class="text-btn">Bono</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
