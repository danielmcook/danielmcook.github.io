// !!REMEMBER TO REPLACE THE JQUERY WITH THE COMPRESSED VERISON

$(document).ready(function() {
    // Title Area
    let daniel = document.getElementById('daniel');
    let morrison = document.getElementById('morrison');
    let cook = document.getElementById('cook');
    let titleSec = document.getElementById('title');
    let socialsSec = document.getElementById('socials');
    // Scroll Event Listener
    socialsSec.style.opacity = .05;
    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        daniel.style.left =  (value * 7) + 'px';
        // Title Card Animations
        morrison.style.left = (-value * 4) + 'px';
        cook.style.left = (value * 4) + 'px';
        // Socials Fade In
        
        if (value > 200) {
            socialsSec.style.animation = "opacityEffect 1s linear";
            socialsSec.style.opacity = 1;
            titleSec.style.display = "none";
        } else {
            socialsSec.style.animation = "reverseOpacityEffect 1s linear";
            socialsSec.style.opacity = .05;
            titleSec.style.display = "block";
        }
        // Projects Title Fade In 
        let projectsTitle = document.getElementById("projects");
        let banner = this.document.getElementById("banner");
        if (value > 400) {
            projectsTitle.style.animation = "opacityEffect 1s linear";
            projectsTitle.style.opacity = 1;
            banner.style.left = -450 + ((value - 500) * .5) + 'px';
        } else {
            projectsTitle.style.animation = "reverseOpacityEffect 1s linear";
            projectsTitle.style.opacity = 0.05;
        }
    })
    // Rotating Thing
    const circleStrs = [];
    circleStrs.push("SOCIALS ● INSTAGRAM ● VSCO ● SOCIALS ● VSCO ●", "FIGHTLINE ● SOCIALS ● SNAP ● EMAIL ●");
    const text = document.getElementById("rotate");
    const text1 = document.getElementById("rotate1");
    const text2 = document.getElementById("rotate2");
    let enabled = true;
    // Loop to create three circles
    if (enabled) {
        for (let n = 0; n < 2; n++) {
            for (let i = 0; i < circleStrs[n].length; i++) {
                let span = document.createElement("span");
                span.setAttribute('id', "n" + n);
                let str = circleStrs[n];
                span.innerHTML = str[i];
                if (n == 0) {
                    text.appendChild(span);
                } else if (n == 1) {
                    text1.appendChild(span);
                } else {
                    text2.appendChild(span);
                }
                span.style.transform = `rotate(${8*i}deg)`;
                if (n > 0) {
                    span.style.transform = `rotate(${(10 * n)*i}deg)`;
                }
                
            };
        }
    }
});
