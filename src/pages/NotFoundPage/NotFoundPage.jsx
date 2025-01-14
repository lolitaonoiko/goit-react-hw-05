import { Link } from "react-router-dom";

import style from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={style.err}>
      <h2 className={style.title}>Oops... This page does not exist.. </h2>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
