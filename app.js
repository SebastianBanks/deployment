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



function wildShow(arry) {
    let max = 100
    let min = 0

    while (min < max) {
        
        let colors2 = arry
        let randomNum = Math.floor(Math.random() * 148)
        let randomColor = colors2[randomNum]
        card.style.backgroundColor = randomColor
        console.log(randomColor)
        min++
    }
}


const getColors = () => {
    axios.get("/api/colors")
        .then(res => {
            console.log("---------func-----------")
           colors = res.data
           console.log(colors.length)
           console.log(colors)
           console.log(colors[0])
           wildShow(colors)
           console.log("---------func-----------")
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
console.log(colors[5])
// wildShow()
console.log("-------------")
let att = getColors()
console.log(att)
console.log("---------------")
btn.addEventListener("click", changeColor)
form.addEventListener("submit", makeColor)