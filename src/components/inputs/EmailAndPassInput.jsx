export default function EmailAndPasswordInput(props) {
  return (
    <label> {props.valueText}:
      <input
        required
        aria-label={`${props.valueText} input`}
        type={`${props.valueText}`}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.valueInput}
        value={props.value}
      />
    </label>
  );
}
