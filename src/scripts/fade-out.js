(function(){
    if (!document.querySelector) return;
    if (!window.requestAnimationFrame) return;

    var opacity = 1;
    // assuming 60 frames per second, at n minutes, reduce apacity by this much.
    var decrement = 1 / (3 * 60);
    console.log(decrement);
    var texts = document.querySelectorAll('.copy, nav, .pagehead, .to-top, img');

    function fade() {
        opacity -= decrement;
        Array.prototype.forEach.call(texts, function(txt) {
            txt.style.opacity = opacity;
        });
    }
    
    function loop(){
        if (opacity > 0) {
            requestAnimationFrame(loop);
            fade();
        }
    }

    requestAnimationFrame(loop);
})();