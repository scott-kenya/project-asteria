const nav=document.querySelector("#navigation");

scenes.forEach(scene=>{

const a=document.createElement("a");

a.innerText=scene.chapter;

nav.appendChild(a);

});