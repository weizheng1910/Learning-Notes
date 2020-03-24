var poundsToKilos = function(pounds){
  return 2.2 * pounds;
}

var calculateCharge = function(weight){
  return weight * 20;
}

// starting value
var hasUserEnteredWeight = false;
var bagWeight;
var unit;
console.log("starting value: "+input);

var inputHappened = function(userInput){


  if( hasUserEnteredWeight === false ){
    // this is the first time, set a value to record that

    console.log("current value: "+input );
    bagWeight = userInput;

    hasUserEnteredWeight = true;

    return "we have recorded your weight: "+bagWeight+", now please enter a unit - pounds or kilos"


  }else{
    // this is not the first time
    unit = userInput;

    // use the unit variable to determine what kind of calculation i need

    if( unit === 'kilo' ){

      // 10 kilos => $200

      var bagCharge = calculateCharge( bagWeight );
      return bagCharge;

    }else if( unit === 'pounds' ){

      // ten pounds => $440

      var convertedWeight = poundsToKilos( bagWeight );

      var bagCharge = calculateCharge( convertedWeight );

      return bagCharge;
    }
  }

};

//
//
//

}else{
   
    unit = userInput;


    if( unit === 'pounds' ){

      

      bagWeight = poundsToKilos( bagWeight );
    }

    //Calculating bagCharge only based on kilos 
    //So we have only one if statement

    var bagCharge = calculateCharge( bagWeight );

    return bagCharge;






  }
  //Final Answer 

  // starting value
var hasUserEnteredWeight = false;
var bagWeight = null;
var unit;
console.log("starting value: "+input);

var inputHappened = function(userInput){


  if( hasUserEnteredWeight === false ){
    // this is the first time, set a value to record that

    console.log("current value: "+input );
    bagWeight = userInput;

    hasUserEnteredWeight = true;

    return "we have recorded your weight: "+bagWeight+", now please enter a unit - pounds or kilos"


  }else{
    // this is not the first time
    unit = userInput;

    // use the unit variable to determine what kind of calculation i need

    if( unit === 'pounds' ){

      // ten pounds => $440

      bagWeight = poundsToKilos( bagWeight );
    }


    if( bagWeight < 8 ){
      bagCharge = 0;
    }else if( bagWeight > 50 ){
      bagCharge = "overweight";
    }else{


      var bagCharge = calculateCharge( bagWeight );




    }

    return bagCharge;








  }