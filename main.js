const container = document.querySelector('.container');
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