<?php
/**
 * Template Name: Sell
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-sell">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Sell Welcome Section -->
  <div class="sell-welcome">
    <div class="sell-welcome__container">
      <div class="sell-welcome__column">
        <h2 class="sell-welcome__title"><?php echo get_field('sell_welcome_title') ?></h2>
        <div class="sell-welcome__text"><?php echo get_field('sell_welcome_text'); ?></div>
      </div>
    </div>
  </div>
  <!-- END Sell Welcome Section -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->
</div>

<?php get_footer(); ?>