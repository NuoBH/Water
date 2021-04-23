const lerp = function (value1, value2, amount) {
    amount = amount < 0 ? 0 : amount;
    amount = amount > 1 ? 1 : amount;
    return value1 + (value2 - value1) * amount;
};

class ImageCube{
    constructor(){
        this.cube = document.getElementById("image-cube");
        this.curstate = -1;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.XDeg = -14;
        this.YDeg = 31;
        this.isDragging = false;
        this.draggingAnim = undefined;
        this.lastRotateAF = undefined;
        this.rotateCubeAnimFrame = undefined;

        this.clickedOnVideo = false;
        this.videoToReset = undefined;
        this.resetVideo = false;

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

        if(mobileAndTabletCheck()){
            for(var i = 0; i < this.videos.length; i++){
                this.videos[i].setAttribute("controls", "controls");
            }
        }
    }

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

            speed = 0.24;
        }
        //if its touch event use touch pos to rotate cube
        else{
            var touch = ev.changedTouches[0];

            deltaX = touch.pageX - this.lastMouseX;
            deltaY = touch.pageY - this.lastMouseY;

            this.lastMouseX = touch.pageX;
            this.lastMouseY = touch.pageY;

            speed = 0.38;
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
        var curRotateX = parseFloat(getComputedStyle(this.cube).getPropertyValue("--rotateX"));
        var curRotateY = parseFloat(getComputedStyle(this.cube).getPropertyValue("--rotateY"));
        var targetX = this.XDeg;
        var targetY = this.YDeg;

        //lerp currrent rotation to target rotation
        curRotateX = lerp(curRotateX, targetX, 1 - Math.pow(0.2, deltaTime));
        curRotateY = lerp(curRotateY, targetY, 1 - Math.pow(0.2, deltaTime));
        //set rotate deg to css
        this.cube.style.setProperty("--rotateX", `${curRotateX}deg`);
        this.cube.style.setProperty("--rotateY", `${curRotateY}deg`);

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
        const media = document.getElementsByClassName("todrag");

        for(var i = 0; i < media.length; i ++){
            var node = media.item(i);

            //attach event listeners
            if(node !== null && node !== undefined){
                node.addEventListener("mousedown", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = true;
                    this.lastMouseX = ev.pageX;
                    this.lastMouseY = ev.pageY;

                    if(ev.currentTarget.id === "video"){
                        this.clickedOnVideo = true;
                        this.videoToReset = ev.currentTarget;
                    }

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
                    ImageCube.showAllVideoControls(this.videos);
                    
                    cancelAnimationFrame(this.rotateCubeAnimFrame);

                    this.rotateCubeAnimFrame = requestAnimFrame(this.rotateLerp.bind(this));
                }.bind(this));

                node.addEventListener("mouseup", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = false;

                    if(this.resetVideo){
                        if(this.videoToReset.paused){
                            this.videoToReset.play();
                        }
                        else{
                            this.videoToReset.pause();
                        }
                    }

                    ImageCube.showAllVideoControls(this.videos);

                    this.clickedOnVideo = false;
                    this.resetVideo = false;
                    this. videoToReset = undefined;
                }.bind(this));

                node.addEventListener("touchend", function(ev){
                    if(ev.cancelable){
                        ev.preventDefault();
                    }
                    this.isDragging = false;
                    // ImageCube.showAllVideoControls(this.videos);

                }.bind(this));
        
                node.addEventListener("mousemove", function(ev){
                    if(this.isDragging){
                        ImageCube.hideAllVideoControls(this.videos);

                        if(ev.cancelable){
                            ev.preventDefault();
                        }
                        this.rotateCubeByMousePos(ev);

                        if(this.clickedOnVideo){
                            this.resetVideo = true;
                        }
                    }
                }.bind(this));

                node.addEventListener("touchmove", function(ev){
                    if(this.isDragging){
                        ImageCube.hideAllVideoControls(this.videos);
                        if(ev.cancelable){
                            ev.preventDefault();
                        }
                        this.rotateCubeByMousePos(ev);

                        if(this.clickedOnVideo){
                            this.resetVideo = true;
                        }
                    }
                }.bind(this));
            }
        }

        document.addEventListener("mouseup", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.isDragging = false;
            ImageCube.showAllVideoControls(this.videos);

            this.clickedOnVideo = false;
            this.resetVideo = false;
            this. videoToReset = undefined;
        }.bind(this));

        document.addEventListener("touchend", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.isDragging = false;
            //ImageCube.showAllVideoControls(this.videos);

        }.bind(this));

        document.addEventListener("mousemove", function(ev){
            if(this.isDragging){
                ImageCube.hideAllVideoControls(this.videos);
                if(ev.cancelable){
                    ev.preventDefault();
                }
                this.rotateCubeByMousePos(ev);

                if(this.clickedOnVideo){
                    this.resetVideo = true;
                }
            }
        }.bind(this));

        document.addEventListener("touchmove", function(ev){
            if(this.isDragging){
                ImageCube.hideAllVideoControls(this.videos);
                this.rotateCubeByMousePos(ev);

                if(this.clickedOnVideo){
                    this.resetVideo = true;
                }
            }
        }.bind(this));
    }



    // rotate(){
    //     if(this.curstate !== -1){
    //         //if is at front, go to top;
    //         if(this.curstate === 0){
    //             this.cube.classList.remove("cube-facing-front");
    //             this.cube.classList.add("cube-facing-top");
    //         }
    //         //go to left
    //         else if(this.curstate === 1){
    //             this.cube.classList.remove("cube-facing-top");
    //             this.cube.classList.add("cube-facing-left");
    //         }
    //         //go to bottom
    //         else if(this.curstate === 2){
    //             this.cube.classList.remove("cube-facing-left");
    //             this.cube.classList.add("cube-facing-bottom");
    //         }
    //         // go to right
    //         else if(this.curstate === 3){
    //             this.cube.classList.remove("cube-facing-bottom");
    //             this.cube.classList.add("cube-facing-right");
    //         }
    //         //go to back
    //         else if(this.curstate === 4){
    //             this.cube.classList.remove("cube-facing-right");
    //             this.cube.classList.add("cube-facing-back");
    //         }
    //         //go to front
    //         else if(this.curstate === 5){
    //             this.cube.classList.remove("cube-facing-back");
    //             this.cube.classList.add("cube-facing-front");
    //         }
    //         this.curstate = (this.curstate + 1) % 6;
    //     }
    //     else{
    //         this.cube.classList.remove("cube-start");
    //         this.cube.classList.add("cube-facing-front");
    //         this.curstate = 0;
    //     }
    // }
}

let c = new ImageCube();
c.dragRotate();
// document.getElementById("image-cube").addEventListener("click", function(){
//     c.rotate();
// });