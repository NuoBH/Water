/*******************************request time out***************************************** */
// requestAnimationFrame() shim by Paul Irish
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, /* DOMElement */ element){
          window.setTimeout(callback, 1000 / 60);
        };
  })();
  
  /**
   * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
  
  window.requestTimeout = function(fn, delay) {
    if( !window.requestAnimationFrame       && 
      !window.webkitRequestAnimationFrame && 
      !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
      !window.oRequestAnimationFrame      && 
      !window.msRequestAnimationFrame)
        return window.setTimeout(fn, delay);
        
    var start = new Date().getTime(),
      handle = new Object();
      
    function loop(){
      var current = new Date().getTime(),
        delta = current - start;
        
      delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    };
    
    handle.value = requestAnimFrame(loop);
    return handle;
  };
  
  /**
   * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
  window.clearRequestTimeout = function(handle) {
    if(handle === undefined){handle = {value: undefined};}
    window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
    window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) : /* Support for legacy API */
    window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
    window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
    window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
    clearTimeout(handle);
  };

/*************************************************/

// RESOURCE LOADING
// ================
function loadImage(url, callback) {
    console.log()
    var image = new Image();
    image.src = url;
    image.onload = callback;
    return image;
 }
 function loadImages(urls, callback) {
    const images = [];
    var imagesToLoad = urls.length;
   
    // Called each time an image finished loading.
    var onImageLoad = function() {
      --imagesToLoad;
        // If all the images are loaded call the callback.
        if (imagesToLoad == 0) {
            callback(images);
        }
    };
   
    for (var ii = 0; ii < imagesToLoad; ++ii) {
      var image = loadImage(urls[ii], onImageLoad);
      images.push(image);
    }
 }
 
 /************** */