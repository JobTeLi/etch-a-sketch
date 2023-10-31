const container = document.querySelector('.container');
const resetter = document.querySelector('.reset');
function makeGrid(size){
  for(let i = 0; i < size * size; i++){  
    let newDiv = document.createElement('div');
    newDiv.classList.add('square');
    container.appendChild(newDiv);
  };   
};
makeGrid(16);



container.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = "black";
});

function reset(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(function(div){
        div.parentNode.removeChild(div);
    });
    makeGrid(16);
}

resetter.addEventListener('click', reset);

