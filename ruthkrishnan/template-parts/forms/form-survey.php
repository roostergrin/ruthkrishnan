<?php
/**
 * Displays Get In Touch form .
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="form-off-market">
    <?php if ( have_rows('get_in_touch') ) :
      while ( have_rows('get_in_touch') ) : the_row();
      $image = get_sub_field('background_image');
      $title = get_sub_field('title');
      $text = get_sub_field('text');

      ?>

        <div class="form-off-market__background" aria-hidden="true">
          <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'form-off-market__background' ]); ?>
        </div>

        <div class="form-off-market__container">
          <div class="form-off-market__info">
            <h2 class="form-off-market__title"><?php echo $title; ?></h2>
            <div class="form-off-market__text"><?php echo $text; ?></div>
            <div class="form-off-market__phone">
              <a href="<?php echo get_field('phone_link', 'options') ?>" class="form-off-market__phone-link">
                <?php echo get_field('phone_number', 'options'); ?>
              </a>
            </div>
            <div class="form-off-market__calbre">CalBRE# <?php echo get_field('calbre', 'options'); ?></div>
            <div class="form-off-market__email">
              <a href="mailto:<?php echo get_field('email_address', 'options'); ?>" class="form-off-market__email-link">
                <?php echo get_field('email_address', 'options'); ?>
              </a>
            </div>
            <div class="form-off-market__address">
              <a href="<?php echo get_field('address_link', 'options'); ?>" class="form-off-market__address-link" aria-label="Go to <?php echo get_field('address_aria', 'options'); ?> on Google Maps, opens in new tab">
                <?php echo get_field('address_text', 'options'); ?>
              </a>
            </div>
          </div>
          <div class="form-off-market__form-column">
            <div class="form-off-market__form-container">
              <form action="" class="form-off-market__form" id="survey-form" data-page='<?php echo the_title(); ?>'>
                <div class="form-off-market__form-group">
                  <label for="fullname" class="form-off-market__label">First and Last Name</label>
                  <input type="text" name="fullname" id="fullname" placeholder="First and Last Name*" class="form-off-market__input">
                  <small class="form-off-market__validation-message" id="fullname-validation">Please enter valid full name.</small>
                </div>

                <div class="form-off-market__form-group form-off-market__form-group--half">
                  <label for="email" class="form-off-market__label">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email*" class="form-off-market__input">
                  <small class="form-off-market__validation-message" id="email-validation">Please enter a valid email address.</small>
                </div>

                <div class="form-off-market__form-group form-off-market__form-group--half">
                  <label for="phone" class="form-off-market__label">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number*" class="form-off-market__input">
                  <small class="form-off-market__validation-message" id="phone-validation">Please enter a valid phone number</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="buying" class="form-off-market__label">Are you interested in buying, selling or leasing?</label>
                  <select name="buying" id="buying" placeholder="Select one*" class="form-off-market__select">
                    <option value="" selected disabled hidden>Are you interested in buying, selling or leasing?</option>
                    <option value="buying">buying</option>
                    <option value="selling">selling</option>
                    <option value="renting">renting</option>
                  </select>
                  <small class="form-off-market__validation-message" id="buying-validation">Please choose an option.</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="timeframe" class="form-off-market__label">When would you like to purchase or sell? Timeframe: Give us the best idea of when you’d like to move into your home.</label>
                  <select name="timeframe" id="timeframe" placeholder="Select one *" class="form-off-market__select">
                    <option value="" selected disabled hidden>When would you like to purchase or sell?</option>
                    <option value="ASAP">ASAP</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1+ year">1+ year</option>
                  </select>
                  <small class="form-off-market__validation-message" id="timeframe-validation">Please choose an option</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="lenders" class="form-off-market__label">Are you reapproved with a lender? We have recommendations if you need them.</label>
                  <select name="lenders" id="lenders" placeholder="Select one *" class="form-off-market__select">
                    <option value="" selected disabled hidden>Are you reapproved with a lender?</option>
                    <option value="No - Please connect me">No - Please connect me</option>
                    <option value="Yes - Pre Approval in hand">Yes - Pre Approval in hand</option>
                    <option value="Cash Buyer">Cash Buyer</option>
                  </select>
                  <small class="form-off-market__validation-message" id="lenders-validation">Please choose an option.</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="budget" class="form-off-market__label">How much are you hoping to spend?</label>
                  <select name="budget" id="budget" placeholder="Select one *" class="form-off-market__select">
                  <option value="" selected disabled hidden>How much are you hoping to spend?</option>
                    <option value="$500K-$1M">$500K-$1M</option>
                    <option value="$1M-$2M">$1M-$2M</option>
                    <option value="$2M-$3M">$2M-$3M</option>
                    <option value="$$3M-$4M">$3M-$4M</option>
                    <option value="$5M-$10M">$5M-$10M</option>
                    <option value="$10M+">$10M+</option>
                  </select>
                  <small class="form-off-market__validation-message" id="budget-validation">Please choose an option.</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="location" class="form-off-market__label">What areas are you most interested in? Location: Please list any and all areas you think you’d be interested in learning more about. You don’t have to be certain.</label>
                  <textarea name="location" id="location" rows="5" class="form-off-market__textarea" placeholder="Please list any and all areas you think you’d be interested in learning more about." aria-label="message edit text"></textarea>
                </div>
                <div class="g-recaptcha" data-sitekey="6Le3PoscAAAAAM0Nh_-v5lL7HLVZskI0pMyiO2fB"></div>

                <input type="submit" value="send" class="form-off-market__submit">
              </form>
            </div>
          </div>
        </div>

      <?php endwhile;
    endif; ?>

</section>
