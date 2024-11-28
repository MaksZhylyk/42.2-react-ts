interface Animal {
  name: string;
  species: string;
  role: string;
  skills: string[];
  image: string;
}

export interface AnimalCardProps {
  animalData: Animal;
}
