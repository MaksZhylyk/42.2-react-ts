import "./style.css";
import { InputProps } from "./type";
import { InputContainer } from "./style";
import { Label } from "./style";
import { InputElement } from "./style";

function Input({ name, id, type = "text", placeholder, label }: InputProps) {
  return (
    <InputContainer>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement>
        id={id}
        name={name}
        type={type}
        placeholder={placeholder};
      </InputElement>
    </InputContainer>
  );
}

export default Input;
