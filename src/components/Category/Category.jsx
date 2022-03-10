import React from "react";
import "./Category.styles.css";

export default function Category(props) {
  return (
    <section className="category" id="category">
      <h2 className="section-heading">Category</h2>

      <div className="category-grid">
        <div className="category-card">
          <img
            src={require("../../assets/images/action.jpg")}
            alt=""
            className="card-img"
          />
          <div className="name">Action</div>
          <div className="total">100</div>
        </div>
      </div>
    </section>
  );
}
