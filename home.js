// let but = document.getElementById("but")
// let btn1 = document.getElementById("btn2")
// let btn3 = document.getElementById("btn3")
// let btn4 = document.getElementById("btn4")


function openProject(project) {
    if (project === "Ask anything") {
        window.location.href = "ai.html";
    } 
    else if (project === "Summary") {
        window.location.href = "sum.html";
    } 
    else if (project === "Spark Idea") {
        window.location.href = "spark.html";
    } 
    else if (project === "Definition") {
        window.location.href = "def.html";
    }
    else if(project === "miniProjects"){
        window.location.href = "mini.html"
    }
}