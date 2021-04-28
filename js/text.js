class CubeContent{
    constructor(){

    }
    
    addTitle(face, str, factor=1.75){
        let textDOM = face.children[0];

        let titleDOM = document.createElement(`div`);
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

    addChat(face, str){
        let textDOM = face.children[0];

        let chatDOM = document.createElement(`p`);
        chatDOM.classList.add(`paragraph`);
        chatDOM.classList.add(`chat`);
        chatDOM.innerHTML = str;
        textDOM.append(chatDOM);

        $(textDOM).animate({
            scrollTop: textDOM.scrollHeight
        }, {
            duration: 450,
            easing: "swing"
        });

        chatDOM.classList.add(`send`);
    }

    addResponse(face, str){
        let textDOM = face.children[0];

        let responseDOM = document.createElement(`p`);
        responseDOM.classList.add(`paragraph`);
        responseDOM.classList.add(`response`);
        responseDOM.innerHTML = str;
        textDOM.append(responseDOM);

        $(textDOM).animate({
            scrollTop: textDOM.scrollHeight
        }, {
            duration: 450,
            easing: "swing"
        });

        responseDOM.classList.add(`send`);
    }
}

var cubeContent = new CubeContent();

//add to main later
cubeContent.addTitle(frontFace, `water`, 1.8);
window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `4 Water is an imaginary data structure.`);
    }, 1000);
});

// window.addEventListener(`mouseup`, function(){
//     cubeContent.addResponse(frontFace, `Okay, I can see that.`)
// });