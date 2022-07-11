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
        'taxonomy' => 'listings-category',
        'term' => 'just-listed'
        // http://localhost:8888/wp-admin/term.php?taxonomy=listings-category&tag_ID=24&post_type=propertylistings&wp_http_referer=%2Fwp-admin%2Fedit-tags.php%3Ftaxonomy%3Dlistings-category%26post_type%3Dpropertylistings

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