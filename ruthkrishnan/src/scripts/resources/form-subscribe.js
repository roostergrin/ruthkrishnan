export const formSubscribe = () => {

  const formElem = document.getElementById('subscribe-form');

  const sendEmail = () => {
    axios.post('http://localhost:8888/wp-json/rg-mail/v1/form-subscribe', {
      email: formElem.email.value
    })
    .then( (res) => {
      formElem.email.value = '';
      setTimeout(() => {
        window.location.href = 'http://localhost:8888/thank-you'
      }, 150);
    })
    .catch( (err) => { console.log(err) })
  }

  formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    sendEmail();
  })
}
