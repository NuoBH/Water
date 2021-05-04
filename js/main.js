//WATER INTRO
//WATER INTRO start
let next = "--&gt";

cubeContent.addTitle(frontFace, `water`, 1.8);
frontFace.children[0].style.setProperty("opacity", `1`);

/************ uncomment code below after test is done ***********/
// window.addEventListener(`firstCollide`, function(){
//     requestTimeout(function(){
//         cubeContent.addChat(frontFace, `<b>Water</b> is an unstable data structure with which you store, share and delete your data.`);
//     }, 1000);

//     requestTimeout(function(){
//         let optionDOM = optionCreator.addOptionButtons(frontFace, 
//                         ["Okay.", 
//                         "How can water retain data?"
//                         ]);
            
//         optionDOM.addEventListener(`optionEnded`, waterOption1)
//     }, 2500);
// });
/** **************************************************** */

/**test part delete later */
window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addTitle(topFace, "Clean");
        chatCube.rotate();
        cleanStart();        
    }, 1000);
});


/************************** */

function waterOption1(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is inspired by the history and practice of water memory, the purported ability for water to remember the substance previously dissolved in it.`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption2);
    }, 3000);
}

function waterOption2(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Water memory has long been an interest of Homeopathy.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption3);
    }, 2000);
}

function waterOption3(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `In the process of homeopathic remedies, a substance is dissolved and then largely diluted in water until the solution is chemically no different from water. The solution is claimed to have memorized the substance.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption4);
    }, 2000);
}

function waterOption4(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `In 1988, Jacques Benveniste published on <b>Nature</b> a set of experiments and reported that he proved the water memory effect.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption5);
    }, 2000);
}

function waterOption5(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Benveniste and his team diluted an antibody in water until there are only water molecules in the dilution. They found that human basophils reacted to the dilution as if encountering the original antibody.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption6);
    }, 2000);
}

function waterOption6(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Later, Benveniste got support from Brian Josephson and published papers in 1997, 1999 and 2000 stating that the quality of a substance can also be transmitted electronically over phone wires and internet.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`What about <b>Water</b> as a data structure?`, `Okay.`]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption7);
    }, 2000);
}

function waterOption7(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Coming from these histories and myths, <b>Water</b> is an alternative data structure to computer architectures of stable memory stacks.`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption8);
    }, 3000);
}

function waterOption8(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is both the interfacing material and the memorizing mechanism.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption9);
    }, 2000);
}

function waterOption9(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Instead of going through networks of collection and analysis, your data goes through cycles of water transformation.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption10);
    }, 2000);
}

function waterOption10(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `With water as solid ice, your data is easy to store and control.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption11);
    }, 2000);
}

function waterOption11(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When it melts into liquid, your data is easy to consume, share, leak, and blend.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption12);
    }, 2000);
}

function waterOption12(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When water evaporates, your data dissipates. It merges into the air and becomes impossible to grab and contain, thus totally unrecognizable.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`. . . . . . .`]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption13);
    }, 2000);
}

function waterOption13(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Send us your data and we will transfer your files to Water via electromagnetics.`);
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(frontFace, `We will freeze the water that memorized your data and deliver the final ice block to you.`);
    }, 3000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(frontFace, 
                        [`I would like to continue to learn more about this process.`]);
          
        let temp = function(e){
            waterEnd(e.target);
            e.target.removeEventListener(`rotateFace`, temp);
        }    

        optionDOM.addEventListener(`rotateFace`, temp);
    }, 4500);
}

//end of Water(front) and rotate to Clean(top)
function waterEnd(optionDOM){
    if(chatCube.curstate == 0){
        cubeContent.addTitle(topFace, "Clean");
        chatCube.rotate();

        optionDOM.addEventListener(`rotateFace`, rotateChatCubeFromFront);
        hasClickedLastContinue = false;

        cleanStart();
    }
}

//even listener function for continue button of front face
// use inside waterEnd --- after rotate
function rotateChatCubeFromFront(){
    if(chatCube.curstate == 0){
        chatCube.rotate();
        hasClickedLastContinue = false;
    }
}



/*************************************** Clean *************************************/
function cleanStart(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Hi! Let me introduce you to the first step of our data transfer process.`);       
    }, 2000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [
            `Hi!`,
            `Sure.`
        ]);

        optionDOM.addEventListener(`optionEnded`, cleanOption1);
    }, 3500);
}

function cleanOption1(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Before we start transferring data to water, we clean our equipment, tools and materials.`);
    }, 1000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [
            `What materials do you clean?`,
            `How do you clean them?`
        ]);

        optionDOM.addEventListener(`optionEnded`, cleanOption2);
    }, 3000);
}

function cleanOption2(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `We wash the water containers and the tube.`);
    }, 1000);

    requestTimeout(function(){
        cubeContent.showVideo(topFace, `./videos/wash.mp4`)
    }, 4000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [next]);

        optionDOM.addEventListener(`optionEnded`, cleanOption2);
    }, 7000);
}