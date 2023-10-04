import { navigation } from './resources/navigation'
import { testimonials } from './resources/testimonials'
// import { formSubscribe } from './resources/form-subscribe'
import { formGetInTouch } from './resources/form-get-in-touch'
import { formSurvey } from './resources/form-survey'

document.addEventListener('DOMContentLoaded', function () {
  navigation();
  testimonials();
  // formSubscribe();
  formGetInTouch();
  formSurvey();
});
