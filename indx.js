gsap.registerPlugin(ScrollTrigger);
gsap.from(".diet", {
    x: -1200,
    duration:4,
    scrollTrigger: {
        trigger:".diet",
        start:"top 60%",
        end:"top 30%",  
         scrub:true,
        markers:true
    }
    

});