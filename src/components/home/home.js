import "./style.scss";
import patri from "../../img/patri.png";
import katy from "../../img/kati.png";
import andrea from "../../img/andrea.png";
import React, { useState } from "react";
function Home() {
  const [width, setWidth] = useState(document.body.clientWidth);

  var onresize = function () {
    //your code here
    //this is just an example
    setWidth(document.body.clientWidth);
  };

  window.addEventListener("resize", onresize);

  function openModal(user) {
    if (user === "patri") {
      document.getElementById("overlay").classList.add("is-visible");
      document.getElementById("modalPatri").classList.add("is-visible");
      window.scrollTo(0, 0);
    } else if (user === "kati") {
      document.getElementById("overlay").classList.add("is-visible");
      document.getElementById("modalKati").classList.add("is-visible");
      window.scrollTo(0, 0);
    } else {
      document.getElementById("overlay").classList.add("is-visible");
      document.getElementById("modalAndrea").classList.add("is-visible");
      window.scrollTo(0, 0);
    }
  }

  function closeModal() {
    document.getElementById("overlay").classList.remove("is-visible");
    document.getElementById("modalKati").classList.remove("is-visible");
    document.getElementById("modalPatri").classList.remove("is-visible");
    document.getElementById("modalAndrea").classList.remove("is-visible");
  }

  return (
    <div class="container">
      <div class="overlay" id="overlay" onClick={closeModal}></div>
      <div class="modal" id="modalPatri">
        <div>
          <h2 class="home-title-modal" data-wow-delay="0.4s">
            Soy Patricia,
          </h2>
          <h4 class="home-secondary-title-modal" data-wow-delay="0.5s">
            En mi día a día disfruto ayudando a las personas que vienen a
            consulta a mejorar su bienestar, a superarse y a llegar a los
            objetivos que se plantean. Me encanta aprender de las personas y que
            ellas se lleven un “pedacito” de mí. Mi lema es poner amor y corazón
            en todo aquello en lo que hagamos; dejando huella en lo que está en
            tu vida y en tus manos.
          </h4>
        </div>
      </div>
      <div class="modal" id="modalKati">
        <div>
          <h2 class="home-title-modal" data-wow-delay="0.4s">
            Soy Katherine,
          </h2>
          <h4 class="home-secondary-title-modal" data-wow-delay="0.5s">
            Desde mi adolescencia he tenido curiosidad por saber "cómo funciona
            la mente humana, por este motivo, me decidí a estudiar Psicología.
            Tras ello, me especialicé en Terapia Sexual y de Pareja. Mi enfoque
            principal es cognitivo-conductual, pero sigo en contínua formación
            para poder ofrecer las mejores herramientas a cada persona.
          </h4>
        </div>
      </div>
      <div class="modal" id="modalAndrea">
        <div>
          <h2 class="home-title-modal" data-wow-delay="0.4s">
            Soy Andrea,
          </h2>
          <h4 class="home-secondary-title-modal" data-wow-delay="0.5s">
            Siempre me interesó poder llegar a comprender por qué las personas
            nos comportamos de distintas maneras, y eso me llevó a formarme como
            psicóloga clínica y sexóloga. Para mí es un placer poder acompañar a
            las personas en momentos de dificultad y mejora, potenciando al
            máximo sus capacidades.
          </h4>
        </div>
      </div>

      <div class="home home-fisrt ">
        <h2 class="home-title" data-wow-delay="0.4s">
          Quienes somos
        </h2>

        <div class="main center cursor user">
          <img
            src={patri}
            alt="Mak"
            class="responsive"
            onClick={() => openModal("patri")}
          />
          <span className="text-service">Patricia Expósito</span>
          <br></br>
          <span style={{ marginLeft: "10%" }}>
            {" "}
            Directora I Psicóloga sanitaria
          </span>
        </div>
        <div class="main center cursor user">
          <img
            src={katy}
            alt="Mak"
            class="responsive"
            onClick={() => openModal("kati")}
          />
          <br></br>
          <span className="text-service">Katherine López</span>
          <br></br>
          <span style={{ marginLeft: "10%" }}>Psicóloga sanitaria</span>
        </div>
        <div class="main center cursor user">
          <img
            src={andrea}
            alt="Mak"
            class="responsive"
            onClick={() => openModal("andrea")}
          />
          <br></br>
          <span className="text-service">Andrea Borque</span>
          <br></br>
          <span style={{ marginLeft: "10%" }}>Psicóloga sanitaria</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
