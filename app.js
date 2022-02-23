const card = document.querySelector(".worldCard")
const btn = document.querySelector(".btn")

const changeColor = () => {
    let colors = ["maroon", "blue", "black", "purple", "darkcyan", "darkgreen", "darkred",]
    let randomNum = Math.floor(Math.random() * 7)
    let randomColor = colors[randomNum]
    card.style.backgroundColor = randomColor

    console.log(randomColor)
}

btn.addEventListener("click", changeColor)