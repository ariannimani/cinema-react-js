import React from "react";
import "./Banner.styles.css";

function Banner(props) {
  return (
    <section className="banner">
      {props.selectFeatured.slice(0, 1).map((value) => (
        <div className="banner-card" key={value.id}>
          <img
            src={"https://image.tmdb.org/t/p/original" + value.backdrop_path}
            className="banner-img"
            alt=""
          />

          <div className="card-content">
            <div className="card-info">
              <div className="genre">
                <ion-icon name="film"></ion-icon>
                <span>Action</span>
              </div>

              <div className="year">
                <ion-icon name="calendar"></ion-icon>
                <span> {new Date().getFullYear(value.release_date)}</span>
              </div>
            </div>

            <h2 className="card-title">{value.title}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}
export default Banner;
