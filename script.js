let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

let body = document.getElementsByTagName("body");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

    // I added this conditional statement to hide the leftovers when scrolling to the bottom.
    if(value > 300){
        text.style.display = "none";
        leaf.style.display = "none";
        leaf.style.display = "none";
        hill5.style.display = "none";
        hill4.style.display = "none";
        hill1.style.display = "none";
    }
    else{
        text.style.display = "block";
        leaf.style.display = "block";
        leaf.style.display = "block";
        hill5.style.display = "block";
        hill4.style.display = "block";
        hill1.style.display = "block";
    }
});