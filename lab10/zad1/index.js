function button1Event(){
    const newDiv = document.createElement("div");
    const firstDiv = document.querySelectorAll("div")[0];
    document.body.insertBefore(newDiv, firstDiv)
}

function button2Event(){
    const firstDiv = document.querySelectorAll("div")[0];
    console.log(firstDiv);
    firstDiv.remove();
}

function button3Event(){
    let divs = document.querySelectorAll("div");
    divs[2].style.backgroundColor = "#FF0000";
}

function button4Event(){
    const divs = document.querySelectorAll("div");    
    for(let i = 0; i < divs.length; i++){
        const text = document.createTextNode("new text");
        divs[i].appendChild(text);
    }
}