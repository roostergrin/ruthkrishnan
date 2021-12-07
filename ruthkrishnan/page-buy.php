<?php
/**
 * Template Name: Buy
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-buy">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Buy Welcome Section -->
  <div class="buy-welcome">
    <div class="buy-welcome__container">
      <div class="buy-welcome__column">
        <h2 class="buy-welcome__title"><?php echo get_field('buy_welcome_title'); ?></h2>
        <div class="buy-welcome__text"><?php echo get_field('buy_welcome_text'); ?></div>
        <div class="buy-welcome__video-container">
          <iframe title="Buying a Home Welcome Video" class="buy-welcome__video" data-src="<?php echo get_field('buy_welcome_video') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          <?php echo wp_get_attachment_image(get_field('buy_welcome_thumbnail'), 'full', false, [ 'class' => 'buy-welcome__thumbnail' ]); ?>
          <div class="buy-welcome__play-btn">
            <?php get_template_part('icons/play', null, array('class' => 'buy-welcome__icon')); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Buy Welcome Section -->

  <!-- Our Performance Template Part -->
  <?php get_template_part('template-parts/our-performance/our-performance'); ?>
  <!-- END Our Performance Template Part -->

  <!-- Testimonials Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonials Template Part -->

  <!-- Buy Testimonial Video Section -->
  <div class="buy-testimonial-video">
    <div class="buy-testimonial-video__container">
      <div class="buy-testimonial-video__column">
        <div class="buy-testimonial-video__video-container">
          <iframe title="Buying a Home Video" class="buy-testimonial-video__video" data-src="<?php echo get_field('buy_testimonial_video') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          <?php echo wp_get_attachment_image(get_field('buy_testimonial_thumbnail'), 'full', false, [ 'class' => 'buy-testimonial-video__thumbnail' ]); ?>
          <div class="buy-testimonial-video__play-btn">
            <?php get_template_part('icons/play', null, array('class' => 'buy-testimonial-video__icon')); ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Buy Testimonial Video Section -->

  <!-- CTA Text & Button Template Part -->
  <div class="buy-schedule-talk">
    <?php get_template_part('template-parts/cta/cta-text-btn', null, array( 'acf_group' => 'schedule_time_to_talk_cta' )); ?>
  </div>
  <!-- END CTA Text & Button Template Part -->

  <!-- Process Steps Template Part -->
  <?php get_template_part('template-parts/process-steps/process-steps'); ?>
  <!-- END Process Steps Template Part -->

  <!-- Resources Links Template Part -->
  <?php get_template_part('template-parts/resources-links/resources-links'); ?>
  <!-- END Resources Links Template Part -->

  <!-- Buy Neighborhood Section -->
  <div class="buy-neighborhood">
    <?php
      $query = new WP_Query( array(
        'post_type' => 'neighborhoods',
        'post_status' => 'publish',
        'posts_per_page' => -1
      ) );

      if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>

          <div class="buy-neighborhood__neighborhood-post" data-name="<?php echo $post->post_name; ?>" data-title="<?php echo the_title(); ?>" data-mapinfo='<?php echo json_encode(get_field('map_info_window')); ?>' data-link="<?php echo the_permalink(); ?>" data-category="<?php echo get_the_terms(get_post()->ID, 'neighborhood-category')[0]->slug ?>"></div>

        <?php endwhile;
      endif;
      wp_reset_query();
    ?>

    <div class="buy-neighborhood__tooltip">
      <div id="tooltip-content" class="buy-neighborhood__tooltip-content"></div>
      <div id="tooltip-close" class="buy-neighborhood__tooltip-close"></div>
    </div>
    <div class="buy-neighborhood__container">
      <div class="buy-neighborhood__background"></div>
      <h2 class="buy-neighborhood__title"><?php echo get_field('buy_neighborhood_title'); ?></h2>
      <div class="buy-neighborhood__map-container">
        <?php get_template_part('icons/map', null, array( 'class' => 'buy-neighborhood__map')); ?>
      </div>
    </div>
  </div>
  <!-- END Buy Neighborhood Section -->

  <!-- Buy - Rent vs Buy Section -->
  <div class="buy-rent-vs-buy">
    <div class="buy-rent-vs-buy__container">
      <div class="buy-rent-vs-buy__column">
        <h2 class="buy-rent-vs-buy__title"><?php echo get_field('rent_vs_buy_title'); ?></h2>
        <div class="buy-rent-vs-buy__text"><?php echo get_field('rent_vs_buy_text'); ?></div>
      </div>

      <!-- HTML markup from mortgagecalculator.org -->
      <div class="buy-rent-vs-buy__mortgage-calculator">
        <p align="center">
          <a href="https://www.mortgagecalculator.org/" target="_blank" aria-label="Go to mortgagecaolculator.org (new window)">
            <img src="https://www.mortgagecalculator.org/images/mortgage-calculator-logo.png" width="589" height="auto" alt="MortgageCalculator.org" border="0" style="max-width: 100%;" target="_blank">
          </a>
        </p> 
        <iframe title="Mortage Calculator" class="buy-rent-vs-buy__iframe" src="https://www.mortgagecalculator.org/webmasters/?downpayment=50000&homevalue=300000&loanamount=250000&interestrate=4&loanterm=30&propertytax=2400&pmi=1&homeinsurance=1000&monthlyhoa=0" style="width: 100%; height: 1100px; border: 0;"></iframe>
        <div style="font-family: Arial; height: 36px; top: -36px; padding: 0 8px 0 0; box-sizing: border-box; text-align: right; background: #f6f9f9; border: 1px solid #ccc; color: #000; line-height: 34px; font-size: 12px; position: relative;">
          <a style="color: #000;" href="https://www.mortgagecalculator.org/free-tools/javascript-mortgage-calculator.php" target="_blank" aria-label="Go to Javascript Mortgage Calculator at mortgagecalculator.org (opens in new window)">Javascript Mortgage Calculator </a>
          by MortgageCalculator.org
        </div>
      </div>
      <!-- END HTML markup from mortgagecalculator.org -->

      <div class="buy-rent-vs-buy__column">
        <div class="buy-rent-vs-buy__caption"><?php echo get_field('rent_vs_buy_caption'); ?></div>
      </div>

    </div>
  </div>
  <!-- END Buy - Rent vs Buy Section -->
    
  </div>
  
  <?php get_footer(); ?>
  