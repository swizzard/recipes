import express from 'express';

const app = express();

const port = process.env.APP_PORT;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
