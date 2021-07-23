<?php
/**
 * Template Name: Talks
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-talks">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Talks What You'll Learn Section -->
  <div class="talks-learn">
    <div class="talks-learn__container">
      <div class="talks-learn__column">
        <h2 class="talks-learn__title"><?php echo get_field('talks_learn_title'); ?></h2>
        <div class="talks-learn__content-container">
          <div class="talks-learn__content talks-learn__content--left"><?php echo get_field('talks_learn_content_left'); ?></div>
          <div class="talks-learn__content talks-learn__content--right"><?php echo get_field('talks_learn_content_right'); ?></div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Talks What You'll Learn Section -->

  <!-- Testimonials Template Part -->
  <div class="page-talks__testimonials">
    <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  </div>
  <!-- END Testimonials Template Part -->

  <!-- Get In Touch Form Template Part -->
  <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  <!-- END Get In Touch Form Template Part -->

</div>

<?php get_footer(); ?>
