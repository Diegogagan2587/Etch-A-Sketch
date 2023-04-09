function setSideSizeDrawingArea(newSize,pictureContainer){
    pictureContainer.style.gridTemplateColumns = `repeat(${newSize}, 1fr)`;
    pictureContainer.style.gridTemplateRows = `repeat(${newSize},1fr)`;
}
function appenChildNumTimes(father,child,howManyTimes){
    for(i = 0; i<howManyTimes; i++){
        child.setAttribute("id",`pixel${i}`);//solve this but/////////////
        father.appendChild(child.cloneNode(true));
    }
    return father;
};

function changePixelColor(e){
    //e.cancelBubble = true;
    console.log('runing changePixelColor','e',')');
    let currentPixel = e.target;
    currentPixel.setAttribute('class', 'blackPixel');
}
function reStartDrawing() {
    let newSize = prompt('Please define a new length for all the sides?');
    if(newSize>100){newSize = 100;};
    pixelsPerSide = newSize;
    prevNumOfElem = pictureContainer.childElementCount;
    for(let i = 0; i<prevNumOfElem; i++){
        pictureContainer.removeChild(pictureContainer.lastChild);
    }
    setSideSizeDrawingArea(newSize,pictureContainer);
    appenChildNumTimes(pictureContainer,pixelDiv,newSize*newSize);
}
//helper functios upwards;

const pictureContainer = document.getElementById('picture-container');
pictureContainer.addEventListener('mouseover',changePixelColor);//now this works
console.log(pictureContainer);
//creatin the drawing Area;
const pixelDiv = document.createElement('div');
let pixelsPerSide = 16;
pixelDiv.className = 'pixelFromDrawing'
pixelDiv.innerText = ''
pixelDiv.addEventListener('mouseover',changePixelColor);
appenChildNumTimes(pictureContainer,pixelDiv,pixelsPerSide*pixelsPerSide);

//Reset Button Functionaliti

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reStartDrawing)
