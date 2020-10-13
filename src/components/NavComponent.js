import React, { Component } from "react";
import { bubble as Menu } from "react-burger-menu";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "../img/logo.png";
import "./../assets/menu.css";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, user: this.props.user };
  }

  handleStateChange = (state) => {
    this.setState({ menuOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    const link = [
      { id: "1", txt: "Home", route: "/" },
      { id: "2", txt: "Prime Video", route: "/Prime" },
      { id: "3", txt: "Amazon Music", route: "/Amazon" },
      { id: "4", txt: "Echo y Alexa", route: "/Echo" },
      { id: "5", txt: "Fire Tablets", route: "/Fire" },
      { id: "6", txt: "Fire TV", route: "/Fire" },
      { id: "7", txt: "E-readers Kindle y Libros", route: "/E-readers" },
      { id: "8", txt: "Libros y Audible Originals", route: "/Libros" },
      { id: "9", txt: "Appstore para Android", route: "/Appstore" },
      { id: "10", txt: "Ropa, Zapatos y Joyería", route: "/Ropa" },
      { id: "11", txt: "Amazon Fresh", route: "/Amazon-Fresh" },
    ];
    return (
      <div id="outer-container">
        <Menu
          styles={styles}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <div className="d-block p-2">
            <h1>Hola, {this.state.user ? this.state.user : "Identificate"}</h1>
          </div>
          <BrowserRouter>
            {link.map((link, idx) => (
              <Link
                key={idx}
                to={link.route}
                className="btn btn-outline-dark text-white text-left btn-block"
                onClick={this.closeMenu}
              >
                {link.txt}
              </Link>
            ))}
          </BrowserRouter>
        </Menu>
        <nav
          class="navbar navbar-expand-lg navbar-dark bg-dark "
          id="page-wrap"
        >
          <a className="navbar-brand ml-5" href="#">
            <img src={logo} style={{ height: "2em" }} />
          </a>
          <div className="ml-auto">
            <svg
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
              class="bi bi-cart3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="text-light"
            >
              <path
                fill-rule="evenodd"
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
              />
            </svg>
          </div>
        </nav>
      </div>
    );
  }
}
var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    top: 15,
    left: 18,
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: 0,
    left: 0,
  },
  bmMenu: {
    top: 0,
    left: 0,
  },
  bmMorphShape: {
    fill: "#343a40",
  },
  bmItemList: {
    color: "#b8b7ad",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    // background: "rgba(0, 0, 0, 0.3)",
  },
};
export default NavComponent;
