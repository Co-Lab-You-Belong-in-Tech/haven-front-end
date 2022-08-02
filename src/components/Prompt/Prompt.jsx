const Prompt = (props) => {
  return (
    <>
      {/*Prompt for Form Errors/Hidden by Default*/}
      <div className={`promptForm${props.promptOpen ? " opened" : " closed"}`}>
        <div className="promptFormWrapper">
          <p>Please Check your Input and Try Again</p>
          <button
            onClick={() => {
              props.setPromptOpen(false);
            }}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default Prompt;
