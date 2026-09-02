let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#resetButton');
let newbtn=document.querySelector('#New-btn');
let msgcontiner=document.querySelector('.msg-container');
let msg=document.querySelector("#msg");
let turn0= true;//playerx and player0;
//use 2d array to store the values of the boxes

const winingCombinations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];


boxes.forEach((box) => {
    box.addEventListener('click', () =>
    {
        if(turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else
        {
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const resetbtn=()=>{
    turn0=true;
    enableboxes();
    msgcontiner.classList.add("hide");
}
const disabelboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText='';
    }
}
const showWinner=(winner) =>{
    msg.innerText=` Congratulation , winner is ${winner}`;
    msgcontiner.classList.remove('hide');
    disabelboxes();
}
const checkWinner = () =>
{
    for( let pattern of winingCombinations)
    {      
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val!=="" && pos1Val===pos2Val && pos2Val===pos3Val)
        {
            if(pos1Val=== pos2Val && pos2Val===pos3Val) 
            {
                console.log(`Winner is ${pos1Val}`);
                showWinner(pos1Val);
            }
        }
    }
    }

    newbtn.addEventListener("click", resetbtn)
    resetBtn.addEventListener("click", resetbtn)