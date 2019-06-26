//let userInput = Number(prompt('How large do you want your grid?'))
//console.log(userInput);

let gridTable = document.getElementById('gridTable');

function changeCellColor(){
    if (this.className == 'cell filledCell')
        return;
    currentCell = this;
    currentCell.className += ' filledCell';
}
function generateGrid(numberOfDivs){
    for (let i = 0; i < numberOfDivs; i++){
        let row = gridTable.insertRow(i)
        row.className = 'rows';
        for (let x = 0; x < numberOfDivs; x++){
            let cell =row.insertCell(x);
            cell.className = 'cell';
            cell.id = `Cell ${x + 1}`;
            //cell.innerHTML = `Cell ${x + 1}`;
            cell.addEventListener('mouseenter', changeCellColor);
        }
    }
}
generateGrid(20);

function userGenerateGrid(){
    newSize = document.getElementById('userInput').value;
    console.log(newSize);
    console.log('rean user Generate grid')
    generateGrid(newSize);
}


let allCells = document.getElementsByClassName('cell filledCell');
let resetButton = document.querySelector('.reset');

resetButton.addEventListener('click', resetGrid);

function resetGrid(){
    for(var i = 0; i < allCells.length; i++){
        allCells[i].classList.remove('filledCell');
        console.log('reset grid run');
        
    }

}