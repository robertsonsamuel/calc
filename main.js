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

$(document).ready(function(){}); //document ready

var num = ''; //var to hold ans
var $currentValue = 0;
var num1 = [];

function numPressed(){

 $currentValue = $(this).data('id');
 num1.push($currentValue);

 console.log(num1);
 
 if($currentValue === undefined){
  $currentValue = parseFloat($('#ansblock').text());
 }
 $('#ansblock').text($currentValue);
 // console.log($currentValue,'currentValue');
  return $currentValue;
}





function runOperator () {
  
  var functionclicked = $(this).data('id');

  switch(functionclicked){
    case 'clear':
            $('#ansblock').text(0); 
            ans = 0;
    break;

    case 'makeNeg':
        if($currentValue === 0){
          ans = 0;
        }
        ans = $currentValue*-1;
        $('#ansblock').text(ans);

    break;

    case 'percent':
    if($currentValue === 0){
          ans = 0.00;
        }
        ans = $currentValue/100;
        $('#ansblock').text(ans);

    break;

    case 'divide':
          num1.push('k');
    break;
        
    case 'multiply':
        num1.push('*');
    break;
       
    case 'subtract':
      num1.push('-');
       
    break;

    case 'add':
        num1.push('+');

        
    break;

    case 'equals':

    //never ever ever use this
    if(num1[1]== '+'){
     var ans = num1[0] + num1[2];
       $('#ansblock').text(ans);
    }
    if(num1[1]== '*'){
      var ans = num1[0] * num1[2];
       $('#ansblock').text(ans);
    }

    if(num1[1]== '-'){
      var ans = num1[0] - num1[2];
       $('#ansblock').text(ans);
    }


     if(num1[1]== 'k'){
      var ans = num1[0] / num1[2];
       $('#ansblock').text(ans);
    }
      
    break;

default:  }


} //end runOperator


function add (argument) {
  // body...
}



function getCurrent(){
 var $currentValue =  $('#ansblock').text();
 return $currentValue;
}



function calc() {
  
  currentValue = getCurrent();


  //setup modify buttons on click events
  $('#clear').on('click',AC);
  $('#makeNeg').on('click',AC);
  $('#percent').on('click',AC);
  $('#divide').on('click',AC);
 
  $('#8').on('click',AC);
  $('#9').on('click',AC);
  $('#multiply').on('click',AC);
  $('#4').on('click',AC);
  $('#5').on('click',AC);
  $('#6').on('click',AC);
  $('#subtract').on('click',AC);
  $('#1').on('click',AC);
  $('#2').on('click',AC);
  $('#3').on('click',AC);
  $('#add').on('click',AC);
  $('#0').on('click',AC);
  $('#dot').on('click',AC);

  //maybe better
  $('.oper').on('click',runOperator);
   $('.number').on('click',numPressed);
  
  
}



function AC(){

  $('#ansblock').text(0); 
  num1 =$('#ansblock').text(0); ;
  ans = 0;
  $currentValue = 0;
  return ans;
 //clears the screen 
}

calc();







