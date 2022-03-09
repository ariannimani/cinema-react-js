import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movies.styles.css";

export default function Movies(props) {
  return (
    <section className="movies">
      {/*filter bar*/}
      <div className="filter-bar">
        <div className="filter-dropdowns">
          <select name="genre" className="genre">
            <option value="all genres">All genres</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animal">Animal</option>
            <option value="animation">Animation</option>
            <option value="biography">Biography</option>
          </select>
        </div>

        <div className="filter-radios">
          <input
            type="radio"
            name="grade"
            id="featured"
            onChange={props.changePopularAPI}
            value="3/movie/now_playing?"
          />
          <label htmlFor="featured">Now Playing</label>

          <input
            type="radio"
            name="grade"
            id="popular"
            onChange={props.changePopularAPI}
            value="3/movie/popular?"
          />
          <label htmlFor="popular">Popular</label>

          <input
            type="radio"
            name="grade"
            id="newest"
            onChange={props.changePopularAPI}
            value="3/movie/top_rated?"
          />
          <label htmlFor="newest">Top Rated</label>

          <div className="checked-radio-bg"></div>
        </div>
      </div>

      {/*movies grid*/}
      <div className="movies-grid">
        <MovieCard
          movies={props.movies}
          errorMsg={props.errorMsg}
          handleFavouritesClick={props.handleFavouritesClick}
        ></MovieCard>
      </div>
      {/*load more button*/}
      <button className="load-more" onClick={props.loadMoreMovies}>
        {props.isLoading ? "Loading..." : "Load More"}
      </button>
    </section>
  );
}
