import { InputProps } from "./type";
import { InputContainer, InputElement, Label } from "./styles";

function Input({
  name,
  id,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
}: InputProps) {
  // console.log("Input render or re-render");

  return (
    <InputContainer>
      {/* Пример оператора условного рендеринга */}
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-element"
      />
    </InputContainer>
  );
}

export default Input;
