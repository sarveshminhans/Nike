var tl=gsap.timeline();
gsap.set(".a",{opacity:0,y:10})

tl
    .from("#left",{
    width:0,
    duration:1.5,
    ease:Expo.easeInOut
    })
    .from("#right",{
    width:0,
    duration:1.5,
    ease:Expo.easeInOut
    })
    .to(".a",{
        delay:-1.5,
        stagger:.1,
        opacity:1,
        y:0,
        duration:1.5,
        ease:Expo.easeInOut
    })