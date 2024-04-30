import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav
            class="navbar"
          >
            <a
              aria-current="page"
              class="nav-link active"
              href="/"
            >
              Home
            </a>
            <a
              class="nav-link"
              href="/directors"
            >
              Directors
            </a>
            <a
              class="nav-link"
              href="/actors"
            >
              Actors
            </a>
          </nav>
    );
};

export default NavBar;
