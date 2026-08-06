let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let p = document.getElementById("para")

btn.addEventListener("click", textShow);
async function textShow() {
    p.innerText = "generating";

    try {

    let res = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyBxh6qou9tUexuJ5qELGD7Hfk0grOr0yBg", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            contents: [{
                parts: [{
                    text : `Give a defination no long mein part according to:\n${inp.value}`
                }]
            }]
        })
    })
    let data = await res.json();
    let asn = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    p.innerText= asn; 
    
} catch(error) {
    console.log(error);
    p.innertext = "Error Loading"
    
}
}