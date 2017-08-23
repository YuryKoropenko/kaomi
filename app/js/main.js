$(function() {
	/*убираем placeholder при клике start*/
	$('input,textarea').focus(function(){
		$(this).data('placeholder',$(this).attr('placeholder'))
		$(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		$(this).attr('placeholder',$(this).data('placeholder'));
	});
	/*убираем placeholder при клике end*/
	/*tabs*/
	$('.waysof__item-1 a').on('click', function() {
		$('.waysof__left').css({
			'display':'none'
		});
		$('.waysof__right').css({
			'display':'none'
		});
		$('.waysof__item').removeClass('waysof__item-active');
		
		$('.waysof__left-1').css({
			'display':'block'
		});
		$('.waysof__right-1').css({
			'display':'block'
		});
		$(this).parent().addClass('waysof__item-active');
		return false;
	});
	$('.waysof__item-2 a').on('click', function() {
		$('.waysof__left').css({
			'display':'none'
		});
		$('.waysof__right').css({
			'display':'none'
		});
		$('.waysof__item').removeClass('waysof__item-active');
		
		$('.waysof__left-2').css({
			'display':'block'
		});
		$('.waysof__right-2').css({
			'display':'block'
		});
		$(this).parent().addClass('waysof__item-active');
		return false;
	});
	$('.waysof__item-3 a').on('click', function() {
		$('.waysof__left').css({
			'display':'none'
		});
		$('.waysof__right').css({
			'display':'none'
		});
		$('.waysof__item').removeClass('waysof__item-active');
		
		$('.waysof__left-3').css({
			'display':'block'
		});
		$('.waysof__right-3').css({
			'display':'block'
		});
		$(this).parent().addClass('waysof__item-active');
		return false;
	});
	$('.waysof__item-4 a').on('click', function() {
		$('.waysof__left').css({
			'display':'none'
		});
		$('.waysof__right').css({
			'display':'none'
		});
		$('.waysof__item').removeClass('waysof__item-active');
		
		$('.waysof__left-4').css({
			'display':'block'
		});
		$('.waysof__right-4').css({
			'display':'block'
		});
		$(this).parent().addClass('waysof__item-active');
		return false;
	});
	$('.waysof__item-5 a').on('click', function() {
		$('.waysof__left').css({
			'display':'none'
		});
		$('.waysof__right').css({
			'display':'none'
		});
		$('.waysof__item').removeClass('waysof__item-active');
		
		$('.waysof__left-5').css({
			'display':'block'
		});
		$('.waysof__right-5').css({
			'display':'block'
		});
		$(this).parent().addClass('waysof__item-active');
		return false;
	});
	/*tabs end*/
});


