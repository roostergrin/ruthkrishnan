<?php

/**
 * Template Name: About
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-about">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- About Welcome Section -->
  <?php get_template_part('template-parts/about/about-welcome'); ?>
  <!-- END About Welcome Section -->

  <!-- About Ruth Krishnan Template Part -->
  <?php get_template_part('template-parts/about/about-ruth-krishnan'); ?>
  <!-- END About Ruth Krishnan Template Part -->

  <!-- About Featured in Section -->
  <?php get_template_part('template-parts/about/about-featured-in'); ?>
  <!-- END About Featured in Section -->
   
  <!-- About Video Section -->
  <?php if (get_field('about_video_src_2')) : ?>
    <div class="about-video">
      <div class="about-video__container">
        <div class="about-video__video-container">
          <iframe title="About Ruth Krishnan Video" class="about-video__video" data-src="<?php echo get_field('about_video_src_2') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          <?php echo wp_get_attachment_image(get_field('about_video_thumbnail_2'), 'full', false, ['class' => 'about-video__thumbnail']); ?>
          <div class="about-video__play-btn">
            <?php get_template_part('icons/play', null, array('class' => 'about-video__icon')); ?>
          </div>
        </div>
        <div class="about-video__links">
        </div>
      </div>
    </div>
  <?php endif; ?>

  <!-- END About Video Section -->

  <!-- About Video Section -->
  <div class="about-video">
    <div class="about-video__container">
      <div class="about-video__video-container">
        <iframe title="About Ruth Krishnan Video" class="about-video__video" data-src="<?php echo get_field('about_video_src') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        <?php echo wp_get_attachment_image(get_field('about_video_thumbnail'), 'full', false, ['class' => 'about-video__thumbnail']); ?>
        <div class="about-video__play-btn">
          <?php get_template_part('icons/play', null, array('class' => 'about-video__icon')); ?>
        </div>
      </div>
      <div class="about-video__content">
        <div class="about-video__text"><?php echo get_field('about_video_text'); ?></div>
      </div>
      <div class="about-video__links">
        <?php if (have_rows('about_video_links')) :
          while (have_rows('about_video_links')) : the_row();

            $text = get_sub_field('text');
            $link = get_sub_field('link'); ?>

            <div class="about-video__link-container">
              <a href="<?php echo $link; ?>" class="about-video__link"><?php echo $text; ?></a>
            </div>

        <?php endwhile;
        endif; ?>
      </div>
    </div>
  </div>

  <!-- END About Video Section -->

  <?php if (is_page(29)) { ?>
    <!-- About Team Slider Template Part -->
    <div id="meet-our-team">
      <?php get_template_part('template-parts/sliders/slider-team'); ?>
    </div>
    <!-- END About Team Slider Template Part -->
  <?php } else { ?>
    <!-- Alternative Component Template Part -->
    <div id="alternative-component">
      <?php get_template_part('template-parts/sliders/slider-agent'); ?>
    </div>
    <!-- END Alternative Component Template Part -->
  <?php } ?>

  <!-- About Our Promise Section -->
  <div class="about-promise">
    <div class="about-promise__color-box"></div>
    <div class="about-promise__container">
      <h2 class="about-promise__title"><?php echo get_field('about_promise_title'); ?></h2>
      <div class="about-promise__cards">
        <?php if (have_rows('about_promise_cards')) :
          while (have_rows('about_promise_cards')) : the_row();

            $icon = get_sub_field('icon');
            $title = get_sub_field('title');
            $text = get_sub_field('text'); ?>

            <div class="about-promise__card">
              <?php get_template_part('icons/' . $icon, null, array('class' => 'about-promise__card-icon')); ?>
              <h3 class="about-promise__card-title"><?php echo $title; ?></h3>
              <div class="about-promise__card-text"><?php echo $text; ?></div>
            </div>

        <?php endwhile;
        endif; ?>
      </div>
    </div>
  </div>
  <!-- END About Our Promise Section -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- About Giving Back Section -->
  <div class="about-giving-back">
    <div class="about-giving-back__container">
      <h2 class="about-giving-back__title"><?php echo get_field('about_giving_back_title'); ?></h2>
      <div class="about-giving-back__content">
        <div class="about-giving-back__text"><?php echo get_field('about_giving_back_text'); ?></div>
      </div>
    </div>
  </div>
  <!-- END About Giving Back Section -->

  <!-- About Logo Template Part -->
  <?php get_template_part('template-parts/about/about-logos'); ?>
  <!-- END About Logo Template Part -->

</div>

<?php get_footer(); ?>