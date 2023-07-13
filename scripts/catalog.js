const fillCatalog = async () => {
    try {
      const [userData, constellationData] = await Promise.all([getUserData(), getConstellationsList()]);
      console.log(userData);
      console.log(constellationData);
      const amount = []
      const catalog = document.getElementById('list')
      catalog.innerHTML = `<h2 class="catalog-container__title">Catalog:</h2>`
      for (let i = 0; i < constellationData.length; i++) {
        for (let j = 0; j < userData.length; j++) {
            if(constellationData[i].id == userData[j].id){
                amount.push(constellationData[i].id)
                catalog.innerHTML+=`<li>
                <h2>${constellationData[i].name}</h2>

            </li>`

            
            }
            
        }
        
      }

      const list = document.querySelectorAll('li')
      const bigimage = document.querySelector('.catalog-container__wrapper')
      const information = document.querySelector('.catalog-container__bottom')
      list.forEach((element,index) => {
        element.addEventListener('click', ()=>{
            constellationData.forEach(element => {
                if (element.id == amount[index]) {
                    bigimage.innerHTML = `<img src="${element.image}" alt="">`
                    const features = element.features.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue + '<br>';
                      }, '');                    
                      information.innerHTML = `
                        <div class="catalog-container__bottom-top">
                            <div class="catalog-container__name">${element.name}</div>
                            <div class="catalog-container__type">${element.type}</div>
                            <div class="catalog-container__isZodiac">${element.is_zodiac}</div>
                        </div>
                        <div class="catalog-container__description">${element.description}</div>
                        <div class="catalog-container__features">${features}</div>

                      `
                }
            });
        })
      });

    } catch (error) {
      console.error('Ошибка:', error);
    }
  }