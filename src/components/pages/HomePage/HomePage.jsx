import React from "react";
import Banner from "../../cards/BannerCard/BannerCard";
import Movies from "../../pages/MoviesPage/MoviesPage";
import Category from "../../cards/CategoryCard/CategoryCard";
import AddFavorites from "../Favorites/Favorites";
import FilterBar from "../../Main/FilterBar/FilterBar";
import { useEffect } from "react";

export default function HomePage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner selectFeatured={props.movies} genres={props.genres}></Banner>
      <section className="movies">
        <FilterBar
          handleDropdownChange={props.handleDropdownChange}
          genres={props.genres}
          changePopularAPI={props.changePopularAPI}
        ></FilterBar>

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
      </section>
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
