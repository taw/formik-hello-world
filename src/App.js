import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

class App extends React.Component {
  validate = ({ email, password, password2 }) => {
    let errors = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    if (password.length < 8) {
      errors.password = "Must be at least 8 characters";
    }
    if (password !== password2) {
      errors.password2 = "Passwords do not match";
    }
    return errors;
  };

  render() {
    return (
      <div className="App">
        <Formik
          initialValues={{ email: "", password: "", password2: "" }}
          validate={this.validate}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="main-form">
              <div className="group">
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div class="group">
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div class="group">
                <label>Repeat Password</label>
                <Field type="password" name="password2" />
                <ErrorMessage
                  name="password2"
                  component="div"
                  className="error"
                />
              </div>
              <div class="buttons">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default App;
