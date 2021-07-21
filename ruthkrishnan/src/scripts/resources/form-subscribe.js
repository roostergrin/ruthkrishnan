export const formSubscribe = () => {

  const formElem = document.getElementById('subscribe-form');

  if (formElem) {
    const sendEmail = () => {
      axios.post('https://dev.ruthkrishnan.com/wp-json/rg-mail/v1/form-subscribe', {
        email: formElem.email.value
      })
      .then( (res) => {
        formElem.email.value = '';
        setTimeout(() => {
          window.location.href = 'https://dev.ruthkrishnan.com/thank-you'
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
