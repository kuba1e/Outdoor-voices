import gsap from "gsap";

let tl = gsap.timeline();
let state = false;
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', (e)=>{

  if(!state) {
    gsap.to('.burger-line1', {duration: 0.2,rotate: 45, width:'50px', height: '7px', top: '45%'});
    gsap.to('.burger-line3', {duration: 0.2,rotate: -45, width:'50px', height: '7px', top: '45%'});
    gsap.to('.burger-line2', {duration: 0.1, opacity:0});
    tl.to(burgerMenu,{duration:1, x: '-100vw'});
    document.body.classList.add('body-hidden')
    state = true;


  } else {
    gsap.to('.burger-line1', {duration: 0.2,rotate: 0, width:'45px', height: '5px', top:'30%'});
    gsap.to('.burger-line3', {duration: 0.2,rotate: 0, width:'45px', height: '5px', top:'65%'});
    gsap.to('.burger-line2', {duration: 0.1, opacity:1});
    tl.to(burgerMenu,{duration:1, x: '100vw'});
    document.body.classList.remove('body-hidden')
    state = false;
  }
  //tl.to('.burger-menu', {duration: 2, x:'-100vw'})
})

