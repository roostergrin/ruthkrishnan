<?php
/**
 * Template Name: Privacy Policy
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-privacy">

  <div class="page-privacy__content">
    <div class="page-privacy__container">
      <h2 class="page-privacy__title"><?php echo get_field('title'); ?></h2>
      <div class="page-privacy__text"><?php echo get_field('content'); ?></div>
    </div>
  </div>

  <!-- Get In Touch Form Template Part -->
  <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  <!-- END Get In Touch Form Template Part -->
</div>

<?php get_footer(); ?>
