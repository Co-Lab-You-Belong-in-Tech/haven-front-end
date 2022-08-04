import { useState } from "react";
import { useRef } from "react";
import NextInput from "../inputs/NextInput";
import OnBoardingAvatarimg from "./OnBoardingAvatarimg";
import OnBoardingProgressBar from "./onBoardingProgressBar";

const OnBoardingAvatars = (props) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [tagButtonSelected, setTagButtonSelected] = useState(false);
  const avatarRef = useRef();

  let interests, countrylist, statusText, flu, avatars, pronouns, terms;

  interests = countrylist = statusText = pronouns = flu = avatars = true;
  terms = false;


  return (
    <div className="onBoardingContentContainer">
      <div className="upperOnBoarding">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/pronouns"}
          ButtonClassContainer={`backButtonContainer`}
        />

        <OnBoardingProgressBar
          avatars={avatars}
          terms={terms}
          pronouns={pronouns}
          flu={flu}
          interests={interests}
          countrylist={countrylist}
          statusText={statusText}
        />

        <h2>Pick your Haven Avatar</h2>
      </div>
      <div className="onBoardingAvatars">
        {Array.from({ length: 15 }, (_, index) => (
          <OnBoardingAvatarimg passData={props.passData} setAvatarUrl={props.setAvatarUrl} alt="User Profile" key={index}/>
        ))}
      </div>
      <NextInput
        ButtonText={"Continue"}
        ButtonClass={`skipButton`}
        Linked={"/terms"}
        ButtonClassContainer={`continueButtonContainer`}
      />
    </div>
  );
};
export default OnBoardingAvatars;
