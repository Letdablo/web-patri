import "./style.scss";

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

function AboutTienda() {
  window.addEventListener("DOMContentLoaded", (event) => {
    const sections = Array.from(
      document.getElementsByClassName("card2 fadeup")
    );

    for (let section of sections) {
      observer.observe(section);
    }
  });

  const handlerClick = async () => {
    let price = "price_1L8i0BJViAryizK2mwoXYkwp";

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
              El <span class="inner__clr">corazón</span> funciona cuando la{" "}
              <span class="inner__clr">mente</span> razona
            </h2>
          </div>
          <div class="inner__content">
            <p class="inner__text">
              Tienda online, donde podrás comprar artículos que promocionamos en
              las redes.
            </p>
          </div>

          <div class="cards-grid-tienda">
            <div class="card-tienda " id="Supervisiones">
              <div class="fotoBolsa"></div>
              <div class="card__body">
                <div
                  class="btn btn-three"
                  style={{ width: "100%", marginTop: 20 }}
                  onClick={() => handlerClick()}
                >
                  <span class="text-btn"> Comprar</span>
                </div>
              </div>
            </div>
            <div class="card-descripcion-tienda " id="Supervisiones">
              <br></br>
              <span class="inner__clr">Descripcion</span>
              <br></br>
              <p class="inner__text">
                {" "}
                Bolsa en material 100% algodón de 180g/m2 con acabado en color
                natural con impresión digital de muy buena calidad. Medidas 38 x
                42 cm y las asas 70cm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTienda;
