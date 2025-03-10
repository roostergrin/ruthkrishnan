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
              <form action="" class="form-survey__form" id="agent-referral-form" data-page='<?php echo the_title(); ?>'>
                <div class="form-survey__form-group">
                  <div class="form-survey__dropdown">
                    <p class="form-survey__dropdown-label">Please select an option</p>
                    <div>
                      <select name="buyer-seller" id="buyer-seller-option">
                        <option value="select" disabled selected>Buyer or Seller?</option>
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- START BUYER FORM -->
                <div id="buyer-form" class="form-survey__buyer">
                  <div class="form-survey__form-group">
                    <label for="homestyleBuy" >Please enter your desired number of bedrooms, bathrooms, and approximate square footage.</label>
                    <input type="text" name="homestyleBuy" id="homestyleBuy" placeholder="What kind of home are you looking to buy?" class="form-survey__input">
                  </div>

                  <div class="form-survey__form-group">
                    <label for="neighborhoodsBuy" >Please enter the cities and/or neighborhoods where you would like to purchase a home.</label>
                    <input type="text" name="neighborhoodsBuy" id="neighborhoodsBuy" placeholder="Where are you looking to buy?" class="form-survey__input">
                  </div>

                  <div class="form-survey__form-group form-survey__form-group--radio">
                    <legend class="form-survey__legend">Have you been pre-approved for a mortgage yet?</legend>
                    <div class="form-survey__radio">
                      <div class="form-survey__radio--group">
                        <input type="radio" name="mortgageBuy" id="yesMortgage" value="yes" checked>
                        <label for="yesMortgage" class="form-survey__label--radio">yes</label>
                      </div>
                      <div class="form-survey__radio--group">
                        <input type="radio" name="mortgageBuy" id="noMortgage" value="no">
                        <label for="noMortgage" class="form-survey__label--radio">no</label>
                      </div>
                    </div>
                  </div>


                  <div class="form-survey__form-group form-survey__form-group--radio">
                    <legend class="form-survey__legend">How soon are you looking to buy?</legend>
                    <div class="form-survey__radio">
                      <div class="form-survey__radio--group">
                        <input type="radio" name="timelineBuy" id="zero" value="0-3 mos" checked>
                        <label for="zero" class="form-survey__label--radio">0-3 mos</label>
                      </div>
                      <div class="form-survey__radio--group">
                        <input type="radio" name="timelineBuy" id="three" value="3-6 mos">
                        <label for="three" class="form-survey__label--radio">3-6 mos</label>
                      </div>
                      <div class="form-survey__radio--group">
                        <input type="radio" name="timelineBuy" id="six" value="6-12 mos">
                        <label for="six" class="form-survey__label--radio">6-12 mos</label>
                      </div>
                      <div class="form-survey__radio--group">
                        <input type="radio" name="timelineBuy" id="over" value="over 1 year">
                        <label for="over" class="form-survey__label--radio">over 1 year</label>
                      </div>
                    </div>
                  </div>

                  <div class="form-survey__form-group">
                    <label for="fullnameBuy">What is your full name?</label>
                    <input type="text" name="fullnameBuy" id="fullnameBuy" placeholder="First and Last Name" class="form-survey__input">
                    <small class="form-survey__validation-message" id="fullnameBuy-validation">Please enter valid full name.</small>
                  </div>

                  <div class="form-survey__form-group">
                    <label for="emailBuy">What is your email?</label>
                    <input type="email" name="emailBuy" id="emailBuy" placeholder="Email" class="form-survey__input">
                    <small class="form-survey__validation-message" id="emailBuy-validation">Please enter a valid email address.</small>
                  </div>


                    <div class="g-recaptcha" data-sitekey="6Le3PoscAAAAAM0Nh_-v5lL7HLVZskI0pMyiO2fB"></div>
                  <input type="submit" value="send" class="form-survey__submit" style="margin-left: -1rem;">
                </div>
                <!-- END BUYER FORM -->

                <!-- START SELLER FORM -->
                <div id="seller-form" class="form-survey__seller">
                  <div class="form-survey__form-group">
                    <label for="timelineSell" class="form-survey__label">How soon are you planning to sell?</label>
                    <input type="text" name="timelineSell" id="timelineSell" placeholder="How soon are you planning to sell?" class="form-survey__input">
                  </div>

                  <div class="form-survey__form-group form-survey__form-group--radio">
                    <legend class="form-survey__legend">Are you also looking to buy a home?</legend>
                    <div class="form-survey__radio">
                      <div class="form-survey__radio--group">
                        <input type="radio" name="alsoBuy" id="yes_also_buy" value="yes" checked>
                        <label for="yes_also_buy" class="form-survey__label--radio">yes</label>
                      </div>
                      <div class="form-survey__radio--group">
                        <input type="radio" name="alsoBuy" id="no_also_buy" value="no">
                        <label for="no_also_buy" class="form-survey__label--radio">no</label>
                      </div>
                    </div>
                  </div>

                  <div class="form-survey__form-group">
                    <label for="sellAddress" class="form-survey__label">Enter your name and property address</label>
                    <input type="text" name="sellAddress" id="sellAddress" placeholder="Enter your name and property address" class="form-survey__input">
                    <small class="form-survey__validation-message" id="homestyle">Please enter valid full name.</small>
                  </div>

                  <div class="form-survey__form-group">
                    <label for="sellEmail" class="form-survey__label">Email</label>
                    <input type="email" name="sellEmail" id="sellEmail" placeholder="Email" class="form-survey__input">
                    <small class="form-survey__validation-message" id="sellEmail-validation">Please enter a valid email address.</small>
                  </div>

                  <div class="form-survey__form-group">
                    <label for="sellPhone" class="form-survey__label">Phone Number</label>
                    <input type="tel" name="sellPhone" id="sellPhone" placeholder="Phone Number" class="form-survey__input">
                    <small class="form-survey__validation-message" id="sellPhone-validation">Please enter a valid phone number</small>
                  </div>

                  <div class="g-recaptcha" data-sitekey="6Le3PoscAAAAAM0Nh_-v5lL7HLVZskI0pMyiO2fB"></div>
                  <input type="submit" value="send" class="form-survey__submit" style="margin-left: -1rem;">
                </div>
                <!-- END SELLER FORM -->

              </form>
            </div>
          </div>
        </div>

      <?php endwhile;
    endif; ?>

</section>
