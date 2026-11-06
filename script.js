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
    const y=document.getElementById("symbol-display")   // now this doesnt mean we can never cange the HTML element ,,, we can do it unlike const
    // in the above line let symboldisplay is like "we are creating a variable called as symboldisplay"
    //document means the basically the webpage
    //getelemetbyid is a javascript function that means find the html element using its ID
    // so the lines means" hey broswer find me the html element whose id is ---- and stre it inside a variabl;e called symboldisplay
    function test(){
        console.log("function is working");   
      symbolDisplay.textContent=symbol;
        
    // test means "run the instructions what ever is written inside the test function" but we havent yet told the function to run we have told it just to create
    }
    test(); 
    const symbolInput=document.getElementById("symbol-input")  // this reprsents our dropdown menu
    console.log(symbolInput.value)  // tells javascript to display something on the browser console
    //so the whole line says that take what ever the user has selected from the dropdown and siplay in the console
    symbolInput.addEventListener("change",function(){
    // .value means it gets the currently selected option from menu
    symbolDisplay.textContent=symbolInput.value;   // simboldisplay is where we want to show the symbol ,, textcontext andre it changes the text inside the HTML element .value gets whatever the user has selected 
 loadCandles(true);
    })
    const timeFrameDisplay = document.getElementById("timeframe-display");

    const timeFrameInputs = document.querySelectorAll('input[name="time-frame"]');//TIMEFRAMEINPUT contains 5 different radio inputs  

    timeFrameInputs.forEach(function(timeFrame) {  //here timeframe is just a temporary variable name 
        // so the above line says that for every time frame radio button , temporarily call that button and perform following actios
        timeFrame.addEventListener("change", function() {   //addeventlistener means "wait for something to happen to this element,,basically listen for a change"
    //so the above 2 lines says that go through each timeframe radiobuttons and listen for the user changing.
            timeFrameDisplay.textContent = timeFrame.value;
           loadCandles(true);
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
              const hasFVG = checkFVG("BUY");
console.log("FVG present:", hasFVG);
        
if (userSetup.fvgRequired && !hasFVG) {
    alert("Trade stopped: FVG is required, but no FVG was found.");
    return;
}

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
        //const userSetup={};
        //usersetup is an empty container with curly braces,if it had double quotes then it wud contain emtry strings 
        console.log(riskReward);
        //userSetup.maximumRiskReward=2;
        //usersetup is our tradesetup container
        //that acts as a container where  we put our parameters for entering the trade
        //minimumriskreward is the property we are creating 
        //so the line says that tarder wants atleast 1:2rr
        console.log(userSetup.minimumRiskReward);
        if (riskReward<userSetup.minimumRiskReward){
            alert("trade stopped due to inappropriate RR");
            return; // we have return here so that when the buyer clicks BUY button and RR exceeds his initial setup then stop the trade 
            
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
               const hasFVG = checkFVG("SELL");
        
if (userSetup.fvgRequired && !hasFVG) {
    alert("Trade stopped: FVG is required, but no FVG was found.");
    return;
}

console.log("FVG present:", hasFVG);
        
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
    //quant gets the number whatever we type in the quant box 
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
    const userSetup={
       fvgRules:{   //inside an object a property must use a colon(:) not equals
        validity:null,
        mitigation:null,
      },
      timeFrameRules:{
        entryTimeframe:null,
        higherTimeFrameConfirmation:false,//stores whether the trader requires high time frame confluence
      },
        maxRiskPercentage:null // we dont use another separate object for property because its the only propery we are using

    };//this object  has been created to store traders settings, in this object is evrything inside outer braces
    const fvgRule=document.getElementById("FVG-rule");
    userSetup.fvgRequired=fvgRule.checked;
    //usersetup is the object we created 
    //fvgreq is a variable like property that means it adds a property called fvg req to usersetup object
    //.checked asks if the box is already ticked 
    //usersetup.fvgrequired means we are creating a property called
    //fvgrequired inside the object usersetup

    console.log(userSetup.fvgRequired);
    const maxRR=document.getElementById("max-rr");
    maxRR.addEventListener("input",function(){
        userSetup.minimumRiskReward=Number(maxRR.value);
        
      });
      const saveSetup=document.getElementById("save-setup");
    console.log(saveSetup);
    saveSetup.addEventListener("click",function(){
        userSetup.fvgRequired=fvgRule.checked;
        //we are again adding fvgreq to this to make sure this will be updated 
        console.log("setup saved");
        console.log(userSetup);

    });
    const chart = LightweightCharts.createChart(
        document.getElementById("chart-area")
        );
        //the above line is basically where the chart has to be created 
        //that is inside the html id "chart-area"
        console.log(chart);  // this line says that "show me this value inside the browser"
        //the above line doesnt actually display the chart on the screen it dislays the informaton about the chart in console
        console.log(
        document.getElementById("chart-area").getBoundingClientRect()
    );//the semicolon tells JS that the statement is finished 
    //const creates a varibake which cannot be reassigned 
    //lightweightchart== it is the library we loaded in html,it contains  charts tools
    //when the library loads it gives javascript an object called lightweightchart
    //createchart is the function provided by the library 
    //it asks the library to create a chart 
    //so the complete firstline means create  chart using library and store it inside the variable called as chart
    //so the complete above function says that create a chart inside the chart-area and store it insid ethe variable 
    //getboundingclientrect==tell me the actual size of the html element the screen 
        console.log(document.getElementById("chart-area"));
    //the above lines say that create a lightweight chart inside the html element who id is chart-area
    const candlestickSeries = chart.addSeries(
    //add series to my chart and store inside candlesticksseries
        LightweightCharts.CandlestickSeries
    //,addseries() tells what type of series we want...
    //here we want candlestickseries from the the lightweightcharts lib
    );
    document.getElementById("chart-area").style.position = "relative";
   
        
    // activeFVG holds the one zone currently marked on the chart (or null when nothing is marked)
    let activeFVG = null; //to hold the zone currently marked on the chart 
    //let helps us to change the value later 

    // ONE rectangle, created once and re-used. Because it is the only one, repeated
    // BUY/SELL clicks can never stack duplicates.
    //creating the rectangle 
    const fvgZone = document.createElement("div"); // we are creating new empty div which will be the shaded rectangle
    fvgZone.className = "fvg-zone"; //we are giving the div a classname so that we can style it later 
    //we are creating a class becuze we would require that to design our element
    //confugure the  rectangle 
    fvgZone.style.position = "absolute"; 
    //position is the property of CSS and absolute is the value we are giving to the property 
    //absolute allows us to position the element i.e fvgZone using co ordinates such as top left right centre
    fvgZone.style.display = "none";          // hidden until a BUY/SELL click finds an FVG
     //dosplay helps to control how an element must be displayed 
    fvgZone.style.pointerEvents = "none";    // lets mouse clicks and drags pass through to the chart
    //pointerevents controls how the element must respond to the pointer interactions
    fvgZone.style.zIndex = "5";
    //zindex controls the stacking  order of the positioned elements basically it helps to determine which elements will appear above every element
    
    //attach the rectangle to the chart
    document.getElementById("chart-area").appendChild(fvgZone);

    // Runs about 60 times a second and moves the rectangle to match the chart's current
    // zoom and scroll, so it stays on the right candles and prices.
   //psoition and resize the rectangle 
    function updateFVGZone() {  //controsl where the fvg shold appear on the chart and update its size and postion 
        let visible = false;
        //at the start of the fucntion our code assumes that the FVg must be hidden 

        if (activeFVG) {
            const x = chart.timeScale().timeToCoordinate(activeFVG.startTime);
            const yHigh = candlestickSeries.priceToCoordinate(activeFVG.high);
            const yLow = candlestickSeries.priceToCoordinate(activeFVG.low);
            const rightEdge = chart.timeScale().width();   // stops the zone before the price axis
            //checking whether the rectangle can be drawn 
            if (x !== null && yHigh !== null && yLow !== null && x < rightEdge) {
                const left = Math.max(x, 0);
                fvgZone.style.left = left + "px";
                fvgZone.style.width = (rightEdge - left) + "px";
                fvgZone.style.top = Math.min(yHigh, yLow) + "px";
                fvgZone.style.height = Math.max(Math.abs(yLow - yHigh), 2) + "px";
                fvgZone.style.background = activeFVG.color;
                fvgZone.style.border = "1px solid " + activeFVG.borderColor;
                visible = true;
            }
        }
        fvgZone.style.display = visible ? "block" : "none";
        requestAnimationFrame(updateFVGZone);
    }
    requestAnimationFrame(updateFVGZone);


    
    console.log(
        document.querySelector(".chart-area").getBoundingClientRect().width
    );
    //the above line says that "find the element that matche my description in CSS and get me the details"
    //getboundingclientrect.width-- from all the info that getbpundingclientrect gives , give me only width

    candlestickSeries.setData([   
    //give the candlesticks we created earlier particular datas
        { time: "2026-09-01", open: 100, high: 110, low: 95, close: 105 },
        { time: "2026-09-02", open: 105, high: 115, low: 100, close: 112 },
        { time: "2026-09-03", open: 112, high: 120, low: 108, close: 115 },
        { time: "2026-09-04", open: 115, high: 118, low: 105, close: 108 }

    ]);


    // the above is the collection of array []== tis represents the start of the array 
    //console.log(LightweightCharts);
    //const candles = [];
    //for (let i = 0; i < 20; i++) {
            //const open = 1.16 + i * 0.0001;
            //const high = open + 0.0003;
            //const low = open - 0.0002;
            //const close = open + 0.0001;
            //candles.push({
                // push means take this new candle and put it at the end of the array
            // time: i,
                //open: open,
                //high: high,
                //low:low,
                //close:close,
    //semicolon means add this value under this property name 

        // })
        //}
    //const API_KEY = "YOUR_API_KEY";
    //API key acts as credential that tells twelve data that request is coming from my account
    //fetch(`https://api.twelvedata.com/time_series?symbol=EUR/USD&interval=1min&outputsize=100&apikey=${API_KEY}`)
    //fetch== its is a built in java functions which helps to request data from somehwere
    //on the internet
    //the url  is address of the API endpoint we want to communicate with and contains parameters that we require from them 
    // so the whole line means send a request to that URL and get a response 
    //everything after the "?" as the instructions we are sending to the API like symbolinterval and no of candles 
    //.then(response => response.json())   //the syntax is basically fetch().then()
    // the syntax means send the request and when the response comes back continue with the code
    //response is just a varible we chose for whatever twelve data sends back
    //JSON==javascriptobjectnotation
    //it is the common format for sending data between applications 
    //.json means take the json response that comes from tweledata and turn it into smthg JS can directly work with
    //so the whole line means convert the data into JS and store it in repsonse variable
    //reponse contains whole http data that means Did the request succeed?
    //What status code did we get?
    //What type of data came back?
    //.then(data => {               //this data variable contains the parsed json content
    //  window.marketData = data; //show me the complete marketdata response i got from 12data in the browser console
        //console.log(JSON.stringify(marketData));
        //const candles = marketData.values;
        
        //if// (marketData.status==="error") {
        //  console.log(("APIERROR"))
            //return;
        //}
        
        //console.log(candles);
        //console.log(candles.length);
        
        
    //the baove line says that go inside marketdata and give me the VALUE stored uder
    //VALUES property
    //so the meaning is stores those 100 candles in CANDLES variable 
        //console.log(candles);
        //console.log (candles[0]);
    //only prints the first candle from the candles array 
        //console.log(Number(candles[0].close));
    //(.dot) is used to access the property of an object 
        //console.log(candles[0].datetime);
    //it means go to the first candle get me its dataandtime
        //console.log(Number(candles[0].open));
    //number means convert the string output into a js number 
        //console.log(Number(candles[0].high));
        //console.log(Number(candles[0].low));
    //const chartData = candles.reverse().map(function(candle) {
        //const chartData = candles.map(function(candle) {
        //.map==creates a new version of candles and goes through the array and 
    //reverse the order of candles 
    //12data send newesttooldest we want from oldesttonewest
    //calls this function once for each candle which is being processed

        //      return{
            //time: Math.floor(new Date(candle.datetime).getTime() / 1000),  
            //time: candle.time,
    //new means create a new object,date is a bultin javasc fucntion for creating java date objects 
    //so we are telling JS to create an object that actually holds date related functionality 
    //math.floor removes decimal part and gives us the whole number    
            //open: Number(candle.open),
            //high: Number(candle.high),
            //low: Number(candle.low),
            //close: Number(candle.close) 
    //CANDLES IS WHOLE ARRAY ,,,CANDLE IS ONE
            //  }
    //});

    //this is where we load the real candles from our local candles.json file

    
// ===================== LIVE CANDLE SETTINGS =====================
// Change these numbers to tune the chart. Nothing else needs editing.
const REFRESH_INTERVAL_MS = 1000;  // how often we ask BiQuote for the newest candles (1000 = 1 second)
const FULL_LOAD_BARS = 500;        // candles loaded when the page opens and when you switch symbol/timeframe
const REFRESH_BARS = 5;            // newest candles requested on every refresh (small and fast)
const MAX_BACKOFF_MS = 30000;      // after errors we wait longer between tries, but never more than this

// ===================== LIVE CANDLE STATE =====================
let candleStore = [];         // our own copy of every candle drawn on the chart, oldest to newest
let selectionId = 0;          // goes up by 1 only when YOU pick a new symbol or timeframe
let inFlight = null;          // the request running right now (null = none), so requests never pile up
let forceFullNext = false;    // true = the next refresh must reload all candles (a gap or correction was found)
let consecutiveFailures = 0;  // how many refreshes in a row have failed
let unchangedCount = 0;       // how many refreshes in a row brought no new data
let refreshTimer = null;

// true only if two candles are identical in every field
function sameCandle(a, b) {
  return a.time === b.time && a.open === b.open && a.high === b.high &&
         a.low === b.low && a.close === b.close && a.isOpen === b.isOpen;
}

// Turns the API's bars into clean chart candles: real numbers only, oldest first, one candle per time.
function normalizeBars(bars) {
  const clean = bars
    .map(candle => ({
      time: Math.floor(new Date(candle.openTime).getTime() / 1000),
      open: Number(candle.open),
      high: Number(candle.high),
      low: Number(candle.low),
      close: Number(candle.close),
      isOpen: candle.isOpen
    }))
    .filter(candle =>
      Number.isFinite(candle.time) &&
      Number.isFinite(candle.open) &&
      Number.isFinite(candle.high) &&
      Number.isFinite(candle.low) &&
      Number.isFinite(candle.close)
    )
    .sort((a, b) => a.time - b.time);
  // if two candles share a time, keep only the later one (the chart rejects duplicates)
  return clean.filter((c, i) => i === clean.length - 1 || c.time !== clean[i + 1].time);
}

// Decides HOW to bring the chart up to date. It changes nothing itself; it only returns a plan:
//   updates         = candles to send to the chart with update(), oldest first
//   needsFullReload = true when update() cannot do the job (missed candles, or an old candle was corrected)
function planCandleUpdate(store, incoming) {
  const plan = { updates: [], needsFullReload: false };
  if (store.length === 0 || incoming.length === 0) { plan.needsFullReload = true; return plan; }

  let lastDrawn = store[store.length - 1];
  // The newest data starts AFTER our last candle, so we may have missed candles in between.
  if (incoming[0].time > lastDrawn.time) { plan.needsFullReload = true; return plan; }

  const known = new Map(store.map(c => [c.time, c]));
  for (const c of incoming) {
    if (c.time < lastDrawn.time) {
      // an older candle: it must match what we already drew, because update() cannot change old candles
      const old = known.get(c.time);
      if (!old || !sameCandle(old, c)) { plan.needsFullReload = true; plan.updates = []; return plan; }
    } else if (c.time === lastDrawn.time) {
      // the candle that is still forming: update it only if its numbers changed
      if (!sameCandle(lastDrawn, c)) { plan.updates.push(c); lastDrawn = c; }
    } else {
      // a brand new candle
      plan.updates.push(c); lastDrawn = c;
    }
  }
  return plan;
}

// FVG detection only uses finished candles, so keep that list in step with candleStore.
function syncFVGData() {
  window.chartDataForFVG = candleStore.filter(candle => !candle.isOpen);
}
function runMarketAnalysis() {
    console.log("[analysis] Starting market analysis...");
    const bullishFVG = findLatestFVG("BUY");
    const bearishFVG = findLatestFVG("SELL");

    window.marketAnalysis = {
        bullishFVG,
        bearishFVG,
        lastUpdated: new Date(),
        bullishApproachLevel,
        bearishApproachLevel

    };

    console.log("[analysis] Market analysis updated:", window.marketAnalysis);

    // FVG analysis will run here
    let bullishApproachLevel=null;
    if(bullishFVG){
       bullishApproachLevel=fvgApproachLevel("BUY",bullishFVG.high);
    }
    let bearishApproachLevel=null;
    if (bearishFVG)
    {
      bearishApproachLevel=fvgApproachLevel("SELL",bearishFVG.low)
    }
}
// Replaces ALL candles on the chart. keepView = true remembers where you had scrolled to.
function applyFullData(chartData, keepView) {
  let savedRange = null;
  const lastTimeBefore = candleStore.length ? candleStore[candleStore.length - 1].time : null;
  if (keepView) {
    try { savedRange = chart.timeScale().getVisibleRange(); } catch (e) { savedRange = null; }
  }
  candlestickSeries.setData(chartData.map(({ isOpen, ...candle }) => candle));
  candleStore = chartData;
  syncFVGData();
  runMarketAnalysis();
  // Restore the view only if you had scrolled away from the newest candle.
  if (savedRange && lastTimeBefore !== null && savedRange.to < lastTimeBefore) {
    try { chart.timeScale().setVisibleRange(savedRange); } catch (e) { /* ignore: view stays as the chart left it */ }
  }
}

// loadCandles(true)  = you picked a new symbol/timeframe (or the page just opened): load everything.
// loadCandles(false) = automatic refresh: ask only for the newest candles and patch the chart.
async function loadCandles(isNewSelection = false) {
  if (isNewSelection) {
    selectionId++;
    if (inFlight) inFlight.abort();   // cancel the old symbol's request
    inFlight = null;
    forceFullNext = false;
    consecutiveFailures = 0;
    unchangedCount = 0;
    candleStore = [];
    window.chartDataForFVG = [];      // old symbol's candles must not be used for FVG checks
    activeFVG = null;                 // old symbol's zone must not stay on the chart
  } else if (inFlight) {
    return;                           // a request is already running: skip instead of piling up
  }

  const mySelection = selectionId;
  const fullLoad = isNewSelection || forceFullNext || candleStore.length === 0;

  const selectedTimeFrame =
    document.querySelector('input[name="time-frame"]:checked')?.value || "1min";

  const intervalMap = {
    "1min": "1m",
    "5min": "5m",
    "15min": "15m",
    "1hr": "1h",
    "4hr": "4h"
  };

  const selectedSymbol = symbolInput.value.trim();
  const interval = intervalMap[selectedTimeFrame];

  if (!selectedSymbol || !interval) {
    console.error("Invalid symbol or timeframe");
    return;
  }

  const controller = new AbortController();
  inFlight = controller;

  try {
    const barsWanted = fullLoad ? FULL_LOAD_BARS : REFRESH_BARS;
    console.log("Full load:", fullLoad);
console.log("Bars requested:", barsWanted);
    const response = await fetch(
      `https://biquote.io/api/${encodeURIComponent(selectedSymbol)}/ohlc?interval=${interval}&limit=${barsWanted}`,
      { signal: controller.signal }
    );

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}${response.status === 429 ? " (rate limited)" : ""}`);
    }

    const data = await response.json();
    console.log("Candles received:", data.bars.length);
console.log("First candle:", data.bars[0]);
console.log("Last candle:", data.bars[data.bars.length - 1]);

    // You picked something else while this request was running: throw this answer away.
    if (mySelection !== selectionId) return;

    if (!Array.isArray(data?.bars)) {
      throw new Error("No candle data found in API response");
    }

    const chartData = normalizeBars(data.bars);
    if (chartData.length === 0) {
      throw new Error("The API returned no valid candles");
    }

    if (fullLoad) {
      applyFullData(chartData, !isNewSelection);
      if (isNewSelection) chart.timeScale().fitContent();   // only fit the view when YOU switched
      forceFullNext = false;
      unchangedCount = 0;
      console.log(`[candles] loaded ${chartData.length} candles for ${selectedSymbol} (${interval})`);
    } else {
      const plan = planCandleUpdate(candleStore, chartData);

      if (plan.needsFullReload) {
        forceFullNext = true;
        console.log("[candles] gap or correction detected, reloading all candles on the next refresh");
      } else if (plan.updates.length === 0) {
        unchangedCount++;
        // Log the first one and then once a minute, so the console does not fill up.
        if (unchangedCount === 1 || unchangedCount % 60 === 0) {
          console.log(`[candles] unchanged x${unchangedCount} (normal while the market is closed)`);
        }
      } else {
        for (const c of plan.updates) {
          const { isOpen, ...bar } = c;
          candlestickSeries.update(bar);   // same time = replace the forming candle, newer time = add a candle
          const last = candleStore[candleStore.length - 1];
          if (last && last.time === c.time) candleStore[candleStore.length - 1] = c;
          else candleStore.push(c);
        }
        syncFVGData();
        runMarketAnalysis();
        unchangedCount = 0;
        const newest = plan.updates[plan.updates.length - 1];
        console.log(`[candles] updated ${plan.updates.length} candle(s), newest close ${newest.close}`);
      }
    }

    consecutiveFailures = 0;

  } catch (error) {
    if (error.name === "AbortError" || mySelection !== selectionId) return;   // cancelled on purpose
    consecutiveFailures++;
    console.error(
      `[candles] refresh failed (${consecutiveFailures} in a row), next try in ${nextRefreshDelay() / 1000}s:`,
      error
    );
  } finally {
    if (inFlight === controller) inFlight = null;
  }
}
function nextRefreshDelay() {

// Wait time before the next refresh: normal after success, doubling after each failure up to MAX_BACKOFF_MS.
  return Math.min(REFRESH_INTERVAL_MS * Math.pow(2, consecutiveFailures), MAX_BACKOFF_MS);
}

// One refresh, then schedule the next. The next one is only scheduled AFTER this one finishes,
// so refreshes can never overlap.
async function refreshTick() {
  if (!document.hidden) await loadCandles(false);   // skip while the browser tab is hidden
  refreshTimer = setTimeout(refreshTick, nextRefreshDelay());
}

document.addEventListener("visibilitychange", function () {
// When you come back to the tab, refresh straight away.
  if (!document.hidden) {
    clearTimeout(refreshTimer);
    refreshTick();
  }
});
console.log("INITIAL LOAD IS RUNNING");
// Initial chart load, then start the refresh cycle.
loadCandles(true).then(() => {
   console.log("INITIAL LOAD COMPLETED");
  refreshTimer = setTimeout(refreshTick, nextRefreshDelay());
});

    
// Looks for the MOST RECENT FVG of the type this trade needs that has NOT been mitigated.
// BUY needs a bullish FVG, SELL needs a bearish FVG. Returns the zone, or null.
function findLatestFVG(direction) {
    const candles = window.chartDataForFVG || [];

    // Walk from the newest candle backwards, so the first match is the most recent one.
    for (let i = candles.length - 1; i >= 2; i--) {
        const c1 = candles[i - 2];
        const c2 = candles[i - 1];
        const c3 = candles[i];

        // skip bad data (NaN) instead of crashing
        if (![c1.high, c1.low, c3.high, c3.low].every(Number.isFinite)) continue;

        let type = null, low, high;
        if (direction === "BUY" && c3.low > c1.high) {          // bullish gap
            type = "bullish"; low = c1.high; high = c3.low;
        } else if (direction === "SELL" && c3.high < c1.low) {  // bearish gap
            type = "bearish"; low = c3.high; high = c1.low;
        }
        if (!type) continue;

        // Mitigated = any later completed candle trades back into the gap (a wick counts).
        // For a FULL fill instead, change "<= high" to "<= low" and ">= low" to ">= high".
        let mitigated = false;
        for (let j = i + 1; j < candles.length; j++) {
            if (type === "bullish" && candles[j].low <= high) { mitigated = true; break; }
            if (type === "bearish" && candles[j].high >= low) { mitigated = true; break; }

        }
        if (mitigated) continue;
        return {
            type: type,
            low: low,
            high: high,
            startTime: c2.time,   // the zone starts at the middle candle, where the gap formed
            color: type === "bullish" ? "rgba(0, 200, 0, 0.25)" : "rgba(255, 0, 0, 0.25)",
            borderColor: type === "bullish" ? "rgb(0, 160, 0)" : "rgb(200, 0, 0)"
        };
    }
    return null;
}

function checkFVG(direction) {
    const candles = window.chartDataForFVG || [];
    activeFVG = null;   // clear the old zone first

    if (candles.length < 3) {
        console.log("Not enough completed candles to check FVG.");
        return false;
    }

    const fvg = findLatestFVG(direction);
    if (!fvg) {
        console.log("No unmitigated", direction === "BUY" ? "bullish" : "bearish", "FVG found.");
        return false;
    }

    activeFVG = fvg;   // updateFVGZone() will now draw it
    console.log("Unmitigated", fvg.type, "FVG marked:", fvg);
    return true;
}
function fvgApproachLevel(fvgDirection,fvgboundaryPrice){
  //the inputs we are going to give to this function is fvgDirection and fvgBoundaryPrice
  const pipDistance=0.0010;
  if (fvgDirection=="BUY")  //double quotes is required because buy is a string value 
  {
    return fvgboundaryPrice+pipDistance;
  }
  else
  {
    return fvgboundaryPrice-pipDistance;
  }
}
console.log(fvgApproachLevel("BUY",1.0860));