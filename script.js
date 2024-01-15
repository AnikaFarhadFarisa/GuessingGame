const sub1 = document.getElementById("sub1");
const img1 = document.getElementById("img1");
const sub2 = document.getElementById("sub2");
const img2 = document.getElementById("img2");
const sub3 = document.getElementById("sub3");
const img3 = document.getElementById("img3");
const sub4= document.getElementById("sub4");
const img4 = document.getElementById("img4");
const sub5 = document.getElementById("sub5");
const img5 = document.getElementById("img5");
const sub6 = document.getElementById("sub6");
const img6 = document.getElementById("img6");
const sub7 = document.getElementById("sub7");
const img7 = document.getElementById("img7");
const sub8 = document.getElementById("sub8");
const img8 = document.getElementById("img8");
const sub9 = document.getElementById("sub9");
const img9 = document.getElementById("img9");

const result = document.getElementById("result");
const toFind = document.getElementById("toFind");

let buttons = [sub1, sub2, sub3, sub4, sub5, sub6, sub7, sub8, sub9];
let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
let objects = ["fish","rectangle","heart","pentagon","diamond","puzzle_piece","mango","butterfly","star"];

let trials = 1;

const obj = document.getElementById("obj");


let randObjVal;


function pickObj() {
    randObjVal = Math.floor(Math.random() * images.length);
    obj.textContent = objects[randObjVal];
    console.log(randObjVal);
    sub1.disabled = false;
    sub2.disabled = false;
    sub3.disabled = false;
    sub4.disabled = false;
    sub5.disabled = false;
    sub6.disabled = false;
    sub7.disabled = false;
    sub8.disabled = false;
    sub9.disabled = false;
    document.getElementById("play").disabled = true;
}


function changeColor(i_d){
    console.log(randObjVal);
    if(trials < 6){
        //console.log(buttons.length);
        let ranNum = Math.floor(Math.random() * buttons.length);
        console.log(ranNum);
        let x = buttons[ranNum];
        let y = images[ranNum];
        x.style.background = "red";
        y.style.background = "red";
        document.getElementById(i_d).disabled = true;
        trials = trials + 1;
        if(ranNum == randObjVal){
            result.textContent = "Wow! You Won!"
            sub1.disabled = true;
            sub2.disabled = true;
            sub3.disabled = true;
            sub4.disabled = true;
            sub5.disabled = true;
            sub6.disabled = true;
            sub7.disabled = true;
            sub8.disabled = true;
            sub9.disabled = true;
        }
    }
    else{
        result.textContent = "You Suck!!!"
        sub1.disabled = true;
        sub2.disabled = true;
        sub3.disabled = true;
        sub4.disabled = true;
        sub5.disabled = true;
        sub6.disabled = true;
        sub7.disabled = true;
        sub8.disabled = true;
        sub9.disabled = true;
    }
    
}

function reDirect() {
    window.location.reload();
  }
