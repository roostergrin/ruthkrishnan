<?php
/**
* Template Name: Front Page Template
* @package WordPress
* @subpackage ruthkrishnan
* @version 1.0.0
*/
get_header(); ?>

<div class='site-wrapper'>
  <main id='content' role='main'>
    <div class="page-home">
      <div class="page-home__loader"></div>
      <?php get_template_part('template-parts/hero/home-hero'); ?>

      <!-- Home Welcome Section -->
      <section class="home-welcome">
        <div class="home-welcome__color-box"></div>
        <h2 class="home-welcome__title home-welcome__title--mobile">
          <?php echo get_field('welcome_title') ?>
        </h2>
        <div class="home-welcome__container">
          <div class="home-welcome__content">
            <h2 class="home-welcome__title">
              <?php echo get_field('welcome_title') ?>
            </h2>
            <div class="home-welcome__text">
              <?php echo get_field('welcome_text') ?>
            </div>
            <a href='/about-us#meet-our-team' class="home-welcome__button">meet our team</a>
          </div>
          <div class="home-welcome__image-col">
            <div class="home-welcome__image-container">
              <?php echo wp_get_attachment_image(get_field('welcome_thumbnail'), 'medium_large', false, [ 'class' => 'home-welcome__thumbnail' ]); ?>
              <div class="home-welcome__play-btn">
                <?php get_template_part('icons/play', null, array('class' => 'home-welcome__icon')); ?>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="home-welcome__video-modal">
        <div class="home-welcome__modal-overlay"></div>
        <div class="home-welcome__modal-container">
          <div class="home-welcome__close-btn">
            <span></span>
            <span></span>
          </div>
          <video class="home-welcome__video" src="<?php echo get_field('welcome_video') ?>" type='video/mp4' controls></video>
        </div>
      </div> <!-- End Home Welcome Section -->

      <?php get_template_part('template-parts/testimonials/testimonials'); ?>
    </div>
  </main>
</div>

<?php get_footer(); ?>
