import React, { useCallback } from "react";
import styles from "./sessionInfo.module.scss";

import Text from "../commons/Text";
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
      <ProfileImage
        imgUrl={require("../../assets/img/profile_pic.jpg")}
        alt="urbetrack"
      />
      <Text size="bigger" color="alternative" weight="bold" className="mt-2">
        {userData.username}
      </Text>
      <Text
        size="small"
        color="primary"
        className={styles.signout}
        handleClick={logout}
      >
        Sign out
      </Text>
    </section>
  );
};

export default SessionInfo;
