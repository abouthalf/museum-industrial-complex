(function() {
    if (!document.querySelector) return;

    var nav = document.querySelector('nav.mainnav');
    var body = document.querySelector('body');

    // don't do this on small screens
    if (body.offsetWidth < 769) return;

    var initial = nav.offsetTop;
    var fixed = nav.cloneNode(true);
    fixed.classList.add('fixed');
    nav.parentElement.insertBefore(fixed, nav);
    fixed.style.display = "none";

    window.addEventListener('scroll', function(e) {
        if (body.scrollTop >= initial) {
            fixed.style.display = "block";
        } else {
            fixed.style.display = "none";
        }
    });
})();