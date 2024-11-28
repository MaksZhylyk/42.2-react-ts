import "./style.css";
import { ButtonProps } from "./type";

function Button({ name, type = "button", onClick }: ButtonProps) {
  // console.log(props.buttonName);

  return (
    <button onClick={onClick} className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
