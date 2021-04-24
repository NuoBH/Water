let frontFace = document.getElementById(`front`);

let waterText = new Blotter.Text("Water", {
    family : "serif",
    size : 625,
    fill : "#000",
});
let blotterMaterial = new Blotter.LiquidDistortMaterial();

let blotter = new Blotter(blotterMaterial, { texts : waterText });
let scope = blotter.forText(waterText);

scope.domElement.classList.add(`blotter-text`)
scope.appendTo(frontFace);
let blotterCanvas = scope.domElement;

//
let IDchangeBlotterWidth = undefined;
IDchangeBlotterWidth = requestAnimationFrame(changeBlotterWidth);
function changeBlotterWidth(){
    cancelAnimationFrame(IDchangeBlotterWidth);
    if(blotterCanvas.width == 0){
        IDchangeBlotterWidth = requestAnimationFrame(changeBlotterWidth);
    }
    else{
        blotterCanvas.style.setProperty(`width`, `100%`);
        blotterCanvas.style.setProperty(`height`, `95%`);
    }   
}
