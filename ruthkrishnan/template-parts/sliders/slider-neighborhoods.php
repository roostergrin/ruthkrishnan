<?php
/**
 * Displays Neighborhood Slider.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="slider-neighborhoods">
  <h2 class="slider-neighborhoods__title">This is the Neighborhoods Slider Template Part</h2>

  <div class="slider-neighborhoods__slider">
    <?php
      $args = array(
        'post_type' => 'neighborhoods',
        'post_status' => 'publish',
        'posts_per_page' => 8,
        'orderby' => 'date',
        'order' => 'ASC',
      );

      $query = new WP_Query( $args );

      if ( $query->have_posts() ) : 
        while ( $query->have_posts() ) : $query->the_post(); ?>
          <div class="slider-neighborhoods__slide">
            <?php print_r(get_post()); ?>
          </div>
          <br><br>
        <?php endwhile; ?>
      <?php endif; ?>
  </div>

</div>
