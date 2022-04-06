import "./style.scss";
import { ReactComponent as Loto } from "../../img/logo.svg";
function Header() {
  return (
    <div class="wrapper">
      <nav>
        <div class="content">
          <div class="logo">
            <div class="logoLoto">
              <Loto style={{ height: "310px", width: "400px" }}></Loto>
            </div>
          </div>
          <div class="linkContainer">
            <ul class="links">
              <li>
                <a
                  title="Home"
                  href="https://turaizpsicologia.com#main"
                  class="nav-link cool-link selected"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  title="Valores"
                  href="https://turaizpsicologia.com#valores"
                  class="nav-link cool-link"
                >
                  Valores
                </a>
              </li>
              <li>
                <a
                  title="Servicios"
                  href="https://turaizpsicologia.com#servicios"
                  class="nav-link cool-link"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  title="Contacta"
                  href="https://turaizpsicologia.com#contacta"
                  class="nav-link cool-link"
                >
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
