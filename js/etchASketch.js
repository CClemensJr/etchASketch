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
}

createGrid(numBlocks);

$(document).ready(function() {
  //create a jquery script to add a color change effect when hovering over a square.
  $("td").hover(function(){
    $(this).addClass('hoverTD');
  });

  //When the user clicks the button...
  $("#setBlocks").on('click', function() {
    //...reset the grid to it's default state...
    $('td').addClass('resetTable');
    //$('td').remove();
  });
});

//and prompt for the new number of blocks per side
function promptBlocks(){
  var userBlocks = prompt("How many squares per side, young master?", "16");

  //check to see if a number was received
  if (isNaN(userBlocks))
  {
    alert("You must put in a number");
    return false;
  }

  createGrid(userBlocks);
}
