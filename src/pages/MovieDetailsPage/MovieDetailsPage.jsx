import { Suspense, useEffect, useRef, useState } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const [itemInfo, setItemInfo] = useState(null);

  const IMG_NAME_PART = "https://image.tmdb.org/t/p/w500/";

  const goBackLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    const itemById = async () => {
      const data = await fetchMovieById(movieId);
      setItemInfo(data);
      console.log(data);
    };
    itemById();
  }, [movieId]);

  if (!itemInfo) {
    return <p className={style.load}>Please wait...</p>;
  }

  return (
    <div className={style.sectionBox}>
      <NavLink to={goBackLink.current} className={style.btnBack}>
        ⇦ Go back
      </NavLink>
      <div className={style.infoBox}>
        <img
          src={`${IMG_NAME_PART}${itemInfo.poster_path}`}
          alt="Film image"
          className={style.image}
        />

        <div>
          <h2>{itemInfo.title}</h2>
          <p>{`User score: ${itemInfo.vote_average}`}</p>

          <h3>Overview</h3>
          <p>{itemInfo.overview}</p>

          <h4>Genres</h4>
          <p>{itemInfo.genres.map((item) => item.name).join(" ")}</p>
        </div>
      </div>
      <div className={style.detLinks}>
        <NavLink to="cast" className={style.details}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={style.details}>
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<p className={style.load}>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
