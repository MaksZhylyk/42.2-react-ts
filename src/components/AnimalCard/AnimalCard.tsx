import "./style.css";
import { AnimalCardProps } from "./types";
import { AnimalCardImage } from "./style";
import { AnimalCardWrapper } from "./style";

// interface Animal {
//   name: string
//   species: string
//   role: string
//   skills: string[]
//   image: string
// }

// interface AnimalCardProps {
//   animalData: Animal
// }

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
