import React from "react";
import "./NavBar.styles.css";
import "./main.js";

function NavBar(props) {
  return (
    <header className="">
      <div className="navbar">
        {/*menu button for small screen  */}

        <button className="navbar-menu-btn">
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <a href="./" className="navbar-brand">
          <h1 className="logo">MovieReact</h1>
        </a>

        {/*navbar navigation*/}

        <nav className="">
          <ul className="navbar-nav">
            <li>
              <a href="./" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#category" className="navbar-link">
                Category
              </a>
            </li>
            <li>
              <a href="#favorites" className="navbar-link">
                Favorites
              </a>
            </li>
          </ul>
        </nav>

        {/*search and sign-in*/}

        <div className="navbar-actions">
          <form className="navbar-form">
            <input
              type="text"
              name="search"
              placeholder="I'm looking for..."
              className="navbar-form-search"
              value={props.value}
              onChange={props.handleChange}
            />

            <button className="navbar-form-btn">
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="navbar-form-close">
              <ion-icon name="close-circle-outline"></ion-icon>
            </button>
          </form>

          {/*search button for small screen*/}

          <button className="navbar-search-btn">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
