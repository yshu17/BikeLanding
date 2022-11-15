$(function(){
    $('.bike-slider').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed: 800,
        cssEase: 'linear'
    }),
    $('.bike-preview-slider__item').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay:true,
        autoplaySpeed:3000,
        speed: 800,
        cssEase: 'linear'
    });
})
$(document).ready(function(){
	$(".menu, .bike__column").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});