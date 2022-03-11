import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import CategoryMovie from "./components/Category/Category";

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
  const [genres, setGenres] = useState([]);

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
    const urlGen = `https://api.themoviedb.org/3/genre/movie/list?api_key=b81c20b4ad589c35fcc33ec48b338339&language=en-US`;
    const responseGen = await fetch(urlGen);
    const responseGenJson = await responseGen.json();
    if (responseGenJson.genres) {
      setGenres(responseGenJson.genres);
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

  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };
  const contactPage = () => {
    navigate("/contact");
  };
  const categoryPage = () => {
    navigate("/categorymovie");
  };

  return (
    <div>
      <NavBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleChange={handleChange}
      ></NavBar>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              movies={movies}
              changePopularAPI={changePopularAPI}
              loadMoreMovies={loadMoreMovies}
              isLoading={isLoading}
              errorMsg={errorMsg}
              addFavouriteMovie={addFavouriteMovie}
              favourites={favourites}
              removeFavouriteMovie={removeFavouriteMovie}
              searchValue={searchValue}
              genres={genres}
              categoryPage={categoryPage}
            ></Home>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Home
              movies={movies}
              changePopularAPI={changePopularAPI}
              loadMoreMovies={loadMoreMovies}
              isLoading={isLoading}
              errorMsg={errorMsg}
              addFavouriteMovie={addFavouriteMovie}
              favourites={favourites}
              removeFavouriteMovie={removeFavouriteMovie}
              genres={genres}
              categoryPage={categoryPage}
            ></Home>
          }
        />
        <Route
          exact
          path="/categorymovie"
          element={<CategoryMovie></CategoryMovie>}
        />
        <Route exact path="/contact" element={<Contact></Contact>} />
      </Routes>
      <Footer homePage={homePage} contactPage={contactPage}></Footer>
    </div>
  );
}

export default App;
