"use strict";$(".accordions__label").length>0&&$(".accordions__label").on("click",(function(){var e=$(this).next(),s=$(this).parent();$(this).parent().hasClass("accordions__item--active")?($(this).parent().removeClass("accordions__item--active"),$(this).next().slideUp()):($(".accordions__content").not(e).slideUp(),$(".accordions__item").not(s).removeClass("accordions__item--active"),$(this).parent().addClass("accordions__item--active"),$(this).next().slideDown())}));var htmlRect=document.getElementById("html-rect"),htmlClassSvg=document.querySelector(".html-svg");htmlRect.addEventListener("mouseenter",(function(){htmlClassSvg.classList.add("active"),htmlRect.addEventListener("mouseleave",(function(){htmlClassSvg.classList.remove("active")}))}));var cssRect=document.getElementById("css-rect"),cssClassSvg=document.querySelector(".css-svg");cssRect.addEventListener("mouseenter",(function(){cssClassSvg.classList.add("active"),cssRect.addEventListener("mouseleave",(function(){cssClassSvg.classList.remove("active")}))}));var jsRect=document.getElementById("js-rect"),jsClassSvg=document.querySelector(".js-svg");jsRect.addEventListener("mouseenter",(function(){jsClassSvg.classList.add("active"),jsRect.addEventListener("mouseleave",(function(){jsClassSvg.classList.remove("active")}))}));var windScreen=window.screen.width;function slideSvg(){var e=[htmlClassSvg,cssClassSvg,jsClassSvg],s=0;setInterval((function(){for(var o=0;o<e.length;o++){var t=e[o];o===s?t.classList.add("active"):t.classList.remove("active")}s>=e.length-1?s=0:s++}),3e3)}if(windScreen<=760&&slideSvg(),$(".header__burger").length>0&&$(".header__burger").on("click",(function(e){$(this).toggleClass("active"),$(".header").toggleClass("active"),$("body").toggleClass("lock"),$(".header__container").toggleClass("active")})),function(){var e,s;e=document.getElementById("temp-id-header"),s=new URL(window.location.href).pathname,e.style.position="/"!==s?"inherit":"absolute"}(),$(".notifications__icon").on("click",(function(e){e.preventDefault(),$(this).toggleClass("active"),$(".notifications__body").toggleClass("active"),$(this).find("span").addClass("hidden")})),$((function(e){e(document).mouseup((function(s){var o=e(".notifications");o.is(s.target)||0!==o.has(s.target).length||(e(".notifications__icon").removeClass("active"),e(".notifications__body").removeClass("active"))}))})),$(".l-work").length>0)var swiper=new Swiper(".l-work__swiper",{slidesPerView:3,spaceBetween:48,breakpoints:{370:{slidesPerView:1.1,spaceBetween:12},680:{slidesPerView:1.8},760:{slidesPerView:2,spaceBetween:16},1010:{slidesPerView:2.5,spaceBetween:24},1190:{slidesPerView:3,spaceBetween:24},1320:{slidesPerView:3,spaceBetween:48}}});if($(".main-catalog").length>0)swiper=new Swiper(".main-catalog__slick",{slidesPerView:2.42,spaceBetween:48,speed:4e3,allowTouchMove:!1,loop:!0,autoplay:{delay:0,disableOnInteraction:!1},breakpoints:{370:{slidesPerView:1.1,spaceBetween:12},680:{slidesPerView:1.8},760:{slidesPerView:2,spaceBetween:16},1010:{slidesPerView:2.2,spaceBetween:24},1190:{slidesPerView:2.42,spaceBetween:48}}});function openModal(e){var s=document.getElementById("modal-".concat(e)),o=document.querySelectorAll("body");s&&(s.classList.add("active"),o.classList.add("lock"))}function closeModal(){var e=document.querySelectorAll(".modal"),s=document.querySelectorAll("body");e.forEach((function(e){e.classList.remove("active"),s.classList.remove("lock")}))}$(".main-info").on("mousemove",(function(e){TweenMax.to(".main-info__icon--1",{x:e.pageX/80,y:e.pageY/80,duration:1.5}),TweenMax.to(".main-info__icon--2",{x:-e.pageX/160,y:-e.pageY/120,duration:1.5}),TweenMax.to(".main-info__icon--3",{x:e.pageX/220,y:e.pageY/220,duration:1.5})})),$((function(){$(".btn").on("mouseenter",(function(e){var s=$(this).offset(),o=e.pageX-s.left,t=e.pageY-s.top;$(this).find("i").css({top:t,left:o})})).on("mouseout",(function(e){var s=$(this).offset(),o=e.pageX-s.left,t=e.pageY-s.top;$(this).find("i").css({top:t,left:o})}))})),$(".phone-mask").mask("+7 (999)999-99-99"),$(".entry--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#entry-modal",baseClass:"dark-fancybox",touch:!1})})),$(".registration--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#registration-modal",baseClass:"dark-fancybox",touch:!1})})),$(".password--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#password-modal",baseClass:"dark-fancybox",touch:!1})})),$(".confirmation--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#confirmation-modal",baseClass:"dark-fancybox",touch:!1})})),$(".recommendations--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#recommendations-modal",baseClass:"dark-fancybox",touch:!1})})),$(".edit--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#edit-modal",baseClass:"dark-fancybox",touch:!1})})),$(".add--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#add-modal",baseClass:"dark-fancybox",touch:!1})})),$(".download--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#download-modal",baseClass:"dark-fancybox",touch:!1})})),$(".loading--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#loading-modal",baseClass:"dark-fancybox",touch:!1})})),$(".published--js").on("click",(function(e){e.preventDefault(),$.fancybox.close(),$.fancybox.open({loop:!1,src:"#published-modal",baseClass:"dark-fancybox",touch:!1})})),$("[data-project]").on("click",(function(e){e.preventDefault(),$(".tabs__btn").removeClass("tabs__btn--active"),$(".portfolio__block").removeClass("active"),$(this).addClass("tabs__btn--active");var s=$(this).data("project");$('[data-project-block="'+s+'"]').toggleClass("active")}));var optionsList=document.querySelectorAll(".project-list__option-list");function openOption(e){optionsList&&optionsList.forEach((function(s,o){o==e&&s.classList.toggle("active")}))}function closeOptions(e){optionsList.forEach((function(s,o){e==o&&s.classList.remove("active")}))}