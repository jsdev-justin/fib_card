
var h3Fib = document.querySelector("#fib")
var ageSelect = document.querySelector("#age");
var html=""
var hasConfetti = false;

     for(let i =1;i<100;i++){
            html += `<option value=${i}>${i}</option>`
     }


     ageSelect.innerHTML = html;


ageSelect.oninput=(e)=>{
    console.log(e.target.value)

let fibAnswer = fib(e.target.value)
                createConfetti(e.target.value)

h3Fib.innerHTML = `Your fibe number:${JSON.stringify(fibAnswer)}`

}



function fib(n,memo={}){
    if(n in memo)return memo[n];
    if(n <= 2)return 1;

    memo[n] = fib(n-1,memo) + fib(n-2,memo);

    return memo[n];
}



function createConfetti(num){
    if(!hasConfetti){
        console.log('confetti created')
    let half = Math.floor(num/2);

    for(let i=0;i<half;i++){
        let confetti = document.createElement("div");
            confetti.className = 'confetti';

        document.querySelector(".main").appendChild(confetti)
    }


    for(let i=0;i<half;i++){
        let confetti = document.createElement("div");
            confetti.className = 'confetti';

        document.querySelector(".bottom").appendChild(confetti)
    }
    hasConfetti = true;
}
}