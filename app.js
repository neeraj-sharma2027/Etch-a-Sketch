function makegrid(size){
    for(let i = 0;i<size;i++){
        for(let j = 0;j<size;j++){
            const parent = document.querySelector(".container");
            const div = document.createElement("div");
            parent.appendChild(div);
        }
    }
}

const bttn = document.querySelector("#btn");
bttn.addEventListener("click",()=>{
    let size = prompt("What's the size of grid");
    makegrid(size);
})