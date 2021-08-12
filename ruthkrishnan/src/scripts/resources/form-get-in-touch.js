export const formGetInTouch = () => {

  const formElem = document.getElementById('get-in-touch-form');

  if (formElem) {
    const sendEmail = () => {
      axios.post('https://dev.ruthkrishnan.com/wp-json/rg-mail/v1/form-get-in-touch', {
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
          window.location.href = '/thank-you'
        }, 150);
      })
      .catch( (err) => { console.log(err) })
    }
  
    formElem.addEventListener('submit', (event) => {
      event.preventDefault();
      sendEmail();
    })
  }
  
}
