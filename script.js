const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

function numberColor(number1){
    if(number1 < 0){
        number.style.color = "red";
    }
    else if(number1 > 0){
        number.style.color = "green";
    }
    else {
        number.style.color = "black";
    }
}

decrease.addEventListener('click', () =>{
    let decNo = number.textContent;
    console.log(decNo)
    decNo--;
    number.innerHTML = decNo;
    numberColor(decNo);
})

reset.addEventListener('click', () =>{
    let resetNo = number.textContent;
    numberColor(0);
    number.innerHTML = 0;
    
})

increase.addEventListener('click', ()=>{
    let increaseNo = number.textContent;
    increaseNo++;
    number.innerHTML = increaseNo;
    numberColor(increaseNo);
})




