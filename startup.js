  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
  var scentanceArray = []; // create an empty array to store the string.
  var countGlobal = 0;


  myFunctionCreate(); // while page is loading, already create a scentance AKA string


  document.getElementById("create").onclick=myFunctionCreate;
  document.getElementById("save").onclick = myFunctionFav;
  document.getElementById("print").onclick=myFunctionPrint;

  // create startup scentance
  function myFunctionCreate() {
      var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
      var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
      document.getElementById("xForY").innerHTML = "My startup " + startupX[Math.floor(Math.random() * startupX.length)] + " is " + startupY[Math.floor(Math.random() * startupY.length)] + "!";
  }

  // put startup into a string when user clicks fav
  function myFunctionFav() {
      scentanceArray.push(document.getElementById("xForY").innerHTML);
      alert(scentanceArray[countGlobal]);
      countGlobal ++ ;
    }

  // print the startup that user likes
  function myFunctionPrint() {
      scentanceArray.toString();
      document.getElementById("printArray").innerHTML = scentanceArray;
  }
