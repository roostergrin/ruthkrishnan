<?php
/**
 * Displays the Blog Single Recent Posts section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
?>

<div class="blog-recent">
  <div class="blog-recent__container">
    <h2 class="blog-recent__title">Recent Posts</h2>
    <div class="blog-recent__posts">
    <?php
      $args = array(
        'post_status' => 'publish',
        'posts_per_page' => 4
      );

      $query = new WP_Query( $args );

      if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>
          <div class="blog-recent__post">
            <div class="blog-recent__post-container">
              <?php if ( have_rows('background_image') ) :
                  while ( have_rows('background_image') ) : the_row();

                    $image = get_sub_field('image'); ?>
                    
                    <a href="<?php echo the_permalink(); ?>" class="blog-recent__image-container" aria-label="go to recent post <?php echo the_title(); ?>">
                      <div class="blog-recent__image-overlay"></div>
                      <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'blog-recent__image' ]); ?>
                    </a>
                  
                  <?php endwhile;
                endif; ?>

              <a href="<?php echo the_permalink(); ?>" class="blog-recent__post-title"><?php echo the_title(); ?></a>
              <div class="blog-recent__post-date"><?php echo get_the_date(); ?></div>

            </div>
          </div>
        <?php endwhile;
      endif; ?>
    </div>
  </div>
</div>