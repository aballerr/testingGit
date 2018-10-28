const axios = require('axios');



class Email {

  constructor() {
     
  }


  static sendEmail(message) {
    const url = window.location.href.match('3001') !== null ? 'http://localhost:3000/email' : '/email';

    axios.post(url, message)
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}

export default Email;