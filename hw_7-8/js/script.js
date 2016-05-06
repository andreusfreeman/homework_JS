$(function(){
  $('.text-box-first').addClass('active');
  $('.menu li:first').css('background-color','#ffffff')
  $('.text-box-second, .text-box-third').hide();

  $('.menu a').on('click', function(){
    $('.menu li').css('background-color','#e9e9e9');
    $(this).parents('.menu li').css('background-color','#ffffff');
    var divName = $(this).attr('href');
    $('.text-box-first, .text-box-second, .text-box-third').hide();
    $('.'+divName).show();
    return false;
  })

  $(".form input").hover(function() {
      $(this).next("em").animate({opacity: "show"}, "slow");
  }, function() {
      $(this).next("em").animate({opacity: "hide"}, "fast");
  });
});
