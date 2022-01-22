
const ANIMATION_hamburgerIcon = gsap.timeline({paused: true, reversed: true});
ANIMATION_hamburgerIcon
.to('.hamburger_icon_component.line2', {
  opacity: 0,
  duration: .15,
  x: 5
})
.to('.hamburger_icon_component.line1', {
  rotate: 45,
  duration: .25,
  y: 8
}, 0)
.to('.hamburger_icon_component.line3', {
  rotate: -45,
  duration: .25,
  y: -8
}, 0);

const ANIMATION_navigationMenu = gsap.timeline({paused: true});
ANIMATION_navigationMenu
.to('.navigation_menu', {
  opacity: 1,
  duration: .225,
  height: '90vh'
})
.from('.nav_link', {
  stagger: .225,
  duration: .75,
  y: 10,
  opacity: 0
});

const openMenu = () => {
  ANIMATION_hamburgerIcon.play();
  ANIMATION_navigationMenu.timeScale(1.0).play();
};
const closeMenu = () => {
  ANIMATION_hamburgerIcon.reverse();
  ANIMATION_navigationMenu.timeScale(3.0).reverse();  
};

const hamburgerIcon = document.querySelector('.hamburger_icon');
hamburgerIcon.addEventListener('click', () => {
  const isMenuClosed = ANIMATION_hamburgerIcon.reversed();
  if ( isMenuClosed ) 
    openMenu();
  else 
    closeMenu();
});



