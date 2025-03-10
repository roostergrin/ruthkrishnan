<?php
/**
 * Template Name: Survey
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-survey">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Marketing Campaign Optional Intro Section -->
  <div class="marketing-intro">
    <?php if ( have_rows('optional_intro') ) :
      while ( have_rows('optional_intro') ) : the_row();

        $title = get_sub_field('title');
        $text = get_sub_field('text'); ?>

        <div class="marketing-intro__container">
          <div class="marketing-intro__column">
            <h2 class="marketing-intro__title"><?php echo $title; ?></h2>
            <div class="marketing-intro__text"><?php echo $text; ?></div>
          </div>
        </div>

      <?php endwhile;
    endif; ?>
  </div>
  <!-- Marketing Campaign Optional Intro Section -->

  <!-- Off Market Form Template Part -->
  <?php if (get_the_ID() == 18118): ?>
    <div class="page-survey__off-market" id="form">
      <?php get_template_part('template-parts/forms/form-survey-open-house'); ?>
    </div>
  <?php elseif (get_the_ID() == 19512): ?>
    <div class="page-survey__off-market" id="form">
      <?php get_template_part('template-parts/forms/form-agent-referral'); ?>
    </div>
  <?php else: ?>
    <div class="page-survey__off-market" id="form">
      <?php get_template_part('template-parts/forms/form-survey'); ?>
    </div>
  <?php endif; ?>
  <!-- END Off Market Form Template Part -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- END Off Market Form Template Part -->

</div>

<?php get_footer(); ?>
