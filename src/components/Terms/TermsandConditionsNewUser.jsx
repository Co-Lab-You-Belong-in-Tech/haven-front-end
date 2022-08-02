import { TermsandConditionsNewUserTermsMap } from "./TermsandConditionsNewUserTermsMap";
import "../../sass/_terms.scss";
import { useRef, useState } from "react";
import Prompt from "../Prompt/Prompt";

const TermsandConditionsNewUser = () => {
  const [promptOpen, setPromptOpen] = useState(false);
  const checkboxRef = useRef(null);

  // Form Input setState
  const handleInputChange = (event) => {
    event.preventDefault();

    if (checkboxRef.current.checked) {
      setPromptOpen(false);
    } else {
      setPromptOpen(true);
    }
  };
  const handleInputCheckSelect = () => {
    setPromptOpen(false);
  };
  return (
    <section className="termsAndConditionsSection">
      <div className="wrapper5percent blue">
        <div className="termsAndConditionsContainer">
          <h2>Terms and Conditons</h2>
          <ul>
            {TermsandConditionsNewUserTermsMap.map((item, index) => {
              return (
                <li key={index}>
                  <h3>{item.termsTitle}</h3>
                  <p>{item.terms}</p>
                </li>
              );
            })}
          </ul>
          <div className="termsForm">
            <form>
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="conditions"
                  name="conditions"
                  ref={checkboxRef}
                  onChange={handleInputCheckSelect}
                />
                <label htmlFor="conditions">Accept the Terms and Conditions</label>
                </div>
                <input
                  onClick={handleInputChange}
                  type="submit"
                  className="submit"
                  value="Submit"
                />
              
            </form>
          </div>
          <Prompt promptOpen={promptOpen} setPromptOpen={setPromptOpen} />
        </div>
      </div>
    </section>
  );
};

export default TermsandConditionsNewUser;
