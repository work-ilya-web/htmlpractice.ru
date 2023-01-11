if ($(".main-catalog").length > 0) {
	var swiper = new Swiper(".main-catalog__slick", {
        slidesPerView: 2.42,
		spaceBetween: 48,
		speed: 4000,
		allowTouchMove: false,
		loop: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		breakpoints: {
			370: {
				slidesPerView: 1.1,
				spaceBetween: 12,
			},
			680: {
				slidesPerView: 1.8,
			},
			760: {
				slidesPerView: 2,
				spaceBetween: 16,
			},
			1010: {
				slidesPerView: 2.2,
				spaceBetween: 24,
			},
			1190: {
				slidesPerView: 2.42,
				spaceBetween: 48,
			}
		},
    });
}