import { Formik, Field, Form } from "formik";

const SearchForm = ({ queryHandle, query }) => {
  const handleSubmit = (values) => {
    queryHandle(values.query);
  };

  const initialValues = {
    query,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
