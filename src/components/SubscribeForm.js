import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SubscribeForm = () => {
  return (
     <Formik
      initialValues={{
        name: '',
        email: '',
        title: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, 'Must be 2 characters or more')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        alert('Thank you!');
        resetForm();
      }}
    >
      {({ isSubmitting, dirty, isValid, errors }) => (
      <Form className="form connect__form">
        <fieldset className="form__fieldset">
          <label htmlFor="name" className="form__label">
            <Field name="name" type="text" className="form__field font font_size_xs" placeholder="Name*" />
            <ErrorMessage component="span" name="name" className="form__error font font_size_3xs" />
          </label>
          <label htmlFor="email" className="form__label">
            <Field name="email" type="email" className="form__field font font_size_xs" placeholder="Email*" />
            <ErrorMessage component="span" name="email" className="form__error font font_size_3xs" />
          </label>
          <label htmlFor="title" className="form__label">
            <Field name="title" type="text" className="form__field font font_size_xs" placeholder="Title" />
            <ErrorMessage component="span" name="title" className="form__error font font_size_3xs" />
          </label>
          <label htmlFor="message" className="form__label">
            <Field name="message" as="textarea" className="form__field form__field_type_textarea font font_size_xs" placeholder="Message" />
            <ErrorMessage component="span" name="message" className="form__error font font_size_3xs" />
          </label>
        </fieldset>
        <button type="submit" disabled={isSubmitting || !dirty} className={`form__button font font_size_2xs ${(!isValid || !dirty) ? "form__button_disabled" : ''}`}>Submit</button>
      </Form>
      )}
    </Formik>
  );
};

export default SubscribeForm;
