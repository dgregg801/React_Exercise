import { HomePage, FilmsPage, SingleFilmPage } from "./pages";
import "./App.css";
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films Page</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<FilmsPage />} />
        <Route path="/films/film/:id" element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
