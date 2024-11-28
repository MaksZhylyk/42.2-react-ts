import "./style.css";
import { AnimalCardProps } from "./types";
import { AnimalCardImage } from "./style";
import { AnimalCardWrapper } from "./style";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardWrapper>
      <h3>{animalData.name}</h3>
      <div>{animalData.species}</div>
      <AnimalCardImage />
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
