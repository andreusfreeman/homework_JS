'use strict'
var questions = {
  firstQuestion: 'Choice backend language',
  firstVariant: [
    [ 'PHP', true], ['Javascript', false], ['HTML', false]
  ],
  secondQuestion: 'What programming languages are taught frontend-developers?',
  secondVariant: [
    [ 'HTML/Java/CSS', false], ['Javascript/HTML/PHP', false], ['HTML/CSS/Javascript', true]
  ],
  thirdQuestion: 'What is the most popular framework/library on Javascript?',
  thirdVariant: [
    [ 'jQuery', true], ['Bootstrap', false], ['Dojo', false]
  ]
}
localStorage.setItem('test', JSON.stringify(questions));
var data = JSON.parse(localStorage.getItem('test'));

$(function(){
  var html = $('#easy-tmpl').html()
  var content = tmpl(html, data);
  $('.template-simple').append(content);
});
function checkResult(){
  var rightAnswer = [];
  for (var answ in data){
    if (typeof data[answ] == 'object') {
      for (var i = 0; i < data[answ].length; i++) {
        rightAnswer.push(data[answ][i][1]);
      }
    }
  }
  var flag = false;
  var a = document.getElementsByTagName('input');
  for ( var i = 0; i < a.length; i++){
    if (a[i].checked) {
      if (rightAnswer[i]) {
        flag = true;
      } else {
        break;
      }
    }
  }
  if (flag) {
    console.log('OK');
  }
  else {
    console.log('bad result!');
  }
}
