import './App.scss';
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import TopRated from "./page/TopRated";
import MovieDetails from "./companents/MovieDetails";
import Popular from "./page/Popular";
import ActorDetails from "./page/ActorDetails";
import ActorMovie from "./companents/ActorMovie";
import Search from "./page/Search";

function App() {
  return (
    <div id="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/top_rated"} element={ <TopRated/> }/>
            <Route path={"/movie/movie_details/:movieId"} element={ <MovieDetails/> }/>
            <Route path={"/person/person_details/:personId"} element={ <ActorDetails/> }/>
            <Route path={"/person/person_details/:personId"} element={ <ActorMovie/> }/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
