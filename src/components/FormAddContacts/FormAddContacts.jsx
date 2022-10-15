import { Formik, ErrorMessage,  } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { Form, Field, Button } from './FormAddContacts.styled';
const initialValues = {
  name: '',
  phoneNumber: '',
};
const validationSchema = Yup.object({
  name: Yup.string().required(),
  phoneNumber: Yup.string().phone('UA', true).required(),
});

const handleSubmit = (values, actions) => {
  setTimeout(() => actions.setSubmitting(false), 800);
};

export const FormAddContacts = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <label>
              <span>Name</span>
              <Field name="name" placeholder="your name" />
              <ErrorMessage name="name" component="div" />
            </label>
            <label>
              <span>Phone Number</span>
              <Field name="phoneNumber" placeholder="+38 0** *** ** **" />
              <ErrorMessage name="phoneNumber" component="div" />
            </label>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'adding to contacts...' : 'Add contact'}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
