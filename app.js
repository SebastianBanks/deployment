const card = document.querySelector(".worldCard")
const btn = document.querySelector(".btn")
const form = document.querySelector("form")
const input = document.querySelector("input")
const axios = require('axios')

const changeColor = () => {
    let colors = ["maroon", "blue", "black", "purple", "darkcyan", "darkgreen", "darkred"]
    let randomNum = Math.floor(Math.random() * 7)
    let randomColor = colors[randomNum]
    card.style.backgroundColor = randomColor

    console.log(randomColor)
}

const makeColor = (e) => {
    e.preventDefault()
    axios.post("/api/color", {color: input.value})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

btn.addEventListener("click", changeColor)
form.addEventListener("submit", makeColor)