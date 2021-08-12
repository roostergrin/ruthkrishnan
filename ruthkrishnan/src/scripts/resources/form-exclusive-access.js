export const formExclusiveAccess = () => {

  const formElem = document.getElementById('exclusive-access-form');

  if (formElem) {
    const sendEmail = () => {
      console.log(formElem.email.value)
      axios.post('https://dev.ruthkrishnan.com/wp-json/rg-mail/v1/exclusive-access', {
        email: formElem.email.value
      })
      .then( (res) => {
        formElem.email.value = '';
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
