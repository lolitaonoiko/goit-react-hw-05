import { Formik, Field, Form } from "formik";

import style from "./SearchForm.module.css";

const SearchForm = ({ queryHandle, query }) => {
  const handleSubmit = (values) => {
    queryHandle(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={style.formik}>
        <Field type="text" name="query" className={style.inpt} />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
