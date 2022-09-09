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

  <div class="slider-neighborhoods__filters-container">
    <div class="slider-neighborhoods__filters">
      <!-- <a data-filter='single median sale price' tabindex="0" role="button" class="slider-neighborhoods__filter slider-neighborhoods__filter--active">Median Sale Price this month</a> -->
      <a data-filter='transit score' tabindex="0" role="button" class="slider-neighborhoods__filter slider-neighborhoods__filter--active">Transit score</a>
      <a data-filter='walk score' tabindex="0" role="button" class="slider-neighborhoods__filter">Walk score</a>
      <a data-filter='weather' tabindex="0" role="button" class="slider-neighborhoods__filter">Weather</a>
      <a data-filter='single median sale price' tabindex="0" role="button" class="slider-neighborhoods__filter">median sale price</a>
    </div>
  </div>
  <div id="legend" class="slider-neighborhoods__legend-container">
  </div>
  <?php get_template_part('template-parts/maps/neighborhoods-map'); ?>
</div>
<div class="slider-neighborhoods__slider">
  <?php
  $args = array(
    'post_type' => 'neighborhoods',
    'posts_per_page' => -1,
    'post_status' => 'publish',
    'orderby' => 'title',
    'order' => 'ASC',
  );

  $query = new WP_Query($args); ?>

  <!-- Loops through posts and displays the neighborhood images -->
  <div id="slider-container" class="slider-neighborhoods__slider-container">
    <div class="slider-neighborhoods__track">
      <?php if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post();

          $category = get_the_terms(get_post()->ID, 'neighborhood-category')[0]->slug;

          if (have_rows('background_image')) :
            while (have_rows('background_image')) : the_row();
              $image = get_sub_field('image'); ?>

              <div class="slider-neighborhoods__slide"
				   style="<?php if ($category === 'coming-soon') : echo 'display: none'; endif; ?>"
				   data-name='<?php echo the_title(); ?>'
				   data-mapinfo='<?php echo json_encode(get_field("map_info_window")); ?>'
				   data-hjisinglemonthly='<?php echo get_field("single_last_month"); ?>'
				   data-hjicondomonthly='<?php echo get_field("condo2br2b_data"); ?>'
				   data-walkscore='<?php echo get_field("walk_score"); ?>'
				   data-transitscore='<?php echo get_field("transit_score"); ?>'
				   data-weather='<?php echo get_field("weather"); ?>'
				   data-neighborhood='<?php echo get_post()->post_name; ?>'
				   data-category='<?php echo $category ?>'
				>
                <div class="slider-neighborhoods__image-container">
                  <?php echo wp_get_attachment_image($image, 'medium_large', false, ['class' => 'slider-neighborhoods__image']); ?>
                </div>
              </div>


          <?php endwhile;
          endif; ?>

      <?php endwhile;
      endif; ?>
    </div>
  </div>
  <div class="slider-neighborhoods__carousel-controls-container">
    <div id="previous" class="slider-neighborhoods__previous-wrapper">
      <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-neighborhoods__previous-arrow')); ?>
    </div>
    <div class="slider-neighborhoods__pagination-container">
      <div class="slider-neighborhoods__pagination-line"></div>
      <div id="pagination-indicator" class="slider-neighborhoods__pagination-indicator"></div>
    </div>
    <div id="next" class="slider-neighborhoods__next-wrapper">
      <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-neighborhoods__next-arrow')); ?>
    </div>
    </div>
  <!-- Loops through the posts and displays neighborhood descriptions -->
  <div class="slider-neighborhoods__content-container">
    <!-- <div class="slider-neighborhoods__content-fade"></div> -->
    <div class="slider-neighborhoods__content-column">
      <?php
      $active_args = array(
        'post_type' => 'neighborhoods',
        'posts_per_page' => -1,
        'post_status' => 'publish',
        'orderby' => 'title',
        'order' => 'ASC',
        'tax_query' => array(
          array(
            'taxonomy' => 'neighborhood-category',
            'field' => 'slug',
            'terms' => 'active'
          )
        )
      );

      $active_query = new WP_Query($active_args); ?>
      <?php if ($active_query->have_posts()) :
        while ($active_query->have_posts()) : $active_query->the_post(); ?>
          <div class="slider-neighborhoods__content-wrapper" data-index='<?php echo $active_query->current_post; ?>'>
            <div class="slider-neighborhoods__content">
              <h3 class="slider-neighborhoods__content-title"><?php echo the_title(); ?></h3>
              <div class="slider-neighborhoods__content-description">
                <?php echo get_field('description'); ?>
              </div>
              <?php if (have_rows('single_neighborhoods_icons')) : ?>
                <div class="slider-neighborhoods__content-icons">
                  <?php while (have_rows('single_neighborhoods_icons')) : the_row();

                    $icon = get_sub_field('icon');
                    $text = get_sub_field('text'); ?>

                    <div class="slider-neighborhoods__content-icon-container">
                      <?php get_template_part('icons/' . $icon, null, array('class' => 'slider-neighborhoods__content-icon')); ?>
                      <div class="slider-neighborhoods__content-icon-text"><?php echo $text; ?></div>
                    </div>

                  <?php endwhile; ?>
                </div>
              <?php endif; ?>
              <a class="slider-neighborhoods__content-link" href="/neighborhoods/<?php echo get_post()->post_name; ?>" aria-label="learn more about <?php echo get_post()->post_name; ?> neighborhood">Learn More</a>
            </div>
          </div>
        <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </div>
</div>
</div>
