<?php
/**
 * Template Name: Neighborhoods
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
get_header(); ?>

<div class="page-neighborhoods">
  
  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->
  
  <!-- Neighborhoods Intro Section -->
  <div class="neighborhoods-intro">
    <div class="neighborhoods-intro__container">
      <div class="neighborhoods-intro__column">
        <h2 class="neighborhoods-intro__title"><?php echo get_field('neighborhoods_intro_title'); ?></h2>
        <div class="neighborhoods-intro__text"><?php echo get_field('neighborhoods_intro_text'); ?></div>
      </div>
    </div>
  </div>
  <!-- END Neighborhoods Intro Section -->

  <!-- Slider Neighborhoods Template Part -->
  <?php get_template_part('template-parts/sliders/slider-neighborhoods'); ?>
  <!-- END Slider Neighborhoods Template Part -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- CTA Text & Button Template Part -->
  <div class="neighborhoods-cta">
    <?php get_template_part('template-parts/cta/cta-text-btn', null, array( 'acf_group' => 'neighborhoods_cta' )); ?>
  </div>
  <!-- END CTA Text & Button Template Part -->

</div>

<?php get_footer(); ?>
