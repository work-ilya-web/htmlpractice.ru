/*(() => {
    let labels = document.querySelectorAll(".accordions__item")

    if (labels) {

        labels.forEach((e) => {
            e.addEventListener("click", () => {
                if (e.classList.contains("accordions__item--active")) {
                    e.classList.remove("accordions__item--active")
                } else {
                    removeClass()
                    e.classList.add('accordions__item--active')
                }
            })
        })

        function removeClass() {
            labels.forEach((e) => {
                e.classList.remove("accordions__item--active")
            })
        }

        function closeAllAccordions() {
            labels.forEach((e) => {
                e.lastElementChild.setAttribute('style', `margin-top: -${e.lastElementChild.clientHeight}px`)
            })
        }

        closeAllAccordions()

    }
})()*/

if ($(".accordions__label").length > 0){
	$('.accordions__label').on("click", function(){
		var thisBlock = $(this).next();
		var thisParent = $(this).parent();
		if( !$(this).parent().hasClass('accordions__item--active')) {
			$('.accordions__content').not(thisBlock).slideUp();
			$('.accordions__item').not(thisParent).removeClass("accordions__item--active");
			$(this).parent().addClass("accordions__item--active");
			$(this).next().slideDown();
		} else {
			$(this).parent().removeClass("accordions__item--active");
			$(this).next().slideUp();
		}
	});
	/*$('.accordions__label').on("click", function(){
		$(this).parent().toggleClass('accordions__item--active');
		if( $(this).parent().hasClass('accordions__item--active')) {
			$(this).next().slideDown();
		} else {
			$('.accordions__content').slideUp();
			$(".accordions__item").removeClass("accordions__item--active");
		}
	});
	$(function ($) {
		$(document).mouseup(function (e) {
		var div = $(".accordions__item.accordions__item--active");
		if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.removeClass("accordions__item--active");
			}
		});
	});
	$(function ($) {
		$(document).mouseup(function (e) {
			var div = $(".accordions__content");
			if (!div.is(e.target) && div.has(e.target).length === 0) {
				div.slideUp();
			}
		});
	});*/
}

