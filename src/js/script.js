// Main Nav Button Animations
const mainNavContainer = document.querySelectorAll('nav#main');
const navBtns = mainNavContainer[0].children;
for (var i = 0 ; i < navBtns.length ; i++ ) {
	navBtns[i].addEventListener('mouseenter', navHoverIn, false);
	navBtns[i].addEventListener('mouseleave', navHoverOut, false);
	navBtns[i].addEventListener('mouseleave', navHoverOut, false);
}
function navHoverIn () {
	if ( window.innerWidth < 768 ) { return; } 	// ignore for mobile devices
	if ( window.innerWidth )
	TweenMax.set(this.querySelector('span'), {color: "white"});
	TweenMax.to(this.querySelector('.overlay'), 0.2, {css:{opacity: 0}});
	TweenMax.to(this.querySelector('span'), 0.2, {"background-color": "rgba(0, 161, 255, 0.8)", "font-size": "26px"});
}
function navHoverOut () {
	if ( window.innerWidth < 768 ) { return; } 	// ignore for mobile devices
	TweenMax.set(this.querySelector('span'), {color: "#333"});
	TweenMax.to(this.querySelector('.overlay'), 0.2, {css:{opacity: 0.9}});
	TweenMax.to(this.querySelector('span'), 0.2, {"background-color": "rgba(0, 0, 0, 0)", "font-size": "22px", clearProps: "all"});
}

// Service Hero Animation
const serviceHero = document.querySelectorAll('section#services .hero');
const upSmile = serviceHero[0].children[1];
const serviceHeroText1 = serviceHero[0].children[2];
const serviceHeroText2 = serviceHero[0].children[3];
const serviceHeroText3 = upSmile.children[0];
const serviceHeroText4 = upSmile.children[1].children[0];
const serviceHeroText5 = upSmile.children[1].children[1];

var servicesAnim = new TimelineMax({repeat: -1});
servicesAnim.to(serviceHeroText1, 0.7, {opacity: 1, right: 0}, "+=0.5");
servicesAnim.to(serviceHeroText2, 0.7, {opacity: 1, left: 0 });
servicesAnim.to(serviceHeroText1, 0.5, {opacity: 0}, "+=1.5");
servicesAnim.to(serviceHeroText2, 0.5, {opacity: 0}, "-=0.5");
servicesAnim.to(upSmile, 1, {opacity: 1});
servicesAnim.to(serviceHeroText3, 0.7, {opacity: 1, "margin-top": "30px"});
servicesAnim.to(serviceHeroText4, 0.5, {opacity: 1}, "+=0.5");
servicesAnim.to(upSmile.children[1], 0.3, {"padding-right": "0px" }, "-=0.5");
servicesAnim.to(serviceHeroText5, 0.5, {opacity: 1});
servicesAnim.to(upSmile, 0.7, {opacity: 0}, "+=5");