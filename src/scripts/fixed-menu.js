(function() {
    if (!document.querySelector) {return;}

    var nav = document.querySelector('nav.mainnav');
    var body = document.querySelector('body');

    // don't do this on small screens
    if (body.offsetWidth < 769) return;

    var initial = nav.offsetTop;
    var fixed = nav.cloneNode(true);
    fixed.classList.add('fixed');

    window.addEventListener('scroll', function(e) {
        if (body.scrollTop >= initial) {
            nav.parentElement.insertBefore(fixed, nav);
        } else {
            nav.parentElement.removeChild(fixed);
        }
    });
})();