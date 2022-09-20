<?php

/**
 * Displays Neighborhood Slider.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
function truncate($text, $chars = 25)
{
  if (strlen($text) <= $chars) {
    return $text;
  }
  $text = $text . " ";
  $text = substr($text, 0, $chars);
  $text = substr($text, 0, strrpos($text, ' '));
  $text = $text . "...";
  return $text;
}
?>

<div id="xyz-php-code-slider-neighborhoods" class="slider-neighborhoods">
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
  <div class="map-neighborhoods">
    <div class="map-neighborhoods__tooltip">
      <div id="tooltip-close" class="map-neighborhoods__tooltip-close"></div>
      <div id="tooltip-content" class="map-neighborhoods__tooltip-content"></div>
    </div>
    <div class="map-neighborhoods__container">
      <div class="map-neighborhoods__column--map">
        <div class="map-neighborhoods__zoom-container">
          <button id="map-neighborhoods__zoom-in" class="map-neighborhoods__zoom">+</button>
          <button id="map-neighborhoods__zoom-out" class="map-neighborhoods__zoom">–</button>
        </div>
        <div id="map-neighborhoods__wrapper" class="map-neighborhoods__wrapper">
          <?php get_template_part('icons/map', null, array('class' => 'map-neighborhoods__icon')); ?>
        </div>
        <p class="map-neighborhoods__citation">This data was pulled from MLS year to date</p>
      </div>
      <div class="map-neighborhoods__column slider-neighborhoods__slider">
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
        <!-- <div id="slider-container" class="slider-neighborhoods__slider-container">
          <div class="slider-neighborhoods__track">
            <?php if ($query->have_posts()) :
              while ($query->have_posts()) : $query->the_post();

                $category = get_the_terms(get_post()->ID, 'neighborhood-category')[0]->slug;

                if (have_rows('background_image')) :
                  while (have_rows('background_image')) : the_row();
                    $image = get_sub_field('image'); ?>

                    <div class="slider-neighborhoods__slide" data-name='<?php echo the_title(); ?>' data-mapinfo='<?php echo json_encode(get_field("map_info_window")); ?>' data-hjisinglemonthly='<?php echo get_field("single_last_month"); ?>' data-hjicondomonthly='<?php echo get_field("condo2br2b_data"); ?>' data-walkscore='<?php echo get_field("walk_score"); ?>' data-transitscore='<?php echo get_field("transit_score"); ?>' data-weather='<?php echo get_field("weather"); ?>' data-neighborhood='<?php echo get_post()->post_name; ?>' data-category='<?php echo $category ?>'>
                    </div>


                <?php endwhile;
                endif; ?>

            <?php endwhile;
            endif; ?>
          </div>
        </div> -->
        <!-- Loops through the posts and displays neighborhood descriptions -->
        <div class="slider-neighborhoods__content-container">
          <!-- <div class="slider-neighborhoods__content-fade"></div> -->
          <div class="slider-neighborhoods__content-column">
            <div id="empty-state" class="slider-neighborhoods__empty-state">
            <?php if(is_page('neighborhoods') || is_page('buy') || is_page('what-costs-how-much-where-in-san-francisco')): ?>
              <p class="slider-neighborhoods__empty-state-content"><?php echo get_field('neighborhoods_empty_state_text', 35); ?></p>
            <?php else : ?>
              <p class="slider-neighborhoods__empty-state-content"><?php echo get_field('single_neighborhood_empty_state_text', 35); ?></p>
            <?php endif; ?>
            </div>
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
                  'terms' => array('active', 'coming-soon')
                )
              )
            );
            $active_query = new WP_Query($active_args); ?>
            <?php if ($active_query->have_posts()) :
              while ($active_query->have_posts()) : $active_query->the_post(); ?>
                <div class="slider-neighborhoods__content-wrapper" data-index='<?php echo $active_query->current_post; ?>' data-name='<?php echo the_title(); ?>' data-mapinfo='<?php echo json_encode(get_field("map_info_window")); ?>' data-hjisinglemonthly='<?php echo get_field("single_last_month"); ?>' data-hjicondomonthly='<?php echo get_field("condo2br2b_data"); ?>' data-walkscore='<?php echo get_field("walk_score"); ?>' data-transitscore='<?php echo get_field("transit_score"); ?>' data-weather='<?php echo get_field("weather"); ?>' data-neighborhood='<?php echo get_post()->post_name; ?>' data-category='<?php echo $category ?>'>
                  <div class="slider-neighborhoods__content">
                    <h3 class="slider-neighborhoods__content-title"><?php echo the_title(); ?></h3>
                    <div class="slider-neighborhoods__content-description">
                      <div class="slider-neighborhoods__score-row">
                        <div class="slider-neighborhoods__score">
                          <p id="transit-score-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__score-content">90</p>
                          <p class="slider-neighborhoods__score-label">transit score</p>
                        </div>
                        <div class="slider-neighborhoods__score">
                          <p id="walk-score-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__score-content">92</p>
                          <p class="slider-neighborhoods__score-label">walk score</p>
                        </div>
                        <div class="slider-neighborhoods__score">
                          <p id="weather-score-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__score-content">42°-78°</p>
                          <p class="slider-neighborhoods__score-label">weather score</p>
                        </div>
                      </div>
                      <div class="slider-neighborhoods__price-row">
                        <p class="slider-neighborhoods__price-heading">House</p>
                        <div class="slider-neighborhoods__price">
                          <p id="single-median-price-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__price-content">$5,555,555</p>
                          <p class="slider-neighborhoods__price-label">median sale price</p>
                        </div>
                        <div class="slider-neighborhoods__price-sq-ft">
                          <p id="single-sq-ft-price-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__price-content">$5,555.23</p>
                          <p class="slider-neighborhoods__price-label">price to sq footage</p>
                        </div>
                      </div>
                      <div class="slider-neighborhoods__price-row">
                        <p class="slider-neighborhoods__price-heading">2BR/2BA Condo</p>
                        <div class="slider-neighborhoods__price">
                          <p id="condo-median-price-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__price-content">$c5,555,555</p>
                          <p class="slider-neighborhoods__price-label">median sale price</p>
                        </div>
                        <div class="slider-neighborhoods__price-sq-ft">
                          <p id="condo-sq-ft-price-display-<?php echo $active_query->current_post; ?>" class="slider-neighborhoods__price-content">$c5,555.23</p>
                          <p class="slider-neighborhoods__price-label">price to sq footage</p>
                        </div>
                      </div>
                      <p class="slider-neighborhoods__description">
                        <?php echo truncate(get_field('description'), 300) ?>
                      </p>
                    </div>
                    <?php if (get_field('description') !== '') : ?>
                      <a class="slider-neighborhoods__content-link" href="/neighborhoods/<?php echo get_post()->post_name; ?>" aria-label="learn more about <?php echo get_post()->post_name; ?> neighborhood">Learn More</a>
                    <?php else : ?>
                      <p class="slider-neighborhoods__coming-soon">Coming Soon</p>
                    <?php endif; ?>
                  </div>
                </div>
              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
        <div class="slider-neighborhoods__carousel-controls-container">
          <div id="previous" class="slider-neighborhoods__previous-wrapper">
            <?php get_template_part('icons/arrow', null, array('class' => 'slider-neighborhoods__previous-arrow')); ?>
          </div>
          <div id="next" class="slider-neighborhoods__next-wrapper">
            <?php get_template_part('icons/arrow', null, array('class' => 'slider-neighborhoods__next-arrow')); ?>
          </div>
          <div class="slider-neighborhoods__pagination-container">
            <div class="slider-neighborhoods__pagination-line"></div>
            <div id="pagination-indicator" class="slider-neighborhoods__pagination-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>