//Counter Program 

const increase = document.getElementById("icrmt-Btn")
const reset = document.getElementById("rst-Btn")
const decrease = document.getElementById("dcrmt-Btn")
const countLabel = document.getElementById("countLabel")
let count =0;
increase.onclick= function(){
    count++;
    countLabel.textContent=count;
}

decrease.onclick= function(){
    count--;
    countLabel.textContent=count;
}

reset.onclick= function(){
    count=0;
    countLabel.textContent=count;
}