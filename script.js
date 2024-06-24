function loaderAnim(){
  let tl = gsap.timeline();
tl.from(".line h1",{
  y:150,
  stagger:0.3,
  duration:0.6,
  delay:0.5
});
tl.to(".line-part1",{
  opacity:1,
  duration:0.5,
  onStart:function(){
    const h5 = document.querySelector(".line-part1 h5");
    let grow = 0;
    setInterval(()=>{
      if (grow < 100){
        h5.innerText = grow++;
      }
      else{
        h5.innerText = grow;
      }
    
    },35);
    }
});
tl.to(".line h2",{
  opacity:1,
  animationName:"anime"
});
tl.to("#loader",{
  opacity:0,
  duration:0.4,
  delay:3
  // display:"none"
});
tl.from("#page1",{
  y:1800,
  delay:0.5,
  opacity:0,
  duration:0.4,
  ease:Power4
});
tl.to("#loader",{
  display: "none"
});

}
loaderAnim();