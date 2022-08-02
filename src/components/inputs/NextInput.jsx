import { Link } from "react-router-dom";

const NextInput = (props) => {
  return (
    <>
      <Link to={`${props.Linked}`}>
        <button className={props.ButtonClass}>{props.ButtonText}</button>
      </Link>
    </>
  );
};

export default NextInput;
