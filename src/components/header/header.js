import "./style.scss";
import { ReactComponent as Loto } from "../../img/logo.svg";
function Header() {
  return (
    <div class="wrapper">
      <nav class="navbar">
        <div class="navbar-container ">
          <div class="logo">
            <div class="logoLoto">
              <Loto style={{ height: "310px", width: "400px" }}></Loto>
            </div>
          </div>
          <input type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <ul class="menu-items">
            <li>
              <a
                title="home"
                href="https://turaizpsicologia.com#home"
                class="nav-link cool-link"
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
                title="Valores"
                href="https://turaizpsicologia.com/tienda"
                class="nav-link cool-link"
              >
                Tienda
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
      </nav>
    </div>
  );
}

export default Header;
