//The number of rows and columns to be added to the grid
var numBlocks = 16;

//************************************************************************
//********* FUNCTION USED TO CLEAR THE SKETCH PAD ************************
//************************************************************************
function clearPad() {
  $('tr').remove();
}


//************************************************************************
//********* FUNCTION USED TO PROMPT FOR  SKETCH PAD PARAMETERS ***********
//************************************************************************
function promptBlocks() {
  //Set user input to a variable
  var userBlocks = prompt("How many squares per side, young master?", "16");

  cancel = false;

  //check to see if a number was received and if the number was too high
  if (isNaN(userBlocks))
  {
    alert("You must put in a number");
  } else if (userBlocks > 200) {
      alert("Slow down killer, you are going to hurt yourself! Why don't you be a good boy and try something under 200?");
  }

  //If good return userBlocks for use in other functions.
  return userBlocks;
}

//************************************************************************
//********* FUNCTION USED TO CREATE THE SKETCHPAD ************************
//************************************************************************
function createPad(blocksPerSide)
{
  //Create a table with JS and attach it to the html
  var table = document.getElementById('screenTable');
  //Create an empty row and add it to the table
  for (i = 0; i < blocksPerSide; i++)
  {
    var row = table.insertRow(i);
    //Add columns to the row
    for (j = 0; j < blocksPerSide; j++)
    {
      var cell = row.insertCell(j);
    }
  }
}

//************************************************************************
//********* FUNCTION USED TO "DRAW" ON THE SKETCHPAD *********************
//************************************************************************
//Change the color when hovering over a square
function drawBlocks(number) {
  console.log("The case number is " + number);
  switch (number) {
    case "1":
      //When the mouse is over the square
      $('td').hover(function(){
        //color the cell with the standard color
        $(this).addClass('hoverTD');
      });
      break;

    case "2":
      //When the mouse is over the square
      $('td').hover(function(){
        //assign a random number to each color
        var r = Math.floor((Math.random() * 255) + 0);
        var g = Math.floor((Math.random() * 255) + 0);
        var b = Math.floor((Math.random() * 255) + 0);

        //color the td with this random color
        $(this).css('background-color', 'rgb(' + r + ','
                                               + g + ','
                                               + b +')');
      });
      break;

    case "3":
      //When the mouse is over the square
      $('td').hover(function(){
          var opacity = $(this).css('opacity');

          if (opacity < 0.1) {
            $(this).css('opacity', opacity + 0.1);
          } else {
            $(this).css('opacity', 1);
          }
      });
      break;

    default:
      alert("Whoops, something went wrong.")
  }
}


//************************************************************************
//********* FUNCTION USED TO CREATE THE DEFAULT SKETCHPAD ***************
//************************************************************************
//function used to create the standard etch-a-sketch grid
function standardSketchPad() {
  //clear the previous sketch
  clearPad();

  //create the drawing surface based on what the user wants
  createPad(promptBlocks());

  //Add the ability to draw!
  drawBlocks("1");
}


//************************************************************************
//********* FUNCTION USED TO CREATE THE PIZZAZZ SKETCHPAD ****************
//************************************************************************
//function used to create the standard etch-a-sketch grid
function colorSketchPad() {
  //clear the previous sketch
  clearPad();

  //create the drawing surface based on what the user wants
  createPad(promptBlocks());

  //Add the ability to draw!
  drawBlocks("2");
}


//************************************************************************
//********* FUNCTION USED TO CREATE THE MYSTERIOUS SKETCHPAD *************
//************************************************************************
function shadeSketchPad() {
  //clear the previous sketch
  clearPad();

  //create the drawing surface based on what the user wants
  createPad(promptBlocks());

  //Add the ability to draw!
  drawBlocks("3");
}
