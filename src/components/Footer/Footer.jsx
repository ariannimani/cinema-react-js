import React from "react";
import "./Footer.styles.css";

function Footer(props) {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">CinemaReact</h2>
          <p className="slogan">Movie database ReactJS Template.</p>

          <div className="social-link">
            <a href="./">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="./">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="./">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="./">
              <ion-icon name="logo-tiktok"></ion-icon>
            </a>
            <a href="./">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <h4 className="link-heading">CinemaReact</h4>

            <li className="link-item">
              <button onClick={props.homePage}>Home</button>
            </li>
            <li className="link-item">
              <button onClick={props.contactPage}>Contacts</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="copyright">
          <p>&copy; copyright 2022 Arian Nimani</p>
        </div>

        <div className="wrapper">
          <a href="./">Privacy policy</a>
          <a href="./">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
