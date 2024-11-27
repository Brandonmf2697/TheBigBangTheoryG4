export const getCharacters = async () => {
    const response = await fetch('http://localhost:3002/api/characters');
    const data = await response.json();
    return data;
  };