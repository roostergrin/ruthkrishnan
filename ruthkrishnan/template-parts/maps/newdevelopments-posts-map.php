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
      $additional_neighborhood = get_sub_field('additional_neighborhood'); ?>

      <div class='new-developments-neighborhood__container'>
          <?php if ( $guide ) : ?>
            <h2 class='new-developments-neighborhood__title'><?php echo $guide->post_title; ?></h2>
            <div class='new-developments-neighborhood__content'>
              <div class='new-developments-neighborhood__description'><?php echo get_field('description', $guide->ID); ?></div>
              <a class='new-developments-neighborhood__link' href='/neighborhoods/<?php echo $guide->post_name; ?>'>learn more about this neighborhood</a>
            </div>
          <?php elseif ( $additional_neighborhood ) : ?>
            <h2 class='new-developments-neighborhood__title'><?php echo $additional_neighborhood; ?></h2>
          <?php endif; ?>
          <div class='new-developments-neighborhood__map' id='gmapnd' data-address='<?php echo $address_1 . ' ' . $city_state; ?>'></div>
      </div>

    <?php endwhile; ?>
  <?php endif; ?>
</section>
