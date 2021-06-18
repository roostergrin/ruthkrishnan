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
    <div class="post-blog__column">
      <?php
        if ( have_posts() ) :
          while ( have_posts() ) : the_post(); ?>

            <div class="post-blog__content">
              <?php echo get_field('content'); ?>
            </div>

            <div class="post-blog__infobar">
              <div class="post-blog__infobar-share">share</div>
              <div class="post-blog__infobar-date"><?php echo get_the_date(); ?></div>
              <div class="post-blog__infobar-category">
                <a href="/blog/<?php echo get_the_category()[0]->slug; ?>">
                  <?php echo get_the_category()[0]->name; ?>
                </a>
              </div>
            </div>

            <?php
              $prev_post = get_previous_post();
              $next_post = get_next_post(); 
            ?>

            <div class="post-blog__navigation <?php echo $next_post && !$prev_post ? 'post-blog__navigation--justify-end' : null; ?>">

              <?php if ( $prev_post ) : ?>
                <a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="post-blog__navigation-prev">previous</a>
              <?php endif; ?>

              <?php if ( $next_post ) : ?>
                <a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="post-blog__navigation-next">next</a>
              <?php endif; ?>

            </div>

          <?php endwhile;
        endif;
      ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>