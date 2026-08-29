
let symbol="XAUUSD";
symbol="EURUSD";     //THIS SHOWS VALUE CAN BE REASSIGNED USING let
console.log(symbol);

const testNumber=10;
console.log(testNumber);   // we cannot reassign the value using const

let card="BTCUSD";
console.log(card);
let symbolDisplay=document.getElementById("symbol-display")
const x=document.getElementById("symbol-display")   // now this doesnt mean we can never cange the HTML element ,,, we can do it unlike const
// in the above line let symboldisplay is like "we are creating a variable called as symboldisplay"
//document means the basically the webpage
//getelemetbyid is a javascript function that means find the html element using its ID
// so the lines means" hey broswer find me the html element whose id is ---- and stre it inside a variabl;e called symboldisplay
symbolDisplay.textContent=symbol;
function test(){
    console.log("function is working");   
}

// test means "run the instructions what ever is written inside the test function" but we havent yet told the function to run we have told it just to create
test(); 
const symbolInput=document.getElementById("symbol-input")  // this reprsents our dropdown menu
console.log(symbolInput.value)  // tells javascript to display something on the browser console
// .value means it gets the currently selected option from menu
//so the whole line says that take what ever the user has selected from the dropdown and siplay in the console
symbolInput.addEventListener("change",function(){
symbolDisplay.textContent=symbolInput.value;   // simboldisplay is where we want to show the symbol ,, textcontext andre it changes the text inside the HTML element .value gets whatever the user has selected 

})