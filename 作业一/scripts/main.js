$(document).ready(function($) {
    $('.img-dsc ul li').mouseover(function() {
        var index = $(this).index() + 1;
        $('.border-img').css('background-image', 'url(images/' + index + '.jpg)')
    });
    var w = $('.roll-show li').width();
    $('.right').click(function() {
        $('.roll-show li').animate({ left: -w * 4 });
        $('.indexer-down').addClass('background')
            .siblings().removeClass('background');
    });
    $('.left').click(function() {
        $('.roll-show li').animate({ left: 0 });
        $('.indexer-up').addClass('background')
            .siblings().removeClass('background');
    });
    $('.indexer span').click(function(){
    	$(this).addClass('background')
    	.siblings().removeClass('background');
    });
    $('.indexer-up').click(function(){
    	$('.roll-show li').animate({ left: 0 });
    });
    $('.indexer-down').click(function(){
    	$('.roll-show li').animate({ left: -w * 4 });
    });
});
