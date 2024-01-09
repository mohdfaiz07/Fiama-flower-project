function abc(){gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

abc();

$('#left-nav h1').textillate({ 
  in: { 
    effect: 'fadeInUp',
    delayScale: 1

} });



gsap.from("#page1 h1",{
  y : 50,
  duration : "2",
  opacity : "0",
})

gsap.from("#nav",{
  y : -100,
  duration : "1",
  opacity : "0"
})



gsap.from("#page1 p",{
  x : -100,
  duration : "1",
  opacity : "0",
 
})

gsap.from("#page1  button" ,{
  duration : "2",
  opacity : "0",
  delay : "1",
  scale : 0
})

//////////////page1 gsap end/////////////////////

//////////////////page2 gsap start/////////////

gsap.from("#page2 h1",{

  onStart: function(){
    
$('#page2  h1').textillate({ 
  in: { 
    effect: 'fadeInUp',
    delayScale: 1

} });

},

  scrollTrigger:{
    trigger:"#page2 h1",
    scroller : "#main",
    start : "Top 80%",
  },
   

})


gsap.from("#pg2-city",{
    scale:.8,
    duration: 2,
    stegger : true,

    scrollTrigger:{
      trigger:"#pg2-city",
      start:"top 90%",
      scroller:"#main",



    }


})

gsap.from("#page2>h2",{
  x: 100,
  duration: 2,
  opacity : 0,
  scrollTrigger:{
    trigger:"#page2>h2",
    start:"top 90%",
    scroller:"#main",
    


  }


})

gsap.from("#page2 h3",{
  y : 20,
  duration: 2,
  scrollTrigger:{
    trigger:"#page2 h3",
    start:"top 90%",
    scroller:"#main",
    opacity : 0


  }


})



//////////////page3 gsap start//////////////


gsap.from("#pg3-box1",{
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#pg3-box1",
    scroller:"#main",
    start : "top 80%",


  }
})


gsap.from("#pg3-box2",{
  opacity:0,
 duration:3,
 scrollTrigger:{
   trigger:"#pg3-box2",
   scroller:"#main",
   start : "top 80%",
   delay : 1


 }
})



gsap.from("#pg3-box3",{
  opacity:0,
 duration:3,
 scrollTrigger:{
   trigger:"#pg3-box3",
   scroller:"#main",
   start : "top 80%",

   delay : 2

 }
})




gsap.from(".elem",{
  scale : .8,
  duration:1,
  stagger :.3,
  scrollTrigger:{
   trigger:".elem",
   scroller:"#main",
   start : "top 80%",


 } 
})






var t4 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    scrub: true,
    pin: true,
 

  }


})


t4.to("#circle",{
  clipPath: "circle(10% at 50% 50%)",
  scrub: 4,
  pin: true,
  duration:"3"

})


t4.fromTo("#pg4-txt1, #pg4-txt2",{
  opacity:0,
  y:150

},
{
  opacity:1,
  stagger:.5,
  y:0
})




t4.from("#pg4-img img",{
  opacity:0,
  duration :3

})





////////////////////////////////////////////

// t4.from(,{
//   x : 100,
//   duration:3
// })





// gsap.to("#page4", {
//   scrollTrigger: {
//       trigger: "#page4",
//       scroller: "#main",
//       start: "top 0%",
//       end: "top -100%",
//       scrub: true,
//       pin: true,
//       // markers: true
//   }
// })

////////////////////////page5 gsap/////////////

gsap.from("#page5>h1",{
  x: 100,
  duration: 2,
  opacity : 0,
  scrollTrigger:{
    trigger:"#page5>h1",
    start:"top 90%",
    scroller:"#main",
    


  }


})


gsap.from(".pg5-box1",{
  opacity:0,
  duration:3,

  scrollTrigger:{
    trigger:".pg5-box1",
    scroller:"#main",
    start : "top 90%",
    markers:true,
    stagger : .5,

  }

  
})