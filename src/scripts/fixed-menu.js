(function() {
    if (!document.querySelector) {
        return;
    }
    var nav = document.querySelector('nav.mainnav');
    var body = document.querySelector('body');
    var initial = nav.offsetTop;

    window.addEventListener('scroll', function(e) {
        if (body.scrollTop >= initial) {
            nav.classList.add('fixed');
        } else {
            nav.classList.remove('fixed');
        }
    });
})();