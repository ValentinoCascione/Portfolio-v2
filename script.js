document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var page2 = document.getElementsByClassName("first-page2");
var origOffsetY = 638;

function onScroll(e) {
    if (window.scrollY >= origOffsetY) {
        page2[0].classList += ' fixed ';
    } else {
        page2[0].classList.remove("fixed");
    }
}

document.addEventListener('scroll', onScroll);


$(function() {
    $("body").niceScroll({
        background: "#f7f3f0",
        cursorcolor: "#0d0900",
        cursoropacitymin: 1,
        cursorwidth: "4px",
        position: "absolute",
        top: "0px"
    });
});