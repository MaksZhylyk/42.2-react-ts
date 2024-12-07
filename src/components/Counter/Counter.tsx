import "./style.css";
import Button from "../Button/Button";
import { CounterContainer } from "./style";
import { ButtonWrapper } from "./style";
import { CounterResult } from "./style";
import { CounterProps } from "./type";

//Step 1 - import hook useState from react
//import { useState } from "react";

function Counter({ countValue, onMinus, onPlus }: CounterProps) {
  //console.log("Render");

  //Step 2 - call hook useState and give him initialState
  //
  //const [count, setCount] = useState<number>(0);
  //const result - useState(0);
  //console.log(result);
  //const count = result[0];
  //const setCount = result[1];
  //console.log(setCount);

  //Step 3 - have to write function which will change condition. In there functions we have to use setCont
  //const onPlusClick = (): void => {
  //  setCount((prevValue) => prevValue + 1);
  //};

  // const onMinusClick = (): void => {
  //  setCount((prevValue) => prevValue - 1);
  //};

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinus} />
      </ButtonWrapper>
      <CounterResult>{countValue}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlus} />
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default Counter;
