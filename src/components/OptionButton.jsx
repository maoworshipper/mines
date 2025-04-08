const OptionButton = ({ value, showValue, handleClick, disabled }) => (
  <button
    className="optionButton"
    onClick={() => handleClick(value)}
    disabled={disabled}
  >
    {showValue ? value : ""}
  </button>
);

export default OptionButton;
