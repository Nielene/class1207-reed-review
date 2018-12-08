let express = require('express');
let app = express();
let fruits = require('./routes/fruits');

app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send("yuup")
})

app.get("*", (req, res)=> {
  res.send("whoops")
})

app.listen(3000, () => {
  console.log("Listening on port 3000.");
})
