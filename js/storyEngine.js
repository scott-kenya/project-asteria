import { scenes } from "./scenes.js";

export default class StoryEngine {

constructor(){

this.scenes=scenes;

}

init(){

console.log("Story Engine Started");

this.build();

}

build(){

const container=document.querySelector("#story");

this.scenes.forEach(scene=>{

const section=document.createElement("section");

section.className="scene";

section.dataset.scene=scene.id;

section.innerHTML=`

<div class="scene-wrapper">

<h1>${scene.title}</h1>

</div>

`;

container.appendChild(section);

});

}

}