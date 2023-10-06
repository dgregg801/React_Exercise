import { useEffect, useState } from "react";
import {
  filterFilmsByDirector,
  getFilmStats,
  getListOf,
} from "../helpers/film.helpers";
import { NavLink } from "react-router-dom";

function FilmsPage() {
  //Declare state
  const [movies, setMovies] = useState([]);
  const [clickedMovies, setClickedMovies] = useState({});
  const [searchDirector, setSearchDirector] = useState("");
  console.log(movies);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setMovies(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  //dependency array
  //list of things that useEffect checks to see if it should run again

  //const imageUrl =

  //Derived State
  const filmByDirector = filterFilmsByDirector(movies, searchDirector);
  const allDirectors = getListOf(movies, "director");
  const { avg_score, total, latest } = getFilmStats(movies);

  return (
    <>
      <h1>Studio Ghibli List</h1>

      <form>
        <div className="form-group">
          <label htmlFor="directorSelect">Pick a Director</label>
          <select
            name="directorSelect"
            id="directorSelect"
            value={searchDirector}
            onChange={(ev) => {
              setSearchDirector(ev.target.value);
            }}
          >
            <option value="">All</option>
            {allDirectors.map((director, index) => {
              return (
                <option key={index} value={director}>
                  {director}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>

      <ul className="moviesContainer">
        {filmByDirector.map((movie, index, array) => {
          return (
            <li className="MovieStuff" key={movie.id}>
              <NavLink to={`film/${movie.id}`}>
                <h2 className="italics">Title: {movie.title}</h2>
              </NavLink>
              <p>Rotten Tomatoes {movie.rt_score}%</p>
              <img src={movie.image} alt={movie.title} />
              <p className="italics">Directed by: {movie.director}</p>
              <p>Movie Description: {movie.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;
