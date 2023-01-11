if ($(".l-work").length > 0) {
	var swiper = new Swiper(".l-work__swiper", {
        slidesPerView: 3,
		spaceBetween: 48,
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
				slidesPerView: 2.5,
				spaceBetween: 24,
			},
			1190: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1320: {
				slidesPerView: 3,
				spaceBetween: 48,
			}
		},
    });
}