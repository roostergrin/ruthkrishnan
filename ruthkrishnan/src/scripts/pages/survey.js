import { formSurvey } from '../resources/form-survey'
import { formOpenHouse } from '../resources/form-open-house'
import { formAgentReferral } from '../resources/form-agent-referral'

document.addEventListener('DOMContentLoaded', function () {
  formSurvey();
  formOpenHouse();
  formAgentReferral();
});
