
function makeBubble(){

    var clutter = "";

    for(var i=1;i<=133;i++)
    {
        var random = Math.floor(Math.random()*10)
        clutter+= `<div class="bubble">${random}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;

}

var timer = 60;

function runTimer(){
    var new_timer = setInterval(function(){
        if(timer>0)
        {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else
        {
            clearInterval(new_timer);
            // document.querySelector("#pbtm").innerHTML = "";
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!!</h1><h1>Your Score : ${score}`;
        }

    },1000)
}

function getNewHit() {
    var rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

var score = 0;

function increaseScore(){
    score+=10
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(details){    // instead of adding event listeners to so many bubbles we will take details from parent 
    var clickedNum = Number(details.target.textContent)
    var rn = Number(document.querySelector("#hitval").textContent)

    if(clickedNum===rn)
    {
        console.log("Matched")
        increaseScore();
        makeBubble();
        getNewHit();
    }

})


runTimer();

makeBubble();

getNewHit();
