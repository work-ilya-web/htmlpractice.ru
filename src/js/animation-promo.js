let windScreen = window.screen.width

let htmlRect = document.getElementById('html-rect')
let htmlClassSvg = document.querySelector('.html-svg')

let cssRect = document.getElementById('css-rect')
let cssClassSvg = document.querySelector('.css-svg')

let jsRect = document.getElementById('js-rect')
let jsClassSvg = document.querySelector('.js-svg')

let i = 0
const arrActions = [htmlRect, cssRect, jsRect]
const arrClasses = [htmlClassSvg, cssClassSvg, jsClassSvg]

if (windScreen > 760) {
    for (let index = 0; index < arrActions.length; index++) {
        const element = arrActions[index];
        element.addEventListener('mouseenter', () => {
            i = index
            for (let index = 0; index < arrClasses.length; index++) {
                const element = arrClasses[index];
                if (index === i) {
                    element.classList.add('active')
                } else {
                    element.classList.remove('active')
                }
            }
        })
    }
} else {
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


// switch dark mode / light mode

let logo = document.getElementById('logo')
let logoIcon = document.getElementById('logo')
let bgAnimation = document.getElementById('dark-mode-bg')
let logoText = document.getElementById('logo-text')
let links = document.querySelectorAll('.header__menu ul li a')
let titlePromo = document.getElementById('promo-title')
let subtitlePromo = document.getElementById('promo-subtitle')
let counts = 2
let num = 0
if(logo && bgAnimation && logoText){
    logo.addEventListener('mouseenter', () => {
        if (num < 4) {
            num++
        } else if (num === 4) {
            num = 1
        }
        localStorage.setItem('num', num)
        setTrueFalse()
        logo.classList.remove('reverse')
        logo.classList.add('active')
        logo.addEventListener('mouseleave', () => {
            logo.classList.remove('active')
            logo.classList.add('reverse')
        })
    })

    setTrueFalse()

    function setTrueFalse() {
        let currN = localStorage.getItem('num')
        if (2 == currN) {
            setDarkMode(true)
        } else if (currN == 4) {
            setDarkMode(false)
        }
    }

    function setDarkMode(darkLight) {
        if (darkLight) {
            bgAnimation.classList.add('dark-mode')
            logoText.classList.add('dark-mode')
            titlePromo.classList.add('dark-mode')
            subtitlePromo.classList.add('dark-mode')
            links.forEach((element, index) => {
                element.classList.add('dark-mode')
                element.style.transitionDelay = `0.${index}s`
            });
        } else {
            bgAnimation.classList.remove('dark-mode')
            logoText.classList.remove('dark-mode')
            titlePromo.classList.remove('dark-mode')
            subtitlePromo.classList.remove('dark-mode')
            links.forEach(element => {
                element.classList.remove('dark-mode')
            });
        }
    }

}
