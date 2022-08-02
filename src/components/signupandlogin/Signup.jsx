import { useState } from "react";
import "../../sass/_login.scss";
import NextInput from "../inputs/NextInput";
import EmailAndPasswordInput from "../inputs/EmailAndPassInput.jsx";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const EmailText = "Email";
  const UserNameText = "Username";
  const PassText = "Password";

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { username, email, password };
      console.log(body);
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      props.setAuth(true);
      setSuccess("Welcome to Haven!");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <section className="loginSignUpFormSection">
      {/*Login Page JSX*/}
      <div className="loginSignUpFormContainer signUp">
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
          <EmailAndPasswordInput
            valueInput={UserNameText}
            valueText={UserNameText}
            setValue={setUserName}
            value={username}
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
