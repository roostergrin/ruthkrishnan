<?php
/**
 * Template Name: Careers
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-careers">
  <div class="page-careers__container">

    <div class="page-careers__intro">
      <h2 class="page-careers__title"><?php echo get_field('careers_title'); ?></h2>
      <div class="page-careers__text"><?php echo get_field('careers_text'); ?></div>
    </div>

    <div class="page-careers__posts">
      <?php 
        $args = array(
          'post_type' => 'careers',
          'post_status' => 'publish',
          'posts_per_page' => -1,
          'orderby' => 'date',
          'order' => 'ASC',
        );

        $query = new WP_Query($args); 
      ?>

      <?php if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>

          <div class="page-careers__post">
            <h2 class="page-careers__post-title"><?php echo the_title(); ?></h2>
            <div class="page-careers__post-text"><?php echo get_field('short_description'); ?></div>
            <a href="<?php echo the_permalink(); ?>" class="page-careers__post-link">learn more</a>
          </div>

        <?php endwhile;
      endif; ?>

    </div>

  </div>


  <!-- Get In Touch Form Template Part -->
  <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  <!-- END Get In Touch Form Template Part -->
</div>

<?php get_footer(); ?>
