import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Movies from "./components/Movies/Movies";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";
import AddFavorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const webAPI = "https://api.themoviedb.org/";
  const key = "b81c20b4ad589c35fcc33ec48b338339";
  const language = "en-US";
  const [page, setPage] = useState(1);
  const [otherValueAPI, setOtherValueAPI] = useState("3/movie/now_playing?");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async () => {
    setIsLoading(true);
    const url =
      webAPI +
      otherValueAPI +
      `api_key=${key}` +
      `&page=${page}` +
      `&language=${language}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
      setIsLoading(false);
    } else {
      errorMSG(true);
      setIsLoading(false);
    }
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
  };

  const errorMSG = () => {
    setErrorMsg(true);
  };

  const loadMoreMovies = () => {
    setIsLoading(true);
    setPage(page + 1);
  };

  const changePopularAPI = (event) => {
    setOtherValueAPI(event.target.value);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    getMovieRequest(otherValueAPI, page, isLoading, errorMsg);
    setIsLoading(false);
  }, [errorMsg, isLoading, otherValueAPI, page]);

  return (
    <div>
      <NavBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
      ></NavBar>
      <Banner selectFeatured={movies}></Banner>
      <Movies
        movies={movies}
        changePopularAPI={changePopularAPI}
        loadMoreMovies={loadMoreMovies}
        isLoading={isLoading}
        errorMsg={errorMsg}
        handleFavouritesClick={addFavouriteMovie}
      ></Movies>
      <AddFavorites
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
      ></AddFavorites>
      <Category></Category>
      <Footer></Footer>
    </div>
  );
}

export default App;
