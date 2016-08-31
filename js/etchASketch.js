//The number of rows and columns to be added to the grid
var numOfCells = 16;

//Create a table with JS and attach it to the html
var table = document.getElementById('screenTable');

//Create an empty rows and add it to the table
for (i = 0; i < numOfCells; i++)
{
  var row = table.insertRow(i);

  //Add cells to the row
  for (j = 0; j < numOfCells; j++)
  {
    var cell = row.insertCell(j);
    cell.innerHTML = j;
  }
}

//create a jquery script to add a color change effect when hovering over a square.
$(document).ready(function() {
  $("td").hover(function(){
    $(this).addClass('hoverTD');
  });
});
