import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [itemInfo, setItemInfo] = useState(null);

  const IMG_NAME_PART = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const itemById = async () => {
      const data = await fetchMovieById(movieId);
      setItemInfo(data);
      console.log(data);
    };
    itemById();
  }, [movieId]);

  if (!itemInfo) {
    return <p>Please wait...</p>;
  }

  return (
    <div>
      <Link to={location.state ?? "/movies"}>Go back</Link>
      <div>
        <img src={`${IMG_NAME_PART}${itemInfo.poster_path}`} alt="Film image" />
      </div>

      <div>
        <h2>{itemInfo.title}</h2>
        <p>{`User score: ${itemInfo.vote_average}`}</p>

        <h3>Overview</h3>
        <p>{itemInfo.overview}</p>

        <h4>Genres</h4>
        <p>{itemInfo.genres.map((item) => item.name).join(" ")}</p>
      </div>

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
