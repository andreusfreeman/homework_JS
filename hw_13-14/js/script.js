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

document.querySelector('.check-result').addEventListener('click', function(){
  var rightAnswer = [];
  var checkQuantity = 0;
  for (var answ in data){
    if (typeof data[answ] == 'object') {
      for (var i = 0; i < data[answ].length; i++) {
        rightAnswer.push(data[answ][i][1]);
        if (data[answ][i][1]){
          checkQuantity += 1;
        }
      }
    }
  }
  var flag = false;
  var a = document.getElementsByTagName('input');
  for ( var i = 0; i < a.length; i++){
    if (a[i].checked) {
      if (rightAnswer[i]) {
        flag = true;
        checkQuantity -= 1;
      } else {
        break;
      }
    }
  }
  if (flag && checkQuantity === 0) {
    var mod = document.querySelector('.modal-back');
    document.querySelector('.result-info').innerHTML = 'WIN';
    mod.style.display = 'block';
  }
  else {
    var mod = document.querySelector('.modal-back');
    document.querySelector('.result-info').innerHTML = 'You have done some mistakes! Try again.';
    mod.style.display = 'block';
  }
})
var elem = document.querySelector('.button-close');
elem.addEventListener('click', function() {
  document.querySelector('.modal-back').style.display = 'none';
  document.querySelector('.result-info').innerHTML = '';
  var checkBox = document.getElementsByTagName('input');
  for ( var i = 0; i < checkBox.length; i++){
    checkBox[i].checked = false;
  }
});
