import React, { useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./CategoryMovie.styles.css";

export default function CategoryMovie(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1>CATEGORY</h1>;
}
