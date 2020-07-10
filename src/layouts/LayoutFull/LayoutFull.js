import React from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.scss";

const LayoutFull = ({ children }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.layout.content}>{children}</main>
    </div>
  );
};

LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFull;
