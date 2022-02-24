const card = document.querySelector(".worldCard")
const btn = document.querySelector(".btn")
const form = document.querySelector("form")
const input = document.querySelector("input")


const changeColor = () => {
    let colors = ["maroon", "blue", "black", "purple", "darkcyan", "darkgreen", "darkred"]
    let randomNum = Math.floor(Math.random() * 7)
    let randomColor = colors[randomNum]
    card.style.backgroundColor = randomColor

    console.log(randomColor)
}

const getColors = () => {
    axios.get("/api/colors")
        .then(res => {
            input.value = ""
            console.log(res)
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

btn.addEventListener("click", changeColor)
form.addEventListener("submit", makeColor)