const express = require('express');

const app = express();

app.use(express.json());

const destinations = [
  {
    id: "rec43w3ipXvP28vog",
    title: "Banda Aceh, Aceh",
    // company: "Pesona Indonesia",
    image: "https://example.com/images/bali.jpg",
    // price: 1500000, // Harga dalam Rupiah
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia non rerum ducimus reprehenderit deserunt nam repudiandae doloribus similique corporis possimus dolores,",
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "Yogyakarta Heritage Table",
    company: "Pesona Indonesia",
    image: "https://example.com/images/yogyakarta.jpg",
    price: 7500000, // Harga dalam Rupiah
    description:
      "Immerse yourself in the rich cultural heritage of Yogyakarta with our Yogyakarta Heritage Table. Meticulously crafted with intricate details, this table is a tribute to the city of art and culture.",
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "Jakarta City Accent Chair",
    company: "Orang Trip",
    image: "https://example.com/images/jakarta.jpg",
    price: 3500000, // Harga dalam Rupiah
    description:
      "Bring the hustle and bustle of Jakarta into your space with our Jakarta City Accent Chair. Designed for urban living, this chair captures the energy of the capital city.",
  },
];


app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is from section bandung!"
  })
});

app.get('/destinations', (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is your data!",
    data: destinations
  })
});

app.post('/destinations', (req, res) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "Succesful!"
  })
});

app.put('/destinations', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "updated!"
  })
});

app.delete('/destinations', (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
    message: "updated!"
  })
});

const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
