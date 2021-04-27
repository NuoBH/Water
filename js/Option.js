class Option{
    constructor(){
        this.optionDomAnimFrame = undefined;
    }

    //apend option buttons to the end of textDOM
    //buttonTesxt is an array container texts for each button
    addOptionButtons(face, buttonTexts){
        if(!Array.isArray(buttonTexts) || buttonTexts.length <= 0){
            return undefined;
        }

        let textDOM = face.children[0];
        

        //create option container and append to textDOM
        let optionDOM = document.createElement("div");
        optionDOM.classList.add("option-container");
        textDOM.appendChild(optionDOM);

        //add option buttons to option container(optionDOM)
        for(let i = 0; i < buttonTexts.length; i ++){
            let button = document.createElement("div");
            button.classList.add("option-button");
            //add break after each option button so that when use cnterOptionButtons, it 
            //will get the correct offsetWidth of each <span> element of the buttons
            button.innerHTML = `${buttonTexts[i]}<br>`;
            this.onMouseTouchEnterOptionButton(button);
            this.onMouseTouchLeaveOptionButton(button);
            this.onMouseUpOptionButton(button, optionDOM, textDOM);
            optionDOM.appendChild(button);
        }

        //center all buttons in option container and update it when window is resized
        this.centerOptionButtons(optionDOM);
        window.addEventListener("resize", function(){
            clearRequestTimeout(this.optionDomAnimFrame);
            this.optionDomAnimFrame = requestTimeout(function(){
                    this.centerOptionButtons(optionDOM);
                }.bind(this), 250);
        }.bind(this));

        optionDOM.style.setProperty("--optionRotateX", "0deg");
        optionDOM.style.setProperty("--optionOpacity", "1");

        $(textDOM).animate({
            scrollTop: $(optionDOM).offset().top
        }, {
            duration: 500,
            easing: "swing",
            step: function(now){
                console.log(now);
            }
        });

        return optionDOM;
    }

    //center all option buttons in option container
    centerOptionButtons(optionDOM){
        if(optionDOM === undefined){
            return;
        }

        //get parent width = target width - [padding size(20) + factor(5)]*2
        let padding = parseFloat(getComputedStyle(optionDOM.parentElement).getPropertyValue(`padding-left`));
        let parentWidth = chatCube.targetFaceWidthFour - (padding + 5) * 2;
        let maxWidth = parentWidth - parentWidth / 3;

        let incrementSteps = 0;
        let childWidthIncrement = 0;
        let childrenToSet = [];
        let buttons = optionDOM.children;

        //reset all buttons by adding <br> at end
        for(let i = 0; i < buttons.length; i ++){
            if(buttons[i].innerHTML.slice(-4) != "<br>"){
                buttons[i].innerHTML = buttons[i].innerHTML + "<br>";
            }
        }

        for(let i = 0; i < buttons.length; i++){
            childWidthIncrement += buttons[i].offsetWidth;
            incrementSteps += 1;
            childrenToSet.push(buttons[i]);

            let margin;
            //if all previous children width overflows set margin
            if(childWidthIncrement >= maxWidth){
                //if total two or more buttons overflow, subtract current button width and set all previous
                //button margin
                if(incrementSteps > 1){
                    //removed the overflowed button from the list of buttons to be set
                    childWidthIncrement -= buttons[i].offsetWidth;
                    incrementSteps -= 1; 
                    childrenToSet.pop();
                    //if there are more than one button on one line, calculate the margins
                    if(incrementSteps > 1){
                        margin = (parentWidth - childWidthIncrement) / (incrementSteps * 2);

                        //set margin of children to set
                        for(let j = 0; j < childrenToSet.length; j++){
                            childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                            childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                            if(j < childrenToSet.length - 1){
                                childrenToSet[j].innerHTML = childrenToSet[j].innerHTML.slice(0,-4);
                            }
                        }
                    }
                    //if only one button a line, set the margin to auto
                    else{
                        margin = 0;
                        childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
                        childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
                    }
                    //back one step, to set current button margin if overflows with this button included
                    i -= 1;
                }
                //do not set button margin if the single button(increment = 1) overflows
                else {
                    margin = 0;
                    childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
                    childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
                }
                //reset incrememnts
                childWidthIncrement = 0;
                incrementSteps = 0;
                childrenToSet = [];
            }
        }

        if(incrementSteps > 0){
            let margin;
            if(incrementSteps > 1){
                margin = (parentWidth - childWidthIncrement) / (incrementSteps * 2);
                for(let j = 0; j < childrenToSet.length; j++){
                    childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                    childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                    if(j < childrenToSet.length - 1){
                        childrenToSet[j].innerHTML = childrenToSet[j].innerHTML.slice(0,-4);
                    }
                }
            }
            else{
                margin = 0;
                childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
                childrenToSet[0].style.setProperty("--buttonMargin", `auto`);
            }
        }
    }

/**help function */
    hoverChange(button, state){
        if(button == undefined || button == null){
            console.debug(`button is not defined`);
            return;
        }

        if(state != 0 && state != 1){
            console.debug(`state error`);
            return;
        }

        // 0 is mouse enter; 1 is mouse leave
        if(state == 0){
            button.style.setProperty("font-weight", "bold");
            button.style.setProperty("--buttonTextDecoration", "underline");
        }
        else{
            button.style.setProperty("font-weight", "normal");
            button.style.setProperty("--buttonTextDecoration", "none");
        }

    }

/************ */


    //mouse and touch event for option buttons 
    onMouseTouchEnterOptionButton(button){
        button.addEventListener("mouseenter", function(){
            this.hoverChange(button, 0);
        }.bind(this));

        button.addEventListener("touchstart", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.hoverChange(button, 0);
        }.bind(this));
    }


    onMouseTouchLeaveOptionButton(button){
        button.addEventListener("mouseleave", function(){
            this.hoverChange(button, 1);
        }.bind(this));

        button.addEventListener("touchend", function(ev){
            if(ev.cancelable){
                ev.preventDefault();
            }
            this.hoverChange(button, 1);
        }.bind(this));
    }

    onMouseUpOptionButton(button, optionDOM, textDOM){
        button.addEventListener("mouseup", function(){
            let chosenText = button.innerHTML;
            if(chosenText.slice(-4) == '<br>'){
                chosenText = chosenText.slice(0, -4);
            }

            let secLastChild = textDOM.children[textDOM.children.length-2];

            optionDOM.style.setProperty("--optionRotateX", "90deg");
            optionDOM.style.setProperty("--optionOpacity", "0");

            $(textDOM).animate({
                scrollTop: secLastChild.offsetTop + secLastChild.offsetHeight
            }, {
                duration: 500,
                easing: "swing",
                step: function(now){
                    console.log(now);
                }
            });
            requestTimeout(function(){
                optionDOM.remove();
                /*********** add chosen text here!!! ************/
            }, 550);
        });
    }
}

let optionCreator = new Option();
let whiteConnector = "<span class='white'>[</span>";
requestTimeout(()=>{
    let optionDOM = optionCreator.addOptionButtons(frontFace, 
        [`[${whiteConnector}nuobebe is xiang xiang hapizhugigingi${whiteConnector}]`, 
        `[${whiteConnector}nFDebe${whiteConnector}]`, 
        `[${whiteConnector}asdfFDSas${whiteConnector}]`, 
        `[${whiteConnector}dsaFDa${whiteConnector}]`, 
        `[${whiteConnector}dasdas${whiteConnector}]`]);
},2000);





