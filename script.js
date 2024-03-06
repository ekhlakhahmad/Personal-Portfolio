const hamburgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("menu");

const toggleMenu = () => {
  menu.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
};
hamburgerMenu.addEventListener("click", toggleMenu);
window.addEventListener("resize", () => {
  if (window.innerWidth > 767 && menu.classList.contains("active")) {
    menu.classList.remove("active");
    hamburgerMenu.classList.remove("active");
  }
});


// GSAP Animation

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();
tl.from(".header-left-side", {
  opacity: 0,
  y: -60,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
});
tl.from(".navbar-menu li", {
  opacity: 0,
  y: 60,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
});
gsap.from(".home-left-side h3,h1,h2", {
  x: -700,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
});
gsap.from(".home-right-side", {
  x: 500,
  duration: 0.5,
  delay: 0.5,
  stagger: 0.1,
});
gsap.from(".about-left-side", {
  opacity: 0,
  x: -200,
  // rotateZ: 360s,
  scrollTrigger: {
    trigger: ".about-left-side",
    scrub: true,
    start: "top center",
    end: "top 20%",
  },
});
const skillRightSide = document.querySelector('.skill-right-side');

ScrollTrigger.create({
    trigger: skillRightSide,
    start: 'top 80%',
    end: 'bottom 20%',
    onEnter: () => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            const width = bar.getAttribute('data-width');
          gsap.to(bar, {
                width: `${width}%`,
                backgroundColor: "#1e3a8a", 
                duration: 0.6
            });
        });
    },
    onLeaveBack: () => {
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => {
            gsap.to(bar, {
                width: '20%',
                duration: 0.1 
            });
        });
    }
});