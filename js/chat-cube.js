class ChatCube{
    constructor(id, lerpVFaceChange, lerpVRotate){
        this.cube = document.getElementById(id);
        this.front = this.cube.querySelector(`#front`);
        this.top = this.cube.querySelector(`#top`);
        this.left = this.cube.querySelector(`#left`);
        this.bottom = this.cube.querySelector(`#bottom`);
        this.right = this.cube.querySelector(`#right`);
        this.back = this.cube.querySelector(`#back`);

        this.curstate = 0;
        
        //properties used for lerp face change
        this.targetFaceWidthTwo = this.cube.offsetHeight;
        this.currentFaceWidthTwo = this.cube.offsetHeight;
        this.targetFaceHeightTwo = this.cube.offsetHeight;
        this.currentFaceHeightTwo = this.cube.offsetHeight;
        this.targetFaceWidthFour = this.cube.offsetWidth;
        this.currentFaceWidthFour = this.cube.offsetWidth;
        this.targetFaceHeightFour = this.cube.offsetHeight;
        this.currentFaceHeightFour = this.cube.offsetHeight;

        this.lastFaceChangeLerpAF = undefined;
        this.lerpSpeedFaceChange = lerpVFaceChange;
        this.faceChangeAnimFrame = undefined;

        //properties used to rotate
        this.targetRotateX = 0;
        this.targetRotateY = 0;
        //original rotation agles without tilt
        this.x = 0;
        this.y = 0;
        //properties used to tilt the cube
        this.tiltXRate = mobileAndTabletCheck() ? 7 : 6;
        this.tiltYRate = mobileAndTabletCheck() ? 7 : 6;
        //properties for lerp rotation
        this.lastRotateLerpAF = undefined;
        this.lerpSpeedRotate = lerpVRotate;
        this.rotateAnimFrame = undefined;

        //for mobile scroll
        this.lastTouchY = 0;
        this.hasAddScroll = {
            top : false,
            left: false,
            bottom : false,
            right : false
        };


        this.checkBlur();
        this.startTilt();

        this.cubeOnResize();
        window.addEventListener(`resize`, this.cubeOnResize.bind(this));


        this.front.style.setProperty(`z-index`, `2`);

    }

    //resize each face of the cube after window resize
    cubeOnResize(){
        this.cube.style.setProperty(`width`, `${0.85 * window.innerWidth}px`);
        this.cube.style.setProperty(`height`, `${0.478125 * window.innerWidth}px`);

        let canChange = this.curstate == 2 || this.curstate == 4 ? 1 : 0;
        this.toggleFaceChange(canChange);

        this.cube.style.setProperty(`left`, `${0.5 * window.innerWidth - this.cube.offsetWidth / 2}px`);
        this.cube.style.setProperty(`top`, `${0.5 * window.innerHeight - this.cube.offsetHeight / 2}px`);
    }


    //set target face change size and start anim frame of lerp face change
    toggleFaceChange(toggle){
        if(toggle === undefined || (toggle !== 0 && toggle !== 1)){
            return;
        }

        //0 set left/right face width to same as height
        //1 set left/right face width to same as front face width
        if(toggle === 0){
            this.targetFaceWidthTwo = this.cube.offsetHeight;
            this.targetFaceHeightTwo = this.cube.offsetHeight;
            this.targetFaceWidthFour = this.cube.offsetWidth;
            this.targetFaceHeightFour = this.cube.offsetHeight;
        }
        else if(toggle === 1){
            this.targetFaceWidthTwo = this.cube.offsetWidth;
            this.targetFaceHeightTwo = this.cube.offsetHeight;
            this.targetFaceWidthFour = this.cube.offsetWidth;
            this.targetFaceHeightFour = this.cube.offsetHeight;
        }
        cancelAnimationFrame(this.faceChangeAnimFrame);
        this.faceChangeAnimFrame = requestAnimFrame(this.faceChangeLerp.bind(this));
    }

    //lerp face size change
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
        
        this.currentFaceHeightTwo = lerp(this.currentFaceHeightTwo, 
                this.targetFaceHeightTwo, 1 - Math.pow(this.lerpSpeedFaceChange, deltaTime));
        
        this.currentFaceWidthFour = lerp(this.currentFaceWidthFour, 
            this.targetFaceWidthFour, 1 - Math.pow(this.lerpSpeedFaceChange, deltaTime));

        this.currentFaceHeightFour = lerp(this.currentFaceHeightFour, 
            this.targetFaceHeightFour, 1 - Math.pow(this.lerpSpeedFaceChange, deltaTime));


        this.cube.style.setProperty("--faceWidthTwo", `${this.currentFaceWidthTwo}px`);
        this.cube.style.setProperty("--faceHeightTwo", `${this.currentFaceHeightTwo}px`);
        this.cube.style.setProperty("--faceWidthFour", `${this.currentFaceWidthFour}px`);
        this.cube.style.setProperty("--faceHeightFour", `${this.currentFaceHeightFour}px`);

        cancelAnimationFrame(this.faceChangeAnimFrame);

        if(Math.abs(this.currentFaceWidthTwo - this.targetFaceWidthTwo) <= 0.1 && 
            Math.abs(this.currentFaceHeightTwo - this.targetFaceHeightTwo) <= 0.1 &&
            Math.abs(this.currentFaceWidthFour - this.targetFaceWidthFour) <= 0.1 &&
            Math.abs(this.currentFaceHeightFour - this.targetFaceHeightFour) <= 0.1) 
            {
            this.lastFaceChangeLerpAF = undefined;
        }
        else{
            this.faceChangeAnimFrame = requestAnimFrame(this.faceChangeLerp.bind(this));
        }
    }

    //set target rotate angles and start rotation
    startRotateToTargetAngles(){
        this.targetRotateX = this.x;
        this.targetRotateY = this.y;

        cancelAnimationFrame(this.rotateAnimFrame);
        this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
    }

    //set tilt angles and start rotation
    startTilt(){
        window.addEventListener("mousemove", function(ev){
            this.setTiltAngles(ev);

            cancelAnimationFrame(this.rotateAnimFrame);
            this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }.bind(this));

        window.addEventListener("touchmove", function(ev){
            this.setTiltAngles(ev);
            cancelAnimationFrame(this.rotateAnimFrame);
            this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }.bind(this));
    }

    //set tilt angles based on the position of the mouse / touch in window
    setTiltAngles(ev){
        var rxRate;
        var ryRate;
        if(ev.type === "mouseup" || ev.type === "mousedown" || ev.type === "mousemove"){
            rxRate = (ev.clientY - window.innerHeight/2) / (window.innerHeight/2);
            ryRate = (ev.clientX - window.innerWidth/2) / (window.innerWidth/2);
        }
        else{
            let touch = ev.changedTouches[0];
            //times 1.5 because on phone the tilt angle seems too small / slow
            rxRate = 2 * (touch.clientY - window.innerHeight/2) / (window.innerHeight/2);
            ryRate = 2 * (touch.clientX - window.innerWidth/2) / (window.innerWidth/2);
        }
        
        var rotateXAdd = rxRate * this.tiltXRate;
        var rotateYAdd = ryRate * this.tiltYRate;

        this.targetRotateX = this.x - rotateXAdd;
        this.targetRotateY = this.y + rotateYAdd;
    }

    //lerp rotation of the cube
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

        cancelAnimationFrame(this.rotateAnimFrame);

        if(Math.abs(curRotateX - this.targetRotateX) <= 0.05 && 
            Math.abs(curRotateY - this.targetRotateY) <= 0.05){
            this.lastRotateLerpAF = undefined;
        }
        else{
            this.rotateAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }
    }

    resetZIndex(toRemove, toAdd){
        toRemove.style.setProperty(`z-index`, `initial`);
        toAdd.style.setProperty(`z-index`, `2`);

        toRemove.children[0].style.setProperty(`opacity`, `0`);
        toAdd.children[0].style.setProperty(`opacity`, `1`);
    }

    /** help function for scroll for safari and mobile */
    safariScroll(e, face){
        e.preventDefault();
        let wheelDelta = e.deltaY;

        face.firstElementChild.scrollTop += wheelDelta;
    }

    mobileScrollStart(e){
        if(e.cancelable){
            e.preventDefault();
        }
        this.lastTouchY = e.changedTouches[0].clientY;
    }

    mobileScroll(e, face){
        if(e.cancelable){
            e.preventDefault();
        }
        let curTouchY = e.changedTouches[0].clientY;
        let wheelDelta = curTouchY - this.lastTouchY;
        this.lastTouchY = curTouchY;
        console.log(wheelDelta);

        face.firstElementChild.scrollTop += wheelDelta * -1.1;
    }
    /***************************************************** */

    adaptScrollSafariMobile(face){
        let allow;
        switch (face.id){
            case 'front':
                return;
            case 'top':
                if(this.hasAddScroll.top){
                    return;
                }
                this.hasAddScroll.top = true;
                allow = 1;
                break;
            case 'left':
                if(this.hasAddScroll.left){
                    return;
                }
                this.hasAddScroll.left = true;
                allow = 2;
                break;
            case 'bottom':
                if(this.hasAddScroll.bottom){
                    return;
                }
                this.hasAddScroll.bottom = true;
                allow = 3;
                break;
            case 'right':
                if(this.hasAddScroll.right){
                    return;
                }
                this.hasAddScroll.right = true;
                allow = 4;
                break;
            case 'back':
                return;
        }


        if(isSafari){
            window.addEventListener(`wheel`, function(e){
                if(this.curstate == allow) this.safariScroll(e, face);
            }.bind(this));
        }

        if(mobileAndTabletCheck()){
            window.addEventListener(`touchstart`, function(e){
                if(this.curstate == allow) this.mobileScrollStart(e);
            }.bind(this));

            window.addEventListener(`touchmove`, function(e){
                if(this.curstate == allow) this.mobileScroll(e, face);  
            }.bind(this));
        }
    }



    //alternate rotation among all 6 faces of the cube
    rotate(){
        //if is at front, go to top;
        if(this.curstate == 0){
            this.x = -90;
            this.y = 0;
            this.startRotateToTargetAngles();
            this.resetZIndex(this.front, this.top);
            this.tiltXRate = mobileAndTabletCheck() ? 7 : 6;
            this.tiltYRate = mobileAndTabletCheck() ? 1.5 : 2;

            this.adaptScrollSafariMobile(this.top);
        }
        //go to left
        else if(this.curstate == 1){
            this.x = 0;
            this.y = 90;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(1);
            this.resetZIndex(this.top, this.left);
            this.tiltXRate = mobileAndTabletCheck() ? 7 : 6;
            this.tiltYRate = mobileAndTabletCheck() ? 7 : 6;

            this.adaptScrollSafariMobile(this.left);
        }
        //go to bottom
        else if(this.curstate == 2){
            this.x = 90;
            this.y = 0;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(0);
            this.resetZIndex(this.left, this.bottom);
            this.tiltXRate = mobileAndTabletCheck() ? 7 : 6;
            this.tiltYRate = mobileAndTabletCheck() ? 1.5 : 2;

            this.adaptScrollSafariMobile(this.bottom);
        }
        // go to right
        else if(this.curstate == 3){
            this.x = 0;
            this.y = -90;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(1);
            this.resetZIndex(this.bottom, this.right);
            this.tiltXRate = mobileAndTabletCheck() ? 7 : 6;
            this.tiltYRate = mobileAndTabletCheck() ? 7 : 6;

            this.adaptScrollSafariMobile(this.right);
        }
        //go to back
        else if(this.curstate == 4){
            this.x = 0;
            this.y = 180;
            this.startRotateToTargetAngles();
            this.toggleFaceChange(0);
            this.resetZIndex(this.right, this.back);
        }
        //go to front
        else if(this.curstate == 5){
            this.x = 0;
            this.y = 0;
            this.startRotateToTargetAngles();
            this.resetZIndex(this.back, this.front);
        }
        this.curstate = (this.curstate + 1) % 6;
    }

    // check if current tab is active or not
    checkBlur(){
        vis(function(){
            // if(vis()){                   
            // } 
            if(vis() == false) {
                // tab not focused
                this.lastFaceChangeLerpAF = undefined;
                this.lastRotateLerpAF = undefined;
            }
        });
        
        var notIE = (document.documentMode === undefined),
            isChromium = window.chrome;
        if (notIE && !isChromium) {
            // checks for Firefox and other  NON IE Chrome versions
            window.addEventListener("focusout", function () {
                // blur
                this.lastFaceChangeLerpAF = undefined;
                this.lastRotateLerpAF = undefined;
            });
        } 
        else {
            // checks for IE and Chromium versions
            // bind blur event
            window.addEventListener("blur", function () {
                // blur
                this.lastFaceChangeLerpAF = undefined;
                this.lastRotateLerpAF = undefined;
            });
        }
    }
}

var chatCube = new ChatCube("chat-cube", 0.1, 0.1);
// requestTimeout(function(){
//     chatCube.rotate();
//     requestTimeout(function(){
//         chatCube.rotate();
//         requestTimeout(function(){
//             chatCube.rotate();
//             requestTimeout(function(){
//                 chatCube.rotate();
//                 requestTimeout(function(){
//                     chatCube.rotate();
//                     requestTimeout(function(){
//                         chatCube.rotate();
//                     }, 5000);
//                 }, 5000);
//             }, 5000);
//         }, 5000);
//     }, 5000);
// }, 5000);