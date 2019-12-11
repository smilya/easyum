let rows = document.querySelectorAll(".table-registers > tbody > tr:not(:last-of-type)");
let prices = document.querySelectorAll(".table-prices > tbody > tr > td:not(:nth-of-type(4n+1))");

for (let row of rows) {

  let count = function(row) {
    
    let waterCells = row.querySelectorAll("td > input");
    let hotWater = +waterCells[0].value + +waterCells[2].value;
    let coldWater = +waterCells[1].value + +waterCells[3].value;
    let discardWater = hotWater + coldWater;
    
    let hotWaterPrice = parseFloat(prices[0].innerText);
    let coldWaterPrice = parseFloat(prices[1].innerText);
    let discardWaterPrice = parseFloat(prices[2].innerText);
    
    let totalCost = (hotWater*hotWaterPrice + coldWater*coldWaterPrice + discardWater*discardWaterPrice).toFixed(2) + " руб.";
    row.lastElementChild.innerText = totalCost;
  };

  let countTotal = function(){
    let totalCells = document.querySelectorAll(".table-registers > tbody > tr:not(:last-of-type) > td:last-of-type");
    let totalOfTotal = 0;
    for (let cell of totalCells) {
      if (cell.innerText != "")
        { totalOfTotal += +parseFloat(cell.innerText);}
    };
    document.getElementById("totalOfTotal").innerText = totalOfTotal;
  }

  let inputCells = row.querySelectorAll("td > input");

  for (let cell of inputCells) {
    cell.onchange = function() {
      count(row);
      countTotal();
    };
  };

}
