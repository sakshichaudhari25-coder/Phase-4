let head = document.getElementById("head")
let btn = document.getElementById("btn")
let card = document.getElementById("container")
let jock = document.getElementById("jock")

btn.addEventListener("click", textShow)
async function textShow() {
    jock.innerText = "generate jock..."
    try {
    let response = await fetch("https://official-joke-api.appspot.com/random_joke")
    let data = await response.json()
    console.log(data)

    jock.innerText=data.setup +"😂 "+ data.punchline;
    
} catch(error){
    console.log(error);
    jock.innerText = "Error Loading"
    
}
}