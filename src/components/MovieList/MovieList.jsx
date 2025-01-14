import { Link, useLocation } from "react-router-dom";

const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id.toString()}`} state={location}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
