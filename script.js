let tradeType = ""; //this variable will eventually hold either BUY/SELL
console.log(tradeType)
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
    
// test means "run the instructions what ever is written inside the test function" but we havent yet told the function to run we have told it just to create
}
test(); 
const symbolInput=document.getElementById("symbol-input")  // this reprsents our dropdown menu
console.log(symbolInput.value)  // tells javascript to display something on the browser console
// .value means it gets the currently selected option from menu
//so the whole line says that take what ever the user has selected from the dropdown and siplay in the console
symbolInput.addEventListener("change",function(){
symbolDisplay.textContent=symbolInput.value;   // simboldisplay is where we want to show the symbol ,, textcontext andre it changes the text inside the HTML element .value gets whatever the user has selected 

})
const timeFrameDisplay = document.getElementById("timeframe-display");

const timeFrameInputs = document.querySelectorAll('input[name="time-frame"]');//TIMEFRAMEINPUT contains 5 different radio inputs  

timeFrameInputs.forEach(function(timeFrame) {  //here timeframe is just a temporary variable name 
    // so the above line says that for every time frame radio button , temporarily call that button and perform following actios
    timeFrame.addEventListener("change", function() {   //addeventlistener means "wait for something to happen to this element,,basically listen for a change"
//so the above 2 lines says that go through each timeframe radiobuttons and listen for the user changing.
        timeFrameDisplay.textContent = timeFrame.value;
    });     
});


//const==creates a variable whose value cannot be reassigned
//timeFrameDisplay== is name we chose fro variable
//"=" means store the value on the right side to the variable on the left
//document==represents our webpage
//"." means access something belonging to the document  
//timeframe-display== it is the exact id we are looking for
//so the complete line means "find the HTML element whose id is timeframe-display and store it inside the variable called
// timeFrameDisplay"

//queryselector==go into my HTML and find the element that matches my description(inside the bracket) it is finding the five radio buttons
//so the second line says "find all the input elements whose name is time-frame and store it inside the variable"


//3rd line
//timeFrameInput==our variable containing all 5 radio buttons 
//forEach==go through each element onebyone
//fucntion(timeFrame)== creates a function that runs for each radio button 
const buybutton=document.getElementById("buy-button");
const sellbutton=document.getElementById("sell-button");
buybutton.addEventListener("click",function(){
    buybutton.classList.add("green-buy");
    tradeType="BUY";//whenever the buybutton is clicked we are changing our 
    console.log(tradeType);
    console.log(quant.value);
    console.log(sell.value);
    console.log(tp.value);
    const quantity = Number(quant.value);
    const sellStop=Number(sell.value);
    const takeProfit=Number(tp.value);
    console.log(sellStop);
    console.log(takeProfit);
    console.log(quantity);
    const riskReward = takeProfit / sellStop;
    console.log(riskReward);
    const userSetup={};
    //usersetup is an empty container with curly braces,if it had double quotes then it wud contain emtry strings 
    userSetup.maximumRiskReward=2;
    //usersetup is our tradesetup container
    //that acts as a container where  we put our parameters for entering the trade
    //minimumriskreward is the property we are creating 
    //so the line says that tarder wants atleast 1:2rr
    console.log(userSetup.maximumRiskReward);
    if (riskReward>=userSetup.maximumRiskReward){
        return; // we have return here so that when the buyer clicks BUY button and RR exceeds his initial setup then stop the trade 
        alert("trade stopped due to inappropriate RR");
        console.log("trade stopped with exceeding RR");
        
    }


    //variable from "" to "BUY"
    //buybtton is our variable pointing towards our BUYBUTTON
    //classlist is a property that represents the CSS classes currently connected acttached to the HTML element
    //initially buy had no classes , but now after this lines is complied JS says that
    //this button is buy and i am giving it as class green-buy and apply styling for this 
    //.add tells that add this class to the element
    // so the whole line tells us that take the buybutton and access its class and add the class
    //and then css takes over and does its styling part on its own 
    sellbutton.classList.remove("red-sell");
   
});
sellbutton.addEventListener("click",function(){
    
    buybutton.classList.remove("green-buy");//removes the class from the list
    // the above line is inside this function cuz if the user clicks sell it shud first deselect the buy
    sellbutton.classList.add("red-sell");
    tradeType="SELL";
    console.log(tradeType);
    console.log(quant.value);
    console.log(sell.value);
    console.log(tp.value);
    

});
const quant=document.getElementById("quantity-input");
console.log(quant.value);
quant.addEventListener("input",function(){  //input is for typing in the placeholder
//quant gets the number whatever we type in the placeholder 
    console.log(quant.value);
const quantity=Number(quant.value);//the number you type in the quant box store it inside this variable
console.log(quantity);
if (quantity>0){
    console.log("valid quantity")
    console.log("Trade can proceed");
}
else{
    console.log("invalid quantity")
    console.log("trade cannot be taken ")
}
});
//QUANTITY.VALUE==INPUT VALUE IS IN THE FORM OF TEXT
const sell=document.getElementById("sl-input");
console.log(sell.value)

sell.addEventListener("input",function(){
    const sellStop=Number(sell.value);
    console.log(sellStop)
});

const tp=document.getElementById("tp-input");
console.log(tp.value);
tp.addEventListener("input",function(){
    const takeProfit=Number(tp.value)
    console.log(takeProfit);
});
const userSetup={};
const fvgRule=document.getElementById("FVG-rule");
userSetup.fvgRequired=fvgRule.checked;
//usersetup is the object we created 
//fvgreq is a variable like property that means it adds a property called fvg req to usersetup object
//.checked asks if the box is already ticked 
//usersetup.fvgrequired means we are creating a property called
//fvgrequired inside the object usersetup
console.log(userSetup.fvgRequired);
const saveSetup=document.getElementById("save-setup");
console.log(saveSetup);
saveSetup.addEventListener("click",function(){
    userSetup.fvgRequired=fvgRule.checked;
    //we are again adding fvgreq to this to make sure this will be updated 
    console.log("setup saved");
    console.log(userSetup);

});