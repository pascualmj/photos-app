import React, { useState } from "react";
import styles from "./formLogin.module.scss";

import Input from "../commons/Input";
import Form from "../commons/Form";
import Alert from "../commons/Alert";
import Button from "../commons/Button";

import { LOGIN_ERROR_CREDENTIALS } from "../../config/constants";

const initialValues = {
  username: "",
  password: "",
};

const FormLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (values, cleanForm) => {
    console.log(values);
  };

  return (
    <section className={styles.container}>
      <Form initialValues={initialValues} handleSubmit={handleSubmit}>
        {({ values, handleChange }) => (
          <>
            <Input
              type="text"
              label="Username"
              value={values.username}
              handleChange={handleChange("username")}
              className="mb-2"
              disabled={isSubmitting}
            />
            <Input
              type="password"
              label="Password"
              value={values.password}
              handleChange={handleChange("password")}
              disabled={isSubmitting}
            />
            {showAlert && (
              <Alert
                text={LOGIN_ERROR_CREDENTIALS}
                type="error"
                className="mt-2"
              />
            )}
            <Button
              type="submit"
              text="Login"
              className="mt-3"
              disabled={isSubmitting}
            />
          </>
        )}
      </Form>
    </section>
  );
};

export default FormLogin;
