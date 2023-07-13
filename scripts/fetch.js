const getUserData = () => {
  return fetch(`http://127.0.0.1:8000/api/get-user-constellations/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,
    },
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при получении списка созвездий');
      }
    })
    .then(function(data) {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.error('Ошибка:', error);
    });
}


const getConstellationsList = () => {
  return fetch('http://127.0.0.1:8000/api/list', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,
    },
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при получении списка созвездий');
      }
    })
    .then(function(data) {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.error('Ошибка:', error);
    });
}


const addUserConstellation = (userId, constellationId) => {
  return fetch('http://127.0.0.1:8000/api/add/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authToken,
    },
    body: JSON.stringify({
      user_id: userId,
      constellation_id: constellationId,
    }),
  })
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при добавлении записи');
      }
    })
    .then(function(data) {
      console.log(data);
      return data;
    })
    .catch(function(error) {
      console.error('Ошибка:', error);
    });
};