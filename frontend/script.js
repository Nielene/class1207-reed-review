document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector('body')

  fetch('http://localhost:3000/fruits')
    .then(res => {
      return res.json();
    }).then(parsed => {
      // console.log(fruits);
      parsed.listOfFruit.forEach(fruit => {
        let newPara = document.createElement('p');
        newPara.innerText = fruit.name;
        body.appendChild(newPara);
      })
    })
})
