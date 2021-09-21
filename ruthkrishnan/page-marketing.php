<?php
/**
 * Template Name: Marketing Campaign
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-marketing">

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

  <!-- Marketing Video Section -->
  <?php if ( !empty(get_field('marketing_video_src')) ) : ?>

    <div class="marketing-video">
      <div class="marketing-video__container">
        <div class="marketing-video__column">
          <div class="marketing-video__video-container">
            <iframe title="marketing Welcome Video" class="marketing-video__video" data-src="<?php echo get_field('marketing_video_src') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            <?php echo wp_get_attachment_image(get_field('marketing_video_thumbnail'), 'full', false, [ 'class' => 'marketing-video__thumbnail' ]); ?>
            <div class="marketing-video__play-btn">
              <?php get_template_part('icons/play', null, array('class' => 'marketing-video__icon')); ?>
            </div>
          </div>
          <div class="marketing-video__content">
            <h2 class="marketing-video__text"><?php echo get_field('marketing_video_text'); ?></h2>
            <a href="<?php echo get_field('marketing_video_button_link'); ?>" class="marketing-video__link"><?php echo get_field('marketing_video_button_text'); ?></a>
          </div>
        </div>
      </div>
    </div>

  <?php endif; ?>
  <!-- END Marketing Video Section -->

  <!-- Marketing Text Image Columns Section -->
  <section class="marketing-image-text">
    <div class="marketing-image-text__color-box"></div>
    <h2 class="marketing-image-text__title marketing-image-text__title--mobile">
      <?php echo get_field('marketing_image_text_title') ?>
    </h2>
    <div class="marketing-image-text__container">
      <div class="marketing-image-text__content">
        <h2 class="marketing-image-text__title">
          <?php echo get_field('marketing_image_text_title') ?>
        </h2>
        <div class="marketing-image-text__text">
          <?php echo get_field('marketing_image_text_text') ?>
        </div>
      </div>
      <div class="marketing-image-text__image-col">
        <div class="marketing-image-text__image-container">
          <?php echo wp_get_attachment_image(get_field('marketing_image_text_image'), 'medium_large', false, [ 'class' => 'marketing-image-text__image' ]); ?>
        </div>
      </div>
    </div>
  </section>
  <!-- END Marketing Text Image Columns Section -->

  <!-- Marketing Points Section -->
  <div class="marketing-points">
    <div class="marketing-points__container">
      <div class="marketing-points__content">
        <h2 class="marketing-points__title"><?php echo get_field('marketing_points_title'); ?></h2>
        <div class="marketing-points__text"><?php echo get_field('marketing_points_text'); ?></div>
        <div class="marketing-points__points">
          <?php if ( have_rows('marketing_points') ) :
            while ( have_rows('marketing_points') ) : the_row();

              $icon = get_sub_field('icon');
              $title = get_sub_field('title');
              $text = get_sub_field('text'); ?>

              <div class="marketing-points__point">
                <?php get_template_part('icons/' . $icon, null, array( 'class' => 'marketing-points__point-icon' )); ?>
                <h3 class="marketing-points__point-title"><?php echo $title; ?></h3>
                <div class="marketing-points__point-text"><?php echo $text; ?></div>
              </div>
      
            <?php endwhile;
          endif; ?>
        </div>
        <div class="marketing-points__link-container">
          <a href="<?php echo get_field('marketing_points_link'); ?>" class="marketing-points__link"><?php echo get_field('marketing_points_link_text'); ?></a>
        </div>
      </div>
    </div>
  </div>
  <!-- END Marketing Points Section -->

  <!-- About Ruth Krishnan Template Part -->
  <?php get_template_part('template-parts/about/about-ruth-krishnan'); ?>
  <!-- END About Ruth Krishnan Template Part -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- Get In Touch Form Template Part -->
  <div class="page-marketing__get-in-touch">
    <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  </div>
  <!-- END Get In Touch Form Template Part -->

</div>

<?php get_footer(); ?>
