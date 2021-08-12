<?php
/**
 * Template Name: Thank You
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>


<div class="page-thank-you">
  <div class="page-thank-you__container">
    <h2 class="page-thank-you__title">Thank you!</h2>
    <div class="page-thank-you__text">We will be in touch shortly!</div>
    <a href="<?php echo wp_get_referer(); ?>" aria-label="Return to previous page." class="page-thank-you__button">return to previous page</a>
  </div>
</div>

<?php get_footer(); ?>
