import React, { useState } from "react";
import "./App.css";
import Start from "./components/Profile/Navbar"
import { moviesData } from "./components/MoviesData";
import MovieList from "./components/MovieList/MovieList";
import AddMovie from "./components/AddMovie/AddMovie";
import Filter from "./components/Filter/Filter";
import End from "./components/Profile/Footer";


function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleSearch, setTitleSearch] = useState("");
  const [rateSearch, setRateSearch] = useState(0);
  const handleAdd = (newMovie) => {
    if (
      newMovie.title!=="" &&
      newMovie.description!=="" &&
      newMovie.date!=="" &&
      newMovie.posterUrl!==""&&
      newMovie.rate!==0
    ) {
      setMovies([...movies, newMovie]);
    }else{
      alert('Please fill all fields!')
    }
   
  };
  
  return (
    <div className="App">
      <Start/>
      <br/>
      <div style={{ display: "flex", flexDirection:"column", alignItems: "center" }}>
        <Filter 
          rate={rateSearch}
          setRateSearch={setRateSearch}
          setTitleSearch={setTitleSearch}
        />
        <br/>
        <AddMovie handleAdd={handleAdd} />
      </div>
      <MovieList
        rateSearch={rateSearch}
        titleSearch={titleSearch}
        movies={movies}
      />
      <End/>
    </div>
  );
}

export default App;
