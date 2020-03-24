var responseHandler = function(){



  // console.log("response text", this.responseText);

  var response = JSON.parse( this.responseText );
  console.log("RESPONSE ANME:"+ response.name );

  var myPara = document.createElement('p');
  myPara.innerText = "NAME: "+response.name;
  document.body.appendChild( myPara );
};



var doStuff = function(event){
  console.log( "USER INPUT:  "+event.target.value );

  var request = new XMLHttpRequest();

  // same as:
  // element.addEventListener("click", dosomeStuff);
  request.addEventListener("load", responseHandler);

  // doesnt open anything
  // request.open("GET", "https://swapi.co/api/people/1");

  var personNum = event.target.value;
  var url = "https://swapi.co/api/people/"+personNum;

  request.open("GET", url);
  
  request.open("GET", event.target.value);

  request.send();
}

// The above function sends a GET request using the users input. 
