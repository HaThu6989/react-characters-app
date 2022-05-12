import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterDetails(props) {
  const [details, setDetails] = useState({});

  const { characterId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((e) => console.log("error getting character details...", e));
  }, [props.id]);

  return (
    <>
      <h1>{details.name} </h1>
      Occupation: {details.occupation} <br />
      Weapon: {details.weapon} <br />
      Debt: {details.debt ? "Yes" : "No"} <br />
    </>
  );
}

export default CharacterDetails;
