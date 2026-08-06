let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let p = document.getElementById("para")

btn.addEventListener("click", textShow)

async function textShow() {
    p.innerText = "loading..."

    try {
    let res = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyBDAgFHGMFlkQJjekGgaTDlYgrCDSkc-ho", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `give Answer the following question clearly and simply:${inp.value}`
                }]
            }]
        })
    })
    let data = await res.json()

    let ans = data.candidates?.[0]?.content?.parts?.[0]?.text  || "No Response";

    p.innerText = ans;
} catch(error) {
    p.innerText = 'Error Loading'
    
}
}