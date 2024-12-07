import styled from "@emotion/styled";
import { css } from "@emotion/react";

const boxBasicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 2px solid;
  border-radius: 8px;
`;

export const Lesson08Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex: 1;
`;

export const GreenBox = styled.div`
  ${boxBasicStyles}
  background: #aed4b3;
  color: #1e5926;
`;

export const BlueBox = styled.div`
  ${boxBasicStyles}
  background: #a4dadb;
  color: #235354;
`;

export const InputExample = styled.input`
  width: 200px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #a19f9f;
  }
`;
