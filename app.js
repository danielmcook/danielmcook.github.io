// Written by Daniel Cook on April 2nd, 2024.
// Last updated: today.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
    let button = document.getElementById("explore");
    let title = document.getElementById("hero");   
    let main = document.getElementById("main");
    
    main.style.display = "none";
    
    button.addEventListener("click", function() {
        title.style.animation = "fadeOut .5s linear";
        title.style.opacity = "0";
        title.style.display = "none";
        main.style.display = "block";
        main.style.animation = "fadeIn .5s linear";
     
       // window.scrollTo(0,0);
    });
    
    // Timeline Buttons
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");

    let scroll = window.scrollX;

    function checkScroll(x) {
        console.log(x);
        if (x <= window.innerHeight) {
            one.style.animation = "grow .25s linear";
            one.style.fontSize = "2em";
            two.style.animation = "shrink .25 linear";
            two.style.fontSize = "1em";
        } else if (x >= window.innerHeight / 3 && x <= window.innerHeight * 2) {
            one.style.animation = "shrink .25 linear";
            one.style.fontSize = "1em";
            three.style.animation = "shrink .25 linear";
            three.style.fontSize = "1em";
            two.style.animation = "grow .25s linear";
            two.style.fontSize = "2em";
        } else if (x >= window.innerHeight * 2 && x <= window.innerHeight * 3) {
            two.style.animation = "shrink .25 linear";
            two.style.fontSize = "1em";
            three.style.animation = "grow .25s linear";
            three.style.fontSize = "2em";
            four.style.animation = "shrink .25 linear";
            four.style.fontSize = "1em";
        } else if (x >= window.innerHeight * 3.5) {
            three.style.animation = "shrink .25 linear";
            three.style.fontSize = "1em";
            four.style.animation = "grow .25s linear";
            four.style.fontSize = "2em";
        }
    }

    checkScroll(0);

    window.addEventListener('scroll', function() {
        scroll = window.scrollY;
        checkScroll(scroll);
    });
});
