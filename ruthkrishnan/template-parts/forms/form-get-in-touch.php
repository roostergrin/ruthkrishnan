<?php
/**
 * Displays Get In Touch form .
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="form-get-in-touch">
    <?php if ( have_rows('get_in_touch') ) :
      while ( have_rows('get_in_touch') ) : the_row();
      $image = get_sub_field('background_image'); 
      $title = get_sub_field('title'); 
      $text = get_sub_field('text');

      ?>

        <div class="form-get-in-touch__background" aria-hidden="true">
          <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'form-get-in-touch__background' ]); ?>
        </div>

        <div class="form-get-in-touch__container">
          <div class="form-get-in-touch__info">
            <h2 class="form-get-in-touch__title"><?php echo $title; ?></h2>
            <div class="form-get-in-touch__text"><?php echo $text; ?></div>
            <div class="form-get-in-touch__phone">
              <a href="<?php echo get_field('phone_link', 'options') ?>" class="form-get-in-touch__phone-link">
                <?php echo get_field('phone_number', 'options'); ?>
              </a>
            </div>
            <div class="form-get-in-touch__calbre">CalBRE# <?php echo get_field('calbre', 'options'); ?></div>
            <div class="form-get-in-touch__email">
              <a href="mailto:<?php echo get_field('email_address', 'options'); ?>" class="form-get-in-touch__email-link">
                <?php echo get_field('email_address', 'options'); ?>
              </a>
            </div>
            <div class="form-get-in-touch__address">
              <a href="<?php echo get_field('address_link', 'options'); ?>" class="form-get-in-touch__address-link">
                <?php echo get_field('address_text', 'options'); ?>
              </a>
            </div>
          </div>
          <div class="form-get-in-touch__form-column">
            <div class="form-get-in-touch__form-container">
              <form action="" class="form-get-in-touch__form" id="get-in-touch-form" data-page='<?php echo the_title(); ?>'>
                <div class="form-get-in-touch__form-group">
                  <label for="fullname" class="form-get-in-touch__label">First and Last Name</label>
                  <input type="text" name="fullname" id="fullname" placeholder="First and Last Name*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="fullname-validation">Please enter valid full name.</small>
                </div>

                <div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="email" class="form-get-in-touch__label">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="email-validation">Please enter a valid email address.</small>
                </div>

                <div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="phone" class="form-get-in-touch__label">Phone Number</label>
                  <input type="tel" name="phone" id="phone" placeholder="Phone Number*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="phone-validation">Please enter a valid phone number</small>
                </div>

                <div class="form-get-in-touch__form-group">
                  <label for="message" class="form-get-in-touch__label">Message</label>
                  <textarea name="message" id="message" placeholder="Message" rows="5" class="form-get-in-touch__textarea" aria-label="message edit text"></textarea>
                </div>
                <div class="g-recaptcha" data-sitekey="6Le3PoscAAAAAM0Nh_-v5lL7HLVZskI0pMyiO2fB"></div>

                <input type="submit" value="send" class="form-get-in-touch__submit">
              </form>
            </div>
          </div>
        </div>
      
      <?php endwhile;
    endif; ?>
      
</section>
