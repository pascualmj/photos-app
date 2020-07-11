import React from "react";

import LayoutDefault from "../layouts/LayoutDefault";
import PhotosList from "../components/PhotosList";

const Home = () => {
  return (
    <LayoutDefault>
      <PhotosList />
    </LayoutDefault>
  );
};

export default Home;
