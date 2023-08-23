let gameseq=[];
let userseq=[];

let btns=["yellow","red","purple","green"];
let start=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
if(start==false){
    console.log("game started");
    start=true;
    levelup();
}
});
//function which game flash btns
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
},250);
}
//below is function which user flash buttons
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
    }
function levelup(){
    userseq=[];
    level++;
h2.innerText=`level ${level}`;
let randidx=Math.floor(Math.random()*3);
let randcolor = btns[randidx];
let randbtn = document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
gameFlash(randbtn);
}
function checkAns(idx){
if(userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length)
     setTimeout(levelup,1000);
}
else{h2.innerHTML=`Game over!! your score was <b>${level}</b>`;
document.querySelector("body").style.backgroundcolor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundcolor="white";
},150);
reset();
}
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
checkAns(userseq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn1 of allbtns){
    btn1.addEventListener("click",btnpress);
}
function reset(){
    start=false;
    gameseq=[];
    userseq=[];
    level=0;
}


