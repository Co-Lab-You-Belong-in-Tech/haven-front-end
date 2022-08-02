import { useState } from "react";
import "../../sass/_login.scss";
import NextInput from "../inputs/NextInput";
import EmailAndPasswordInput from "../inputs/EmailAndPassInput.jsx";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const EmailText = "Email";
  const PassText = "Password";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      console.log(body);
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      props.setAuth(true);
      setSuccess("Welcome Back to Haven!");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <section className="onBoardingWrapper">
      {/*Login Page JSX*/}
      <NextInput
        ButtonText={"Back"}
        ButtonClass={`nextButton`}
        Linked={"/"}
      />
      <div className="wrapper10">
        <h2>Login to Haven</h2>
        <form className="loginSignUpForm" onSubmit={HandleSubmit}>
          {success ? <h3>{success}</h3> : <h3>{error}</h3>}
          <EmailAndPasswordInput
            valueInput={EmailText}
            valueText={EmailText}
            setValue={setEmail}
            value={email}
          />
          <EmailAndPasswordInput
            valueInput={PassText}
            valueText={PassText}
            setValue={setPassword}
            value={password}
          />
          {success ? (
            <NextInput
              ButtonText={"Continue"}
              ButtonClass={`continueButton signUpAndLogInButton`}
              Linked={"/interests"}
            />
          ) : (
            <button className="submitButton signUpAndLogInButton">Submit</button>
          )}
        </form>
      </div>
    </section>
  );
}
