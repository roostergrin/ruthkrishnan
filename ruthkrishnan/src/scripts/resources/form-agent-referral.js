export const formAgentReferral = () => {

  const formElem = document.getElementById('agent-referral-form');


  const buyerSellerOption = document.getElementById("buyer-seller-option");
  const buyerForm = document.getElementById("buyer-form");
  const sellerForm = document.getElementById("seller-form");
  var form = '';
  buyerSellerOption.onchange = (event) => {
    var selectedOption = buyerSellerOption.options[buyerSellerOption.selectedIndex].text;
    if(selectedOption === "Buyer")
    {
      form = 'Buyer';
      buyerForm.style.display = "unset";
      sellerForm.style.display = "none";
    }
    if(selectedOption === "Seller")
    {
      form = 'Seller';
      sellerForm.style.display = "unset";
      buyerForm.style.display = "none";
    }
 }

  if (formElem) {
    const validateForm = () => {
      const errorMessages = Array.from(document.querySelectorAll('.form-survey__validation-message')),
            fullnameValidation = document.getElementById('fullnameBuy-validation'),
            emailBuyValidation = document.getElementById('emailBuy-validation'),
            emailSellValidation = document.getElementById('sellEmail-validation'),
            phoneValidation = document.getElementById('sellPhone-validation');

      let errorFields;

      errorMessages.forEach(message => message.style.opacity = 0)
      errorFields = []
      if ((!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullnameBuy.value) || formElem.fullnameBuy.value === '') && form === "Buyer") {
        errorFields.push('fullnameBuy')
      }
      if (formElem.emailBuy.value === '' && form === "Buyer") {
        errorFields.push('emailBuy')
      }
      if (formElem.sellEmail.value === '' && form === "Seller") {
        errorFields.push('sellEmail')
      }
      if ((!/^[0-9-+\s()]*$/.test(formElem.sellPhone.value) || formElem.sellPhone.value === '' || formElem.sellPhone.value.length < 7) && form === "Seller") {
        errorFields.push('sellPhone')
      }


      if (errorFields.length > 0) {
        console.log(errorFields)
        if (form === "Buyer"){
          errorFields.forEach((err) => {
            switch (err) {
              case 'fullnameBuy':
                fullnameValidation.style.opacity = 1;
                break;
              case 'emailBuy':
                emailBuyValidation.style.opacity = 1;
                break;
            }
          })
        }
        if (form === "Seller"){
          errorFields.forEach((err) => {
            switch (err) {
              case 'sellEmail':
                emailSellValidation.style.opacity = 1;
                break;
              case 'sellPhone':
                phoneValidation.style.opacity = 1;
                break;
            }
          })
        }
      } else {
        sendEmail();
      }
    }

    const sendEmail = () => {
      // For local, change this to http://localhost:8888/wp-json/rg-mail/v1/form-agent-referral
      // For live, change this to https://ruthkrishnan.com/wp-json/rg-mail/v1/form-agent-referral
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-agent-referral', {
        homestyleBuy: formElem.homestyleBuy.value,
        neighborhoodsBuy: formElem.neighborhoodsBuy.value,
        mortgageBuy: formElem.mortgageBuy.value,
        timelineBuy: formElem.timelineBuy.value,
        fullnameBuy: formElem.fullnameBuy.value,
        emailBuy: formElem.emailBuy.value,
        timelineSell: formElem.timelineSell.value,
        alsoBuy: formElem.alsoBuy.value,
        sellAddress: formElem.sellAddress.value,
        sellEmail: formElem.sellEmail.value,
        sellPhone: formElem.sellPhone.value,

        page: formElem.dataset.page,
        formtype: form
      })
      .then( (res) => {
        formElem.homestyleBuy.value = '';
        formElem.neighborhoodsBuy.value = '';
        formElem.mortgageBuy.value = '';
        formElem.timelineBuy.value = '';
        formElem.fullnameBuy.value = '';
        formElem.emailBuy.value = '';
        formElem.timelineSell.value = '';
        formElem.alsoBuy.value = '';
        formElem.sellAddress.value = '';
        formElem.sellEmail.value = '';
        formElem.sellPhone.value = '';

        form = '';
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
