const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;


// middlewares
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('COFFEE STORE server is running');
  });
  
  app.listen(port, () => {
    console.log(`COFFEE STORE server running on ${port}`);
  })