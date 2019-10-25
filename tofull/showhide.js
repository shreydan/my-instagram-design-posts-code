section1 = document.getElementById('section1');
section2 = document.getElementById('section2');
section3 = document.getElementById('section3');
section4 = document.getElementById('section4');

console.log(section1,section2,section3,section4)


function show(section) {
    if (section == 'section1') {
        section1.classList.add('show');
        section2.classList.add('hide');
        section3.classList.add('hide');
        section4.classList.add('hide');
    }
    if (section == 'section2') {
        section2.classList.add('show');
        section1.classList.add('hide');
        section3.classList.add('hide');
        section4.classList.add('hide');
    }
    if (section == 'section3') {
        section3.classList.add('show');
        section1.classList.add('hide');
        section2.classList.add('hide');
        section4.classList.add('hide');
    }
    if (section == 'section4') {
        section4.classList.add('show');
        section1.classList.add('hide');
        section2.classList.add('hide');
        section3.classList.add('hide');
    }
}

function makedefault() {
    section1.classList.remove('hide');
    section1.classList.remove('show');
    section2.classList.remove('hide');
    section2.classList.remove('show');
    section3.classList.remove('hide');
    section3.classList.remove('show');
    section4.classList.remove('hide');
    section4.classList.remove('show');

    
}

section1.addEventListener("mouseenter", () => {
    show('section1');
});
section1.addEventListener("mouseout", () => {
    makedefault();
});

section2.addEventListener("mouseenter", () => {
    show('section2');
});
section2.addEventListener("mouseout", () => {
    makedefault();
});

section3.addEventListener("mouseenter", () => {
    show('section3');
});
section3.addEventListener("mouseout", () => {
    makedefault();
});

section4.addEventListener("mouseenter", () => {
    show('section4');
});
section4.addEventListener("mouseout", () => {
    makedefault();
});