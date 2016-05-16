var questions = {
  firstQuestion: 'Choice backend language',
  firstVariant: [
    [ 'PHP', true], ['Javascript', false], ['HTML', false]
  ],
  secondQuestion: 'What programming languages are taught frontend-developers?',
  secondVariant: [
    [ 'HTML/Java/CSS', false], ['Javascript/HTML/PHP', false], ['HTML/CSS/Javascript', false]
  ],
  thirdQuestion: 'What is the most popular framework/library on Javascript?',
  thirdVariant: [
    [ 'jQuery', true], ['Bootstrap', false], ['Dojo', false]
  ]
}
localStorage.setItem('test', JSON.stringify(questions));
