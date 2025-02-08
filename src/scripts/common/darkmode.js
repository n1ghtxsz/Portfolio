let sun = document.getElementById('sun')
let moon = document.getElementById('moon')

sun.onmouseover = function () {
    sun.classList.remove('bi-sun')
    sun.classList.add('bi-sun-fill')
    sun.classList.add('rotate')
    sun.classList.add('pointer')
}

sun.onclick = function () {
    moon.classList.remove('d-none')
    moon.classList.add('rotate')
    sun.classList.add('d-none')
    
    document.querySelector('body').style.transition = 'ease 0.5s'

    document.querySelector('body').classList.remove('tertiary-dark-blue')
    document.querySelector('body').classList.remove('text-white')
    document.querySelector('body').classList.add('text-dark')

    document.querySelector('#m5>div>div>ul>div>li>a.text-center').classList.remove('text-white')
    document.querySelector('#m5>div>div>ul>div>li>a.text-center').classList.add('text-dark')
    document.querySelector('#m5>div>div>ul>div>li>a').classList.remove('text-white')
    document.querySelector('#m5>div>div>ul>div>li>a').classList.add('text-dark')

    document.querySelector('div.p-5>h1>a').style.transition = 'ease 0.5s'
    document.querySelector('div.p-5>h1>a').classList.remove('text-white')
    document.querySelector('div.p-5>h1>a').classList.add('text-dark')

    document.querySelector('div.mx-3>a>svg#instagram').classList.remove('instagram')
    document.querySelector('div.mx-3>a>svg#github').classList.remove('github')
    document.querySelector('div.mx-3>a>svg#linkedin').classList.remove('linkedin')
    document.querySelector('div.mx-3>a>svg#instagram').classList.add('instagramblack')
    document.querySelector('div.mx-3>a>svg#github').classList.add('githubblack')
    document.querySelector('div.mx-3>a>svg#linkedin').classList.add('linkedinblack')
}

moon.onmouseover = function () {
    moon.classList.remove('bi-moon')
    moon.classList.add('bi-moon-stars-fill')
    moon.classList.add('pointer')
}

moon.onclick = function () {
    sun.classList.remove('d-none')
    moon.classList.add('d-none')

    document.querySelector('body').classList.add('text-white')
    document.querySelector('body').classList.add('tertiary-dark-blue')

    document.querySelector('div.p-5>h1>a').classList.add('text-white')

    document.querySelector('#m5>div>div>ul>div>li>a').classList.add('text-white')
    document.querySelector('#m5>div>div>ul>div>li>a.text-center').classList.remove('text-dark')
    document.querySelector('#m5>div>div>ul>div>li>a.text-center').classList.add('text-white')

    document.querySelector('div.mx-3>a>svg#instagram').classList.remove('instagramblack')
    document.querySelector('div.mx-3>a>svg#github').classList.remove('githubblack')
    document.querySelector('div.mx-3>a>svg#linkedin').classList.remove('linkedinblack')
    document.querySelector('div.mx-3>a>svg#instagram').classList.add('instagram')
    document.querySelector('div.mx-3>a>svg#github').classList.add('github')
    document.querySelector('div.mx-3>a>svg#linkedin').classList.add('linkedin')

    document.querySelector('div.div-img').classList.remove('bg-info')
}

