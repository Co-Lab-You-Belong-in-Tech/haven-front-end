import NextInput from "../inputs/NextInput";

const SignupAndLogin = () => {
  return (
    <div className="onBoardingWrapper">
      <div className="wrapper10">
        <h2>Welcome to Haven</h2>
        <p>
          Haven is a safe network for members of the LGBTQ+ to find friends.
        </p>
        <div className="signInContainer">
        <NextInput
          ButtonText={"Sign Up"}
          ButtonClass={`signupButton signUpAndLogInButton`}
          Linked={"/signup"}
          />
            <NextInput
          ButtonText={"Log In"}
          ButtonClass={`loginButton signUpAndLogInButton`}
          Linked={"/login"}
        />
        </div>
      </div>
    </div>
  );
};

export default SignupAndLogin;
