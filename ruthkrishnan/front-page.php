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
          <div class="home-welcome__close-btn">close</div>
          <iframe class="home-welcome__video" data-src="<?php echo get_field('welcome_video') ?>?title=0&byline=0&portrait=0&autoplay=true" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
          <!-- <video class="home-welcome__video" src="<?php echo get_field('welcome_video') ?>" type='video/mp4' controls></video> -->
        </div>
      </div>
      <!-- END Home Welcome Section -->

      <!-- Home Committed Section -->
      <div class="home-committed">
        <div class="home-committed__background">
        </div>
        <div class="home-committed__container">
          <div class="home-committed__column">
            <h2 class="home-committed__title"><?php echo get_field('committed_title'); ?></h2>
            <div class="home-committed__text"><?php echo get_field('committed_text'); ?></div>
          </div>
        </div>
      </div>
      <!-- END Home Committed Section -->

      <!-- Card Links Template Part -->
      <?php get_template_part('template-parts/card-links/card-links', null, array( 'acf_group' => 'card_links')); ?>
      <!-- END Card Links Template Part -->

      <!-- Home Stats Section -->
      <div class="home-stats">
        <div class="home-stats__container">
          <h2 class="home-stats__title"><?php echo get_field('home_stats_title'); ?></h2>
          <div class="home-stats__cards">
            <?php if ( have_rows('home_stats_cards') ) :
              while ( have_rows('home_stats_cards') ) : the_row();
                
                $title = get_sub_field('title');
                $text = get_sub_field('text'); ?>

                <div class="home-stats__card">
                  <div class="home-stats__card-container">
                    <div class="home-stats__card-circle">
                      <h3 class="home-stats__card-title"><?php echo $title; ?></h3>
                    </div>
                    <div class="home-stats__card-text"><?php echo $text; ?></div>
                  </div>
                </div>
              
              <?php endwhile;
            endif; ?>
          </div>
        </div>
      </div>
      <!-- END Home Stats Section -->

      <!-- Testimonials Section Template Part -->
      <?php get_template_part('template-parts/testimonials/testimonials'); ?>
      <!-- END Testimonials Section Template Part -->

      <!-- Get In Touch Form Template Part -->
      <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
      <!-- END Get In Touch Form Template Part -->
    </div>
  </main>
</div>

<?php get_footer(); ?>
