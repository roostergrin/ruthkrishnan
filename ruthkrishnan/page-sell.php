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
  <section class="home-hero">
    <?php get_template_part('template-parts/hero/home-hero'); ?>
  </section>
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

  <!-- Sell Video Section -->
  <div class="sell-video">
    <div class="sell-video__container">
      <div class="sell-video__column">
        <div class="sell-video__video-container">
          <iframe title="Selling Your Home Welcome Video" class="sell-video__video" data-src="<?php echo get_field('sell_video_src') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          <?php echo wp_get_attachment_image(get_field('sell_video_thumbnail'), 'full', false, [ 'class' => 'sell-video__thumbnail' ]); ?>
          <div class="sell-video__play-btn">
            <?php get_template_part('icons/play', null, array('class' => 'sell-video__icon')); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Sell Video Section -->
  <!-- Compass Concierge program-->
  <?php get_template_part('template-parts/compass-program/compass-program'); ?>
  <!-- END Compass Concierge program-->
  <div class="sell-video__content">
    <h2 class="sell-video__text"><?php echo get_field('sell_video_text'); ?></h2>
    <a href="<?php echo get_field('sell_video_button_link'); ?>" class="sell-video__link"><?php echo get_field('sell_video_button_text'); ?></a>
  </div>

  <!-- Our Performance Template Part -->
  <?php get_template_part('template-parts/our-performance/our-performance'); ?>
  <!-- END Our Performance Template Part -->

  <!-- Sell Prices Section -->
  <div class="sell-prices">
    <div class="sell-prices__container">
      <div class="sell-prices__column">
        <?php echo wp_get_attachment_image(get_field('sell_prices_background'), 'full', false, [ 'class' => 'sell-prices__background' ]); ?>
        <div class="sell-prices__content">
          <h2 class="sell-prices__title"><?php echo get_field('sell_prices_title'); ?></h2>
          <div class="sell-prices__text"><?php echo get_field('sell_prices_text'); ?></div>
          <div class="sell-prices__links">
            <?php if ( have_rows('sell_prices_links') ) :
              while ( have_rows('sell_prices_links') ) : the_row();

                $text = get_sub_field('text');
                $link = get_sub_field('link'); ?>

                <a href="<?php echo $link; ?>" class="sell-prices__btn"><?php echo $text; ?></a>

              <?php endwhile;
            endif; ?>
          </div>
        </div>
        <?php echo wp_get_attachment_image(get_field('sell_prices_image'), 'full', false, [ 'class' => 'sell-prices__image' ]); ?>
      </div>
    </div>
  </div>
  <!-- END Sell Prices Section -->

  <!-- Sell Commission Section -->
  <div class="sell-commission">
    <div class="sell-commission__container">
      <div class="sell-commission__column">
        <h2 class="sell-commission__title"><?php echo get_field('sell_commission_title'); ?></h2>
        <div class="sell-commission__text"><?php echo get_field('sell_commission_text'); ?></div>
        <div class="sell-commission__images">
          <?php echo wp_get_attachment_image(get_field('sell_commission_team_image'), 'full', false, [ 'class' => 'sell-commission__image' ]); ?>
          <?php echo wp_get_attachment_image(get_field('sell_commission_agent_image'), 'full', false, [ 'class' => 'sell-commission__image' ]); ?>
        </div>
      </div>
    </div>
  </div>
  <!-- END Sell Commission Section -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- Video Tesimonial Template -->
  <?php get_template_part('template-parts/sliders/slider-video'); ?>
  <!-- END Video Tesimonial Template -->

  <!-- Process Steps Template Part -->
  <?php get_template_part('template-parts/process-steps/process-steps'); ?>
  <!-- END Process Steps Template Part -->

  <!-- Resources Links Template Part -->
  <?php get_template_part('template-parts/resources-links/resources-links'); ?>
  <!-- END Resources Links Template Part -->

  <!-- Before and After Gallery Template Part -->
  <?php get_template_part('template-parts/sliders/before-after'); ?>
  <!-- END Before and After Gallery Template Part -->

  <!-- Case Studies Template Part -->
  <?php get_template_part('template-parts/sliders/case-studies'); ?>
  <!-- END Case Studies Template Part -->

</div>

<?php get_footer(); ?>
