
var nummersParent = document.querySelector('.wiel-2');
var nummersArray = nummersParent.children;

var sectionsParent = document.querySelector('.wiel-4');
var sectionsArray = sectionsParent.children;

var elementParent = document.querySelector('.grid');
var elementArray = elementParent.children;


DraaiElementen(nummersArray);
DraaiElementen(sectionsArray);

SetRedBlackColor();

SetOnclick(elementArray);


function SetOnclick(array)
{
  for (var i = 0; i < array.length; i++)
  {
    array[i].setAttribute("onclick", "PlaceRemoveCoin(this); AddRemoveBet(this); UpdateScoreUI();");
  }
}

function DraaiElementen(array)
{

  var rotatie = 0;

  var rotatieStap = 360/array.length;

  for (var i = 0; i < array.length; i++)
  {

    array[i].setAttribute('style',"transform: rotate(" + rotatie + "deg);");
    rotatie = rotatie + rotatieStap;

  }

}

function SetRedBlackColor()
{

  var colorSwitch = false;


  for (var i = 0; i < nummersArray.length; i++)
  {

    colorSwitch = !colorSwitch;

    if (colorSwitch)
    {
      nummersArray[i].style.background = "#ff3333";
    }
    else
    {
      nummersArray[i].style.background = "black";
    }
  }

    nummersArray[0].style.background = "darkgreen";

}
