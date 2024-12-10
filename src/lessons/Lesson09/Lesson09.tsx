import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import Counter from "../../components/Counter/Counter";
import Input from "../../components/Input/Input";
import { Lesson09Cotainer, ResultBlock } from "./styles";

function Lesson09() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [joke, setJoke] = useState<string | undefined>("");
  const [count, setCount] = useState<number>(1);

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 2);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 2);
  };

  const searchOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    console.log("mouting");
  }, []);

  useEffect(() => {
    console.log("update");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("unmounting");
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      //console.log(response);
      setJoke(response.data.punchline);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);
  console.log(joke);

  return (
    <Lesson09Cotainer>
      <ResultBlock>{joke}</ResultBlock>
      <Input
        name="data"
        placeholder="search"
        value={searchValue}
        onChange={searchOnChange}
      ></Input>
      <Counter
        countValue={count}
        onMinus={onMinusClick}
        onPlus={onPlusClick}
      ></Counter>
    </Lesson09Cotainer>
  );
}

export default Lesson09;
