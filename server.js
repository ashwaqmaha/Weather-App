const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
// const port = 3000;
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/weather", async (req, res) => {
  const { query } = req.query;
  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(
      `https://api.shecodes.io/weather/v1/current`,
      {
        params: {
          query: query,
          key: apiKey,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching weather data");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
