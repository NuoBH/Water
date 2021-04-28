function addImageCube(face, mediaLinks){
    if(!Array.isArray(mediaLinks) || mediaLinks.length != 6){
        console.debug("add image cube, media links not valid");
        return;
    }

    let textDOM = face.children[0];
    let imageCubeDOM = document.createElement("div");
    imageCubeDOM.id = "image-cube";
    imageCubeDOM.classList.add("noselect");

    let faceClasses = ["image-cube-front", "image-cube-left", "image-cube-right", 
                       "image-cube-top", "image-cube-bottom", "image-cube-back"];
    let allFaceClass = "image-cube-face";
    let mediaClass = "image-cube-media";
    let dragClass = "todrag";

    for(let i = 0; i < faceClasses.length; i ++){
        let faceDOM = document.createElement("div");
        faceDOM.classList.add(`${allFaceClass}`, `${faceClasses[i]}`);

        let filepath = mediaLinks[i];
        let fileExtension = filepath.split('.').pop().toLowerCase();

        if( fileExtension == "jpg" || fileExtension == "jpeg" || fileExtension == "png" || fileExtension == "gif"){
            let mediaDOM = document.createElement("img");
            mediaDOM.classList.add(`${mediaClass}`);
            mediaDOM.src = filepath;

            let cover = document.createElement("div");
            cover.classList.add(`${mediaClass}`, `${dragClass}`);

            //faceDOM.appendChild(mediaDOM);
            //faceDOM.appendChild(cover);
        }
        else if(fileExtension == "mp4" || fileExtension == "mov" || fileExtension == "mkv"){
            let mediaDOM = document.createElement("video");
            mediaDOM.id = "video";
            mediaDOM.classList.add(`${mediaClass}`, `${dragClass}`);
            mediaDOM.setAttribute("muted", "muted");
            mediaDOM.setAttribute("autoplay", "autoplay");
            mediaDOM.setAttribute("loop", "loop");
            mediaDOM.setAttribute("playsinline", "playsinline");

            let sourceDOM = document.createElement("source");
            sourceDOM.src = filepath;
            sourceDOM.type = `video/${fileExtension}`;

            mediaDOM.appendChild(sourceDOM);
            //faceDOM.appendChild(mediaDOM);
        }
        imageCubeDOM.appendChild(faceDOM);
    }

    textDOM.appendChild(imageCubeDOM);
    return new ImageCube(-15, 30, 0.2);
}

class ImageCube{
    constructor(startRotateX, startRotateY, lerpV){
        this.cube = document.getElementById("image-cube");

        //properties used to rotate cube
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.XDeg = startRotateX + 1;
        this.YDeg = startRotateY + 1;

        this.isDragging = false;

        //properties used to lerp rotation
        this.lastRotateAF = undefined;
        this.rotateCubeAnimFrame = undefined;
        this.lerpSpeed = lerpV;

        //used to test if touch moves on mobile after touch start
        this.hasTouchMoved = false;

        //set video hover show control effect
        this.videos = this.cube.querySelectorAll("#video");
        for(var i = 0; i < this.videos.length; i ++){
            this.videos[i].addEventListener("mouseenter", function(ev){
                if(!this.isDragging){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    ev.target.setAttribute("controls", "controls");
                }
            }.bind(this));

            this.videos[i].addEventListener("mouseleave", function(ev){
                if(!this.isDragging){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    ev.target.removeAttribute("controls");
                }
            }.bind(this));
        }

        //show video controls at start if device is mobile
        if(mobileAndTabletCheck()){
            ImageCube.showAllVideoControls(this.videos);
        }

        this.dragRotate();
    }
    
    /** ---------------------------helper functions-------------------------- */

    //hide or show videos controls --- vids --- is a NodeList
    static hideAllVideoControls(vids){
        for(var i = 0; i < vids.length; i++){
            vids[i].removeAttribute("controls");
        }
    }

    static showAllVideoControls(vids){
        for(var i = 0; i < vids.length; i++){
            vids[i].setAttribute("controls", "controls");
        }
    }

    static checkSingleVideoControl(vid, action){
        if(action === undefined || (action !== 0 && action !== 1)){
            return;
        }

        //toggle if action is 1, do nothing if action is 0
        if(action === 1){
            if(vid.hasAttribute("controls")){
                vid.removeAttribute("controls");
            }
            else{
                vid.setAttribute("controls", "controls");
            }
        }
    }

    //check each video in vids and perform an action on their controls (show or hide)
    static checkAllVideoControls(vids, action){
        if(action === undefined || (action !== 0 && action !== 1)){
            return;
        }

        for(var i = 0; i < vids.length; i++){
            //toggle if action is 1, do nothing if action is 0
            ImageCube.checkSingleVideoControl(vids[i], action);
        }
    }

    /** -------------------------------------------------------------- */

    //function to rotate cube with mouse/touch
    rotateCubeByMousePos(ev){
        var deltaX;
        var deltaY;
        var speed;

        //if is mouse event, use mouse position to rotate cube
        if(ev.type === "mouseup" || ev.type === "mousedown" || ev.type === "mousemove"){
            deltaX = ev.pageX - this.lastMouseX;
            deltaY = ev.pageY - this.lastMouseY;

            this.lastMouseX = ev.pageX;
            this.lastMouseY = ev.pageY;

            speed = 0.32;
        }
        //if its touch event use touch pos to rotate cube
        else{
            var touch = ev.changedTouches[0];

            deltaX = touch.pageX - this.lastMouseX;
            deltaY = touch.pageY - this.lastMouseY;

            this.lastMouseX = touch.pageX;
            this.lastMouseY = touch.pageY;

            speed = 0.5;
        }

        //set the degree to rotate to
        this.YDeg += deltaX * speed;
        this.XDeg -= deltaY * speed;


    }

    //rotate cube using lerp
    rotateLerp(timestamp){
        if(this.lastRotateAF === undefined){
            this.lastRotateAF = timestamp;
        }

        //get delta time for lerp
        var curRotateAF = timestamp;
        var deltaTime = (curRotateAF - this.lastRotateAF)/1000;
        this.lastRotateAF = curRotateAF;

        //get current rotate degrees
        var curRotateX = parseFloat(getComputedStyle(this.cube).getPropertyValue("--imageRotateX"));
        var curRotateY = parseFloat(getComputedStyle(this.cube).getPropertyValue("--imageRotateY"));
        var targetX = this.XDeg;
        var targetY = this.YDeg;

        //lerp currrent rotation to target rotation
        curRotateX = lerp(curRotateX, targetX, 1 - Math.pow(this.lerpSpeed, deltaTime));
        curRotateY = lerp(curRotateY, targetY, 1 - Math.pow(this.lerpSpeed, deltaTime));
        //set rotate deg to css
        this.cube.style.setProperty("--imageRotateX", `${curRotateX}deg`);
        this.cube.style.setProperty("--imageRotateY", `${curRotateY}deg`);

        cancelAnimationFrame(this.rotateCubeAnimFrame);

        //test whether cur rotation is close enough to target rotation
        if(Math.abs(curRotateX - targetX) <= 0.05 && Math.abs(curRotateY - targetY) <= 0.05){
            this.lastRotateAF = undefined;
        }
        else{
            this.rotateCubeAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
        }

    }

    //drag that fires several events for rotating the cube
    dragRotate(){
        //all elements that can be dragged
        const media = document.getElementsByClassName("todrag");

        //add event listeners to all draggable elements
        for(var i = 0; i < media.length; i ++){
            var node = media.item(i);

            if(node !== null && node !== undefined){
                node.addEventListener("mousedown", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = true;
                    this.lastMouseX = ev.pageX;
                    this.lastMouseY = ev.pageY;

                    cancelAnimationFrame(this.rotateCubeAnimFrame);
                    this.rotateCubeAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));

                }.bind(this));

                node.addEventListener("touchstart", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = true;
                    var touch = ev.changedTouches[0];
                    this.lastMouseX = touch.pageX;
                    this.lastMouseY = touch.pageY;
                    this.hasTouchMoved = false;
                    
                    cancelAnimationFrame(this.rotateCubeAnimFrame);
                    this.rotateCubeAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));

                }.bind(this));

                node.addEventListener("mouseup", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = false;
                }.bind(this));

                node.addEventListener("touchend", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = false;

                    if(!this.hasTouchMoved){
                        if(ev.currentTarget.id == "video"){
                            ImageCube.checkSingleVideoControl(ev.currentTarget, 1);
                        }
                    }
                    this.hasTouchMoved = false;

                }.bind(this));
        
                node.addEventListener("mousemove", function(ev){
                    if(this.isDragging){
                        ImageCube.hideAllVideoControls(this.videos);

                        if(ev.cancelable){
                            ev.preventDefault();
                        }
                        this.rotateCubeByMousePos(ev);
                    }
                }.bind(this));

                node.addEventListener("touchmove", function(ev){
                    if(this.isDragging){
                        this.hasTouchMoved = true;
                        ImageCube.hideAllVideoControls(this.videos);
                        if(ev.cancelable){
                            ev.preventDefault();
                        }
                        this.rotateCubeByMousePos(ev);
                    }
                }.bind(this));
            }
        }

        window.addEventListener("mouseup", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.isDragging = false;
        }.bind(this));

        window.addEventListener("touchend", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.isDragging = false;
            this.hasTouchMoved = false;
        }.bind(this));

        window.addEventListener("mousemove", function(ev){
            if(this.isDragging){
                ImageCube.hideAllVideoControls(this.videos);
                if(ev.cancelable){
                    ev.preventDefault();
                }
                this.rotateCubeByMousePos(ev);
            }
        }.bind(this));

        window.addEventListener("touchmove", function(ev){
            if(this.isDragging){
                this.hasTouchMoved = true;
                ImageCube.hideAllVideoControls(this.videos);
                this.rotateCubeByMousePos(ev);
            }
        }.bind(this));
    }

    checkBlur(){
        vis(function(){
            // if(vis()){                   
            // } 
            if(vis() == false) {
                // tab not focused
                this.lastRotateAF = undefined;
            }
        });
        
        var notIE = (document.documentMode === undefined),
            isChromium = window.chrome;
        if (notIE && !isChromium) {
            // checks for Firefox and other  NON IE Chrome versions
            $(window).on("focusout", function () {
                // blur
                this.lastRotateAF = undefined;
            });
        } 
        else {
            // checks for IE and Chromium versions
            // bind blur event
            window.addEventListener("blur", function () {
                // blur
                this.lastRotateAF = undefined;
            });
        }
    }
}

addImageCube(frontFace, [
    "../media/test.JPG",
    "../media/prepare water fast.mp4",
    "../media/test.JPG",
    "../media/test.JPG",
    "../media/test.JPG",
    "../media/test.JPG",
])