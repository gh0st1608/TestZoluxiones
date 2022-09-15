const axios = require('axios').default;

const getPeopleByIdApi = function (id) {
  return axios.get(`https://swapi.py4e.com/api/people/:${id}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}
module.export = getPeopleByIdApi