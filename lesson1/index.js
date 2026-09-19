var state = {
    score: 0
};

function setup(){
    const score = document.getElementById("score");
    state.score = Number(score.innerHTML)
    const plusButton = document.getElementById("plusButton");
    plusButton.onclick = ()=>{
            state.score += 1;
            score.innerHTML = state.score;;   
    };
    const minusButton = document.getElementById("minusButton");
    minusButton.onclick = ()=>{
            state.score -= 1;         
            score.innerHTML = state.score; 
    };
    const x2Button = document.getElementById("x2");
    x2Button.onclick = ()=>{
            state.score *= 2;
            score.innerHTML = state.score;; 
    };

}
document.addEventListener("DOMContentLoaded", setup);