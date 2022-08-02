import EmailAndPasswordInput from "../inputs/EmailAndPassInput";
import { useState } from "react";
import NextInput from "../inputs/NextInput";

const OnBoardingPronouns = () => {
  const PronounsText = "Pronouns eg: He/Him";
  const [pronouns, setPronouns] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <section className="onBoardingProfileFLU red">
      <div className="wrapper5">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/flu"}
        />

        <h3>What are your preferred Pronouns?</h3>
        <EmailAndPasswordInput
          valueInput={PronounsText}
          valueText={PronounsText}
          setValue={setPronouns}
          value={pronouns}
        />
        <NextInput
          ButtonText={"Skip"}
          ButtonClass={`skipButton`}
          Linked={"/avatars"}
        />
        <p>Optionial and you can always change your pronouns later.</p>
      </div>
    </section>
  );
};
export default OnBoardingPronouns;
