(function(){
    if (!document.querySelector) return;

    var btn = document.getElementById('submit');
    var zip = document.getElementById('zip');
    var errs = document.querySelectorAll('#contact-form .err');

    zip.addEventListener('input', function() {
        btn.removeAttribute('disabled');
    });

    btn.addEventListener('click', function(){
        Array.prototype.forEach.call(errs, function(e) {
            e.style.display = "none";
        });
        var i = Math.floor(Math.random() * (errs.length));
        errs[i].style.display = "block";
    });
})();