const express = require("express");
require('dotenv').config()
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const objectCar = {
    color: "blue",
    seat: 7,
    brand: "toyota",
    year: 2022
  }

  res.status(200).json({
    success: true,
    message: 'hello world',
    data: objectCar
  });
});

app.post('/checkout', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: 'destination created!'
  });
})

app.get('/destinations', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'hello world',
    data: "bandung lampung jakarta tangerang"
  });
});

app.post('/destinations', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: 'destination created!'
  });
})

app.put('/destinations', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: 'destination updated!'
  });
})

app.delete('/destinations', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: 'destination deleted!'
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
