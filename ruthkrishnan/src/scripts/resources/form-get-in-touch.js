export const formGetInTouch = () => {

  const formElem = document.getElementById('get-in-touch-form');

  const sendEmail = () => {
    axios.post('http://localhost:8888/wp-json/rg-mail/v1/form-get-in-touch', {
      fullname: formElem.fullname.value,
      email: formElem.email.value,
      phone: formElem.phone.value,
      message: formElem.message.value
    })
    .then( (res) => {
      formElem.fullname.value = '';
      formElem.email.value = '';
      formElem.phone.value = '';
      formElem.message.value = '';
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
