<?php
/**
* Template Name: Front Page Template
* @package WordPress
* @subpackage ruthkrishnan
* @version 1.0.0
*/
get_header(); ?>

<div class='site-wrapper'>
  <main id='content' role='main' class="page-home">
    <!-- <div class="page-home__loader"></div> -->
    <section class="home-hero">
      <?php get_template_part('template-parts/hero/home-hero'); ?>
    </section>

    <!-- Home Welcome Section -->
    <section class="home-welcome">
      <div class="home-welcome__color-box"></div>
      <h2 class="home-welcome__title home-welcome__title--mobile">
        <?php echo get_field('welcome_title') ?>
      </h2>
      <div class="home-welcome__container">
        <div class="home-welcome__content" tabindex="0">
          <h2 class="home-welcome__title">
            <?php echo get_field('welcome_title') ?>
          </h2>
          <div class="home-welcome__text">
            <?php echo get_field('welcome_text') ?>
          </div>
          <button class="home-welcome__meet-our-team-btn">
            <a href='/about' class="home-welcome__button">meet our team</a>
          </button>
        </div>
        <div class="home-welcome__image-col" tabindex="-1">
          <div class="home-welcome__image-container">
            <div class="home-welcome__no-modal-video-container">
              <iframe title="Ruth Krishnan Welcome Video" aria-label="play welcome video" class="home-welcome__no-modal-video" data-src="<?php echo get_field('welcome_video') ?>?title=0&byline=0&portrait=0&autoplay=true" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
            </div>
            <?php echo wp_get_attachment_image(get_field('welcome_thumbnail'), 'medium_large', false, [ 'class' => 'home-welcome__thumbnail', 'alt' => '' ]); ?>
            <div class="home-welcome__image-overlay"></div>
            <button class="home-welcome__play-btn" aria-label="play welcome video" style="background-color: transparent; border-style: none">
              <?php get_template_part('icons/play', null, array('class' => 'home-welcome__icon')); ?>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="home-welcome__video-modal">
      <div class="home-welcome__modal-overlay"></div>
      <div class="home-welcome__modal-container">
        <button class="home-welcome__close-btn" aria-label="close" tabindex="0">close</button>
        <iframe title="Ruth Krishnan Welcome Video" class="home-welcome__video" data-src="<?php echo get_field('welcome_video') ?>?title=0&byline=0&portrait=0&autoplay=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </section>
    <!-- END Home Welcome Section -->

    <!-- Home Committed Section -->
    <section class="home-committed">
      <div class="home-committed__background">
      </div>
      <div class="home-committed__container">
        <div class="home-committed__column">
          <h2 class="home-committed__title" aria-label="<?php echo get_field('committed_title'); ?>"><?php echo get_field('committed_title'); ?></h2>
          <div class="home-committed__text" aria-label="<?php echo get_field('committed_text'); ?>"><?php echo get_field('committed_text'); ?></div>
        </div>
      </div>
    </section>
    <!-- END Home Committed Section -->

    <!-- Card Links Template Part (Let's Work Together Section) -->
    <section class="lets-work-together-section">
      <?php get_template_part('template-parts/card-links/card-links', null, array( 'acf_group' => 'card_links')); ?>
    </section>
    <!-- END Card Links Template Part (Let's Work Together Section) -->

    <!-- Home Stats Section -->
    <section class="home-stats">
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
    </section>
    <!-- END Home Stats Section -->

    <!-- CTA Text & Button Template Part -->
    <section class="home-ready-buy-sell-cta">
      <?php get_template_part('template-parts/cta/cta-text-btn', null, array( 'acf_group' => 'ready_to_buy_or_sell_cta' )); ?>
    </section>
    <!-- END CTA Text & Button Template Part -->

    <!-- Testimonials Section Template Part -->
    <section class="templates-section">
      <?php get_template_part('template-parts/testimonials/testimonials'); ?>
    </section>
    <!-- END Testimonials Section Template Part -->

    <!-- Home Handle Listings -->
    <section class="home-handle-listing">
      <div class="home-handle-listing__container">
        <h2 class="home-handle-listing__text"><?php echo get_field('home_handle_listing_text'); ?></h2>
      </div>
    </section>
    <!-- END Home Handle Listings -->

    <!-- Card Links Template Part (Real Estate Section) -->
    <section class="home-real-estate">
      <?php get_template_part('template-parts/card-links/card-links', null, array( 'acf_group' => 'home_real_estate')); ?>
    </section>
    <!-- END Card Links Template Part (Real Estate Section) -->
    
    <!-- CTA Text & Button Template Part -->
    <section class="home-educate-realestate-cta">
      <?php get_template_part('template-parts/cta/cta-text-btn', null, array( 'acf_group' => 'educate_about_real_estate' )); ?>
    </section>
    <!-- END CTA Text & Button Template Part -->

    <!-- Get In Touch Form Template Part -->
    <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
    <!-- END Get In Touch Form Template Part -->
  </main>
</div>

<?php get_footer(); ?>
