let inp = document.getElementById("inp")
let para = document.getElementById("para")
let btn = document.getElementById("btn")

btn.addEventListener("click", textShow);

async function textShow() {
    para.innerText = "Loading..."
    try{
    let res = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyC6YYuJcakOfJcrA7nIR5ARIRBz0lrxRJw", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            contents: [{
                parts: [{
                    text: `Summarize the following text in a short and clear way: ${inp.value}`
                }]
            }]
        })
    })
    let data = await res.json()

    let ans = data?.candidates[0]?.content?.parts[0]?.text;
    para.innerText = ans;

} catch(error){
    console.log(error);
    para.innerText = "error loading"
    
}
}