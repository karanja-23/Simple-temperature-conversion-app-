let myTemp = document.getElementById("my-input");
let toFarenheight = document.getElementById("toFarenheight");
let toCelcius = document.getElementById("toCelcius");
let mySubmit = document.getElementById("mySubmit");
let myResult = document.getElementById("result")

let temp; 


function convert(){
  if (toFarenheight.checked){
    temp  = Number(myTemp.value);

    temp = (temp * 9/5) + 32;
    myResult.textContent = `${temp}°F `;
}
else if(toCelcius.checked){
  temp =(temp-32) * 5/9;
  myResult.textContent = `${temp}°C `;
}
else{
  myResult.textContent = `Select a unit`
}
}
