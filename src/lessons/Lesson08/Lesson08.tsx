import { ChangeEvent, useState } from "react";

import Counter from "../../components/Counter/Counter";
import { Lesson08Container, GreenBox, BlueBox, InputExample } from "./styles";

function Lesson08() {
  const [count, setCount] = useState<number>(1);

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 2);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 2);
  };

  const [inputValueExample, setInputValueExample] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueExample(event.target.value);
  };

  return (
    <Lesson08Container>
      <InputExample
        name="example1"
        placeholder="example text"
        onChange={onChangeInput}
        value={inputValueExample}
      />
      <Counter countValue={count} onMinus={onMinusClick} onPlus={onPlusClick} />
      <GreenBox>Green Box</GreenBox>
      <BlueBox>Blue Box</BlueBox>
    </Lesson08Container>
  );
}
