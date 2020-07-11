import React from "react";
import PropTypes from "prop-types";
import styles from "./layoutDefault.module.scss";

import SessionInfo from "../../components/SessionInfo";

const LayoutFull = ({ children }) => {
  return (
    <div className={styles.layout + " mt-10"}>
      <div className={styles.aside}>
        <SessionInfo />
      </div>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

LayoutFull.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFull;
