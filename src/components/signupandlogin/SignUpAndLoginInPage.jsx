import NextInput from "../inputs/NextInput";
import Signup from "./Signup";

const SignupAndLogInPage = (props) => {
  return (
    <section className="onBoardingWrapper">
      <div className="wrapper10">
      <NextInput
        ButtonText={"Back"}
        ButtonClass={`nextButton`}
        Linked={"/"}
      />
        <div className="upperLoginSignInPage">
          <h2>Join Haven Today</h2>
          <p>
            By continuing, you agree to our <b>Terms of Use</b> and our <b>Privacy Policy.</b>
          </p>
        </div>
        <Signup setAuth={props.setAuth} />
        </div>
    </section>
  );
};

export default SignupAndLogInPage;
