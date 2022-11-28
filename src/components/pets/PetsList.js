import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { Link, Params, useRoutes, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PetsList = ({ pets, kind }) => {
  // const { id } = useParams();

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (kind === "all") {
      navigate("/pets/cats");
    }
  }, [pets]);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {kind !== "dogs" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}

        {/* All dogs section */}
        {kind !== "cats" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
      </section>
    </section>
  );
};

export default PetsList;
