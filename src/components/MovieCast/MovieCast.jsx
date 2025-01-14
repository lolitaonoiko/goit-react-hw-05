import { useEffect, useState } from "react";
import { fetchCastById } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const [casts, setCasts] = useState(null);
  const { movieId } = useParams();

  const IMG_NAME_PART = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const castById = async () => {
      const data = await fetchCastById(movieId);
      setCasts(data.cast);
      console.log(data);
    };
    castById();
  }, [movieId]);
  if (!casts) {
    return <p>Please wait..</p>;
  }
  if (casts.length === 0) {
    return <p>Sorry, we do not have such info!</p>;
  }

  return (
    <ul>
      {casts.map((cast) => (
        <li key={cast.id}>
          <div>
            <img src={`${IMG_NAME_PART}${cast.profile_path}`} />
            <b>{cast.name}</b>
            <p>{cast.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
