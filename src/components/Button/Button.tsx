import "./style.css";
import { ButtonProps } from "./type";

function Button({
  name,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <button
      onClick={onClick}
      className="main-button"
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Button;
