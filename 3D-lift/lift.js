var layers = [];
const container = document.getElementsByClassName('container')[0];
var front = document.getElementById('front');
const front_text = front.innerText;

function appender(container, element_3d, front) {
    container.insertBefore(element_3d,front);
}

function layermaker(limit) {
    var div_3d = document.createElement('div');
    div_3d.classList.add('below');
    const innerText = document.createTextNode(front_text);
    div_3d.appendChild(innerText);
    var element_3d = div_3d.cloneNode(true);  
    
    
    for(let i=0; i<limit; i++) {
        layers.push(element_3d);
        element_3d = layers[layers.length-1].cloneNode(true);
        console.log(layers);
        appender(container, element_3d, front);
        
    }
}

function lift() {
    console.log(layers);
    var posX = 0.001;
    var posY = -0.001;
    for(let i=0; i<layers.length; i++) {
        layers[i].style.opacity = '1';
        layers[i].style.transform = 
            `translate(${posX.toString()+"em"},${posY.toString()+"em"})`
        posX += 0.001;
        posY -= 0.001;
    }
    front.style.transform = 
        `translate(${posX.toString()+"em"},${posY.toString()+"em"})`;
}

function land() {
    for(let i=0; i<layers.length; i++) {
        layers[i].style.opacity = '0';
        layers[i].style.transform = 'translate(0px,0px)';
    }
    front.style.transform = 'translate(0px,0px)';
}

layermaker(350);
front.addEventListener('mouseenter', lift);
front.addEventListener('mouseleave', land);