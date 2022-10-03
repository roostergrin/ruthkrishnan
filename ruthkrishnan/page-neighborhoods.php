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
  <!-- END Neighborhoods Intro Section -->

  <!-- Slider Neighborhoodss Template Part -->
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
