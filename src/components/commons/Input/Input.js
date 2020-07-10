import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./input.module.scss";

import { generateRandomString } from "../../../functions";

const Input = ({
  type,
  value = "",
  label = "",
  handleChange,
  placeholder = "",
  className = "",
  disabled = false,
}) => {
  const uniqueIdentifier = useMemo(() => generateRandomString(), []);

  return (
    <div className={className}>
      {!!label && (
        <label htmlFor={uniqueIdentifier} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        id={uniqueIdentifier}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "number", "password"]).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
