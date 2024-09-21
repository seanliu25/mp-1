
function addition(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let total = first + second;

    let Answer = document.getElementById("output");
    if (total < 0){
        Answer.style.color = "red";
    }
    else{
        Answer.style.color = "white";
    }
    Answer.innerHTML = String(total);
}

function subtraction(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let total = first - second;

    let Answer = document.getElementById("output");
    if (total < 0){
        Answer.style.color = "red";
    }
    else{
        Answer.style.color = "white";
    }
    Answer.innerHTML = String(total);
}

function multiplication(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let total = first * second;

    let Answer = document.getElementById("output");
    if (total < 0){
        Answer.style.color = "red";
    }
    else{
        Answer.style.color = "white";
    }
    Answer.innerHTML = String(total);
}

function division(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let total = first / second;

    let Answer = document.getElementById("output");
    if (total < 0){
        Answer.style.color = "red";
    }
    else{
        Answer.style.color = "white";
    }
    Answer.innerHTML = String(total);
}

function mypow(){

    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let total = 1;
    
    for(let i = 0; i < second; i++){
        total = total * first;
    }
    let Answer = document.getElementById("output");
    if (total < 0){
        Answer.style.color = "red";
    }
    else{
        Answer.style.color = "white";
    }
    Answer.innerHTML = String(total);
}

function doclear() {
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("output").innerHTML = String("");
}