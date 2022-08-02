import React, { useState, useEffect } from "react";
import AppContents from "./AppContents.jsx";
import LoadingScreen from "./LoadingScreen.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faAngleUp,
  faPlay,
  faHandshakeAlt,
  faMobileAlt,
  faUniversalAccess,
  faPause,
  faAngleDown,
  faMusic,
  faEye,
  faDownload,
  faBuildingColumns,
  faArrowRightFromBracket,
  faDatabase,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

import "./sass/_setup.scss";
import "./App.scss";

library.add(
  faBars,
  faAngleUp,
  faHandshakeAlt,
  faMobileAlt,
  faUniversalAccess,
  faPause,
  faPlay,
  faTimes,
  faDownload,
  faEye,
  faAngleDown,
  faMusic,
  faBuildingColumns,
  faArrowRightFromBracket,
  faDatabase,
  faBug
);

const App = () => {
  const [loadingScreenInView, setLoadingScreenInView] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const LoadingScreenLoaded = () => {
    setTimeout(function () {
      setLoadingScreenInView(false);
    }, 4000);
  };

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/is-verified",
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );

      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className="App">
        <>
          {loadingScreenInView ? <LoadingScreen /> : <AppContents setAuth={setAuth} user={isAuthenticated} />}
          {LoadingScreenLoaded()}
        </>
    </div>
  );
};

export default App;
