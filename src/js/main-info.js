$('.main-info').on('mousemove', function (evt) {
	TweenMax.to('.main-info__icon--1', {
		x: evt.pageX / 80, //normal value
		y: evt.pageY / 80,
		duration: 1.5,
	});
	TweenMax.to(
		'.main-info__icon--2',
		{
		x: - evt.pageX / 160, //normal value
		y: - evt.pageY / 120,
		duration: 1.5,
		}
	);
	TweenMax.to(
		'.main-info__icon--3',
		{
		x: evt.pageX / 220, //normal value
		y: evt.pageY / 220,
		duration: 1.5,
		}
	);
});