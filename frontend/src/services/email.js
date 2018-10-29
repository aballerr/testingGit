const axios = require('axios');



class Email {

  static sendEmail(message) {
    const url = window.location.href.match('3001') !== null ? 'http://localhost:3000/email' : '/email';
    return axios.post(url, message);
  }
}

export default Email;