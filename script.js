//Wrapper
const Wrapper = document.querySelector('.wrapper')
//Start-container's ellements:
const startContainer = document.querySelector('.start-container')
const startTitle = document.querySelector('.start-container__title')
const startButton = document.querySelector('.start-container__start')
//Main-container's ellements:
const MainContainer = document.querySelector('.main-container')
const MainCircle = document.querySelector('.main-container__map')
const Option1 = document.querySelector('.first')
const Option2 = document.querySelector('.second')
const Option3 = document.querySelector('.third')
const Options = document.querySelectorAll('.main-container__options')
const Shadow = document.querySelector('.main-container__shadow')
//Catalog-Container's ellemens:
const CatalogContainer = document.querySelector('.catalog-container')


startButton.addEventListener('click', ()=>{
    startTitle.style.opacity = 0
    startButton.style.transition = '1.5s'
    startButton.style.opacity = 0
    setTimeout(()=>{
        startTitle.style.display = 'none'
        startButton.style.display = 'none'
        startContainer.style.animation = 'zoomTopStart 2s ease-in forwards'
        MainContainer.style.animation = 'zoomBottomMain 2s ease-in forwards,'
        setTimeout(()=>startContainer.style.display = 'none',2000)
    },1500)
    setTimeout(()=>{
        Wrapper.style.animation = "WrapperBG 2.5s 1s ease-in forwards,MainContainerMoving 60s ease-in-out infinite"
        MainContainer.style.animation = 'zoomBottomMain 2s ease-in forwards,MainBG 2.5s 1s ease-in forwards'
    },2500)
    
})
Option1.addEventListener('click', ()=>{
    MainCircle.style.transition = '1s'
    Options.forEach(element => {
        element.style.transition = '1s'
    });
    MainCircle.style.transform = 'rotateZ(45deg)'
    Option1.style.transform = 'rotateZ(-45deg)'
    Option2.style.transform = 'rotateZ(-45deg) translate(-35%, -100%)'
    Option3.style.transform = 'rotateZ(-45deg) translate(-100%, 35%)'
  

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 2s ease-in forwards'
        CatalogContainer.style.display = 'flex'
        CatalogContainer.style.animation = 'zoomBottomMain 2s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})
Option2.addEventListener('click', ()=>{
    MainCircle.style.transition = '2s'
    Options.forEach(element => {
        element.style.transition = '2s'
    });
    MainCircle.style.transform = 'rotateZ(180deg)'
    Option1.style.transform = 'rotateZ(180deg) translate(25%, -30%)'
    Option2.style.transform = 'rotateZ(180deg) translate(50%, 35%)'
    Option3.style.transform = 'rotateZ(180deg) translate(90%, -20%)'
})
Option3.addEventListener('click', ()=>{
    MainCircle.style.transition = '1s'
    Options.forEach(element => {
        element.style.transition = '1s'
    });
    MainCircle.style.transform = 'rotateZ(-45deg)'
    Option1.style.transform = 'rotateZ(45deg) translate(35%, 100%)'
    Option2.style.transform = 'rotateZ(45deg) translate(-25%, -50%)'
    Option3.style.transform = 'rotateZ(45deg) translate(-75%, 75%)'
})

