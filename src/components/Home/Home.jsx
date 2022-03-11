import React from "react";
import Banner from "../Banner/Banner";
import Movies from "../Movies/Movies";
import Category from "../Category/Category";
import AddFavorites from "../Favorites/Favorites";
import { useEffect } from "react";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(props.selectedGenre);
  return (
    <div>
      <Banner selectFeatured={props.movies} genres={props.genres}></Banner>
      <Movies
        movies={props.movies}
        changePopularAPI={props.changePopularAPI}
        loadMoreMovies={props.loadMoreMovies}
        isLoading={props.isLoading}
        errorMsg={props.errorMsg}
        handleFavouritesClick={props.addFavouriteMovie}
        searchValue={props.searchValue}
        genres={props.genres}
        handleDropdownChange={props.handleDropdownChange}
        selectedGenre={props.selectedGenre}
      ></Movies>
      <AddFavorites
        movies={props.favourites}
        handleFavouritesClick={props.removeFavouriteMovie}
      ></AddFavorites>
      <Category
        genres={props.genres}
        categoryPage={props.categoryPage}
        handleDropdownChange={props.handleDropdownChange}
      ></Category>
    </div>
  );
}
