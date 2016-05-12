$(function(){

  $( '.dropdown' ).hover(
          function(){
              $(this).children('.sub-menu').animate({
                backgroundColor:"#03C",
                color: "white",
                height: "toggle"
              }, 700);
          },
          function(){
              $(this).children('.sub-menu').animate({
                height: "toggle"
              }, 350);
          }
      );

$("#default-usage-select").selectbox().on('change', function(){
  $('<div>Value of #default-usage-select changed to: '+$(this).val()+'</div>').appendTo('#demo-default-usage .demoTarget').fadeOut(5000, function(){
    $(this).remove();
  });
});
});
