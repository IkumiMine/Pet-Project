window.onload = function (){

  //variables
  var sizeOptions = document.getElementsByClassName("sizeOptions");
  var selectCountry = document.getElementById("country");
  var submitBtn = document.getElementById("submitBtn");
  var resultTable = document.getElementsByTagName("table");
  var submitBtn = document.getElementById("showBtn");
  var deleteBtn = document.getElementById("deleteBtn");
  
  var selectedSizeUS;
  var rowNumberUS;
 
  var selectedSizeUK;
  var rowNumberUK;

  var selectedSizeJP;
  var rowNumberJP;

  //hide all size options and tables
  sizeOptions[0].style.display = "none";
  sizeOptions[1].style.display = "none";
  sizeOptions[2].style.display = "none"; 
  resultTable[0].style.display = "none";
  resultTable[1].style.display = "none";
  resultTable[2].style.display = "none";

  //a listner for when item in select is selected
  selectCountry.onchange = showSize;  

  //a functoin to show size options 
  function showSize () {

    //keep hiding options when the other is selected
    sizeOptions[0].style.display = "none";
    sizeOptions[1].style.display = "none";
    sizeOptions[2].style.display = "none";

    //display different options depending on the selected country
    if(selectCountry.value === "US/CAN"){
      sizeOptions[0].style.display = "block";
    } else if (selectCountry.value === "UK") {
      sizeOptions[1].style.display = "block";
    } else if (selectCountry.value === "JP"){
      sizeOptions[2].style.display = "block";  
    }
  }//END showSize function

  //a listener for when the submit button is clicked
  submitBtn.onclick = showResult;
  
  //a function to show a result table when the submit button is clicked
  function showResult () {

    //get the number of the selected size to highlight the selected size of row  
    selectedSizeUS = "rowUS_" + document.getElementById("sizeUS").selectedIndex;
    rowNumberUS = document.getElementById(selectedSizeUS);
 
    selectedSizeUK = "rowUK_" + document.getElementById("sizeUK").selectedIndex;
    rowNumberUK = document.getElementById(selectedSizeUK);

    selectedSizeJP = "rowJP_" + document.getElementById("sizeJP").selectedIndex;
    rowNumberJP = document.getElementById(selectedSizeJP);   

    //keep hiding options when the other is selected  
    resultTable[0].style.display = "none";
    resultTable[1].style.display = "none";
    resultTable[2].style.display = "none";

    //remove highlight class if it exists
    var rowsUS = resultTable[0].rows;
    var rowsUK = resultTable[1].rows;
    var rowsJP = resultTable[2].rows;     
   
    for (var i = 0; i < rowsUS.length; i++){
      if(rowsUS[i].classList.contains("highLight")){
        rowsUS[i].classList.remove("highLight");
      }
    }

    for (var j = 0; j < rowsUK.length; j++){
      if(rowsUK[j].classList.contains("highLight")){
        rowsUK[j].classList.remove("highLight");
      }
    }

    for (var k = 0; k < rowsJP.length; k++){
      if(rowsJP[k].classList.contains("highLight")){
        rowsJP[k].classList.remove("highLight");
      }
    }

    //display different table depending on the selected country
    if(selectCountry.value === "US/CAN"){

      //if rowUS_0 is selected, throw an error message
      //if another number is selected, show the table with a highlighted row
      if(selectedSizeUS === "rowUS_0"){
        document.getElementById("errorMsgUS").classList.add("showError");
      } else {
        document.getElementById("errorMsgUS").classList.remove("showError");
        resultTable[0].style.display = "table";
        rowNumberUS.classList.add("highLight");
      }

    } else if (selectCountry.value === "UK") {

      //if rowUK_0 is selected, throw an error message
      //if another number is selected, show the table with a highlighted row
      if(selectedSizeUK === "rowUK_0"){
        document.getElementById("errorMsgUK").classList.add("showError");
      } else {
        document.getElementById("errorMsgUK").classList.remove("showError");
        resultTable[1].style.display = "table";
        rowNumberUK.classList.add("highLight");
      }
    
    } else if (selectCountry.value === "JP"){

      //if rowJP_0 is selected, throw an error message
      //if another number is selected, show the table with a highlighted row
      if(selectedSizeJP === "rowJP_0"){
        document.getElementById("errorMsgJP").classList.add("showError");
      } else { 
        document.getElementById("errorMsgJP").classList.remove("showError");     
        resultTable[2].style.display = "table";
        rowNumberJP.classList.add("highLight"); 
      }
    }

  }//END showResult function

  //a listener to reset result
  deleteBtn.onclick = resetResult;
  
  //a function to reset all result when the delete button is clicked
  function resetResult () {

    if(selectCountry.value === "US/CAN"){
      document.getElementById("sizeUS").selectedIndex = "0";
      sizeOptions[0].style.display = "none";
      resultTable[0].style.display = "none";
      rowNumberUS.classList.remove("highLight");
    } else if (selectCountry.value === "UK") {
      document.getElementById("sizeUK").selectedIndex = "0";
      sizeOptions[1].style.display = "none";
      resultTable[1].style.display = "none";
      rowNumberUK.classList.remove("highLight");
    } else if (selectCountry.value === "JP"){
      document.getElementById("sizeJP").selectedIndex = "0";
      sizeOptions[2].style.display = "none";
      resultTable[2].style.display = "none";
      rowNumberJP.classList.remove("highLight"); 
    }

    selectCountry.selectedIndex = "0";   

  }//END resetResult function

}//END window.onload function
