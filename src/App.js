import { Fragment } from "react";
import About from "./components/about/about";
import AboutHome from "./components/about/aboutHome";
import AboutNutricion from "./components/about/aboutNutricion";
import AboutTalleres from "./components/about/aboutTalleres";
import AboutTienda from "./components/about/aboutTienda";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Services from "./components/services/services";
import FeedInstagram from "./components/feed/feedInstagram";

function App() {
  if (window.location.href.includes("success"))
    return (
      <Fragment>
        <Header></Header>
        <h1 class="service-title" style={{ margin: 50, marginTop: 100 }}>
          Pago realizado con exito :)
        </h1>
        ;
      </Fragment>
    );
  if (window.location.href.includes("cancel"))
    return (
      <Fragment>
        <Header></Header>
        <h1 class="service-title" style={{ margin: 50, marginTop: 100 }}>
          El pago no se ha podido efectuar
        </h1>
        ;
      </Fragment>
    );
  if (window.location.href.includes("/psicologia"))
    return (
      <Fragment>
        <Header></Header>
        <About></About>;
      </Fragment>
    );
  if (window.location.href.includes("/talleres"))
    return (
      <Fragment>
        <Header></Header>
        <AboutTalleres></AboutTalleres>;
      </Fragment>
    );
  if (window.location.href.includes("/nutricion"))
    return (
      <Fragment>
        <Header></Header>
        <AboutNutricion></AboutNutricion> ;
      </Fragment>
    );

  if (window.location.href.includes("/tienda"))
    return (
      <Fragment>
        <Header></Header>
        <AboutTienda></AboutTienda> ;
      </Fragment>
    );
  return (
    <Fragment>
      {/*  <div
        style={{
          marginTop: "-10%",
        }}
        class="backgroundImg"
      ></div>
      <div
        id="home"
        style={{
          marginRight: "10%",
          marginLeft: "10%",
          marginTop: "-30%",
          marginBottom: "30%",
        }}
      >
        <h1 className="home-name" style={{}}>
          Bienvenido a Tu Raíz
        </h1>
        <div className="home-name-italic">
          <span>
            {" "}
            "No puedes cambiar el viento, pero puedes ajustar las velas para
            alcanzar tu destino"
          </span>
        </div>
      </div> */}

      <Header></Header>

      <Home></Home>
      <Services></Services>
      <AboutHome></AboutHome>
      <FeedInstagram></FeedInstagram>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
