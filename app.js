// Written by Daniel Cook on April 2nd, 2024.
// Last updated: today.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
    let button = document.getElementById("explore");
    let title = document.getElementById("title");   
    let timeline = document.getElementById("timeline");
    let all = document.getElementById("all");
    
    timeline.style.display = "none";
    all.style.display = "none";
    button.addEventListener("click", function() {
        title.style.animation = "fadeOut .5s linear";
        title.style.opacity = "0";
        timeline.style.display = "block";
        all.style.display = "block";
        timeline.style.animation = "fadeIn .5s linear";
        all.style.animation = "fadeIn .5s linear";
       // window.scrollTo(0,0);
    });
    
    // Timeline Buttons
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");

    let scroll = window.scrollX;

    function checkScroll(x) {
        if (x <= window.innerWidth) {
            one.style.animation = "grow .25s linear";
            one.style.fontSize = "2em";
            two.style.animation = "shrink .25 linear";
            two.style.fontSize = "1em";
        } else if (x >= window.innerWidth && x <= window.innerWidth * 2) {
            one.style.animation = "shrink .25 linear";
            one.style.fontSize = "1em";
            three.style.animation = "shrink .25 linear";
            three.style.fontSize = "1em";
            two.style.animation = "grow .25s linear";
            two.style.fontSize = "2em";
        } else if (x >= window.innerWidth * 2 && x <= window.innerWidth * 3) {
            two.style.animation = "shrink .25 linear";
            two.style.fontSize = "1em";
            three.style.animation = "grow .25s linear";
            three.style.fontSize = "2em";
        }
    }

    checkScroll(0);

    window.addEventListener('scroll', function() {
        scroll = window.scrollX;
        checkScroll(scroll);
    });
});
