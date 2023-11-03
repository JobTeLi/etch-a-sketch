const container = document.querySelector('.container');
const resetter = document.querySelector('.reset');
const rainbow = document.querySelector('.rainbow');
const classic = document.querySelector('.classic');
const squares = document.querySelector('.square');
/*the makeGrid function adds divs to the parent container in the size of squares */
function makeGrid(size){
  for(let i = 0; i < size * size; i++){  
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
  };   
};

/*slider function to set the size of makeGrid between 8 and 100
  select the slider and an event listener to trigger the makegrid */
function updateGrid(){
    reset();
    let slider = document.querySelector('.slider').value;    
    makeGrid(slider);   
}
/*when mouse goes over container color it this needs to be changed! */
classic.addEventListener('click', () => {
    reset();
    updateGrid();
    blackMode();
})

rainbow.addEventListener('click', () =>{
    reset();
    updateGrid();
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = godMode();
    });
})

function blackMode(){
    const black = 'black';
    container.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = black;
    });
}

function godMode(){
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${r}, ${g}, ${b})`;
    return rgb
    
}

/*remove all square divs */
function reset(){   
    const squares = document.querySelectorAll('.square');
    squares.forEach(s => s.remove());   
}
/*wipe me button to erase and make a default grid */
resetter.addEventListener('click', () =>{
    reset();
    makeGrid(16);
});

updateGrid();