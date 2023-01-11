// Main menu open
if ($('.header__burger').length > 0) {
	$('.header__burger').on("click", function (event) {
		$(this).toggleClass('active');
		$('.header').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__container').toggleClass('active');
	});
}


(() => {
	(function () {
		const header = document.getElementById('temp-id-header')
		const {
			pathname
		} = new URL(window.location.href);
		if ('/' !== pathname) {
			header.style.position = 'inherit'
		} else {
			header.style.position = 'absolute'
		}
	})();
})()

$('.notifications__icon').on("click", function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.notifications__body').toggleClass('active');
	$(this).find("span").addClass('hidden');
});
$(function ($) {
	$(document).mouseup(function (e) {
	var div = $(".notifications");
	if (!div.is(e.target) && div.has(e.target).length === 0) {
			$('.notifications__icon').removeClass('active');
			$('.notifications__body').removeClass('active');
		}
	});
});