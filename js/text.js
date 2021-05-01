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
        let padding = parseFloat(getComputedStyle(textDOM).getPropertyValue(`padding-bottom`));
        $(textDOM).stop().animate({
            scrollTop: textDOM.scrollHeight - $(textToSend).outerHeight() - padding*1.75
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

        if(slider.previousElementSibling.classList.value.includes('videoContainer')){
            slider.previousElementSibling.style.setProperty(`margin-bottom`, `5%`);
        }
        else{slider.previousElementSibling.style.setProperty(`padding-bottom`, `5%`);}
        this.scrollDown(textDOM, slider);
    }

    showVideo(face, src){
        let textDOM = face.children[0];

        let videoContainer = document.createElement(`div`);
        videoContainer.classList.add(`videoContainer`);

        let video = document.createElement(`video`);
        video.classList.add(`vid`);

        let source = document.createElement("source"); 
        source.type = "video/mp4";
        source.src = src;

        video.setAttribute(`controls`, `controls`);
        

        videoContainer.append(video);
        textDOM.append(videoContainer);
        this.scrollDown(textDOM, videoContainer);

        requestTimeout(function(){
            //
            video.addEventListener(`loadeddata`, function(e){
                console.log(e)
                let video = e.target;
                let videoContainer = video.parentElement;
                videoContainer.classList.add(`showVid`);

                requestTimeout(function(){
                    video.classList.add(`show`);
                    this.snapToVideo(videoContainer, textDOM);

                    video.addEventListener(`play`, function(){
                        this.snapToVideo(videoContainer, textDOM);
                    }.bind(this));

                }.bind(this), 750);

            }.bind(this));

            video.append(source);

        }.bind(this), 1500);
    }
    
    snapToVideo(videoContainer, textDOM){
        let padding = parseFloat(getComputedStyle(textDOM).getPropertyValue(`padding-bottom`));
        let marginBottom = parseFloat(getComputedStyle(videoContainer).getPropertyValue(`margin-bottom`));

        console.log($(videoContainer).offset().top)
        // console.log(textDOM.scrollTop + $(videoContainer).position().top)

        let textBounding = textDOM.getBoundingClientRect(),
              videoBounding = videoContainer.getBoundingClientRect();
        
        let textBottom = textBounding.bottom,
        textTop = textBounding.top,
        videoBottom = videoBounding.bottom,
        videoTop = videoBounding.top;

        let scrollTo;
        if (textTop >= videoTop) {
            scrollTo = -(textTop - videoTop);
        } 
        else if (videoBottom > textBottom) {
            scrollTo = videoBottom - textBottom;
        }
        $(textDOM).stop().animate({
            scrollTop: scrollTo
        }, {
            duration: 1000,
            easing: "swing"
        });
    }
//class end    
}

var cubeContent = new CubeContent();

//add to main later
cubeContent.addTitle(frontFace, `water`, 1.8);

window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Water is an imaginary data structure.`);
    }, 1000);
});

window.addEventListener(`keypress`, function(e){
    if(e.key == 'b'){
        cubeContent.showVideo(backFace, `./videos/freeze.mp4`)
    }
    else if(e.key == 'f'){
        cubeContent.showVideo(frontFace, `./videos/freeze.mp4`)
    }
});