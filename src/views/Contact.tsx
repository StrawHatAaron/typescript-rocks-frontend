import React from 'react';
import {TextField, Button} from "@material-ui/core";
import { Formik, Form, FormikHelpers } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const Contact: React.SFC<{}> = () => (
  <div className="container">
    <h1>Formik x TypeScript</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      render={() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <TextField id="firstName" name="firstName" placeholder="John" type="text" />

          <label htmlFor="lastName">Last Name</label>
          <TextField id="lastName" name="lastName" placeholder="Doe" type="text" />

          <label htmlFor="email">Email</label>
          <TextField id="email" name="email" placeholder="john@acme.com" type="email" />

          <Button type="submit" style={{ display: 'block' }}>
            Submit
          </Button>
        </Form>
      )}
    />
  </div>
);

