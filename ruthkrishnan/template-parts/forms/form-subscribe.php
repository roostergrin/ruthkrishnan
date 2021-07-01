<?php
/**
 * Displays Subscription/Stay in touch form .
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="form-subscribe">
  <div class="form-subscribe__container">
    <div class="form-subscribe__content">
      <h2 class="form-subscribe__title"><?php echo get_field('subscribe_title', 'options'); ?></h2>
      <div class="form-subscribe__text"><?php echo get_field('subscribe_text', 'options'); ?></div>
    </div>
    <div class="form-subscribe__form-column">
      <form action="" id="subscribe-form" class="form-subscribe__form">
        <label for="email" class="form-subscribe__label">Email</label>
        <input type="email" name="email" id="mail" class="form-subscribe__input">

      </form>
      <button type="submit" for="subscribe-form" class="form-subscribe__submit"><?php get_template_part('icons/arrow', null, array( 'class' => 'form-subscribe__arrow' )); ?></button>
    </div>
  </div>
</div>