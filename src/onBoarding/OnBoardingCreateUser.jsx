import { useState } from "react";

const OnBoardingCreateUser = (props) => {
    
    const [text, setText] = useState("Creating User");

    const LoadingScreenLoaded = () => {
        setTimeout(function () {
            setText("Success"); 
        }, 4000);
      };

    return (
    <>
        <div className="createUserLoadingScreen">
            <div className="circle">
                <h2>{text}</h2>
            </div>
        </div>
        {LoadingScreenLoaded() }
    </>
    )
}
export default OnBoardingCreateUser;