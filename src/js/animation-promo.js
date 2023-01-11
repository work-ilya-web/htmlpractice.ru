let htmlRect = document.getElementById('html-rect')
let htmlClassSvg = document.querySelector('.html-svg')
htmlRect.addEventListener('mouseenter', () => {
    htmlClassSvg.classList.add('active')
    htmlRect.addEventListener('mouseleave', () => {
        htmlClassSvg.classList.remove('active')
    })
})

let cssRect = document.getElementById('css-rect')
let cssClassSvg = document.querySelector('.css-svg')
cssRect.addEventListener('mouseenter', () => {
    cssClassSvg.classList.add('active')
    cssRect.addEventListener('mouseleave', () => {
        cssClassSvg.classList.remove('active')
    })
})

let jsRect = document.getElementById('js-rect')
let jsClassSvg = document.querySelector('.js-svg')
jsRect.addEventListener('mouseenter', () => {
    jsClassSvg.classList.add('active')
    jsRect.addEventListener('mouseleave', () => {
        jsClassSvg.classList.remove('active')
    })
})

let windScreen = window.screen.width
if (windScreen <= 760) {
    slideSvg()
}

function slideSvg() {
    let arr = [htmlClassSvg, cssClassSvg, jsClassSvg]
    let currIndex = 0
    setInterval(() => {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (index === currIndex) {
                element.classList.add('active')
            } else {
                element.classList.remove('active')
            }
        }
        if (currIndex >= arr.length - 1) {
            currIndex = 0
        } else {
            currIndex++
        }
    }, 3000)
}
