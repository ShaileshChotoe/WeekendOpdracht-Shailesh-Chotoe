
let coins = 10;

let money = 0;

let betNumbers = [];

let winningNumber;

let cheat = false;

function EnableCheat()
{
  cheat = !cheat;
  console.log(cheat);
}

function PlaceRemoveCoin(element)
{

    if (!element.placed)
    {
      if (coins > 0)
      {
        coins = coins - 1;
        var muntje = document.createElement("IMG");
        element.appendChild(muntje);
        muntje.src = "images/coin.png";
        muntje.style.position = "absolute";
        muntje.style.width = "25px";
        muntje.style.top = 0;
        muntje.style.bottom = 0;
        muntje.style.left = 0;
        muntje.style.right = 0;
        muntje.style.margin = "auto";
        element.placed = true;
      }
    }
    else
    {
      element.removeChild(element.childNodes[1]);
      element.placed = false;
      coins = coins + 1;
    }

}

function AddRemoveBet(element)
{

  if (element.placed)
  {
      if(element.classList[1] == "red" || element.classList[1] == "black" || element.classList[1] == "green")
      {
        betNumbers.push(element.childNodes[0].innerHTML);
      }
  }
  else
  {
    for (var i = 0; i < betNumbers.length; i++)
    {
      if (betNumbers[i] == element.childNodes[0].innerHTML)
      {
        betNumbers.splice(i, 1);
      }
    }
  }


}

function UpdateScoreUI()
{

  if (betNumbers.length == 0)
  {
    betValues.innerHTML = "PLAATS MUNTEN";
  }
  else
  {
    for (var i = 0; i < betNumbers.length; i++)
    {
      betValues.innerHTML = betNumbers;
    }
  }

    coinvalue.innerHTML = coins;

}

function ChooseRandomNumber()
{

  if (cheat)
  {
    winningNumber = betNumbers[Math.floor(Math.random() * betNumbers.length)];
    console.log('on');
  }
  else
  {
    winningNumber = Math.floor(Math.random() * 37);
  }


}

function DisableButton(element)
{
  element.removeAttribute("onclick");
  body.classList.toggle("clicked");
}

function SpinWiel()
{
  body.classList.toggle("spinned");
}

function EnableButton(element)
{
  element.setAttribute("onclick", "DisableButton(this); ChooseRandomNumber(); SpinWiel(); ResetStates(this)");
}

function ResetStates(element)
{

  setTimeout(function(){

    body.classList.toggle("spinned");
    body.classList.toggle("clicked");

    SetWinningNumber();
    EnableButton(element);

    CheckWinningNumber(betNumbers);

  }, 2000);


}

function SetWinningNumber()
{
  winningText.innerHTML = winningNumber;
}

function CheckWinningNumber(array)
{

  for (var i = 0; i < array.length; i++)
  {

    if (array[i] == winningNumber)
    {
      money = money + 250;
      setColorMoney();
      return;
    }

  }

  money = money - 250;
  setColorMoney();

}

function setColorMoney()
{

  if (money < 0)
  {
    moneyValue.style.color = 'red';
  }
  else if (money == 0) {
    moneyValue.style.color = 'white';
  }
  else {
    moneyValue.style.color = 'green';
  }

  moneyValue.innerHTML = "$ " + money;

}
