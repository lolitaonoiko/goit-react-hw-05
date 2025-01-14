import { Link, useLocation } from "react-router-dom";

import style from "./MovieList.module.css";

const MovieList = ({ data }) => {
  const location = useLocation();

  if (!data) {
    return <p className={style.load}>No movies found yet..</p>;
  }
  return (
    <div className={style.boxList}>
      <ul className={style.list}>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id.toString()}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
