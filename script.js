const number = document.querySelector('.number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

decrease.addEventListener('click', () =>{
    let decNo = number.textContent;
    console.log(decNo)
    decNo = decNo-1;
    number.innerHTML = decNo;
})

reset.addEventListener('click', () =>{
    let resetNo = number.textContent;
    number.innerHTML = 0;
})

increase.addEventListener('click', ()=>{
    let increaseNo = number.textContent;
    increaseNo++;
    number.innerHTML = increaseNo;
})
