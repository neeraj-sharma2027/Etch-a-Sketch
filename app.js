const parent = document.querySelector(".container");
const bttn = document.querySelector("#btn");

function makegrid(size){
    let hw = 960/size ;
    parent.innerHTML = '';
    for(let i = 0;i<size*size;i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.setAttribute("style",` height: ${hw}px; width: ${hw}px;`);
        div.addEventListener("mouseenter", ()=>{
            div.style.backgroundColor = "rgb(252, 189, 249)";
        });
        parent.appendChild(div);
    }
}

bttn.addEventListener("click",()=>{
    let size = parseInt(prompt("What's the size of grid??"));

    if(isNaN(size) || size < 1 || size > 100){
        alert("Please Enter any Number beteen 1 and 99");
    }
    else{
        makegrid(size);
    }
})

//makegrid(100);
