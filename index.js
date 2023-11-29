const express = require('express');
const db = require('./config/db');

const app = express();

const Destinations = db.destinations;

app.use(express.json());


app.get('/destinations', async (req, res) => {
  try {
    const result = await Destinations.findAll();
    console.log(result, 'desti res');
    res.status(200).json({
      success: true,
      message: "This is from section bandung!",
      data: result
    })
  } catch (error) {
    console.log(error, 'test err')
    res.status(500).json({
      success: false,
      message: "internal error"
    })
  }
});


app.post('/destinations', async (req, res) => {
  console.log(req.body);
  const { title, images, descriptions } = req.body;
  try {
    const result = await Destinations.create({
      title: title,
      images: images,
      descriptions
    });
    console.log(result, 'desti res');
    res.status(200).json({
      success: true,
      message: "This is from section bandung!",
      data: result
    })
  } catch (error) {
    console.log(error, 'test err')
    res.status(500).json({
      success: false,
      message: "internal error"
    })
  }
});

const PORT = 3000;


async function startDB() {
  try {
    await db.sequelize.sync()
    console.log('database connected!');
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  } catch (error) {
    console.log(error, 'database error!');
  }
}

startDB();
