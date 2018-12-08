let express = require('express');
let router = express.Router();//"R"-bc it is a class
let fruits = [
  {id: 1, name: "mango"},
  {id: 2, name: "grape"}, {id:3, name: "kiwi"}
]

//want specific routes:
  // /fruits - to get all fruits
  // /fruits/:id - get one fruit based on id

router.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', "*");

  res.json({
    // fruits: [{id: }]//do outside
    listOfFruit: fruits
  })
})

router.get("/:id", (req, res, next) => {
  res.set('Access-Control-Allow-Origin', "*");

  fruits.forEach(fruit => {
    if (fruit.id === Number(req.params.id)) {
      res.json({
        chosenFruit: fruit
      })
    }
  })
  next();//goes to app.js error hander "*" which handles everything.
})

module.exports = router;
