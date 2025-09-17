const express = require('express');
const app = express();
const serverless = require('serverless-http'); // nécessaire pour Vercel

// Routes
app.get('/', (req, res) => {
  res.send('Hello depuis Express sur Vercel !');
});

// Exporter l'app pour Vercel
module.exports.handler = serverless(app);
