<?php
/**
 * Displays New Developments form.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="form-new-dev">
  <?php 
    $image = 405; 
    $title = 'Schedule a showing'; 
    $text = 'Contact us to learn how we can make a difference.';
  ?>

  <div class="form-new-dev__background">
    <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'form-new-dev__background' ]); ?>
  </div>

  <div class="form-new-dev__container">
    <div class="form-new-dev__info">
      <h2 class="form-new-dev__title"><?php echo $title; ?></h2>
      <div class="form-new-dev__text"><?php echo $text; ?></div>
      <div class="form-new-dev__phone">
        <a href="<?php echo get_field('phone_link', 'options') ?>" class="form-new-dev__phone-link">
          <?php echo get_field('phone_number', 'options'); ?>
        </a>
      </div>
      <div class="form-new-dev__calbre">CalBRE# <?php echo get_field('calbre', 'options'); ?></div>
      <div class="form-new-dev__email">
        <a href="mailto:<?php echo get_field('email_address', 'options'); ?>" class="form-new-dev__email-link">
          <?php echo get_field('email_address', 'options'); ?>
        </a>
      </div>
      <div class="form-new-dev__address">
        <a href="<?php echo get_field('address_link', 'options'); ?>" class="form-new-dev__address-link">
          <?php echo get_field('address_text', 'options'); ?>
        </a>
      </div>
    </div>
    <div class="form-new-dev__form-column">
      <div class="form-new-dev__form-container">
        <form action="" class="form-new-dev__form" id="new-dev-form">
          <div class="form-new-dev__form-group">
            <label for="fullname" class="form-new-dev__label">First and Last Name</label>
            <input type="text" name="fullname" id="fullname" placeholder="First and Last Name" class="form-new-dev__input" required>
          </div>

          <div class="form-new-dev__form-group form-new-dev__form-group--half">
            <label for="email" class="form-new-dev__label">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" class="form-new-dev__input" required>
          </div>

          <div class="form-new-dev__form-group form-new-dev__form-group--half">
            <label for="phone" class="form-new-dev__label">Phone Number</label>
            <input type="tel" pattern="^[0-9-+\s()]*$" name="phone" id="phone" placeholder="Phone Number" class="form-new-dev__input">
          </div>

          <div class="form-new-dev__form-group form-new-dev__form-group--half">
            <label for="property" class="form-new-dev__label">Property Name</label>
            <input type="text" name="property" id="property" placeholder="Property Name" value="<?php echo the_title(); ?>" class="form-new-dev__input">
          </div>
          <?php
            $categories = get_field('development_categories');
            if ( $categories ) :
              foreach( $categories as $category ) : ?>

              <?php if ( $category === 'location') : ?>
                <?php if ( have_rows('location') ) :
                  while ( have_rows('location' ) ) : the_row();

                    $address_1 = get_sub_field('address_1');
                    $address_2 = get_sub_field('address_2');
                    $city_state = get_sub_field('city_and_state');
                    $zip = get_sub_field('zip_code'); ?>

                  <?php endwhile;
                endif;
              endif;
            endforeach;
          endif; ?>    

          <div class="form-new-dev__form-group form-new-dev__form-group--half">
            <label for="address" class="form-new-dev__label">Property Address</label>
            <input type="text" name="address" id="address" placeholder="Property Address" value="<?php echo $address_1 . ' ' . $address_2 . ' ' . $city_state . ' ' . $zip; ?>" class="form-new-dev__input">
          </div>

          <div class="form-new-dev__form-group">
            <label for="message" class="form-new-dev__label">Message</label>
            <textarea name="message" id="message" placeholder="Message" rows="5" class="form-new-dev__textarea"></textarea>
          </div>

          <input type="submit" value="send" class="form-new-dev__submit">
        </form>
      </div>
    </div>
  </div>
      
</section>
