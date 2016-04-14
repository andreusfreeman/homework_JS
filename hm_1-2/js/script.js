
function userNameFunction(){
  var userArray = [];
  for (var i = 0; i < 5; i++) {
    var userName = prompt("Введите любое имя:");
    if (userName.length > 0) {
      userArray.push(userName);
    } else {
      i--;
    }
  }

  var checkUser = prompt("Введите Ваше имя:");
  var checkFlag = false;
  for (var i = 0; i < userArray.length; i++) {
    if ( checkUser === userArray[i] ) {
      checkFlag = true;
      break;
    }
  }
  if ( checkFlag ) {
    alert( checkUser + ", вы успешно вошли");
  } else {
    alert("Вы ввели неверное имя");
  }
}

function powScript(){
  var number = prompt("Insert number");
  var degree = prompt("Insert degree");

  var newNumber = Math.round(number);
  var newDegree = parseInt(degree);

  console.log(myPow(newNumber, newDegree));
}

function myPow(newNumber, newDegree) {
  if (newDegree > 1) {
    var i = 1;
    var result = newNumber;
    do {
      result *= newNumber;
      i++;
    } while (i < newDegree)
    return result;
  } else if (newDegree === 1) {
    return newNumber;
  } else if (newDegree === 0) {
    return 1;
  } else if (newDegree < 0) {
    var i = -1;
    var result = newNumber;
    while (i > newDegree) {
      result *= newNumber;
      i--;
    }
    return 1 / result;
  }
}
