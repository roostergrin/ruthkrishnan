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
              <form action="" class="form-survey__form" id="survey-form" data-page='<?php echo the_title(); ?>'>
                <div class="form-survey__form-group">
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
                  <legend class="form-survey__legend">Are you interested in buying or selling?</legend>
                  <!-- <input type="text" name="agent" id="agent" placeholder="Would you like to schedule a call with an agent?*" class="form-survey__input"> -->
                  <div class="form-survey__radio">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="purchase" id="buying" value="buying" checked>
                      <label for="buying" class="form-survey__label--radio">buying</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="purchase" id="selling" value="selling">
                      <label for="selling" class="form-survey__label--radio">selling</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="purchase" id="both" value="both">
                      <label for="both" class="form-survey__label--radio">both</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">When would you like to purchase or sell? Timeframe: Give us the best idea of when you’d like to move.</legend>
                  <!-- <input type="text" name="agent" id="agent" placeholder="Would you like to schedule a call with an agent?*" class="form-survey__input"> -->
                  <div class="form-survey__radio--grid-2">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="timeframe" id="asap" value="ASAP" checked>
                      <label for="asap" class="form-survey__label--radio">ASAP</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="timeframe" id="3-6_months" value="3-6 months">
                      <label for="3-6_months" class="form-survey__label--radio">3-6 months</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="timeframe" id="6-12_months" value="6-12 months">
                      <label for="6-12_months" class="form-survey__label--radio">6-12 months</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="timeframe" id="1+_year" value="1+ year">
                      <label for="1+_year" class="form-survey__label--radio">1+ year</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group form-survey__form-group--radio">
                  <legend class="form-survey__legend">If you are buying a home how much are you hoping to spend?</legend>
                  <!-- <input type="text" name="agent" id="agent" placeholder="Would you like to schedule a call with an agent?*" class="form-survey__input"> -->
                  <div class="form-survey__radio--grid">
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="500K" value="$500K-$1M" checked>
                      <label for="500K" class="form-survey__label--radio">$500K-$1M</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="1M" value="$1M-$2M">
                      <label for="1M" class="form-survey__label--radio">$1M-$2M</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="2M" value="$2M-$3M">
                      <label for="2M" class="form-survey__label--radio">$2M-$3M</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="3M" value="$3M-$4M">
                      <label for="3M" class="form-survey__label--radio">$3M-$4M</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="5M" value="$5M-$10M">
                      <label for="5M" class="form-survey__label--radio">$5M-$10M</label>
                    </div>
                    <div class="form-survey__radio--group">
                      <input type="radio" name="budget" id="10M" value="$10M+">
                      <label for="10M" class="form-survey__label--radio">$10M+</label>
                    </div>
                  </div>
                </div>

                <div class="form-survey__form-group">
                  <legend class="form-survey__legend">What areas are you most interested in? Location: Please list any and all areas you think you’d be interested in learning more about. You don’t have to be certain.</legend>
                  <textarea name="location" id="location" rows="5" class="form-survey__textarea" placeholder="Please list here" aria-label="List preferred locations edit text"></textarea>
                </div>

                <div class="form-survey__form-group">
                  <legend class="form-survey__legend">If you are a selling a home please provide your address.</legend>
                  <textarea name="address" id="address" rows="5" class="form-survey__textarea" placeholder="Please provide address here" aria-label="Provide address edit text"></textarea>
                </div>

                <div class="form-survey__form-group">
                  <legend class="form-survey__legend">Is there anything else you'd like to tell us?</legend>
                  <textarea name="misc" id="misc" rows="5" class="form-survey__textarea" placeholder="Personal or otherwise" aria-label="Any other information edit text"></textarea>
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
