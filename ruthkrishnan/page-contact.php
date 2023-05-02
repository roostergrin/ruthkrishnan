<?php
/**
 * Template Name: Contact
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-contact">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Video Tesimonial Template -->
  <?php get_template_part('template-parts/sliders/slider-video'); ?>
  <!-- END Video Tesimonial Template -->

  <!-- Get In Touch Form Template Part -->
  <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  <!-- END Get In Touch Form Template Part -->

</div>

<?php get_footer(); ?>
