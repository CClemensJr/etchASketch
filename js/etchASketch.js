//The number of rows and columns to be added to the grid
var numBlocks = 5;

//function used to create the etch-a-sketch grid
function createGrid(number) {
  //clear the previous table
  $('tr').remove();
  //Create a table with JS and attach it to the html
  var table = document.getElementById('screenTable');
  //Create an empty row and add it to the table
  for (i = 0; i < number; i++)
  {
    var row = table.insertRow(i);
    //Add columns to the row
    for (j = 0; j < number; j++)
    {
      var cell = row.insertCell(j);
    }
  }
  //Add the ability to draw!
  drawBlocks();
}

createGrid(numBlocks);


//Change the color when hovering over a square
function drawBlocks() {
  $('td').hover(function(){
    $(this).addClass('hoverTD');
  })
}

//When user clicks on the button prompt for the new number of blocks per side
function promptBlocks() {
  var userBlocks = prompt("How many squares per side, young master?", "16");

  //check to see if a number was received
  if (isNaN(userBlocks))
  {
    alert("You must put in a number");
    return false;
  }
  //create a new grid with userBlocks on every side
  createGrid(userBlocks);
}
