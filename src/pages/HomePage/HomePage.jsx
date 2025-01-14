import { useEffect, useState } from "react";
import { fetchMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Trending today</h1>

      <MovieList data={data} />
    </div>
  );
};

export default HomePage;
