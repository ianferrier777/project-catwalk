const axios = require('axios');

const token = process.env.TOKEN;
const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

module.exports.getProducts = () => {
  const options = {
    url: '/products',
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

module.exports.getProductById = (id) => {
  const options = {
    url: `/products/${id}`,
    method: 'get',
    baseURL,
    headers: {
      Authorization: token,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

// module.exports.getQuestionList = (id) => {
//   const options = {
//     url: `qa/questions?product_id=${id}`,
//     method: 'get',
//     baseURL,
//     headers: {
//       Authorization: token,
//     },
//   };
// }
