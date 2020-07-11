import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./formLogin.module.scss";

import Input from "../commons/Input";
import Form from "../commons/Form";
import Alert from "../commons/Alert";
import Button from "../commons/Button";

import useGlobalStore from "../../hooks/useGlobalStore";
import { loggedIn } from "../../store/auth";

import {
  LOGIN_ERROR_CREDENTIALS,
  VALID_PASSWORD,
} from "../../config/constants";
import routes from "../../config/routes";

const initialValues = {
  username: "",
  password: "",
};

const FormLogin = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();
  const { dispatch } = useGlobalStore();

  const handleSubmit = (values, cleanForm) => {
    setIsSubmitting(true);
    setTimeout(() => {
      if (values.password !== VALID_PASSWORD) {
        setShowAlert(true);
        setIsSubmitting(false);
        return;
      }
      dispatch(
        loggedIn({
          username: values.username,
        })
      );
      history.replace(routes.ROUTE_HOME);
    }, 2000);
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
