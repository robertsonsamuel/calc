/*global $:false
         ":false */

// ansblock
// clear
// makeNeg
// percent
// divide
// 7
// 8
// 9
// multiply
// 4
// 5
// 6
// subtract
// 1
// 2
// 3
// add
// 0
// dot
// equals
var numb1 = [],
    numb2 = [],
    firstNumber,
    secondNumber,
    str='',
    operClicked=false,
    decimal = false;
$(document).ready(function init(){


$('.oper').on('click',runOperator);
$('.number').on('click',numPressed);
$('.equals').on('click',equals);

}); 



function numPressed () {
  numb1.push($(this).data('id'));
  $('#ansblock').empty().append(numb1);
  
  

}



function ArrayToNumber (arry) {
 var number = '';
 for(var i = 0; i < arry.length ;i++){
   number += arry[i]; 
 }
 return number;
}

function runOperator () {
  str = $(this).data('id');
    operClicked = true;

    switch(str){
      case 'add':
      if(operClicked === true){
        //$('#ansblock').text('0');
        firstNumber = parseFloat($('#ansblock').text());

        console.log("firstnumber",firstNumber);
        numb1 = [];
        return;
      }
      break;

      case 'subtract':
      if(operClicked === true){
        firstNumber = parseFloat($('#ansblock').text());
        numb1 = [];
        return;
      }
      break;

      case 'multiply':
      if(operClicked === true){
        firstNumber = parseFloat($('#ansblock').text());
        numb1 = [];
        return;
      }
      break;

      case 'divide':
      if(operClicked === true){
        firstNumber = parseFloat($('#ansblock').text());
        numb1 = [];
        return;
      }
      break;

      case 'equals':
      equals();

      break;
    }
    
    return $(this).data('id');
}

function add (numb1,numb2) {
  return numb1 + numb2;
}

function subtract (numb1,numb2) {
  return numb1 - numb2;
}

function multiply (numb1,numb2) {
  return numb1 * numb2;
}

function divide (numb1,numb2) {
  if(numb1/numb2 === Infinity){
    return 'ERROR Clear Screen';
  }else{
    return numb1/numb2;
  }
}

function equals () {
 var secondnumber = parseFloat(ArrayToNumber($('#ansblock').text()));
 //console.log("secondnumber",secondnumber);
 //console.log("firstNumber",firstNumber);
 var ans;
 switch (str){

  case 'add':
   ans = add(firstNumber,secondnumber);
   $('#ansblock').empty().append(ans);
   firstNumber= parseFloat($('#ansblock').text());
   //console.log(firstNumber,"firstnumber after add")
  break;

  case 'subtract':
  ans = subtract(firstNumber,secondnumber);
   $('#ansblock').empty().append(ans);
   firstNumber= parseFloat($('#ansblock').text());
  break;

  case 'multiply':
  ans = multiply(firstNumber,secondnumber);
   $('#ansblock').empty().append(ans);
   firstNumber= parseFloat($('#ansblock').text());
  break;

  case 'divide':
  ans = divide(firstNumber,secondnumber);
   $('#ansblock').empty().append(ans);

   firstNumber= parseFloat($('#ansblock').text());
  break;

 }





  // numb2.push($('.number').data('id'));
  // $('#ansblock').append((ArrayToNumber(numb2)));
}

