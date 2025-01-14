import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Oops... Something went wrong.. 😬</h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
