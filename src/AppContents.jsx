import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import OnBoarding from "./components/onBoarding/OnBoarding.jsx";
import OnBoardingProfileFLUNames from "./components/onBoarding/OnBoardingProfileFLUNames.jsx";
import OnBoardingInterest from "./components/onBoarding/OnBoardingInterest.jsx";
import Login from "./components/signupandlogin/Login.jsx";
import SignupAndLogInPage from "./components/signupandlogin/SignUpAndLoginInPage.jsx";

import LoadingScreen from "./LoadingScreen.jsx";
import OnBoardingPronouns from "./components/onBoarding/OnBoardingPronouns.jsx";
import OnBoardingAvatars from "./components/onBoarding/OnBoardingAvatars.jsx";
import TermsandConditionsNewUser from "./components/Terms/TermsandConditionsNewUser.jsx";
import OnBoardingCountrySelector from "./components/onBoarding/OnBoardingCountrySelector.jsx";

const AppContents = (props) => {
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [acceptTerms, setAcceptedTerms] = useState(false);

  const AcceptTerms = () => {
    setAcceptedTerms(true);
  };
  const LoadingScreenClicked = () => {
    setLoadingMenu((loadingMenu) => !loadingMenu);
  };
  return (
    <main>
      <BrowserRouter>
        <Routes>
          {/*Add props.user back when finished*/}
          {!loadingMenu && (
            <Route
              extact
              path="/"
              element={
                <OnBoarding
                  LoadingScreenClicked={LoadingScreenClicked}
                  AcceptTerms={AcceptTerms}
                />
              }
            />
          )}
          <Route extact path="/flu" element={<OnBoardingProfileFLUNames />} />
          <Route extact path="/pronouns" element={<OnBoardingPronouns />} />
          <Route extact path="/avatars" element={<OnBoardingAvatars />} />
          <Route extact path="/terms" element={<TermsandConditionsNewUser />} />
          <Route extact path="/location" element={<OnBoardingCountrySelector />} />
          <Route extact path="/interests" element={<OnBoardingInterest />} />
          <Route extact path="/login" element={<Login />} />
          <Route extact path="/signup" element={<SignupAndLogInPage setAuth={props.setAuth} />} />
        </Routes>
      </BrowserRouter>
      {loadingMenu && !props.user && (
        <LoadingScreen
          loadingScreen={loadingMenu}
          LoadingScreenClicked={LoadingScreenClicked}
        />
      )}
      {/*Check if the User is new*/}

      {/*If User is not new direct User to Haven HomePage Automactically*/}
    </main>
  );
};

export default AppContents;
