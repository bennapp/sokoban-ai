// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require twitter/bootstrap
//= requre jquery.sokoban.js
//= require_tree .

jQuery(function($){
	$('.play').click(function(){
		$('pre.player-sokoban').text($('textarea.enter-sokoban').val());
		$('pre.player-sokoban').sokoban();
		var soko_guy  = $('pre.ai-sokoban').ai_sokoban();
		console.log(soko_guy);
	});

	$('.move').click(function(){
		var soko_guy  = $('pre.ai-sokoban').ai_sokoban();
		soko_guy.move(-1, 0);
	});

});