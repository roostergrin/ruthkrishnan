export const formOpenHouse = () => {

  const formElem = document.getElementById('open-house-form');

  if (formElem) {
    const validateForm = () => {
      const errorMessages = Array.from(document.querySelectorAll('.form-survey__validation-message')),
            fullnameValidation = document.getElementById('fullname-validation'),
            emailValidation = document.getElementById('email-validation'),
            phoneValidation = document.getElementById('phone-validation');

      let errorFields;

      errorMessages.forEach(message => message.style.opacity = 0)
      errorFields = []
      if (!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullname.value) || formElem.fullname.value === '') {
        errorFields.push('fullname')
      }
      if (formElem.email.value === '') {
        errorFields.push('email')
      }
      if (!/^[0-9-+\s()]*$/.test(formElem.phone.value) || formElem.phone.value === '' || formElem.phone.value.length < 7) {
        errorFields.push('phone')
      }


      if (errorFields.length > 0) {
        console.log(errorFields)
        errorFields.forEach((err) => {
          switch (err) {
            case 'fullname':
              fullnameValidation.style.opacity = 1;
              break;
            case 'email':
              emailValidation.style.opacity = 1;
              break;
            case 'phone':
              phoneValidation.style.opacity = 1;
              break;
          }
        })
      } else {
        sendEmail();
      }
    }

    const sendEmail = () => {
      const interestElements = formElem.querySelectorAll('input[name="interest"]:checked');
      const interests = Array.from(interestElements).map(checkbox => checkbox.value);

      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-open-house', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        purchase: formElem.purchase.value,
        interest: interests, // Send as an array
        agent: formElem.agent.value,
        neighbor: formElem.neighbor.value,
        consultation: formElem.consultation.value,
        mailing: formElem.mailing.value,
        disclosure: formElem.disclosure.value,
        address: formElem.address.value,
        page: formElem.dataset.page
      })
      .then( (res) => {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.purchase.value = '';
        interestElements.forEach(checkbox => checkbox.checked = false);
        formElem.agent.value = '';
        formElem.neighbor.value = '';
        formElem.consultation.value = '';
        formElem.mailing.value = '';
        formElem.disclosure.value = '';
        formElem.address.value = '';
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 150);
      })
      .catch( (err) => { console.log(err) })
    }

    formElem.addEventListener('submit', (event) => {
      event.preventDefault();
      validateForm();
    })
  }

}
