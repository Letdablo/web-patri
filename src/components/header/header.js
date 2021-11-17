import "./style.scss";
import { ReactComponent as Loto } from "../../img/loto.svg";
function Header() {
  return (
    <div class="wrapper">
      <nav>
        <div class="content">
          <div class="logo">
            <a href="#">Tu Raíz </a>

            <a href="#" class="alter">
              Psicología
            </a>
            <div class="logoLoto">
              <Loto style={{ height: "140px", width: "140px" }}></Loto>
            </div>
          </div>
          <div class="linkContainer">
            <ul class="links">
              <li>
                <a
                  title="Home"
                  href="#home"
                  class="nav-link cool-link selected"
                >
                  Home
                </a>
              </li>
              <li>
                <a title="Valores" href="#valores" class="nav-link cool-link">
                  Valores
                </a>
              </li>
              <li>
                <a
                  title="Servicios"
                  href="#servicios"
                  class="nav-link cool-link"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a title="Contacta" href="#contacta" class="nav-link cool-link">
                  Contacta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
