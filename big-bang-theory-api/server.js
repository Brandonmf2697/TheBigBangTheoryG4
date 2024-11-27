const express = require('express');
const cors = require('cors'); // Importar cors
const app = express();
const port = 3002;

app.use(cors()); // Usar cors

const characters = [
  { id: 1, name: 'Sheldon Cooper', occupation: 'Theoretical Physicist', description: 'Sheldon is a genius with a high IQ and a low EQ.' },
  { id: 2, name: 'Leonard Hofstadter', occupation: 'Experimental Physicist', description: 'Leonard is Sheldon\'s roommate and best friend.' },
  { id: 3, name: 'Penny', occupation: 'Actress/Waitress', description: 'Penny is the girl next door who becomes friends with the guys.' },
  { id: 4, name: 'Howard Wolowitz', occupation: 'Aerospace Engineer', description: 'Howard is an engineer with a master’s degree from MIT.' },
  { id: 5, name: 'Raj Koothrappali', occupation: 'Astrophysicist', description: 'Raj is an astrophysicist who has trouble talking to women.' },
  { id: 6, name: 'Amy Farrah Fowler', occupation: 'Neuroscientist', description: 'Amy is Sheldon\'s girlfriend and a neuroscientist.' },
  { id: 7, name: 'Bernadette Rostenkowski-Wolowitz', occupation: 'Microbiologist', description: 'Bernadette is Howard\'s wife and a microbiologist.' },
  { id: 8, name: 'Stuart Bloom', occupation: 'Comic Book Store Owner', description: 'Stuart is the owner of the comic book store the guys frequent.' }
];

app.get('/api/characters', (req, res) => {
  res.json(characters);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});