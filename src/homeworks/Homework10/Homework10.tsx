import { useState } from "react";

import { Homework10Container, DataContainer, ButtonWrapper } from "./styles";
import Button from "../../components/Button/Button";

function Homework10() {
  const [data, setData] = useState<string>("");
  const [disable, setDisable] = useState<boolean>(false);
  const CAT_URL = "https://catfact.ninja/fact";
  let dataArray: any = [data];

  const getInfo = async () => {
    try {
      const response = await fetch(CAT_URL);
      if (!response.ok) {
        throw new Error("Error");
      }
      const result = await response.json();
      const dataElement = setData(result.fact);
      dataArray.push(dataElement);
      setDisable(true);
    } catch (error) {}
  };

  const deleteInfo = () => {
    setData("");
    setDisable(false);
  };

  return (
    <Homework10Container>
      <DataContainer>{disable && <>{dataArray}</>}</DataContainer>
      <ButtonWrapper>
        <Button name="GET MORE INFO" type="button" onClick={getInfo} />
        {disable && (
          <Button name="DELETE ALL DATA" type="button" onClick={deleteInfo} />
        )}
      </ButtonWrapper>
    </Homework10Container>
  );
}

export default Homework10;
