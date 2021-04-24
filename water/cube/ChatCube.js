class ChatCube{
    constructor(cubeWidth, lerpVFaceChange, lerpVRotate){
        this.cube = document.getElementById("chat-cube");

        this.curstate = 0;
        this.width = cubeWidth;
        this.height = this.width * 9.0 / 16.0;

        //set the width and height of the chat cube
        this.setWidthHeight(this.width, this.height, this.height, this.height);
        
        //properties used for lerp face change
        this.targetFaceWidthTwo = this.height;
        this.currentFaceWidthTwo = this.height;

        this.lastFaceChangeLerpAF = undefined;
        this.lerpSpeedFaceChange = lerpVFaceChange;
        this.faceChangeAnimFrame = undefined;

        //properties used to rotate
        this.targetRotateX = 0;
        this.targetRotateY = 0;
        this.x = 0;
        this.y = 0;
        //properties used to tilt the cube
        this.tiltXRate = 5;
        this.tiltYRate = 4;
        //properties for lerp rotation
        this.lastRotateLerpAF = undefined;
        this.lerpSpeedRotate = lerpVRotate;
        this.rotateAnimFrame = undefined;
    }

    //set the width and height of all six faces of the chat cube
    setWidthHeight(w4, h4, w2, h2){
        this.cube.style.setProperty("--faceWidthFour", `${w4}vw`);
        this.cube.style.setProperty("--faceHeightFour", `${h4}vw`);
        this.cube.style.setProperty("--faceWidthTwo", `${w2}vw`);
        this.cube.style.setProperty("--faceHeightTwo", `${h2}vw`);
    }

    //set target face change size and start anim frame of lerp face change
    toggleFaceChange(toggle){
        if(toggle === undefined || (toggle !== 0 && toggle !== 1)){
            return;
        }

        //0 set left/right face width to same as height
        //1 set left/right face width to same as front face width
        if(toggle === 0){
            this.targetFaceWidthTwo = this.height;
        }
        else if(toggle === 1){
            this.targetFaceWidthTwo = this.width;
        }
        cancelAnimationFrame(this.faceChangeAnimFrame);
        this.faceChangeAnimFrame = requestAnimFrame(this.faceChangeLerp.bind(this));
    }

    faceChangeLerp(timestamp){
        if(this.lastFaceChangeLerpAF === undefined){
            this.lastFaceChangeLerpAF = timestamp;
        }

        //calculate deltatime
        var curLerpAF = timestamp;
        var deltaTime = (curLerpAF - this.lastFaceChangeLerpAF)/1000;
        this.lastFaceChangeLerpAF = curLerpAF;

        this.currentFaceWidthTwo = lerp(this.currentFaceWidthTwo, 
            this.targetFaceWidthTwo, 1 - Math.pow(this.lerpSpeedFaceChange, deltaTime));

        this.cube.style.setProperty("--faceWidthTwo", `${this.currentFaceWidthTwo}vw`);
        
        cancelAnimationFrame(this.faceChangeAnimFrame);

        if(Math.abs(this.currentFaceWidthTwo - this.targetFaceWidthTwo) <= 0.1){
            this.lastFaceChangeLerpAF = undefined;
        }
        else{
            this.faceChangeAnimFrame = requestAnimFrame(this.faceChangeLerp.bind(this));
        }
    }

    startRotateToTargetAngles(){
        this.targetRotateX = this.x;
        this.targetRotateY = this.y;

        cancelAnimationFrame(this.rotateAnimFrame);
        this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
    }

    startTilt(){
        window.addEventListener("mousemove", function(ev){
            this.setTiltAngles(ev);

            cancelAnimationFrame(this.rotateAnimFrame);
            this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }.bind(this));
    }

    setTiltAngles(ev){
        var rxRate = (ev.clientY - window.innerHeight/2) / (window.innerHeight/2);
        var ryRate = (ev.clientX - window.innerWidth/2) / (window.innerWidth/2);
        
        var rotateXAdd = rxRate * this.tiltXRate;
        var rotateYAdd = ryRate * this.tiltYRate;

        this.targetRotateX = this.x - rotateXAdd;
        this.targetRotateY = this.y + rotateYAdd;


    }

    rotateLerp(timestamp){
        if(this.lastRotateLerpAF === undefined){
            this.lastRotateLerpAF = timestamp;
        }
        var curRotateLerpAF = timestamp;
        var deltaTime = (curRotateLerpAF - this.lastRotateLerpAF) /1000;
        this.lastRotateLerpAF = curRotateLerpAF;

        var curRotateX = parseFloat(getComputedStyle(this.cube).getPropertyValue("--chatRotateX"));
        var curRotateY = parseFloat(getComputedStyle(this.cube).getPropertyValue("--chatRotateY"));

        curRotateX = lerp(curRotateX, this.targetRotateX,
            1 - Math.pow(this.lerpSpeedRotate, deltaTime));
        curRotateY = lerp(curRotateY, this.targetRotateY,
            1 - Math.pow(this.lerpSpeedRotate, deltaTime));

        this.cube.style.setProperty("--chatRotateX", `${curRotateX}deg`);
        this.cube.style.setProperty("--chatRotateY", `${curRotateY}deg`);

        console.log(curRotateX, curRotateY)

        cancelAnimationFrame(this.rotateAnimFrame);

        if(Math.abs(curRotateX - this.targetRotateX) <= 0.05 && 
            Math.abs(curRotateY - this.targetRotateY) <= 0.05){
            this.lastRotateLerpAF = undefined;
        }
        else{
            this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }
    }

    rotate(){
        //if is at front, go to top;
        if(this.curstate === 0){
            this.x = -90;
            this.y = 0;
            this.startRotateToTargetAngles();
        }
        //go to left
        else if(this.curstate === 1){
            this.x = 0;
            this.y = 90;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(1);
        }
        //go to bottom
        else if(this.curstate === 2){
            this.x = 90;
            this.y = 0;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(0);
        }
        // go to right
        else if(this.curstate === 3){
            this.x = 0;
            this.y = -90;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(1);
        }
        //go to back
        else if(this.curstate === 4){
            this.x = 0;
            this.y = 180;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(0);
        }
        //go to front
        else if(this.curstate === 5){
            this.x = 0;
            this.y = 0;
            this.startRotateToTargetAngles();
        }
        this.curstate = (this.curstate + 1) % 6;
    }

}

var chatCube = new ChatCube(70, 0.25, 0.25);
chatCube.startTilt();
requestTimeout(function(){
    chatCube.rotate();
    requestTimeout(function(){
        chatCube.rotate();
        requestTimeout(function(){
            chatCube.rotate();
            requestTimeout(function(){
                chatCube.rotate();
                requestTimeout(function(){
                    chatCube.rotate();
                    requestTimeout(function(){
                        chatCube.rotate();
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);
