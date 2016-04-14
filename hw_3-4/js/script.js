var element = {
  name: 'name',
  newElement: function(elements, style, text, classGround, setAttr){
     this.name = document.createElement(elements);
     if (style.length > 0) {
       this.name.classList.add(style);
     }
     if (setAttr) {
       this.name.setAttribute('type','checkbox');
     }
     if (classGround === 'body') {
       document.body.appendChild(this.name);
     } else {
       document.querySelector(classGround).appendChild(this.name);
     }
     this.name.innerHTML = text;
  }
}
element.newElement('div','col-xs-9','', 'body','');
element.newElement('h3','','Тест по программированию', '.col-xs-9','');
element.newElement('ol','test','', '.col-xs-9','');
element.newElement('li','test_li','', '.test','');
element.newElement('h4','','Вопрос №1', '.test_li','');
element.newElement('ul','list-unstyled','', '.test_li','');
for ( var j = 0; j < 3; j++){
  element.newElement('li','checkbox'+j,'', '.list-unstyled','');
  element.newElement('input','','', '.checkbox'+j,'true');
  element.newElement('span','','Вариант ответа № '+(j+1), '.checkbox'+j,'');
  }
