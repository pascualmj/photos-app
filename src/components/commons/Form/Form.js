import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ initialValues, handleSubmit, children }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name) => {
    return (e) => {
      const newValue = e.target.value;
      setValues((currentState) => {
        return {
          ...currentState,
          [name]: newValue,
        };
      });
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleSubmit(values, (newValues) => {
      setValues(newValues);
    });
  };

  return (
    <form onSubmit={submitHandler}>{children({ values, handleChange })}</form>
  );
};

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default Form;
