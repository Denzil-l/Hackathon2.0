//Wrapper
const Wrapper = document.querySelector('.wrapper')
//Start-container's ellements:
const startContainer = document.querySelector('.start-container')
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
// Exercise-Container's ellements:
const ExerciseContainer = document.querySelector('.exercise-container')
const north = document.querySelector('.exercise-container__north')
const zodiac = document.querySelector('.exercise-container__zodiac')
const south = document.querySelector('.exercise-container__south')
const zodiac_text = document.querySelector('.exercise-container__zodiac-text')

const textExerciseButtons = document.querySelectorAll('.exerciseButton')
// Quiz-Container's ellements:
const QuizContainer = document.querySelector('.quiz-container')
const textQuizButtons = document.querySelectorAll('.quizButton')

// Back-Button:
const back = document.querySelectorAll('.back-button')
const allPages = [CatalogContainer,ExerciseContainer,QuizContainer]


Option1.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(45deg)'
    Option1.style.transform = 'rotateZ(-45deg)'
    Option2.style.transform = 'rotateZ(-45deg) translate(-35%, -100%)'
    Option3.style.transform = 'rotateZ(-45deg) translate(-100%, 35%)'
  

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        CatalogContainer.style.display = 'flex'
        CatalogContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
        
    },2000)
    setTimeout(async ()=>{
        MainContainer.style.display = 'none'
        const data = await fillCatalog()
    },3000)
})
Option2.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(180deg)'
    Option1.style.transform = 'rotateZ(180deg) translate(25%, -30%)'
    Option2.style.transform = 'rotateZ(180deg) translate(50%, 35%)'
    Option3.style.transform = 'rotateZ(180deg) translate(90%, -20%)'

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        QuizContainer.style.display = 'flex'
        QuizContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})
Option3.addEventListener('click', ()=>{
    MainCircle.style.transition = '1.5s'
    Options.forEach(element => {
        element.style.transition = '1.5s'
    });
    MainCircle.style.transform = 'rotateZ(-45deg)'
    Option1.style.transform = 'rotateZ(45deg) translate(35%, 100%)'
    Option2.style.transform = 'rotateZ(45deg) translate(-25%, -50%)'
    Option3.style.transform = 'rotateZ(45deg) translate(-75%, 75%)'

    setTimeout(()=>{
        MainContainer.style.animation = 'MainBGReverse 1s linear forwards, zoomTopMain 1s ease-in forwards'
        ExerciseContainer.style.display = 'flex'
        ExerciseContainer.style.animation = 'zoomBottomMain 1s ease-in forwards'
    },2000)
    setTimeout(()=>{
        MainContainer.style.display = 'none'
    },3000)
})

//Exercise Section:
zodiac_text.addEventListener('mouseover', ()=>{
    zodiac_text.style.animation = 'ZodiacShirma 0.5s linear forwards'
})
zodiac_text.addEventListener('mouseout', ()=>{
    zodiac_text.style.animation = 'ZodiacShirmaReverse 0.5s linear forwards'
})
textExerciseButtons.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        index == 0?  Study('North') : index == 1?  Study('Zodiac'):  Study('South')

    })
    
});
textQuizButtons.forEach((element,index) => {
    element.addEventListener('click', () => {
        index == 0 ? Quiz('North') : index == 1 ? Quiz('Zodiac') : index == 2 ? Quiz('South') : Quiz('All');
      });
    
});


back.forEach((element, index) => {

    element.addEventListener('click', ()=>{  
        
       
            MainContainer.style.animation = 'zoomBottom2Main 1s ease-in forwards,MainBG 1s ease-in forwards'
            allPages[index].style.animation = 'zoomTopContainer 1s ease-in forwards'
            setTimeout(() => {
                North.style.display = 'flex'
                South.style.display = 'flex'
                Zodiac.style.display = 'flex'  
                North.style.animation = 'MainBG 1s ease-in forwards'
                South.style.animation = 'MainBG 1s ease-in forwards'
                Zodiac.style.animation = 'MainBG 1s ease-in forwards'  
                StudyBlock.style.display = 'none'
                StudyBlock.style.animation = 'none'
                currentPosition = 0
                currentBlock = null
                StudyBlock.style.left = '0px'
                StudyBlock.innerHTML = `<div class="back-button">Back</div>`

                document.querySelector('.timer') ? document.querySelector('.timer').style.display = 'none' : null
                Left.style.display = 'flex'
                Center.style.display = 'flex'
                Top.style.display = 'flex'
                Bottom.style.display = 'flex'
                Left.style.animation = 'MainBG 1s linear forwards'
                Center.style.animation = 'MainBG 1s linear forwards'
                Top.style.animation = 'MainBG 1s linear forwards'
                Bottom.style.animation = 'MainBG 1s linear forwards'
                currentPositionQuiz = 0
                currentBlockQuiz = null
                QuizBlock.style.display = 'none'
                QuizBlock.style.animation = 'none'
                QuizBlock.style.left = '0px'
                QuizBlock.innerHTML = `<div class="back-button">Back</div>`



                MainContainer.style.display = 'flex'
                allPages[index].style.display = 'none'
            }, 1000);
    })
});