import { OnBoardingInterestsMap } from "./OnBoardingInterestsMap";
import TaglistIndivdualButton from "./TaglistIndividualButton";
import NextInput from "../inputs/NextInput";

const OnBoardingInterest = () => {
  return (
    <section className="onBoardingWrapper">
      <div className="wrapper10">
        <NextInput
          ButtonText={"Back"}
          ButtonClass={`nextButton`}
          Linked={"/signup"}
        />
        <h2>What are you interested in?</h2>
        <ul>
          {OnBoardingInterestsMap.map((item, index) => {
            return (
              <TaglistIndivdualButton
                key={index}
                ButtonClass={"interestButtons"}
                InterestName={item.InterestName}
              />
            );
          })}
        </ul>

        <NextInput
          ButtonText={"CONTIUNE"}
          ButtonClass={`skipButton`}
          Linked={"/flu"}
        />
      </div>
    </section>
  );
};

export default OnBoardingInterest;
