import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import { Homework09Container, Image, ErrorAlert, Spinner } from "./styles";
import Input from "../../components/Input/Input";

function Homework09() {
  const [search, setSearch] = useState<string>("");
  const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const [note, setNote] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DOG_URL = "https://dog.ceo/api/breeds/image/random";

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getDogPhoto = async () => {
    setDogImageUrl(undefined);
    setError(undefined);

    try {
      setIsLoading(true);
      const response = await axios.get(DOG_URL);
      setDogImageUrl(response.data.message);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDogPhoto();
  }, [search]);

  return (
    <Homework09Container>
      <Input
        name="search"
        placeholder="Write word"
        value={search}
        onChange={onSearchChange}
      ></Input>
      <Input
        name="note"
        placeholder="Write note"
        value={note}
        onChange={onNoteChange}
      ></Input>
      {dogImageUrl && <Image src={dogImageUrl} alt="random dog"></Image>}
      {error && <ErrorAlert>{error.message}</ErrorAlert>}
      {isLoading && <Spinner></Spinner>}
    </Homework09Container>
  );
}

export default Homework09;
