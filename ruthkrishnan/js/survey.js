/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
      axios.post('https://dev.ruthkrishnan.com/wp-json/rg-mail/v1/form-open-house', {
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
        lender: formElem.lender.value,
        budget: formElem.budget.value,
        location: formElem.location.value,
        misc: formElem.misc.value,
        page: formElem.dataset.page
      }).then(function (res) {
        formElem.fullname.value = '';
        formElem.email.value = '';
        formElem.phone.value = '';
        formElem.purchase.value = '';
        formElem.timeframe.value = '';
        formElem.lender.value = '';
        formElem.budget.value = '';
        formElem.location.value = '';
        formElem.misc.value = '';
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


document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_form_survey__WEBPACK_IMPORTED_MODULE_0__.formSurvey)();
  (0,_resources_form_open_house__WEBPACK_IMPORTED_MODULE_1__.formOpenHouse)();
});
})();

/******/ })()
;