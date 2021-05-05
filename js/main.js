let next = "--&gt";
let optionEventName = "optionEnded";
let continueEventName = "rotateFace";
let sliders = [];
let deliveryInputs = [];

function changeGravity(x, y){
    engine.gravity.x = x;
    engine.gravity.y = y;
}

/****** help funciton ********/
//add event hander to option/continue buttons and remove the listener and the DOM element afterwards
function addEventHandlerToButtons(optionDOM, event, fn){
    let ehandler = function(e){
        let isRemoveDOM = true;
        if(e.type == continueEventName){
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
function rotateChatCubeHandler(allow, x='0', y='0'){
    if(chatCube.curstate == allow){
        chatCube.rotate();
        changeGravity(x, y);
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
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption13);
    }, 2500);
});

/** **************************************************** */

/**test part delete later */
// window.addEventListener(`firstCollide`, function(){
//     requestTimeout(function(){
//         cubeContent.addTitle(backFace, "send<br>water", 1.8);
//         chatCube.rotate();
//         chatCube.rotate();
//         chatCube.rotate();
//         chatCube.rotate();
//         chatCube.rotate();
//         sendStart();
//     }, 1000);
// });


/************************** */

function waterOption1(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> ( <em>by Zhengyang and Zhengzhou Huang</em> ) is inspired by the history and practice of water memory, the purported ability for water to remember the substance previously dissolved in it.`);
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
        cubeContent.addChat(frontFace, `In the process of homeopathic remedies, a substance is dissolved and then largely diluted in water until the solution is chemically no different from water. The solution is claimed to have memorized the substance.`);
    }, 2500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption3);
    }, 4500);
}

function waterOption3(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `In 1988, Jacques Benveniste published on <b>Nature</b> a set of experiments and reported that he proved the water memory effect.`);
    }, 500);

    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Benveniste and his team diluted an antibody in water until there are only water molecules in the dilution. They found that human basophils reacted to the dilution as if encountering the original antibody.`);
    }, 3000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption4);
    }, 4500);
}

function waterOption4(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Later, Benveniste got support from Brian Josephson and published papers in 1997, 1999 and 2000 stating that the quality of a substance can also be transmitted electronically over phone wires and internet.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`What about <b>Water</b> as a data structure?`, `Okay.`]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption5);
    }, 2500);
}

function waterOption5(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Coming from these histories and myths, <b>Water</b> is an alternative data structure to computer architectures of stable memory stacks.`);
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is both the interfacing material and the memorizing mechanism.`);
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption6);
    }, 5500);
}

function waterOption6(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Instead of going through networks of collection and analysis, your data goes through cycles of water transformation.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption7);
    }, 2000);
}

function waterOption7(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `With water as solid ice, your data is easy to store and control.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption8);
    }, 2000);
}

function waterOption8(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When it melts into liquid, your data is easy to consume, share, leak, and blend.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption9);
    }, 2000);
}

function waterOption9(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `When water evaporates, your data dissipates. It merges into the air and becomes impossible to grab and contain, thus totally unrecognizable.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [`. . . . . . .`]);
            
        addEventHandlerToButtons(optionDOM, optionEventName, waterOption10);
    }, 2000);
}

function waterOption10(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `Send us your data and we will transfer your files to <b>Water</b> via electromagnetic radiation.`);
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(frontFace, `We will freeze the water that memorized your data and deliver the ice block to you.`);
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(frontFace, 
                        [`I would like to continue to learn more about this process.`]);
          
        addEventHandlerToButtons(optionDOM, continueEventName, waterEnd);
    }, 5500);
}

//end of Water(front) and rotate to Clean(top)
function waterEnd(e){
    if(chatCube.curstate == 0){
        cubeContent.addTitle(topFace, "clean");
        chatCube.rotate();
        changeGravity(0, 1);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(0, 0, 1);
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
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption3);
    }, 5000);
}

function cleanOption3(){
    requestTimeout(function(){
        cubeContent.addChat(topFace, `Then we disinfect the operating desk, faraday cages, computer, screen, wires, water preparation containers, and measuring tools with 70% isopropyl alcohol wipes.`);
    }, 500);

    requestTimeout(function(){
        cubeContent.showVideo(topFace, `./videos/disinfect.mp4`)
    }, 5000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(topFace, [`I see.`, `That's good!`]);

        addEventHandlerToButtons(optionDOM, optionEventName, cleanOption4);
    }, 6500);
}

function cleanOption4(){
    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(topFace, ['Continue.']);

        addEventHandlerToButtons(optionDOM, continueEventName, cleanEnd);
    }, 1500);
}


function cleanEnd(e){
    if(chatCube.curstate == 1){
        cubeContent.addTitle(leftFace, "pre<br>pare");
        chatCube.rotate();
        changeGravity(0, -1);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(1, 0, -1);
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
    }, 6200);
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
        addImageCube(`waterTypes3`, leftFace, [
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
        addImageCube(`waterTypes4`, leftFace, [
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
    }, 4000);
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
    }, 3000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption14);
    }, 5000);
}

function prepareOption14(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `For the hardness of the water: Does your file require a specific software to open? If so is that software hard to find or download? Was it hard for you to create the data in the first place? How hard the content is for you to digest?`);       
    }, 500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'hardnessSlider', 0, 100, 0));
    }, 3200);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption15);
    }, 5200);
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
        cubeContent.addChat(leftFace, `If your data is not neutral, adjust the slider to the left according to how much you AGREE with the opinions in the data, and how inclined the opinions are. `);       
    }, 500);

    requestTimeout(function(){
        cubeContent.addChat(leftFace, `Adjust the slider to the right according to how much you DISAGREE with the opinions in the data, and how inclined the opinions are. `);       
    }, 3500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'phValueSlider', -100, 100, 0));
    }, 5500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption18);
    }, 7500);
}

function prepareOption18(){
    requestTimeout(function(){
        cubeContent.addChat(leftFace, `For the turbidity of the water: Is your data encrypted? How hard is it to decrypt the data? How private or personal is your data? How many people have you shared the data with? The more inaccessible or private the data, the more turbid the water is.`);       
    }, 500);

    //add slider
    requestTimeout(function(){
        sliders.push(cubeContent.addSlider(leftFace, 'turbiditySlider', 0, 100, 0));
    }, 3500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(leftFace, [
            `Finished!`,
            `Done.`,
            `Finally...`
        ]);

        addEventHandlerToButtons(optionDOM, optionEventName, prepareOption19);
    }, 5700);
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
        cubeContent.addTitle(bottomFace, "mate<br>rials");
        chatCube.rotate();
        changeGravity(1, 0);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(2, 1, 0);
        });
        hasClickedLastContinue = false;

        materialStart();
    }
}


/********************************* Material **********************************/

function materialStart(){
    requestTimeout(function(){
        cubeContent.addChat(bottomFace, `Let me introduce you to the full set of equipment and tools we use for the data transfer process.`);       
    }, 2500);

    requestTimeout(function(){
        cubeContent.showVideo(bottomFace, `./videos/disinfect.mp4`);
    }, 5500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(bottomFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, materialOption1);
    }, 7000);
}

function materialOption1(){
    requestTimeout(function(){
        cubeContent.addChat(bottomFace, `Next I will show you how we test and set up for the transfer.`);       
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(bottomFace, ['Continue.']);

        addEventHandlerToButtons(optionDOM, continueEventName, materialEnd);
    }, 2000);
}

function materialEnd(e){
    if(chatCube.curstate == 3){
        cubeContent.addTitle(rightFace, "set<br>up", 1.5);
        chatCube.rotate();
        changeGravity(-1, 0);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(3, -1, 0);
        });
        hasClickedLastContinue = false;

        setupStart();
    }
}


/********************************* St up **********************************/

function setupStart(){
    requestTimeout(function(){
        cubeContent.addChat(rightFace, `To make sure the faraday cages are working properly, we first test their effectiveness.`);       
    }, 1500);

    requestTimeout(function(){
        cubeContent.showVideo(rightFace, `./videos/disinfect.mp4`);
    }, 4000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(rightFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, setupOption1);
    }, 5500);
}

function setupOption1(){
    requestTimeout(function(){
        cubeContent.addChat(rightFace, `Now we set up the equipment.`);       
    }, 500);

    requestTimeout(function(){
        cubeContent.showVideo(rightFace, `./videos/disinfect.mp4`);
    }, 2000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(rightFace, [`So many steps!`, `What's next?`]);

        addEventHandlerToButtons(optionDOM, optionEventName, setupOption2);
    }, 3500);
}

function setupOption2(){
    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(rightFace, ['Continue to send water.']);

        addEventHandlerToButtons(optionDOM, continueEventName, setupEnd);    
    }, 1500);
}

function setupEnd(e){
    if(chatCube.curstate == 4){
        cubeContent.addTitle(backFace, "send<br>water", 1.8);
        chatCube.rotate();
        changeGravity(0.5, 0.5);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(4, 0.5, 0.5);
        });
        hasClickedLastContinue = false;

        sendStart();
    }
}


/********************************* Send Water **********************************/

function sendStart(){
    requestTimeout(function(){
        cubeContent.addChat(backFace, `Finally, we are ready to transfer the data to water.`);       
    }, 1500);

    requestTimeout(function(){
        cubeContent.addChat(backFace, `Sending water . . . . . . . .`);
    }, 3500);

    requestTimeout(function(){
        cubeContent.showVideo(backFace, `./videos/disinfect.mp4`);
    }, 4500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(backFace, [`Is that the end?`]);

        addEventHandlerToButtons(optionDOM, optionEventName, sendOption1);
    }, 6000);
}

function sendOption1(){
    requestTimeout(function(){
        cubeContent.addChat(backFace, `We will freeze the water right after the transfer.`);
    }, 1500);

    requestTimeout(function(){
        cubeContent.showVideo(backFace, `./videos/disinfect.mp4`);
    }, 3200);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(backFace, [next]);

        addEventHandlerToButtons(optionDOM, optionEventName, sendOption2);
    }, 4700);
}

function sendOption2(){
    requestTimeout(function(){
        cubeContent.addChat(backFace, `To conduct this whole process for you, we can start by figuring out a time and place to pick up your data.`);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(backFace, [`I can prepare my data in a thumb drive.`, `I don’t have a thumb drive.`]);

        addEventHandlerToButtons(optionDOM, optionEventName, sendOption3);
    }, 2500);
}

function sendOption3(){
    if (lastResponse.includes(`I don’t have a thumb drive.`)){
        delivery.hasUSB = false;
        requestTimeout(function(){
            cubeContent.addChat(backFace, `We can deliver a thumb drive to you when we come to pick up your data.`);
        }, 1500);

        requestTimeout(function(){
            cubeContent.addChat(backFace, `What’s the best time and date for the thumb drive pick up (May 5 to May 9, 10 am. to 8 pm.) ?`);
        }, 4000);

        requestTimeout(function(){
            let input = cubeContent.addInput(backFace, `time`);
            deliveryInputs.push(input);
        }, 6000);

        requestTimeout(function(){
            let optionDOM = optionCreator.addOptionButtons(backFace, [next]);

            addEventHandlerToButtons(optionDOM, optionEventName, sendOption4);
        }, 7000);
    }
    else{
        delivery.hasUSB = true;
        requestTimeout(function(){
            cubeContent.addChat(backFace, `What’s the best time and date for the thumb drive pick up (May 5 to May 9, 10 am. to 8 pm.) ?`);
        }, 1500);

        requestTimeout(function(){
            let input = cubeContent.addInput(backFace, `time`);
            deliveryInputs.push(input);
        }, 3000);

        requestTimeout(function(){
            let optionDOM = optionCreator.addOptionButtons(backFace, [next]);

            addEventHandlerToButtons(optionDOM, optionEventName, sendOption4);
        }, 4000);
    }
}

function sendOption4(){
    requestTimeout(function(){
        cubeContent.addChat(backFace, `What’s your address?`);
    }, 500);

    requestTimeout(function(){
        let input = cubeContent.addInput(backFace, `address`);
        deliveryInputs.push(input);
    }, 2000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(backFace, [`I'll be home.`,`See you then.`]);

        addEventHandlerToButtons(optionDOM, optionEventName, sendOption5);
    }, 4500);
}

function sendOption5(){
    deliveryInputs.forEach((input) => {
        input.disabled = true;
        delivery[`${input.id}`] = input.value;
    });

    requestTimeout(function(){
        cubeContent.addChat(backFace, `From all your inputs here, we generated a text for you to send us via email: <a href="mailto:zhua05nuo@outlook.com">zhua05nuo@outlook.com</a>`);
    }, 1500);

    //generate email text
    let emailContent = `Water Conditions:&#13;&#10;`;
    for(const [key, val] of Object.entries(sliderInputs)){
        emailContent += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}% &#13;&#10;`;
    }
    emailContent += `&#13;&#10;Delivery Info:&#13;&#10;`;
    for(const [key, val] of Object.entries(delivery)){
        if(key == 'hasUSB'){
            emailContent += val ? `- I have an USB drive.&#13;&#10;` : `- I need a USB drive delivered to me.&#13;&#10;`
        }
        else {
            emailContent += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}&#13;&#10;`;
        }
    }

    emailContent = emailContent.slice(0, -10);

    requestTimeout(function(){
        toCopy = cubeContent.addTextArea(backFace, emailContent);
    }, 5000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(backFace, [`Copy the text for me and I will send it myself.`, `Open my system default email platform and create the email for me.`]);

        addEventHandlerToButtons(optionDOM, optionEventName, sendOption6);
    }, 7000);
}

function sendOption6(){
    if(lastResponse.includes(`Copy the text for me and I will send it myself.`)){
        requestTimeout(function(){
            toCopy.select();
            document.execCommand("copy");

            //============
            let optionDOM = optionCreator.addOptionButtons(backFace, [`I've sent it to you.`]);
            addEventHandlerToButtons(optionDOM, optionEventName, sendOption7);
        }, 1500);
    }
    else{
        requestTimeout(function(){
            let emailContent = `Water Conditions:%0D%0A`;
            for(const [key, val] of Object.entries(sliderInputs)){
                emailContent += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}% %0D%0A`;
            }
            emailContent += `%0D%0ADelivery Info:%0D%0A`;
            for(const [key, val] of Object.entries(delivery)){
                if(key == 'hasUSB'){
                    emailContent += val ? `- I have an USB drive.%0D%0A` : `- I need a USB drive delivered to me.%0D%0A`
                }
                else emailContent += `- ${key.charAt(0).toUpperCase() + key.slice(1)}: ${val}%0D%0A`;
            }

            let mailToText = emailContent.replace(/ /g, `%20`);
            window.location.href = `mailto:zhua05nuo@outlook.com?subject=Water&body=${mailToText}`;

            //============
            let optionDOM = optionCreator.addOptionButtons(backFace, [`I've sent it to you.`]);
            addEventHandlerToButtons(optionDOM, optionEventName, sendOption7);
        }, 1500);
    }
}

function sendOption7(){
    requestTimeout(function(){
        cubeContent.addChat(backFace, `Contact me with this email if you have any questions!`);
    }, 1500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addContinueButtons(backFace, ['Leave.']);
        addEventHandlerToButtons(optionDOM, continueEventName, sendEnd);
    }, 3000);
}

function sendEnd(e){
    if(chatCube.curstate == 5){
        let faces = [frontFace, topFace, leftFace, bottomFace, rightFace, backFace];
        faces.forEach((face) => {
            let textDOM = face.firstElementChild;
            let title = textDOM.firstElementChild;

            scrollIntoView(title, {
                time: 1000
            });
        })

        chatCube.rotate();
        changeGravity(-0.5, -0.5);

        e.target.addEventListener(`rotateFace`, ()=>{
            rotateChatCubeHandler(5, -0.5, 0.5);

            let faces = [frontFace, topFace, leftFace, bottomFace, rightFace, backFace];
            faces.forEach((face) => {
                let textDOM = face.firstElementChild;
                let title = textDOM.firstElementChild;

                scrollIntoView(title, {
                    time: 1000
                });
            })
        });
        hasClickedLastContinue = false;
    }
}