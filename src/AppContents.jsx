import React, { useState } from "react";
import Home from "./components/pages/Home";
import LoadingScreen from "./LoadingScreen";
import OnBoarding from "./onBoarding/OnBoarding";

const AppContents = (props) => {
  const [loadingMenu, setLoadingMenu] = useState(false);

  const LoadingScreenClicked = (boolean) => {
    setLoadingMenu(boolean);
  };

  return (
    <main>
      {/*Add props.user back when finished*/}
      <>
        <OnBoarding setAuth={props.setAuth} LoadingScreenClicked={LoadingScreenClicked} />
      </>
      {loadingMenu && (
        <LoadingScreen
          loadingScreen={loadingMenu}
          LoadingScreenClicked={LoadingScreenClicked}
        />
      )}
      {/*Check if the User is new*/}
      {props.user && (
        <Home />)}
      {/*If User is not new direct User to Haven HomePage Automactically*/}
    </main>
  );
};

export default AppContents;
