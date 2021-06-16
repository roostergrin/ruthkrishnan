<?php
/**
 * The template for displaying all posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

<?php get_template_part('template-parts/hero/site-hero'); ?>

<div class="post-blog">
  <div class="post-blog__container">
    <?php
      if ( have_posts() ) :
        while ( have_posts() ) : the_post(); ?>
          <div class="post-blog__content">
            <?php echo get_field('content'); ?>
          </div>
        <?php endwhile;
      endif;
    ?>
  </div>
</div>

<?php get_footer(); ?>