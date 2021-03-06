$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        controls: true,
        preloadImages: "all",
        responsive: true
    });
});
$(function () {
    var forEach = function (t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    $(document).ready(function () {
        $('.nav').on('click', function () { // Au clic sur un élément
            var page = $(this).attr('href'); // Page cible
            var speed = 750; // Durée de l'animation (en ms)
            $('html, body').animate({
                scrollTop: $(page).offset().top
            }, speed); // Go
            return false;
        });
    });
    (function () {
        var hamburger = {
            navToggle: document.querySelector('.nav-toggle'),
            nav: document.querySelector('nav'),

            open: function (e) {
                e.preventDefault();
                this.navToggle.classList.add('expanded');
                this.nav.classList.add('expanded');
            },
            close: function (e) {
                e.preventDefault();
                this.navToggle.classList.remove('expanded');
                this.nav.classList.remove('expanded');
            }
        };

        hamburger.navToggle.addEventListener('click', function (e) {
            if (hamburger.nav.classList.contains('expanded')) {
                hamburger.close(e);
            } else {
                hamburger.open(e);
            }
        });

        hamburger.nav.addEventListener('click', function (e) {
            hamburger.open(e);
        });


        document.addEventListener('click', function (e) {
            if (e.path.indexOf(hamburger.navToggle) < 0 && e.path.indexOf(hamburger.nav) < 0) {
                hamburger.close(e);
            }
        });

    }());
    $(".hovered").mouseover(function () {
        $(".hoveredd").slideDown(300);
        $(".hoveredd").css({
            display: "block"
        });
    });
    $(".hoveredd").mouseout(function () {
        $(".hoveredd").css({
            display: "none"
        })
    })
    $('.imagezoom').hover(
        function(){
            var $this = $(this);
            $this.stop().animate({'opacity':'1.0','height':'30vh','width':'30vw','top':'0px'},3000);
        },
        function(){
            var $this = $(this);
            $this.stop().animate({'opacity':'1.0','height':'31vh','width':'31vw','top':'-66.5px'},3000);
        }
    );

});

function bigImg() {
    alert("ok")
}