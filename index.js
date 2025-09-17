const express = require('express');
const app = express();
const PORT = 3000;

// Route de test
app.get('/', (req, res) => {
  res.send('Bonjour depuis Express!');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
