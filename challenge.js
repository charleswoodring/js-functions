// print to webpage with information gathered
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

// initialize counter to 1 and hold number
  let bandNumber = 1

// process input data
  const takeNumber =  (bandName) => {
    const bandString = `<h3>${bandNumber}. ${bandName}</h3>`;
// add 1 to counter initialized on line 8
    bandNumber++;
// pass information (arg1 & arg2) to output (line 2)
    printToDom(bandString, 'bandz');
  };

  takeNumber("Galactic Scum") // This should display "1. Galactic Scum" in the DOM
  takeNumber("Underdogs") // This should display "2. Underdogs" in the DOM