function openModal(e) {
    const modal = document.getElementById(`modal-${e}`)
    const pageLock = document.querySelectorAll('body')
    if (modal) {
        modal.classList.add('active')
        pageLock.classList.add('lock')
    }
}

function closeModal() {
    const modals = document.querySelectorAll('.modal')
    const pageLocks = document.querySelectorAll('body')
    modals.forEach(el => {
        el.classList.remove('active')
        pageLocks.classList.remove('lock')
    })
}

/*var button = document.getElementsByClassName("password__icon");
console.log(button)
	button.onclick = show;
	var input = document.getElementsByClassName("password__input");
	function show () {
    if(input.getAttribute('type') == 'password') {
		input.removeAttribute('type');
		input.setAttribute('type', 'text');
		button.className = 'far fa-eye-slash';
	} else {
		input.removeAttribute('type');
		input.setAttribute('type', 'password');
		button.className = 'far fa-eye';
    }
}*/

$('.phone-mask').mask('+7 (999)999-99-99');

$('.entry--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#entry-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.registration--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#registration-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.password--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#password-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.confirmation--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#confirmation-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.recommendations--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#recommendations-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.edit--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#edit-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.add--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#add-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.download--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#download-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.loading--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#loading-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});

$('.published--js').on('click', function (event) {
	event.preventDefault();
	$.fancybox.close();
	$.fancybox.open({
		loop: false,
		src: '#published-modal',
		baseClass: 'dark-fancybox',
		touch: false,
	});
});