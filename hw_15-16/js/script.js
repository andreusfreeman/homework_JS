'use strict'
document.body.addEventListener('keypress', function(event) {
  if (document.querySelector('.search-query').value.length > 0 && event.keyCode === 13) {
    $('#search-result > li').remove();
    searchSomething(document.querySelector('.search-query').value);
  }
});
document.querySelector('.search-button').addEventListener('click', function(event) {
  if (document.querySelector('.search-query').value.length > 0) {
    $('#search-result > li').remove();
    searchSomething(document.querySelector('.search-query').value);
  }
});

function searchSomething(query) {
  $.ajax({
           url: "https://pixabay.com/api/?key=2630733-330bf7ac78143b71181089b96&q=" + query + "&image_type=photo",
           dataType : "jsonp",
           success: function (data) {
               var searchResult = document.getElementById('search-result');
               for ( var i = 0; i < data.hits.length; i++) {
                 var li = document.createElement('li');
                 li.innerHTML = '<img src="' + data.hits[i].previewURL + '" width = "200" >';
                 searchResult.appendChild(li);
               }
           }
         });
       }
