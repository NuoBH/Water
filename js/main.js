let next = "--&gt";
let optionEventName = "optionEnded";
let continueEventName = "rotateFace";
let sliders = [];

/****** help funciton ********/
//add event hander to option/continue buttons and remove the listener and the DOM element afterwards
function addEventHandlerToButtons(optionDOM, event, fn){

    let ehandler = function(e){
        let isRemoveDOM = true;
        if(event == continueEventName){
            fn(e);
            isRemoveDOM = false;
        }
        else{
            fn();
        }
        e.target.removeEventListener(event, ehandler);

        if(isRemoveDOM){
            e.target.remove();
        }
    };

    optionDOM.addEventListener(event, ehandler); 
}

//even listener function for continue button of front face
// use inside end function of each face
function rotateChatCubeHandler(allow){
    if(chatCube.curstate == allow){
        chatCube.rotate();
        hasClickedLastContinue = false;
    }
}
/************************************ */

//WATER INTRO
//WATER INTRO start


cubeContent.addTitle(frontFace, `water`, 1.8);
frontFace.children[0].style.setProperty("opacity", `1`);

/************ uncomment code below after test is done ***********/

window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is an unstable data structure with which you store, share and delete your data.`);
    }, 1000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        ["Okay.", 
                        "How can water retain data?"
                        ]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption1);
    }, 2500);
});

/** **************************************************** */

/**test part delete later */
// window.addEventListener(`firstCollide`, function(){
//     requestTimeout(function(){
//         cubeContent.addTitle(leftFace, "Pre<br>pare");
//         chatCube.rotate();
//         chatCube.rotate();
//         prepareStart(); 
//         // prepareOption19();       
//     }, 1000);
// });


/************************** */

function waterOption1(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is inspired by the history and practice of water memory, the purported ability for water to remember the substance previously dissolved in it.`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption2);
    }, 3000);
}

function waterOption2(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Water memory has long been an interest of Homeopathy.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption3);
    }, 2000);
}

function waterOption3(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `In the process of homeopathic remedies, a substance is dissolved and then largely diluted in water until the solution is chemically no different from water. The solution is claimed to have memorized the substance.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption4);
    }, 2000);
}

function waterOption4(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `In 1988, Jacques Benveniste published on <b>Nature</b> a set of experiments and reported that he proved the water memory effect.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption5);
    }, 2000);
}

function waterOption5(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Benveniste and his team diluted an antibody in water until there are only water molecules in the dilution. They found that human basophils reacted to the dilution as if encountering the original antibody.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption6);
    }, 2000);
}

function waterOption6(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Later, Benveniste got support from Brian Josephson and published papers in 1997, 1999 and 2000 stating that the quality of a substance can also be transmitted electronically over phone wires and internet.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`What about <b>Water</b> as a data structure?`, `Okay.`]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption7);
    }, 2000);
}

function waterOption7(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Coming from these histories and myths, <b>Water</b> is an alternative data structure to computer architectures of stable memory stacks.`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption8);
    }, 3000);
}

function waterOption8(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is both the interfacing material and the memorizing mechanism.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption9);
    }, 2000);
}

function waterOption9(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Instead of going through networks of collection and analysis, your data goes through cycles of water transformation.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption10);
    }, 2000);
}

function waterOption10(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `With water as solid ice, your data is easy to store and control.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption11);
    }, 2000);
}

function waterOption11(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When it melts into liquid, your data is easy to consume, share, leak, and blend.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption12);
    }, 2000);
}

function waterOption12(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When water evaporates, your data dissipates. It merges into the air and becomes impossible to grab and contain, thus totally unrecognizable.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`. . . . . . .`]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption13);
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
          
    addEventHandlerToButtons(optionDOM, continueEventName, waterEnd);
    }, 4500);
}

//end of Water(front) and rotate to Clean(top)
function waterEnd(e){
    if(chatCube.curstate == 0){
        cubeContent.addTitle(topFace, "Clean");
        chatCube.rotate();

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(0);
        });
        hasClickedLastContinue = false;

        cleanStart();
    }
}




/*************************************** Clean *************************************/
function cleanStart(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Hi! Let me introduce you to the first step of our data transfer process.`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [
            `Hi!`,
            `Sure.`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption1);
    }, 3200);
}

function cleanOption1(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Before we start transferring data to water, we clean our equipment, tools and materials.`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [
            `What materials do you clean?`,
            `How do you clean them?`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption2);
    }, 3500);
}

function cleanOption2(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `We wash the water containers and the tube.`);
    }, 1500);

    requestTimeout(function(){
        cubeContent.showVideo(topFace, `./videos/wash.mp4`)
    }, 4200);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption3);
    }, 8000);
}

function cleanOption3(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Then we disinfect the operating desk, faraday cages, computer, screen, wires, water preparation containers, and measuring tools with 70% isopropyl alcohol wipes.`);
    }, 500);

    requestTimeout(function(){
        cubeContent.showVideo(topFace, `./videos/disinfect.mp4`)
    }, 6000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption4);
    }, 10000);
}

function cleanOption4(){
    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(topFace, ['Continue.']);

        addEventHandlerToButtons(optionDOM, continueEventName, cleanEnd);
    }, 500);
}


function cleanEnd(e){
    if(chatCube.curstate == 1){
        cubeContent.addTitle(leftFace, "Pre<br>pare");
        chatCube.rotate();
        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(1);
        });
        hasClickedLastContinue = false;

        prepareStart();
    }
}

/**************************** Prepare *************************/
function prepareStart(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `After cleaning is done, we will prepare water for data transfer.`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Sounds good!`,
            `Does water need any specific preparation?`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption1);
    }, 3000);
}

function prepareOption1(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `We adjust water conditions for specific data that will be transferred to the water.`);       
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(leftFace, `There are four conditions important for data transfer: weight, hardness, pH value and turbidity.`);       
    }, 4000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `I'm confused...`,
            `What are these conditions about?`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption2);
    }, 7500);
}

function prepareOption2(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `The weight of water corresponds to the number of bytes the data has and the scope of information the data contains.`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption3);
    }, 4500);
}

function prepareOption3(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `The hardness of water corresponds to how hard it is to open, see, read the data.`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption4);
    }, 3000);
}

function prepareOption4(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `The pH value of water is related to how neutral or inclined the data is.`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption5);
    }, 2700);
}

function prepareOption5(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Finally, the turbidity of water is related to the level of encryption, security, privacy the data has.`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Okay...`,
            `How do you adjust the water conditions then?`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption6);
    }, 3200);
}

function prepareOption6(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `We use 7 different types of water as materials for the final blend.`);       
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Alkaline water, carbonated water, mineral water...`);       
    }, 3600);

    requestTimeout(function(){
        addImageCube(`waterTypes1`, leftFace, [
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`
        ])
    }, 5700);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption7);
    }, 7000);
}

function prepareOption7(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Distilled water, filtered water, boiled water...`);       
    }, 500);

    requestTimeout(function(){
        addImageCube(`waterTypes2`, leftFace, [
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`
        ])
    }, 2600);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption8);
    }, 3950);
}

function prepareOption8(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `tap water, a mixture of alkaline distilled water and a mixture of mineral carbonated water.`);       
    }, 500);

    requestTimeout(function(){
        addImageCube(`waterTypes2`, leftFace, [
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`
        ])
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption9);
    }, 5100);
}

function prepareOption9(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `We carefully adjust the amount of each type of water to make the final blend.`);       
    }, 500);

    requestTimeout(function(){
        cubeContent.addChat(leftFace, `We also use a black food coloring to adjust the turbidity of the blend.`);
    }, 3300);

    requestTimeout(function(){
        addImageCube(`waterTypes3`, leftFace, [
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./videos/prepare water fast.mp4`,
            `./images/test.JPG`,
            `./images/test.JPG`,
            `./images/test.JPG`
        ])
    }, 6100);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption10);
    }, 7450);
}

function prepareOption10(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `*All materials are metallic or wrapped with aluminum foil to block unwanted electromagnetic radiations (EMR).`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Hmmm...`,
            `I see.`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption11);
    }, 3500);
}

function prepareOption11(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `At this point, I’d like to ask you what kind of data do you imagine to give us. Your data will influence the conditions of water. The data will be transferred via a thumb drive later.`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Sure?`,
            `Can you say more?`,
            `I'm not sure what to give you`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption12);
    }, 5000);
}

function prepareOption12(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `It’s fine that you are not sure yet, I will ask specific questions corresponding to each water condition and you can take some time to think about it.
`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption13);
    }, 3500);
}

function prepareOption13(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `First, for the weight of the water: How large is your filesize? How much information does your data have? Think about the weight of the information. Please adjust the slider below to reflect your answer.`);       
    }, 500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'weightSlider', 0, 100, 0));
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption14);
    }, 5500);
}

function prepareOption14(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `For the hardness of the water: Does your file require a specific software to open? If so is that software hard to find or download? Was it hard for you to create the data in the first place? How hard the content is for you to digest?`);       
    }, 500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'hardnessSlider', 0, 100, 0));
    }, 3700);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption15);
    }, 5900);
}

function prepareOption15(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `For the pH value of water: Is your data neutral? If not, to what extent does your data contain inclined opinions? How much do you agree or disagree with the opinions in your data?`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption16);
    }, 3000);
}

function prepareOption16(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `If the data is neutral please place the slide handle at the center.`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption17);
    }, 2000);
}

function prepareOption17(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `If your data is not neutral, adjust the slider to the right according to how much you AGREE with the opinions in the data, and how inclined the opinions are. `);       
    }, 500);

    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Adjust the slider to the left according to how much you DISAGREE with the opinions in the data, and how inclined the opinions are. `);       
    }, 4500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'phValueSlider', -100, 100, 0));
    }, 6500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption18);
    }, 8500);
}

function prepareOption18(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `For the turbidity of the water: Is your data encrypted? How hard is it to decrypt the data? How private or personal is your data? How many people have you shared the data with? The more inaccessible or private the data, the more turbid the water is.`);       
    }, 500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'turbiditySlider', 0, 100, 0));
    }, 3800);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Finished!`,
            `Done.`,
            `Finally...`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption19);
    }, 6000);
}

function prepareOption19(){
    //get slider values and disable slide actions
    for(let i = 0; i < sliders.length; i++){
        sliderInputs[`${sliders[i].id}`] = sliders[i].value;
        sliders[i].disabled = true;
    }
    
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Thank you for your answers! We will prepare the water for your data transfer according to these answers.`);       
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(leftFace, ['Continue.']);

        addEventHandlerToButtons(optionDOM, continueEventName, prepareEnd);
    }, 3200);
}

function prepareEnd(e){
    if(chatCube.curstate == 2){
        cubeContent.addTitle(bottomFace, "Mate<br>rials");
        chatCube.rotate();
        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(2);
        });
        hasClickedLastContinue = false;

        materialStart();
    }
}


/********************************* Material **********************************/

function materialStart(){

}