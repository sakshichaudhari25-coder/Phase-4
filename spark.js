let inp = document.getElementById("inp")
let p = document.getElementById("para")
let btn = document.getElementById("btn")

btn.addEventListener("click", textShow)

async function textShow() {
  p.innerText = "Generating...."
  try{
  let res = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=AIzaSyBJZ47b8YFCywpP0j7SfHYp41U1pG1o6uk", {
    method: "POST",        
    headers: {
        "Contents-Type" : "application/json"
    }, 
    body: JSON.stringify ({
        content: [{
            parts: [{
                text :`give me spark idea according to ${inp.value}`
            }]
        }]
    })
  })
  let data = await res.json();

  let ans = data?.candidetes?.[0].content?.parts?.[0]?.text;

  p.innerText = ans;
} catch(error){
  console.log(error);
  p.innerText = "Error Loading"
  
}
}
