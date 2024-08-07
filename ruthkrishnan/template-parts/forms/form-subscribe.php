<?php
/**
 * Displays Subscription/Stay in touch form .
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="form-subscribe">
  <div class="form-subscribe__container">
    <div class="form-subscribe__content">
      <h2 class="form-subscribe__title"><?php echo get_field('subscribe_title', 'options'); ?></h2>
      <div class="form-subscribe__text"><?php echo get_field('subscribe_text', 'options'); ?></div>
    </div>
    <a href="https://ruthkrishnan.us5.list-manage.com/subscribe?u=c8474b2af5037cd0c2709da5c&id=47357a5c28" class="form-subscribe__form-column" target="_blank" aria-label="subscribe now on subscription page, opens in new window.">
      <button class="form-subscribe__button">subscribe now</button>
    </a>
  </div>
</section>
