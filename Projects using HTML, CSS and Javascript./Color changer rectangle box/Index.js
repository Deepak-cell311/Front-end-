


let rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function (deepak) {
    let rectanglelocation = rect.getBoundingClientRect();
    let locationval = deepak.clientX - rectanglelocation.left;

    if (locationval < rectanglelocation.width / 2) {
        console.log("left")
        var redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255,0, locationval);

        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4

        })
    }

    else {
        console.log('right');

        var bluecolor = gsap.utils.mapRange( rectanglelocation.width / 2, rectanglelocation.width, 0,255, locationval);

        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`
        })
    }
})

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white"
    })
})