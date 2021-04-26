class CubeContent{
    constructor(){
        
    }
    
    addTitle(face, str, factor=1.75){
        let textDOM = face.children[0];

        let titleDOM = document.createElement(`span`);
        titleDOM.classList.add(`title`);
        titleDOM.innerHTML = str;
        textDOM.prepend(titleDOM);

        let fontSize = chatCube.targetFaceHeightFour / factor
        titleDOM.style.setProperty(`font-size`, `${fontSize}px`);
        console.log(fontSize);

        window.addEventListener(`resize`, ()=>{this.resizeTitle(titleDOM, factor)});
    }

    resizeTitle(title, factor){
        console.log(chatCube.targetFaceHeightFour)
        title.style.setProperty(`font-size`, `${chatCube.targetFaceHeightFour / factor}px`);
    }
}

var cubeContent = new CubeContent();
// cubeContent.addTitle(frontFace, `mate<br>rials`, 1.75);
