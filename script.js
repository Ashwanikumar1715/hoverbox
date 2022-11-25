const container=document.getElementById("container");
const colors=['red','yellow','green','pink','aqua','orange','white','violet'];
const SQUARES=504;
for(let i=0;i<SQUARES;i++){
    const square=document.createElement('div');
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover",()=>setColor(square));
    square.addEventListener("mouseout",()=>removeColor(square));
}

const getRandomColor=()=>colors[Math.floor(Math.random()*colors.length)];

const setColor=(element)=>{
    const color=getRandomColor();
    element.style.background=color;
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor=(element)=>{
    element.style.background="rgb(36, 38, 39)";
    element.style.boxShadow="0 0 2px #000"
}