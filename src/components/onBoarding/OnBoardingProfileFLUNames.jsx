import EmailAndPasswordInput from "../inputs/EmailAndPassInput";
import { useState } from "react";
import NextInput from "../inputs/NextInput";

const OnBoardingProfileFLUNames = () => {
  const FirstNameText = "First Name";
  const LastNameText = "Last Name";
  const UserNameText = "Username";
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <section className="onBoardingWrapper">
      <div className="wrapper10">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/interests"}
        />
        <EmailAndPasswordInput
          valueInput={FirstNameText}
          valueText={FirstNameText}
          setValue={setFirstName}
          value={firstName}
        />

        <EmailAndPasswordInput
          valueInput={LastNameText}
          valueText={LastNameText}
          setValue={setLastName}
          value={lastname}
        />

        <EmailAndPasswordInput
          valueInput={UserNameText}
          valueText={UserNameText}
          setValue={setUserName}
          value={username}
        />
        <p className="optionialParagraph">You can always change them later.</p>
        <NextInput ButtonText={"CONTIUNE"} ButtonClass={`skipButton`} Linked={"/location"} />
        </div>
    </section>
  );
};
export default OnBoardingProfileFLUNames;
