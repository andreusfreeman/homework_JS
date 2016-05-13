$(function(){
  $('.carousel-arrow-left').testCarusel('left');
  $('.carousel-arrow-right').testCarusel('right');

  var html = $('#easy-tmpl').html()
  var data = {
    name: 'Нацик Андрій Олександрович',
    almamater: 'Національний університет харчових технологій',
    aim: 'Хочу вчити фронтенд, тому що:',
    phone: 'Мій контактний телефон:',
    numPhone: '+38 050 700 16 98',
    faceBook: 'Мій профіль в Фейсбуці:',
    linkFacebook: 'https://www.facebook.com/andreus.freeman',
    feedback: 'Мій фідбек:',
    textFeedBack: 'I can :)',
    foto: 'img/i.jpg',
    aims: [
      'подобається кодити', 'перетворити хобі в професію', 'змінити рід діяльності'
    ]
  };
  var content = tmpl(html, data);
  $('.template-simple').append(content);

  var tmplLod = _.template(html);
  $('.template-lodash').append(tmplLod(data));
});
