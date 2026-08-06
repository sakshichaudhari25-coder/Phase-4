let inp = document.getElementById("inp")
let btn = document.getElementById('btn')
let que = document.getElementById("question");
let div = document.getElementById("card")
let out = document.getElementById("output")
let ans = document.getElementById("answer")

btn.addEventListener("click", showQues) 

async function showQues() {
    que.innerText = "Loading...";
    ans.innerText = "";

    let prompt =  `Generate five simple quiz question and answer about ${inp.value}.
    Return ONLY in json format like:
    [
        {"question": "...","question": "..."}
        {"answer": "...", "answer" : "..."}
]`

    try {
        let res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBeNhwkbIhjDNQwrAVTCBVWGtYg59RywAA", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [
                {
                parts: [{ text: prompt}]
            }
        ]
    })
        })
    

    let data = await res.json();

    let text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    let cleanText = text.replace(/```json|```/g, "").trim();

    let quizArray= JSON.parse(cleanText);

    que.innerText = "";
    ans.innerText = "";

    out.innerHTML = "";

quizArray.forEach((item, index) => {
    out.innerHTML += `
        <p><strong>Q${index + 1}:</strong> ${item.question}</p>
        <p><strong>Answer:</strong> ${item.answer}</p>
        <hr>
    `;
});
 } catch (error){
    console.error(error);
    que.innerText = "Error generating";
    ans.innerText = "";
    
}
}