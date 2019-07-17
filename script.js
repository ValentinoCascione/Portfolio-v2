document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// $(function(){
// 	$(window).scroll(
// 	function () {//Au scroll dans la fenetre on déclenche la fonction
// 	if ($(this).scrollTop() > 187) { //si on a défini de plus de 187 px du haut vers le bas
// 	$('#gauche').addClass("fixgauche"); //on ajoute la classe "fixgauche" à <div id="gauche">
// 	} else {
// 	$('#gauche').removeClass("fixgauche");//sinon on retire la classe "fixgauche" à <div id="gauche">
// 						}
// 					}
// 				);			 
// 			});		 
			



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
