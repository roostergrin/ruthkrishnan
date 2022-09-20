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
              <form action="" class="form-off-market__form" id="off-market-form" data-page='<?php echo the_title(); ?>'>
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
                  <label for="budget" class="form-off-market__label">What is your budget?</label>
                  <input type="text" name="budget" id="budget" placeholder="What is your budget?*" class="form-off-market__input">
                  <small class="form-off-market__validation-message" id="budget-validation">Please enter valid budget.</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="neighborhoods" class="form-off-market__label">Which neighborhoods do you prefer?</label>
                  <textarea name="neighborhoods" id="neighborhoods" placeholder="Which neighborhoods do you prefer?*" rows="5" class="form-off-market__textarea" aria-label="message edit text"></textarea>
                  <small class="form-off-market__validation-message" id="neighborhoods-validation">Please enter a valid neighborhood</small>
                </div>

                <div class="form-off-market__form-group">
                  <label for="beds_baths" class="form-off-market__label">How many beds and baths?</label>
                  <input type="text" name="beds_baths" id="beds_baths" placeholder="How many beds and baths?*" class="form-off-market__input">
                  <small class="form-off-market__validation-message" id="beds_baths-validation">Please enter valid beds and baths.</small>
                </div>

                <div class="form-off-market__form-group form-off-market__form-group--radio">
                  <legend class="form-off-market__legend">Would you like to schedule a call with an agent?</legend>
                  <!-- <input type="text" name="agent" id="agent" placeholder="Would you like to schedule a call with an agent?*" class="form-off-market__input"> -->
                  <div class="form-off-market__radio">
                    <input type="radio" name="agent" id="agent_yes" class="form-off-market__radio" value="yes" checked>
                    <label for="agent_yes" class="form-off-market__label--radio">yes</label>
                    <input type="radio" name="agent" id="agent_no" class="form-off-market__radio" value="no">
                    <label for="agent_no" class="form-off-market__label--radio">no</label>
                  </div>
                </div>

                <div class="form-off-market__form-group">
                  <label for="message" class="form-off-market__label">Message</label>
                  <textarea name="message" id="message" placeholder="Message" rows="5" class="form-off-market__textarea" aria-label="message edit text"></textarea>
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
