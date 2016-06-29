requirejs.config({
    paths:{
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery',
		'template': 'template-script.js'
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
        },
		'template': {
            exports: 'template-script',
        }
    }
});

require(["jquery", "template"], function($, template) {
    console.log($(document));
})