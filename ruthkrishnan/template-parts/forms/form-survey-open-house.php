<?php
/**
 * Displays Get In Touch form .
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="form-survey">
    <?php if ( have_rows('get_in_touch') ) :
      while ( have_rows('get_in_touch') ) : the_row();
      $image = get_sub_field('background_image');
      $title = get_sub_field('title');
      $text = get_sub_field('text');

      ?>

        <div class="form-survey__background" aria-hidden="true">
          <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'form-survey__background' ]); ?>
        </div>

        <div class="form-survey__container">
          <div class="form-survey__form-column">
            <div class="form-survey__form-container">
              <form action="" class="form-survey__form" id="open-house-form" data-page='<?php echo the_title(); ?>'>
                <div class="form-survey__form-group">
                  <!-- TEST TEST -->
                  <label for="fullname" class="form-survey__label">First and Last Name</label>
                  <input type="text" name="fullname" id="fullname" placeholder="First and Last Name*" class="form-survey__input">
                  <small class="form-survey__validation-message" id="fullname-validation">Please enter valid full name.</small>
                </div>

                <div class="form-survey__form-group form-survey__form-group--half">
                  <label for="email" class="form-survey__label">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email*" class="form-survey__input">
                  <small class="form-survey__validation-message" id="email-validation">Please enter a valid email address.</small>
                </div>

                <div class="form-survey__form-group form-survey__form-group--half">
                  <label for="phone" class="form-survey__label">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number*" class="form-survey__input">
                  <small class="form-survey__validation-message" id="phone-validation">Please enter a valid phone number</small>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Which applies to you?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="purchase" id="first_time_buyer" value="first time buyer" checked>
                      <label for="first_time_buyer" class="form-survey__label--radio">first time buyer</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="purchase" id="homeowner" value="homeowner">
                      <label for="homeowner" class="form-survey__label--radio">homeowner</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Interested in:</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="checkbox" name="interest" id="buying_home" value="buying home">
                      <label for="buying_home" class="form-survey__label--radio">buying home</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="checkbox" name="interest" id="selling_home" value="selling home">
                      <label for="selling_home" class="form-survey__label--radio">selling home</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="checkbox" name="interest" id="neither" value="neither">
                      <label for="neither" class="form-survey__label--radio">neither</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Are you working with an Agent?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="agent" id="yes_lender" value="yes">
                      <label for="yes_lender" class="form-survey__label--radio">yes</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="agent" id="no_lender" value="no" checked>
                      <label for="no_lender" class="form-survey__label--radio">no</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Are you a neighbor?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="neighbor" id="yes_neighbor" value="yes" checked>
                      <label for="yes_neighbor" class="form-survey__label--radio">yes</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="neighbor" id="no_neighbor" value="no">
                      <label for="no_neighbor" class="form-survey__label--radio">no</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Are you interested in a Buyer/Seller consultation?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="consultation" id="yes_seller" value="yes seller consultation" checked>
                      <label for="yes_seller" class="form-survey__label--radio">yes seller consultation</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="consultation" id="yes_buyer" value="yes buyer consultation">
                      <label for="yes_buyer" class="form-survey__label--radio">yes buyer consultation</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="consultation" id="neither" value="neither">
                      <label for="neither" class="form-survey__label--radio">neither</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">May we add you to our mailing list?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="mailing" id="yes_mailing" value="yes" checked>
                      <label for="yes_mailing" class="form-survey__label--radio">yes</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="mailing" id="no_mailing" value="no">
                      <label for="no_mailing" class="form-survey__label--radio">no</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">Would you like disclosures for this property?</legend>
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="disclosure" id="yes_disclosures" value="yes" checked>
                      <label for="yes_disclosures" class="form-survey__label--radio">yes</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="disclosure" id="no_disclosures" value="no">
                      <label for="no_disclosures" class="form-survey__label--radio">no</label>
                    </div>
                  </div>
                </div>

                <div class="g-recaptcha" data-sitekey="6Le3PoscAAAAAM0Nh_-v5lL7HLVZskI0pMyiO2fB"></div>
                <input type="submit" value="send" class="form-survey__submit">
              </form>
            </div>
          </div>
        </div>

      <?php endwhile;
    endif; ?>

</section>
