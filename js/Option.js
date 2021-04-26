class Option{
    constructor(){
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
            let button = document.createElement("span");
            button.classList.add("option-button");
            //add break after each option button so that when use cnterOptionButtons, it 
            //will get the correct offsetWidth of each <span> element of the buttons
            button.innerHTML = `${buttonTexts[i]}<br>`;
            optionDOM.appendChild(button);
        }

        return optionDOM;
    }

    //center all option buttons in option container
    centerOptionButtons(optionDOM){
        if(optionDOM === undefined){
            return;
        }

        let parentWidth = chatCube.targetFaceWidthFour - 20 * 2;
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
                    childWidthIncrement -= buttons[i].offsetWidth;
                    incrementSteps -= 1; 
                    childrenToSet.pop();
                    margin = (parentWidth - 30 - childWidthIncrement) / (incrementSteps * 2);

                    //set margin of children to set
                    for(let j = 0; j < childrenToSet.length; j++){
                        childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                        childrenToSet[j].style.setProperty("--buttonMargin", `${margin}px`);
                        if(j < childrenToSet.length - 1){
                            childrenToSet[j].innerHTML = childrenToSet[j].innerHTML.slice(0,-4);
                        }
                    }
                    //back one step, to set current button margin if overflows with this button included
                    i -= 1;
                }
                //do not set button margin if the single button(increment = 1) overflows
                else {
                    console.log(childrenToSet[0]);
                    margin = 0;
                    childrenToSet[0].style.setProperty("--buttonMargin", `${margin}px`);
                    childrenToSet[0].style.setProperty("--buttonMargin", `${margin}px`);
                }
                //reset incrememnts
                childWidthIncrement = 0;
                incrementSteps = 0;
                childrenToSet = [];
            }
        }

        if(childWidthIncrement > 0){
            let margin;
            if(incrementSteps > 1){
                margin = (parentWidth - 30 - childWidthIncrement) / (incrementSteps * 2);
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
                childrenToSet[0].style.setProperty("--buttonMargin", `0px`);
                childrenToSet[0].style.setProperty("--buttonMargin", `0px`);
            }
        }
    }
}

let optionCreator = new Option();
let optionDOM = optionCreator.addOptionButtons(frontFace, ["nuobebebebdasdadase", "nuoebe", "asdfasfas", "dsada", "dasdas"]);

optionCreator.centerOptionButtons(optionDOM);
window.addEventListener("resize", function(){
    optionCreator.centerOptionButtons(optionDOM);
});



