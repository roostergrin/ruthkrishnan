/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/resources/form-agent-referral.js":
/*!******************************************************!*\
  !*** ./src/scripts/resources/form-agent-referral.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formAgentReferral": () => (/* binding */ formAgentReferral)
/* harmony export */ });
var formAgentReferral = function formAgentReferral() {
  var formElem = document.getElementById('agent-referral-form');
  var buyerSellerOption = document.getElementById("buyer-seller-option");
  var buyerForm = document.getElementById("buyer-form");
  var sellerForm = document.getElementById("seller-form");
  var form = '';

  buyerSellerOption.onchange = function (event) {
    var selectedOption = buyerSellerOption.options[buyerSellerOption.selectedIndex].text;

    if (selectedOption === "Buyer") {
      form = 'Buyer';
      buyerForm.style.display = "unset";
      sellerForm.style.display = "none";
    }

    if (selectedOption === "Seller") {
      form = 'Seller';
      sellerForm.style.display = "unset";
      buyerForm.style.display = "none";
    }
  };

  if (formElem) {
    var validateForm = function validateForm() {
      var errorMessages = Array.from(document.querySelectorAll('.form-survey__validation-message')),
          fullnameValidation = document.getElementById('fullnameBuy-validation'),
          emailBuyValidation = document.getElementById('emailBuy-validation'),
          emailSellValidation = document.getElementById('sellEmail-validation'),
          phoneValidation = document.getElementById('sellPhone-validation');
      var errorFields;
      errorMessages.forEach(function (message) {
        return message.style.opacity = 0;
      });
      errorFields = [];

      if ((!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullnameBuy.value) || formElem.fullnameBuy.value === '') && form === "Buyer") {
        errorFields.push('fullnameBuy');
      }

      if (formElem.emailBuy.value === '' && form === "Buyer") {
        errorFields.push('emailBuy');
      }

      if (formElem.sellEmail.value === '' && form === "Seller") {
        errorFields.push('sellEmail');
      }

      if ((!/^[0-9-+\s()]*$/.test(formElem.sellPhone.value) || formElem.sellPhone.value === '' || formElem.sellPhone.value.length < 7) && form === "Seller") {
        errorFields.push('sellPhone');
      }

      if (errorFields.length > 0) {
        console.log(errorFields);

        if (form === "Buyer") {
          errorFields.forEach(function (err) {
            switch (err) {
              case 'fullnameBuy':
                fullnameValidation.style.opacity = 1;
                break;

              case 'emailBuy':
                emailBuyValidation.style.opacity = 1;
                break;
            }
          });
        }

        if (form === "Seller") {
          errorFields.forEach(function (err) {
            switch (err) {
              case 'sellEmail':
                emailSellValidation.style.opacity = 1;
                break;

              case 'sellPhone':
                phoneValidation.style.opacity = 1;
                break;
            }
          });
        }
      } else {
        sendEmail();
      }
    };

    var sendEmail = function sendEmail() {
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
      }).then(function (res) {
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
        setTimeout(function () {
          window.location.href = '/thank-you';
        }, 150);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/form-open-house.js":
/*!**************************************************!*\
  !*** ./src/scripts/resources/form-open-house.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formOpenHouse": () => (/* binding */ formOpenHouse)
/* harmony export */ });
var formOpenHouse = function formOpenHouse() {
  var formElem = document.getElementById('open-house-form');

  if (formElem) {
    var validateForm = function validateForm() {
      var errorMessages = Array.from(document.querySelectorAll('.form-survey__validation-message')),
          fullnameValidation = document.getElementById('fullname-validation'),
          emailValidation = document.getElementById('email-validation'),
          phoneValidation = document.getElementById('phone-validation');
      var errorFields;
      errorMessages.forEach(function (message) {
        return message.style.opacity = 0;
      });
      errorFields = [];

      if (!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullname.value) || formElem.fullname.value === '') {
        errorFields.push('fullname');
      }

      if (formElem.email.value === '') {
        errorFields.push('email');
      }

      if (!/^[0-9-+\s()]*$/.test(formElem.phone.value) || formElem.phone.value === '' || formElem.phone.value.length < 7) {
        errorFields.push('phone');
      }

      if (errorFields.length > 0) {
        console.log(errorFields);
        errorFields.forEach(function (err) {
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
        });
      } else {
        sendEmail();
      }
    };

    var sendEmail = function sendEmail() {
      var interestElements = formElem.querySelectorAll('input[name="interest"]:checked');
      var interests = Array.from(interestElements).map(function (checkbox) {
        return checkbox.value;
      });
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-open-house', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        purchase: formElem.purchase.value,
        interest: interests,
        // Send as an array
        agent: formElem.agent.value,
        neighbor: formElem.neighbor.value,
        consultation: formElem.consultation.value,
        mailing: formElem.mailing.value,
        disclosure: formElem.disclosure.value,
        address: formElem.address.value,
        page: formElem.dataset.page
      }).then(function (res) {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.purchase.value = '';
        interestElements.forEach(function (checkbox) {
          return checkbox.checked = false;
        });
        formElem.agent.value = '';
        formElem.neighbor.value = '';
        formElem.consultation.value = '';
        formElem.mailing.value = '';
        formElem.disclosure.value = '';
        formElem.address.value = '';
        setTimeout(function () {
          window.location.href = '/thank-you';
        }, 150);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  }
};

/***/ }),

/***/ "./src/scripts/resources/form-survey.js":
/*!**********************************************!*\
  !*** ./src/scripts/resources/form-survey.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSurvey": () => (/* binding */ formSurvey)
/* harmony export */ });
var formSurvey = function formSurvey() {
  var formElem = document.getElementById('survey-form');

  if (formElem) {
    var validateForm = function validateForm() {
      var errorMessages = Array.from(document.querySelectorAll('.form-survey__validation-message')),
          fullnameValidation = document.getElementById('fullname-validation'),
          emailValidation = document.getElementById('email-validation'),
          phoneValidation = document.getElementById('phone-validation');
      var errorFields;
      errorMessages.forEach(function (message) {
        return message.style.opacity = 0;
      });
      errorFields = [];

      if (!/^(?![\s.]+$)[a-zA-Z\s.]*$/.test(formElem.fullname.value) || formElem.fullname.value === '') {
        errorFields.push('fullname');
      }

      if (formElem.email.value === '') {
        errorFields.push('email');
      }

      if (!/^[0-9-+\s()]*$/.test(formElem.phone.value) || formElem.phone.value === '' || formElem.phone.value.length < 7) {
        errorFields.push('phone');
      }

      if (errorFields.length > 0) {
        console.log(errorFields);
        errorFields.forEach(function (err) {
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
        });
      } else {
        sendEmail();
      }
    };

    var sendEmail = function sendEmail() {
      axios.post('https://ruthkrishnan.com/wp-json/rg-mail/v1/form-survey', {
        fullname: formElem.fullname.value,
        email: formElem.email.value,
        phone: formElem.phone.value,
        purchase: formElem.purchase.value,
        timeframe: formElem.timeframe.value,
        // lender: formElem.lender.value,
        budget: formElem.budget.value,
        location: formElem.location.value,
        misc: formElem.misc.value,
        address: formElem.address.value,
        page: formElem.dataset.page
      }).then(function (res) {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.purchase.value = '';
        formElem.timeframe.value = ''; // formElem.lender.value = '';

        formElem.budget.value = '';
        formElem.location.value = '';
        formElem.misc.value = '';
        formElem.address.value = '';
        setTimeout(function () {
          window.location.href = '/thank-you';
        }, 150);
      })["catch"](function (err) {
        console.log(err);
      });
    };

    formElem.addEventListener('submit', function (event) {
      event.preventDefault();
      validateForm();
    });
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./src/scripts/pages/survey.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_form_survey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resources/form-survey */ "./src/scripts/resources/form-survey.js");
/* harmony import */ var _resources_form_open_house__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../resources/form-open-house */ "./src/scripts/resources/form-open-house.js");
/* harmony import */ var _resources_form_agent_referral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/form-agent-referral */ "./src/scripts/resources/form-agent-referral.js");



document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_form_survey__WEBPACK_IMPORTED_MODULE_0__.formSurvey)();
  (0,_resources_form_open_house__WEBPACK_IMPORTED_MODULE_1__.formOpenHouse)();
  (0,_resources_form_agent_referral__WEBPACK_IMPORTED_MODULE_2__.formAgentReferral)();
});
})();

/******/ })()
;