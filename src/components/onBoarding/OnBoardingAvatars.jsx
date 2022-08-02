import { useState } from "react";
import NextInput from "../inputs/NextInput";

const OnBoardingAvatars = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <section className="onBoardingProfileFLU red">
      <div className="wrapper5">
        <h3>Would you like to pick your default avatar?</h3>
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/pronouns"}
        />

        <div className="onBoardingAvatars">
          <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
              alt="User Profile"/>
                <img src="./assets/profilePictures/profileDefault.png"
                      alt="User Profile" />
                    <img src="./assets/profilePictures/profileDefault.png"
              alt="User Profile"/>
        </div>
        <NextInput
          ButtonText={"Skip"}
          ButtonClass={`skipButton`}
          Linked={"/terms"}
        />
        <p>Optionial and you can always change them later.</p>
      </div>
    </section>
  );
};
export default OnBoardingAvatars;
