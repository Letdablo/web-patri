import "./style.scss";
import patri from "../../img/patri_v2.png";

function Home() {
  return (
    <div class="container" id="home">
      <div class="home">
        <div class="side">
          <div>
            <h2 class="home-title" data-wow-delay="0.4s">
              Soy Patricia,
            </h2>
            <h4 class="home-secondary-title" data-wow-delay="0.5s">
              En mi día a día disfruto ayudando a las personas que vienen a
              consulta a mejorar su bienestar, a superarse y a llegar a los
              objetivos que se plantean. Me encanta aprender de las personas y
              que ellas se lleven un “pedacito” de mí. Mi lema es poner amor y
              corazón en todo aquello en lo que hagamos; dejando huella en lo
              que está en tu vida y en tus manos.
            </h4>
          </div>
        </div>
        <div class="main">
          <img src={patri} alt="Mak" class="responsive" />
        </div>
      </div>
    </div>
  );
}

export default Home;
