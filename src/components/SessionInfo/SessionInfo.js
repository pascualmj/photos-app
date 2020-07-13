import React, { useCallback } from "react";
import styles from "./sessionInfo.module.scss";

import Text from "../commons/Text";
import ThemeToggler from "../ThemeToggler";
import ProfileImage from "../ProfileImage";

import useGlobalStore from "../../hooks/useGlobalStore";
import { loggedOut } from "../../store/auth";

const SessionInfo = () => {
  const { dispatch, userData } = useGlobalStore();

  const logout = useCallback(() => {
    dispatch(loggedOut());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <ProfileImage
          imgUrl={require("../../assets/img/profile_pic.jpg")}
          alt="profile-picture"
        />
        <div className={styles.usernameContainer}>
          <Text color="alternative" weight="bold">
            {userData.username}
          </Text>
          <Text size="small" color="primary" handleClick={logout}>
            Sign out
          </Text>
        </div>
      </div>
      <div className={styles.themeToggler}>
        <ThemeToggler />
      </div>
    </section>
  );
};

export default SessionInfo;
