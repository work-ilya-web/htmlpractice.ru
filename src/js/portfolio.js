$("[data-project]").on("click", function (e) {
	e.preventDefault();
	$('.tabs__btn').removeClass('tabs__btn--active');
	$('.portfolio__block').removeClass('active');
	$(this).addClass('tabs__btn--active');
	var project = $(this).data('project');
	$('[data-project-block="' + project + '"]').toggleClass('active');
});