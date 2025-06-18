import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Hello from Backend');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
