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

        window.addEventListener(`resize`, ()=>{this.resizeTitle(titleDOM, factor)});
    }

    resizeTitle(title, factor){
        title.style.setProperty(`font-size`, `${chatCube.targetFaceHeightFour / factor}px`);
    }

    scrollDown(textDOM, textToSend){
        $(textDOM).stop().animate({
            scrollTop: textDOM.scrollHeight - $(textToSend).outerHeight()
        }, {
            duration: 1000,
            easing: "swing"
        });

        requestTimeout(function(){
            textToSend.classList.add(`send`);
        }, 350);
    }

    addChat(face, str){
        let textDOM = face.children[0];

        let chatDOM = document.createElement(`p`);
        chatDOM.classList.add(`paragraph`);
        chatDOM.classList.add(`chat`);
        chatDOM.innerHTML = str;
        textDOM.append(chatDOM);

        this.scrollDown(textDOM, chatDOM);
    }

    addResponse(face, str){
        let textDOM = face.children[0];

        let responseDOM = document.createElement(`p`);
        responseDOM.classList.add(`paragraph`);
        responseDOM.classList.add(`response`);
        responseDOM.innerHTML = str;
        textDOM.append(responseDOM);

        this.scrollDown(textDOM, responseDOM);
    }

    addSlider(face, min, max, initialVal){
        let textDOM = face.children[0];
        
        let slider = document.createElement(`input`);
        slider.setAttribute(`type`, `range`);
        slider.setAttribute(`min`, `${min}`);
        slider.setAttribute(`max`, `${max}`);
        slider.setAttribute(`value`, `${initialVal}`);
        
        slider.classList.add(`slider`);
        textDOM.append(slider);

        

        slider.addEventListener(`input`, function(e){
            let val = e.target.value;
            let max = e.target.max;
            let min = e.target.min;

            let total = max - min;
            let scale = 1;
            let color = 0;

            if( total > Math.max(Math.abs(max), Math.abs(min)) ){
                scale = Math.abs(val) / ((max-min)*1.25);
                if(val <= 0){
                    let maxmap = Math.max(Math.abs(max), Math.abs(min)) / ((max-min)*1.25)
                    color = map(scale*50, 0, maxmap*50, 0, 255);
                }
                else{
                    color = 0;
                }
            }
            else{
                scale = Math.abs(val) / ((max-min)*2.5);
            }
            scale += 1;
            e.target.style.setProperty(`--scaling`, scale);
            e.target.style.setProperty(`--coloring`, color);
        });

        slider.previousElementSibling.style.setProperty(`padding-bottom`, `5%`);
        this.scrollDown(textDOM, slider);
    }
}

var cubeContent = new CubeContent();

//add to main later
cubeContent.addTitle(frontFace, `water`, 1.8);

window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Water is an imaginary data structure.`);
    }, 1000);
});

// window.addEventListener(`mouseup`, function(){
//     // cubeContent.addResponse(frontFace, `Okay, I can see that.`)
//     cubeContent.addSlider(frontFace, -1000, 1000, 0)
// });