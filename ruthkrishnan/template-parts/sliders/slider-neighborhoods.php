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
  
  <?php get_template_part('template-parts/maps/neighborhoods-map'); ?>

  <div class="slider-neighborhoods__slider">
    <?php
      $args = array(
        'post_type' => 'neighborhoods',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'title',
        'order' => 'ASC',
      );

      $query = new WP_Query( $args ); ?>

      <!-- Loops through posts and displays the neighborhood images -->
      <div id="slider-container" class="slider-neighborhoods__slider-container">
        <div class="slider-neighborhoods__track">
          <?php if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();

              if ( have_rows('background_image') ) :
                while ( have_rows('background_image') ) : the_row(); 
                  $image = get_sub_field('image'); ?>
                  
                  <div class="slider-neighborhoods__slide" data-name='<?php echo the_title(); ?>' data-mapinfo='<?php echo json_encode(get_field('map_info_window')); ?>' data-neighborhood='<?php echo get_post()->post_name; ?>' >
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
        <div class="slider-neighborhoods__content-fade"></div>
        <div class="slider-neighborhoods__content-column">
          <?php if ( $query->have_posts() ) : 
            while ( $query->have_posts() ) : $query->the_post(); ?>
              <div class="slider-neighborhoods__content-wrapper" data-index='<?php echo $query->current_post; ?>'>
                <div class="slider-neighborhoods__content">
                  <h3 class="slider-neighborhoods__content-title"><?php echo the_title(); ?></h3>
                  <div class="slider-neighborhoods__content-description">
                    <?php echo get_field('description'); ?>
                  </div>
                  <?php if ( have_rows('single_neighborhoods_icons') ) : ?>
                    <div class="slider-neighborhoods__content-icons">
                      <?php while ( have_rows('single_neighborhoods_icons') ) : the_row();

                        $icon = get_sub_field('icon');
                        $text = get_sub_field('text'); ?>

                        <div class="slider-neighborhoods__content-icon-container">
                          <?php get_template_part('icons/' . $icon, null, array( 'class' => 'slider-neighborhoods__content-icon')); ?>
                          <div class="slider-neighborhoods__content-icon-text"><?php echo $text; ?></div>
                        </div>
                      
                      <?php endwhile; ?>
                    </div>
                  <?php endif; ?>
                  <a class="slider-neighborhoods__content-link" href="/neighborhoods/<?php echo get_post()->post_name; ?>">Learn More</a>
                </div>
              </div>

            <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </div>
  </div>
</div>
