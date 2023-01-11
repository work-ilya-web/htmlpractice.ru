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
    console.log('asd', cssClassSvg);
    cssClassSvg.classList.add('active')
    cssRect.addEventListener('mouseleave', () => {
        cssClassSvg.classList.remove('active')
    })
})


let jsRect = document.getElementById('js-rect')
let jsClassSvg = document.querySelector('.js-svg')
jsRect.addEventListener('mouseenter', () => {
    console.log('asd', jsClassSvg);
    jsClassSvg.classList.add('active')
    jsRect.addEventListener('mouseleave', () => {
        jsClassSvg.classList.remove('active')
    })
})