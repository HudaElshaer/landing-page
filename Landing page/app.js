/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
var pageName = "Your Weather";
const navMenu= document.getElementById ('nav-menu');
toggleMenu= document.getElementById ('nav-toggle');
closeMenu= document.getElementById ('nav-close');

toggleMenu.addEventListener('click', ()=> {
    navMenu.classList.toggle ('show');
})

closeMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('remove')
})

 *
*/
document addEventListener('mousemove', move)

function move(e){
    this.querySelectorAll('.move').forEach(layer=>{
        const speed= layer.getAttribute('data-speed')

        const x=(window.innerWidth- e.pagex*speed)/120
        const y=(window.innerHeight- e.pagey*speed)/120
        layer.style.transform='translateX(${x}px)  translateY(${y}px)'
    })
}

/**
function myFunction() {
 alert("Hello!");
}
myFunction()
;
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
gsap.from('nav_logo,.nav_toggle' {opacity: 0, duration: 1, delay:2, y:10})
gsap.from('nav_item', {opacity: 0, duration: 1, delay:2.1, y:30, stagger:0.2})
// Add class 'active' to section when near top of viewport
gsap.from('.home_title', {opacity: 0, duration: 1, delay:1.6, y:30})
gsap.from('.home_discription', {opacity: 0, duration: 1, delay:1.8, y:30})
gsap.from('.home_button', {opacity: 0, duration: 1, delay:2.1, y:30})
gsap.from('.home_img', {opacity: 0, duration: 1, delay:1.3, y:30})

/ Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
