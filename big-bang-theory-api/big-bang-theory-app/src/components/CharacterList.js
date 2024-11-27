import React, { useEffect, useState } from 'react';
import { getCharacters } from '../api';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <h1>Characters from The Big Bang Theory</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <h2>{character.name}</h2>
            <p>Occupation: {character.occupation}</p>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;