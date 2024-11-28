import styled from "@emotion/styled";

interface StyledButtonProps {
  disabled?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 200px;
  height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: ${(props) => (props.disabled ? "#1f27f5" : "grey")};
  border-radius: 4px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;
