const optionsList = document.querySelectorAll('.project-list__option-list')

function openOption(e) {
    if (optionsList) {
        optionsList.forEach((el, index) => {
            if (index == e) {
                el.classList.toggle('active')
            }
        });
    }
}

function closeOptions(e) {
    optionsList.forEach((el, index) => {
        if (e == index) {
            el.classList.remove('active')
        }
    })
}
