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

  <!-- Our Performance Template Part -->
  <?php get_template_part('template-parts/our-performance/our-performance'); ?>
  <!-- END Our Performance Template Part -->

  <!-- Sell Prices Section -->
  <div class="sell-prices">
    <div class="sell-prices__container">
      <div class="sell-prices__column">
        <div class="sell-prices__content">
          <h3 class="sell-prices__title">Sales Price to List Price</h3>
        </div>
        <!-- <?php echo wp_get_attachment_image(get_field('performance_image'), 'full', false, [ 'class' => 'sell-prices__image' ]); ?> -->
      </div>
    </div>
  </div>
  <!-- END Sell Prices Section -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->
</div>

<?php get_footer(); ?>