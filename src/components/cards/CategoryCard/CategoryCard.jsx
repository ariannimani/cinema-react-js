import React from "react";
import "./CategoryCard.styles.css";

export default function CategoryCard(props) {
  return (
    <section className="category" id="category">
      <h2 className="section-heading">Category</h2>
      <div className="category-grid">
        {props.genres.map((genre, i) => (
          <div
            className="category-card"
            value={genre.id}
            onClick={props.categoryPage}
            key={genre.id}
          >
            <img
              src={require(`../../../assets/images/${genre.name.toLowerCase()}.jpg`)}
              alt=""
              className="card-img"
            />
            <div className="name">{genre.name}</div>
            <div className="total">100</div>
          </div>
        ))}
      </div>
    </section>
  );
}
