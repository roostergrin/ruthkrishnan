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
  <div class="slider-neighborhoods__slider">
    <?php
      $args = array(
        'post_type' => 'neighborhoods',
        'post_status' => 'publish',
        'orderby' => 'date',
        'order' => 'ASC',
      );

      $query = new WP_Query( $args ); ?>

      <!-- Loops through posts and displays the neighborhood images -->
      <div class="slider-neighborhoods__images">
        <div class="slider-neighborhoods__slide-wrapper">
          <?php if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();

              if ( have_rows('background_image') ) :
                while ( have_rows('background_image') ) : the_row(); 
                  $image = get_sub_field('image'); ?>

                  <div class="slider-neighborhoods__slide">
                    <div class="slider-neighborhoods__image-container">
                      <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'slider-neighborhoods__image' ]); ?>
                    </div>
                  </div>

                <?php endwhile;
              endif; ?>

            <?php endwhile;
          endif; ?>
        </div>
      </div>

      <!-- Loops through the posts and displays neighborhood descriptions -->
      <div class="slider-neighborhoods__content-container">
        <div class="slider-neighborhoods__content-column">
          <?php if ( $query->have_posts() ) : 
            while ( $query->have_posts() ) : $query->the_post(); ?>
              <div class="slider-neighborhoods__content-wrapper" data-index='<?php echo $query->current_post; ?>'>
                <div class="slider-neighborhoods__content">
                  <h3 class="slider-neighborhoods__content-title"><?php echo the_title(); ?></h3>
                  <div class="slider-neighborhoods__content-description">
                    <?php echo get_field('description'); ?>
                  </div>
                  <a class="slider-neighborhoods__content-link" href="/neighborhoods/<?php echo get_post()->post_name; ?>">Learn More</a>
                </div>
              </div>

            <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </div>
  </div>

</div>
