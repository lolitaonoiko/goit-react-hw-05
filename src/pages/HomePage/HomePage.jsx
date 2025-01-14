import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";

import style from "./HomePage.module.css";

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const movies = async () => {
      const data = await fetchMovies();
      setData(data.results);
    };
    movies();
  }, []);

  if (!data) {
    return <p className={style.load}>Loading...</p>;
  }

  return (
    <div className={style.box}>
      <h2 className={style.title}>Trending today</h2>

      <MovieList data={data} />
    </div>
  );
};

export default HomePage;
