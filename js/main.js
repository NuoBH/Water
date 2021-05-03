
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
        cubeContent.addChat(frontFace, `The practitioners of Homeopathy believed substances that cause symptoms of a disease can cure people who experience similar symptoms.In the process of homeopathic remedies, a substance is dissolved and then largely diluted in water until the solution is chemically no different from water. The solution is claimed to have memorized the substance and have curing power.`);
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
        cubeContent.addChat(frontFace, ``);
    }, 500);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        [next]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption6);
    }, 2000);
}

//main
let next = "--&gt";

cubeContent.addTitle(frontFace, `water`, 1.8);

window.addEventListener(`firstCollide`, function(){
    requestTimeout(function(){
        cubeContent.addChat(frontFace, `<b>Water</b> is an unstable data structure with which you store, share and delete your data.`);
    }, 1000);

    requestTimeout(function(){
        let optionDOM = optionCreator.addOptionButtons(frontFace, 
                        ["Okay.", 
                        "How can water retain data?"
                        ]);
            
        optionDOM.addEventListener(`optionEnded`, waterOption1)
    }, 2500);
});