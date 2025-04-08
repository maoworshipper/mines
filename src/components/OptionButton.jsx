const OptionButton = ({ value, showValue, handleClick, disabled }) => (
  <button
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "0",
      border: "1px solid #222",
    }}
    onClick={() => handleClick(value)}
    disabled={disabled}
  >
    {showValue ? value : ""}
  </button>
);

export default OptionButton;
