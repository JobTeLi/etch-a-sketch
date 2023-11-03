const container = document.querySelector('.container');
const resetter = document.querySelector('.reset');

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
container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black";
});

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