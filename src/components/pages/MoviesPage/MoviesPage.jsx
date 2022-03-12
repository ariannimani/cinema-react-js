import React from "react";
import SubmitBtn from "../../buttons/SubmitBtn/SubmitBtn";
import MovieCard from "../../cards/MovieCard/MovieCard";
import "./MoviesPage.styles.css";

export default function MoviesPage(props) {
  return (
    <>
      {/*movies grid*/}
      <div className="movies-grid">
        <MovieCard
          movies={props.movies}
          errorMsg={props.errorMsg}
          handleFavouritesClick={props.handleFavouritesClick}
          searchValue={props.searchValue}
          genres={props.genres}
          selectedGenre={props.selectedGenre}
        ></MovieCard>
      </div>
      <SubmitBtn
        btnClass="load-more"
        loadMoreMovies={props.loadMoreMovies}
        isLoading={props.isLoading}
        submiting="Loading..."
        submit="Load More"
      ></SubmitBtn>
    </>
  );
}
