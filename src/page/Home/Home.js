import React from "react";
import BasicLayout from "../../layout/BasicLayout";

import "./Home.scss";

export default function Home(props) {
  const { setRefreshCheckLogIn } = props;
  return (
    <BasicLayout className="home" setRefreshCheckLogIn={setRefreshCheckLogIn}>
      <h2>Home</h2>
    </BasicLayout>
  );
}
