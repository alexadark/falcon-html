$(document).ready(function () {

  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      trigger: ".slideOne",
      scrub: 1,
      pin: true,
      markers: true,
      start: "top top",
      end: "bottom top",
    },
  })

  tl.to(".overlay", 2, { backgroundColor: "rgba(0,0,0,.85)" })
  tl.to(".textOne", 1, { y: -300, autoAlpha: 0 }, 0)
  tl.to(".textTwo", 1, { y: -300, autoAlpha: 1 }, 0.5)
