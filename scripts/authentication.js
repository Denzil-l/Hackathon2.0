let authToken 
let user_id = 0
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

const main = () => {
    const login = document.querySelector('.start-container__signin');
    const register = document.querySelector('.start-container__signup');
    const auth = document.querySelector('.start-container__authentication');
    const text = document.getElementById('text');
    const startTitle = document.querySelector('.start-container__title')

    login.addEventListener('click', () => {
      text ? (text.style.display = 'none') : null;
      login.style.animation = 'MainBGReverse .5s linear forwards';
      register.style.animation = 'MainBGReverse .5s linear forwards';
      setTimeout(() => {
        login.style.display = 'none';
        register.style.display = 'none';
  
        const newForm = document.createElement('form');
        newForm.classList.add('loginForm');
        newForm.innerHTML = `
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
    
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
    
          <button type="submit">Sign In</button>
        `;
        auth.appendChild(newForm);
        document.querySelector('.loginForm').addEventListener('submit', (event) => {
          event.preventDefault();
  
          let username = document.getElementById('username').value;
          let password = document.getElementById('password').value;
          let data = {
            username: username,
            password: password,
          };
  
          fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(function (response) {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error('Ошибка при логинизации');
              }
            })
            .then(function (data) {
              const token = data.access; // Получение токена из ответа сервера
              authToken = token
              const decodedToken = JSON.parse(atob(token.split('.')[1])); // Декодирование токена
              console.log(decodedToken)
              user_id = decodedToken.user_id; // Извлечение user_id из поля 'sub'

              console.log(user_id);
              console.log(token)
              
              document.querySelector('.loginForm').style.animation = 'MainBGReverse .5s linear forwards';
              setTimeout(() => {
                startTitle.style.animation = 'MainBGReverse 1s ease-in forwards'
                document.querySelector('.loginForm').style.display = 'none';
                setTimeout(() => {
                  startTitle.style.display = 'none';
                  startContainer.style.animation = 'zoomTopStart 1s ease-in forwards';
                  setTimeout(() => (startContainer.style.display = 'none'), 1000);
                }, 1000);
                setTimeout(() => {
                  Wrapper.style.animation = 'WrapperBG 1s ease-in forwards,MainContainerMoving 60s ease-in-out infinite';
                  MainContainer.style.animation =
                    'zoomBottomMain 1s ease-in forwards,MainBG 1.5s 1s ease-in forwards';
                }, 2000);
              }, 500);
            })
            .catch(function (error) {
              console.error('Ошибка:', error);
            });
        });
      }, 500);
    });
  
    register.addEventListener('click', () => {
      login.style.animation = 'MainBGReverse .5s linear forwards';
      register.style.animation = 'MainBGReverse .5s linear forwards';
      setTimeout(() => {
        login.style.display = 'none';
        register.style.display = 'none';
  
        const newForm = document.createElement('form');
        newForm.classList.add('RegisterForm');
        newForm.innerHTML = `
          <label for="password">Username:</label>
          <input type="text" id="username" name="username">
    
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
    
          <button type="submit">Sign Up</button>
        `;
        auth.appendChild(newForm);
  
        document.querySelector('.RegisterForm').addEventListener('submit', (event) => {
          event.preventDefault();
  
          let username = document.getElementById('username').value;
          let password = document.getElementById('password').value;
          let data = {
            username: username,
            password: password,
          };
  
          fetch(`http://127.0.0.1:8000/api/register/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(function (response) {
              if (response.ok) {
                document.querySelector('.RegisterForm').style.animation = 'MainBGReverse .5s linear forwards';
  
                setTimeout(() => {
                  document.querySelector('.RegisterForm').style.display = 'none';
  
                  login.style.display = 'block';
                  register.style.display = 'block';
                  login.style.animation = 'MainBG .5s linear forwards';
                  register.style.animation = 'MainBG .5s linear forwards';
                  document.querySelector('.start-container').innerHTML +=
                    '<h2 id="text" style="opacity:0;margin-top:20px;animation:MainBG .5s linear forwards">You have successfully registered</h2>';
                  main();
                }, 500);
              } else {
                alert('This user already exists');
              }
            })
            .catch(function (error) {
              console.error('Ошибка:', error);
            });
        });
      }, 500);
    });
  };
  
  main();
  