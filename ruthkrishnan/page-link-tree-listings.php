<?php

/**
 * Template Name: Link Tree Listings
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-listings">
  <?php get_template_part('template-parts/hero/site-hero'); ?>

    <section class="page-listings__links-container">
      <?php
      $args = array(
        'post_type' => 'propertylistings',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'date',
        'order' => 'ASC',
      );

      $query = new WP_Query($args);
      if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();
      ?>
          <a class="page-listings__link" href="/property-listings/<?php echo get_post()->post_name; ?>">
            <?php echo the_title(); ?>
          </a>
      <?php endwhile;
      endif;
      ?>
    </section>
</div>

<?php get_footer(); ?>