const QuizBlock = document.querySelector('.quiz-block')
const Left = document.querySelector('.quiz-container__left')
const Center = document.querySelector('.quiz-container__center')
const Top = document.querySelector('.quiz-container__right')
const Bottom = document.querySelector('.quiz-container__bottom')
let currentPositionQuiz = 0
let currentBlockQuiz = null
let rightAnswers = []


//Here I create a function which take an array and fill the exercise-block
const Quiz =  async (str) =>{
    const Allconstellations = await getConstellationsList()
    Left.style.animation = 'MainBGReverse 1s linear forwards'
    Center.style.animation = 'MainBGReverse 1s linear forwards'
    Top.style.animation = 'MainBGReverse 1s linear forwards'
    Bottom.style.animation = 'MainBGReverse 1s linear forwards'
    
    let constellations
    if(str == 'North'){
      constellations = Allconstellations.filter((element) =>{
        if(element.type == str){
          return element
        }
      })
    }else if(str == 'South'){
      constellations = Allconstellations.filter((element) =>{
        if(element.type == str){
          return element
        }
      })
    }else if(str == 'Zodiac'){
      constellations = Allconstellations.filter((element) =>{
        if(element.is_zodiac == true){
          return element
        }
      })
    }else if(str == 'All'){
      constellations = Allconstellations.map(element => element)
    }
  
    setTimeout(()=>{
    rightAnswers = []
    Left.style.display = 'none'
    Center.style.display = 'none'
    Top.style.display = 'none'
    Bottom.style.display = 'none'
    QuizBlock.innerHTML = ''
    QuizBlock.style.display  = 'flex'
    QuizBlock.style.animation = 'MainBG 1s linear forwards'
  
  constellations.forEach((element,index) => {
    let newBlock = document.createElement('div')
    newBlock.classList.add('quiz-block__block')
    index == 0 ? newBlock.classList.add('first'): null
    index == 0 ? newBlock.classList.add('current'): null
    const rightAnswer = element.name
    rightAnswers.push(rightAnswer)
    const choices = []
    for (let i = 0; i < 4; i++) {
      let x = ''
      do {
        x = constellations[Math.floor(Math.random() * constellations.length)].name
      } while (choices.includes(x));
      choices.push(x)
    }
    if(!choices.includes(rightAnswer)){
      let randomium = Math.floor(Math.random() * 3)
      choices[randomium] = rightAnswer
    }
    newBlock.innerHTML = `
    <div class="cover"></div>
  
                      <div class="quiz-block__image">
                          <img src="${element.image}" alt="">
                      </div>
                      <div class="quiz-block__question">
                        <ul>
                            <li>${choices[0]}</li>
                            <li>${choices[1]}</li>
                            <li>${choices[2]}</li>
                            <li>${choices[3]}</li>
                        </ul>
                    </div>
                   
                      <div class="quiz-block__buttons">
                          <button class="quiz-block__previous">previous</button>
                          <button class="quiz-block__next">next</button>
                      </div>
                      </div>
                      `

  
  QuizBlock.appendChild(newBlock)
  
  if(index == constellations.length - 1){
    newBlock = document.createElement('div')
    newBlock.classList.add('quiz-block__block')
    index == 0 ? newBlock.classList.add('first'): null
    index == 0 ? newBlock.classList.add('current'): null
    newBlock.classList.add('result')
    newBlock.innerHTML = `
    <div class="cover"></div>
                      <div class="quiz-block__timer">
                      Final Time:
                      </div>
                      <div class="quiz-block__score">
                      Score:
                      </div>
                      <div class="quiz-block__message">
                      </div>

                    
                      <div class="quiz-block__buttons">
                          <button class="quiz-block__previous">previous</button>

                          <button class="quiz-block__result">Check the result</button>
                      </div>
                      </div>
    `
    QuizBlock.appendChild(newBlock)

  }
  });
  console.log(rightAnswers)
  let timer
  if(!document.querySelector('.timer')){
    timer = document.createElement('div')
    timer.classList.add('timer')
    document.querySelector('.quiz-container__top').appendChild(timer)
  } else{
    timer = document.querySelector('.timer')
  }
  timer.textContent = '00:00'
  let seconds = 0
  let minutes = 0
  setInterval(()=>{
    seconds++;
  
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
  
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    timer.textContent = `${formattedMinutes}:${formattedSeconds}`;
  },1000);


  currentBlockQuiz = document.querySelector('.current')
  const previous = document.querySelectorAll('.quiz-block__previous')
  const next = document.querySelectorAll('.quiz-block__next')
  MovingQuiz(next,'next')
  MovingQuiz(previous,'previous')
  
  
  const resultButton = document.querySelector('.quiz-block__result')
  const useranswers = []

  UserAnswers(useranswers)

  resultButton.addEventListener('click', ()=>{
    const resulttimer = document.querySelector('.quiz-block__timer')
    const resultscore = document.querySelector('.quiz-block__score')
    const resultmessage = document.querySelector('.quiz-block__message')
    resulttimer.textContent = timer.textContent 
    timer.style.display = 'none'
    let resultScore = 0
    let percentage = 0
    for (let i = 0; i < rightAnswers.length; i++) {
      rightAnswers[i] == useranswers[i] ? resultScore++ : null
      
    }
    resultscore.textContent = `${resultScore}/${rightAnswers.length}`
    percentage = resultScore/rightAnswers.length
    if (percentage >= 90) {
      resultmessage.innerHTML = "Excellent job! You've achieved an outstanding result!";
    } else if (percentage >= 75) {
      resultmessage.innerHTML = "Great work! You've done really well!";
    } else if (percentage >= 50) {
      resultmessage.innerHTML = "Good job! You're making good progress!";
    } else if (percentage >= 25) {
      resultmessage.innerHTML = "Keep it up! You're on the right track!";
    } else {
      resultmessage.innerHTML = "You can do better! Don't give up and keep practicing!";
    }
  })





  },1000)
  
  }
  








  //Here I start work with buttons and get all buttons for each object
  
  //I fix current position and also fix current block and get back the list of all blocks
  
  //Here I create a function which get an array with one button type and direction
  const MovingQuiz = (array,direction) =>{
  
    const all_blocks = document.querySelectorAll('.quiz-block__block')
  
    array.forEach((element,index) => {
      element.addEventListener('click', ()=>{
          if(direction == 'next' && array.length != index){
            currentPositionQuiz += -440
            QuizBlock.style.left = `${currentPositionQuiz}px`
            currentBlockQuiz.classList.remove('current')
            currentBlockQuiz = all_blocks[index+1]
            currentBlockQuiz.classList.add('current')
  
  
          }else if(direction == 'previous' && currentPositionQuiz != 0){
            currentPositionQuiz += 440
            QuizBlock.style.left = `${currentPositionQuiz}px`
            currentBlockQuiz.classList.remove('current')
            currentBlockQuiz = all_blocks[index-1]
            currentBlockQuiz.classList.add('current')
  
          }    
        
      })
    });
  }
  

  const UserAnswers = (useranswers) => {
    const quiz = document.querySelector('.quiz-block')
    let allli = quiz.querySelectorAll('li')
    
    allli = splitArrayIntoChunks(Array.from(allli),4)

    for (let i = 0; i < allli.length; i++) {
      useranswers.push(null)
    }

    console.log(allli)
    allli.forEach((element,index) => {
      element.forEach((e,i) => {
        e.addEventListener('click', ()=>{
          useranswers[index] = e.textContent
          console.log(useranswers)

        })
      });
    });

  }


  const splitArrayIntoChunks = (array, chunkSize) =>{
    let result = [];
    
    for (var i = 0; i < array.length; i += chunkSize) {
      var chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    
    return result;
  }
  
  // Пример использования
