import "./style.scss";

import { ReactComponent as Nutricion } from "../../img/nutricion.svg";

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

function AboutNutricion() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(
      document.getElementsByClassName("card2 fadeup")
    );

    for (let section of sections) {
      observer.observe(section);
    }
  });

  const handlerClick = async () => {
    let price = "price_1KopstJViAryizK2TENXlzFG";

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
        <div class="inner2">
          <div class="inner__headings">
            <h2 class="inner__head">
              Las sesiones de nutrición pueden ser presenciales u{" "}
              <span class="inner__clr">online.</span>
            </h2>
          </div>
          <div class="inner__content">
            <p class="inner__text">
              Mejora tu salud y figura a través de una alimentación equilibrada,
              sin pasar hambre, sin efecto rebote, sin necesidad de usar
              suplementos y disfrutando cada una de tus comidas.
            </p>
          </div>

          <div class="cards-grid">
            <div class="card2 fadeup" id="Supervisiones">
              <Nutricion style={{ width: "100%", height: "40%" }}></Nutricion>
              <div class="card__body">
                <h4 class="card__head">
                  ¿Qué incluye nuestro PACK NUTRICIÓN + PSICOLOGÍA?
                </h4>
                <p class="card__content">
                  Además, para una mejor implantación de hábitos y duración de
                  los mismos, contamos con SESIONES DE PSICOLOGÍA. Estarán
                  enfocadas en relación con la comida, TCA (si lo hubiese),
                  gestión de emociones, frustración e incertidumbre, toma de
                  decisiones…
                  <br></br>
                  <br></br>
                  <p class="card__content">
                    Nuestras sesiones se realizan bajo un enfoque integrador,
                    adaptándonos a las necesidades de cada caso. Estarán
                    enfocadas en la relación con la comida, trastorno de la
                    conducta alimentaria (si lo hubiese), gestión de emociones,
                    frustración e incertidumbre, toma de decisiones. Así,
                    conseguiremos una mejor implantación de hábitos saludables y
                    duración en el tiempo, de los mismos.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>
                        Entrevista personal inicial y estudio nutricional.
                      </li>

                      <li>Valoración de pruebas médicas.</li>
                      <li>Planteamiento de objetivos.</li>
                      <li> Dieta personalizada y cambios.</li>
                      <li>Guía saludable de alimentación.</li>
                      <li> Resolución de dudas.</li>
                      <li>2º Consulta de seguimiento.</li>
                      <li> Consultas de seguimiento extra.</li>
                      <li> Guía de recetas saludables.</li>
                    </ul>
                  </p>
                </p>
                <br></br>
                <div
                  class="btn btn-three"
                  style={{ width: "100%", marginTop: 20 }}
                  onClick={() => handlerClick()}
                >
                  <span class="text-btn"> Reservar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutNutricion;
