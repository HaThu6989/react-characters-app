import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import CharacterDetails from "./CharacterDetails";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((e) => console.log("error getting characters from API", e));
  }, []);

  const renderListOfCharacters = () => {
    return (
      <div>
        <h2>List of characters in our API:</h2>

        {characters.map((element) => {
          return (
            <div key={element.id} className="box">
              <h3>{element.name}</h3>
              <p>Occupation {element.occupation}</p>
              <NavLink to={`/characters/${element.id}`}>More Details</NavLink>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>React Characters App</h1>

      <Routes>
        <Route path="/" element={renderListOfCharacters()} />
        <Route
          path="/characters/:characterId/"
          element={<CharacterDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
