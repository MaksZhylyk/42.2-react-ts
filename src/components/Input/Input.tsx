import "./style.css";
import { InputProps } from "./type";

function Input({ name, id, type = "text", placeholder, label }: InputProps) {
  return (
    <div className="input-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-element"
      />
    </div>
  );
}

export default Input;
