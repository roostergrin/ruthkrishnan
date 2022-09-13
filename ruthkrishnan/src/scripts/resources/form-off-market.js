export const formOffMarket = () => {

  const formElem = document.getElementById('off-market-form');

  if (formElem) {
    const validateForm = () => {
      const errorMessages = Array.from(document.querySelectorAll('.form-off-market__validation-message')),
            fullnameValidation = document.getElementById('fullname-validation'),
            emailValidation = document.getElementById('email-validation'),
            phoneValidation = document.getElementById('phone-validation'),
            budgetValidation = document.getElementById('budget-validation'),
            neighborhoodsValidation = document.getElementById('neighborhoods-validation'),
            badsBathsValidation = document.getElementById('beds_baths-validation');

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
      if (formElem.budget.value === '') {
        errorFields.push('email')
      }
      if (formElem.neighborhoods.value === '') {
        errorFields.push('email')
      }
      if (formElem.beds_baths.value === '') {
        errorFields.push('email')
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
            case 'budget':
              budgetValidation.style.opacity = 1;
              break;
            case 'neighborhoods':
              neighborhoodsValidation.style.opacity = 1;
              break;
            case 'beds_baths':
              badsBathsValidation.style.opacity = 1;
              break;
          }
        })
      } else {
        sendEmail();
      }
    }

    const sendEmail = () => {
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-off-market', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        budget: formElem.budget.value,
        neighborhoods: formElem.neighborhoods.value,
        beds_baths: formElem.beds_baths.value,
        agent: formElem.agent.value,
        message: formElem.message.value,
        page: formElem.dataset.page
      })
      .then( (res) => {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.budget.value = '';
        formElem.neighborhoods.value = '';
        formElem.beds_baths.value = 'yes';
        formElem.agent.value = '';
        formElem.message.value = '';
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
