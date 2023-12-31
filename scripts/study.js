
//Here I get arrays with all constellations

const StudyBlock = document.querySelector('.exercise-block')

const North = document.querySelector('.exercise-container__north')
const South = document.querySelector('.exercise-container__south')
const Zodiac = document.querySelector('.exercise-container__zodiac')
let currentPosition = 0
let currentBlock = null





let x = [1,2,3]
//Here I create a function which take an array and fill the exercise-block
const Study = async (str) =>{
  const userData = await getUserData()
  const Allconstellations = await getConstellationsList()
  
  console.log(user_id)
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
  } else if(str == 'Zodiac'){
    constellations = Allconstellations.filter((element) =>{
      if(element.is_zodiac == true){
        return element
      }
    })
  }
  North.style.animation = 'MainBGReverse 1s linear forwards'
  South.style.animation = 'MainBGReverse 1s linear forwards'
  Zodiac.style.animation = 'MainBGReverse 1s linear forwards'
setTimeout(()=>{
  
  North.style.display = 'none'
  South.style.display = 'none'
  Zodiac.style.display = 'none'
  StudyBlock.innerHTML = ''
  StudyBlock.style.display  = 'flex'
  StudyBlock.style.animation = 'MainBG 1s linear forwards'
  console.log(constellations)
constellations.forEach((element,index) => {
  const newBlock = document.createElement('div')
  newBlock.classList.add('exercise-block__block')
  index == 0 ? newBlock.classList.add('first'): null
  index == 0 ? newBlock.classList.add('current'): null
  let features = ''
  console.log(element.name)

  element.features.forEach(element => {
    features += `<li>${element}</li>`
  });
  let isStudied = 'Mark as learned?'
  userData.forEach(e => {
    e.constellation == element.id ? isStudied = 'Studied' : null
  });
  newBlock.innerHTML = `
  <div class="cover"></div>

                    <div class="exercise-block__image">
                        <img src="${element.image}" alt="">
                    </div>
                    <h2 class="exercise-block__name">Name: ${element.name}</h2>
                    <div class="exercise-block__description">
                        <h2>Description:</h2>
                        <br>
                        ${element.description}
                    </div>
                    <div class="exercise-block__features">
                        <ul>
                            <h2>Features:</h2>
                            ${features}
                        </ul>
                    </div>
                    <div class="exercise-block__studied">${isStudied}</div>
                    <div class="exercise-block__buttons">
                        <button class="exercise-block__previous">previous</button>
                        <button class="exercise-block__next">next</button>
                    </div>`

  StudyBlock.appendChild(newBlock)

});
currentBlock = document.querySelector('.current')
const previous = document.querySelectorAll('.exercise-block__previous')
const next = document.querySelectorAll('.exercise-block__next')
Moving(next,'next')
Moving(previous,'previous')

const allIsStudied = document.querySelectorAll('.exercise-block__studied')
allIsStudied.forEach((element,index) => {
  element.addEventListener('click', ()=>{
    if(constellations[index].isStudied == false){
      constellations[index].isStudied = true
      element.innerHTML = 'Studied'
    }
  })
});
allIsStudied.forEach((element,index) => {
  element.addEventListener('click', async()=>{
    if(element.textContent != 'Studied'){
      const response = await addUserConstellation(user_id, constellations[index].id)
      element.innerHTML = 'Studied'

    }
  })
});



},1000)

}

//Here I start work with buttons and get all buttons for each object

//I fix current position and also fix current block and get back the list of all blocks

//Here I create a function which get an array with one button type and direction
const Moving = (array,direction) =>{

  const all_blocks = document.querySelectorAll('.exercise-block__block')

  array.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        if(direction == 'next' && array.length != index + 1){
          currentPosition += -440
          StudyBlock.style.left = `${currentPosition}px`
          currentBlock.classList.remove('current')
          currentBlock = all_blocks[index+1]
          currentBlock.classList.add('current')


        }else if(direction == 'previous' && currentPosition != 0){
          currentPosition += 440
          StudyBlock.style.left = `${currentPosition}px`
          currentBlock.classList.remove('current')
          currentBlock = all_blocks[index-1]
          currentBlock.classList.add('current')

        }    
      
    })
  });
}
