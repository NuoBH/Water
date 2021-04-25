let frontFace = document.getElementById(`front`);

class CubeContent{
    constructor(){

    }

    // createBlotterText(textStr){
    //     this.blotterText = new Blotter.Text(`${textStr}`, {
    //         family : "serif",
    //         size : screen.width / 5,
    //         fill : "#000",
    //     });
    //     this.blotterMaterial = new Blotter.LiquidDistortMaterial();
    //     //material uniforms properties
    //     this.blotterMaterial.uniforms.uSpeed.value = 0.25;
    //     this.blotterMaterial.uniforms.uVolatility.value = 0.05;

    //     this.blotter = new Blotter(this.blotterMaterial, { texts : this.blotterText });
    //     this.scope = this.blotter.forText(this.blotterText);
    //     this.scope.pause();

    //     this.scope.domElement.classList.add(`blotter-text`)
    //     this.scope.appendTo(frontFace);
    //     this.blotterCanvas = this.scope.domElement;

    //     this.IDchangeBlotterWidth = undefined;
    //     this.IDchangeBlotterWidth = requestAnimationFrame(this.changeBlotterWidth.bind(this));
        

    // }

    // changeBlotterWidth(){
    //     cancelAnimationFrame(this.IDchangeBlotterWidth);
    //     if(this.blotterCanvas.width == 0){
    //         this.IDchangeBlotterWidth = requestAnimationFrame(this.changeBlotterWidth.bind(this));
    //     }
    //     else{
    //         this.blotterCanvas.style.setProperty(`width`, `100%`);
    //         this.blotterCanvas.style.setProperty(`height`, `95%`);
    //     }   
    // }

    // showBlotterText(){
    //     this.scope.play();
    //     this.blotterCanvas.classList.add(`appear`);
    // }

    // hideBlotterText(){
    //     // this.blotterCanvas.classList.add(`disappear`);
    //     requestTimeout(function(){
    //         this.scope.pause();
    //     }.bind(this), 600);
    // }
}

var cubeContent = new CubeContent();
// cubeContent.createBlotterText("water");

// window.addEventListener(`mouseup`, ()=>{cubeContent.hideBlotterText()});