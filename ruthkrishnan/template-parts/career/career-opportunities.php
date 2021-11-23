<?php
/**
 * Career Opportunities Template Part.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="career-opportunities">
  <div class="career-opportunities__container">
    <h2 class="career-opportunities__title">
      <?php if ( is_page_template('page-careers.php') ) :
        echo 'Available Opportunities';
      elseif ( is_single() && get_post_type() === 'careers' ) :
        echo 'Other Opportunities';
      endif; ?>
    </h2>
    <div class="career-opportunities__posts">
      <?php if ( is_page_template('page-careers.php') ) :

        $query = new WP_Query(array(
          'post_type' => 'careers',
          'post_status' => 'publish',
          'posts_per_page' => -1
        ) );

      elseif ( is_single() && get_post_type() === 'careers' ) :

        $query = new WP_Query(array(
          'post_type' => 'careers',
          'post_status' => 'publish',
          'posts_per_page' => 3,
          'post__not_in' => array( $post->ID)
        ) );

      endif; ?>

      <?php if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>

          <div class="career-opportunities__post">
            <div class="career-opportunities__post-container">
              <h3 class="career-opportunities__post-title"><?php echo the_title(); ?></h3>
              <div class="career-opportunities__post-excerpt"><?php echo the_excerpt(); ?></div>
              <a href="<?php echo the_permalink(); ?>" aria-label='learn more at the <?php echo the_title(); ?> page.' class="career-opportunities__post-link">learn more</a>
            </div>
          </div>
          
        <?php endwhile;
      endif;
      wp_reset_query(); ?>

    </div>
  </div>
</div>
