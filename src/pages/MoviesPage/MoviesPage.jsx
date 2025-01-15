import { lazy, useEffect, useState } from "react";
import { searchMovieByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";

const MovieList = lazy(() => import("../../components/MovieList/MovieList"));
const SearchForm = lazy(() => import("../../components/SearchForm/SearchForm"));

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const queryInpt = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!queryInpt) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const data = await searchMovieByQuery(queryInpt);
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [queryInpt]);

  const queryHandle = (query) => {
    if (!query) {
      return setSearchParams({});
    }
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm queryHandle={queryHandle} query={queryInpt} />
      <MovieList data={movies} />
    </>
  );
};

export default MoviesPage;
