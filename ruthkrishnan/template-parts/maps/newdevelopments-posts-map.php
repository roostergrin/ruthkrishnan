<?php
/**
 * Displays google map on New Developments Posts.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<section class="new-developments-neighborhood">
  <?php if ( have_rows('location') ) :
      while ( have_rows('location' ) ) : the_row();

        $address_1 = get_sub_field('address_1');
        $city_state = get_sub_field('city_and_state');

      ?>

      <?php endwhile; ?>
  <?php endif; ?>

  <?php if ( have_rows('neighborhood') ) :
    while ( have_rows('neighborhood' ) ) : the_row();

      $guide = get_sub_field('neighborhood_guides');
      $additional_description = get_sub_field('additional_description');
      $custom_neighborhood = get_sub_field('custom_neighborhood');
      $custom_title = get_sub_field('custom_neighborhood_title');
      $custom_description = get_sub_field('custom_neighborhood_information'); ?>

      <div class='new-developments-neighborhood__container'>
          <?php if ( $guide && !$custom_neighborhood ) : ?>
            <h2 class='new-developments-neighborhood__title'><?php echo $guide->post_title; ?></h2>
            <div class='new-developments-neighborhood__content'>
              <div class='new-developments-neighborhood__description'><?php echo get_field('description', $guide->ID); ?></div>
              <?php if ($additional_description) : ?>
                <div class="new-developments-neighborhood__additional-description"><?php echo $additional_description; ?></div>
              <?php endif; ?>
              <a class='new-developments-neighborhood__link' href='/neighborhoods/<?php echo $guide->post_name; ?>'>learn more about this neighborhood</a>
            </div>
          <?php elseif ( $custom_neighborhood ) : ?>
            <h2 class='new-developments-neighborhood__title'><?php echo $custom_title; ?></h2>
            <div class="new-developments-neighborhood__content">
              <div class="new-developments-neighborhood__description"><?php echo $custom_description ?></div>
            </div>
          <?php endif; ?>
          <div class='new-developments-neighborhood__map' id='gmapnd' data-address='<?php echo $address_1 . ' ' . $city_state; ?>'></div>
      </div>

    <?php endwhile; ?>
  <?php endif; ?>
</section>
