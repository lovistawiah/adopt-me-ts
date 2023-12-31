import { createContext } from "react";
import { Pet } from "./ApiResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "lorem Ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "Wa",
  },
  () => {},
]);

export default AdoptedPetContext;
