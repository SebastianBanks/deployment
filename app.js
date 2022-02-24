const card = document.querySelector(".worldCard")
const btn = document.querySelector(".btn")
const form = document.querySelector("form")
const input = document.querySelector("input")

let colors = []
const changeColor = () => {
    let colors3 = ["maroon", "blue", "black", "purple", "darkcyan", "darkgreen", "darkred"]
    let randomNum = Math.floor(Math.random() * 7)
    let randomColor = colors3[randomNum]
    card.style.backgroundColor = randomColor

    console.log(randomColor)
}



function wildShow() {
    let max = 10
    let min = 0

    while (min < max) {
        getColors()
        let colors2 = colors
        let randomNum = Math.floor(Math.random() * 7)
        let randomColor = colors2[randomNum]
        card.style.backgroundColor = randomColor
        console.log(randomColor)
        min++
    }
}


const getColors = () => {
    axios.get("/api/colors")
        .then(res => {
           colors = res.data
           console.log(colors)
           console.log(colors[0])
        })
        .catch(err => console.log(err))
}

const makeColor = (e) => {
    e.preventDefault()
    axios.post("/api/color", {color: input.value})
        .then(res => console.log(res))
        .catch(err => {
            input.value = ''

            const notif = document.createElement('aside')
            notif.innerHTML = `<p>${err.response.data}</p>
            <button class='close'>close</button>`
            document.body.appendChild(notif)

            document.querySelectorAll('.close').forEach(btn => {
                btn.addEventListener('click', (e)=>{
                    e.target.parentNode.remove()
                })
            })
        })
}

getColors()
console.log(colors)
wildShow()

btn.addEventListener("click", changeColor)
form.addEventListener("submit", makeColor)