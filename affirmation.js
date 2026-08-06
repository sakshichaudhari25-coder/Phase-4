let btn = document.getElementById("btn")
let quote = document.getElementById("quote")

btn.addEventListener("click", getAffirmation);

async function getAffirmation() {
    quote.innerText = "Loading...";

    let prompt = "Give me a short positive affirmation."

    try {
        let res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyC_aD76DSnrg3vRRFWLlycQpwAt_5jISZI", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body:JSON.stringify ({
                contents: [
                    {
                        parts: [{ text: prompt}]
                    }
                ]
            })
        })
        let data = await res.json()
        let text = data?.candidates[0]?.content.parts[0]?.text;

        quote.innerText = text;


    } catch (error) {
        quote.innerText = "Error Loading";
        console.log(error);
        

    }
}
window.onload = getAffirmation;
