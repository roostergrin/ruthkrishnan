export const formNewDev = () => {

  const formElem = document.getElementById('new-dev-form');

  if (formElem) {
    const sendEmail = () => {
      axios.post('http://localhost:8888/wp-json/rg-mail/v1/form-new-dev', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        property: formElem.property.value,
        address: formElem.address.value,
        message: formElem.message.value
      })
      .then( (res) => {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.property.value = '';
        formElem.property.value = '';
        formElem.message.value = '';
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
