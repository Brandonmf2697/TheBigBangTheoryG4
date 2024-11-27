To start the app:
1.  npm install
2. node.js to the api, use cd to go the to correct folder
3. npm start yo the app, use cd to go the to correct folder


Cómo crear una API con un servidor Express y consumirla con una app de React
Servidor Express
1. Crear una carpeta en tu computadora y abrirla con VS Code.
2. Seleccionar la carpeta correcta con el comando cd.
3. Ejecutar el comando npm init -y para crear el archivo package.json.
4. Instalar Express y CORS con npm install express cors.
5. Crear un archivo para el servidor, por ejemplo: server.js.
6. En este archivo, agregar las constantes de Express e importar CORS. También puedes definir el puerto donde se ejecutará la API y agregar los datos que usarás en este proyecto (por ejemplo, los personajes de The Big Bang Theory).
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(cors());

const characters = [
  { name: 'Sheldon Cooper' },
  { name: 'Leonard Hofstadter' },
  // más personajes...
];

app.get('/api/characters', (req, res) => {
  res.json(characters);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
7. Ejecutar el servidor con el comando node server.js. Si todo está bien, debería salir el mensaje: Server running at http://localhost:3002 en la terminal.
App de React
1. Navegar a la carpeta donde se creará la app:
2. Ejecutar el comando: npx create-react-app NOMBRE_DEL_APP
3. Entrar en la carpeta de la app con cd NOMBRE_DEL_APP.
Consumir la API
1. En src, crear un archivo llamado api.js y agregar el siguiente código:
export const getCharacters = async () => {
  const response = await fetch('http://localhost:3002/api/characters');
  const data = await response.json();
  return data;
};
2. Crear una carpeta llamada components y un archivo donde presentaremos los datos, por ejemplo, CharactersList.js. Importar los personajes desde api.js para elaborar el componente que mostrará la información.
import React, { useEffect, useState } from 'react';
import { getCharacters } from './api';

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersList;
Ejecutar la aplicación de React con npm start.

REFERENCIAS:

Referencias: 
APIs con Node.js y Express - Curso desde cero : https://www.youtube.com/watch?v=yd_QpXWrbtQ&t=1s
https://www.luisllamas.es/montar-un-api-rest-con-nodejs-y-express/
Cómo consumir una API con React | Rick and Morty App : https://www.youtube.com/watch?v=BTJtTkoyprc
https://github.com/monkeywit/Rick-and-Morty-App
https://www.freecodecamp.org/espanol/news/como-consumir-rest-apis-en-react-guia-para-principiantes/
https://www.escuelafrontend.com/data-fetching-con-react
https://es.stackoverflow.com/questions/219713/como-consumir-una-api-con-reactjs
https://lavaldi.com/blog/como-crear-api-rest-express-node

Adicionalmente se hicieron consultas a Copilot para integrar la informacion anterior y poder iniciar el servidor en un puerto y consumirlo desde la app que corria en otro puerto