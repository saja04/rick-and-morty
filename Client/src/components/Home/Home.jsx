import { useState } from "react";
import Cards from "../Cards/Cards";
import Nav from "../NavBar/Nav";
import axios from "axios";

function Home () {
    const [characters, setCharacters] = useState([])

    function searchHandler(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
  
    function onClose(id) {
      setCharacters(
        characters.filter((char) => {
          return char.id !== Number(id)
        })
      )}
  
    return (
      <div className="App">
        <Cards characters={characters} onClose={onClose} />
      </div>
    );
}
export default Home;
