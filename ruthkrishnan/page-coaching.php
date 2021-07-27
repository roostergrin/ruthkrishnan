<?php
/**
 * Template Name: Coaching
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-coaching">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Coaching Intro Section -->
  <div class="coaching-intro">
    <div class="coaching-intro__container">
      <div class="coaching-intro__wrapper">
        <h2 class="coaching-intro__title"><?php echo get_field('coaching_title'); ?></h2>
        <div class="coaching-intro__column coaching-intro__column--content">
          <div class="coaching-intro__text"><?php echo get_field('coaching_text'); ?></div>
          <div class="coaching-intro__link-container">
            <a href="<?php echo get_field('coaching_link'); ?>" class="coaching-intro__link"><?php echo get_field('coaching_link_text'); ?></a>
          </div>
        </div>
        <div class="coaching-intro__column coaching-intro__column--image">
          <div class="coaching-intro__image-container">
            <?php echo wp_get_attachment_image(get_field('coaching_image'), 'full', false, [ 'class' => 'coaching-intro__image']); ?>
          </div>
        </div>
      </div>
    </div>
  </div>  
  <!-- END Coaching Intro Section -->

  <!-- About Ruth Krishnan Template Part -->
  <?php get_template_part('template-parts/about/about-ruth-krishnan'); ?>
  <!-- END About Ruth Krishnan Template Part -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- Get In Touch Form Template Part -->
  <div class="page-coaching__get-in-touch">
    <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  </div>
  <!-- END Get In Touch Form Template Part -->

</div>

<?php get_footer(); ?>
