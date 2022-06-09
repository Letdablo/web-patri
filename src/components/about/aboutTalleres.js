import "./style.scss";

import { ReactComponent as Supervision } from "../../img/supervision.svg";
import { ReactComponent as Talleres } from "../../img/talleres.svg";
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

function AboutTalleres() {
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
            <Supervision style={{ width: "100%", height: "40%" }}></Supervision>
            <div class="card__body">
              <h4 class="card__head">Supervisión</h4>
              <p class="card__content">
                Se trata de unos grupos de supervisión estáticos, de máximo
                cinco personas, en los cuales tendrás nuevas herramientas,
                enfoques e intentaremos darte luz en todo lo que podamos.
              </p>
              <br></br>
              <div
                class="btn btn-three"
                style={{ width: "100%", marginTop: 20 }}
                onClick={() => handlerClick("supervision", true)}
              >
                <span class="text-btn"> Reservar</span>
              </div>
            </div>
          </div>
          <div class="card fadeup" id="Supervisiones">
            <Talleres style={{ width: "100%", height: "40%" }}></Talleres>
            <div class="card__body">
              <h4 class="card__head">Talleres</h4>
              <p class="card__content">
                Se trata de unos grupos de supervisión estáticos, de máximo
                cinco personas, en los cuales tendrás nuevas herramientas,
                enfoques e intentaremos darte luz en todo lo que podamos.
              </p>
              <br></br>
              <div
                class="btn btn-three"
                style={{ width: "100%", marginTop: 20 }}
                onClick={() => handlerClick("supervision", true)}
              >
                <span class="text-btn"> Reservar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTalleres;
