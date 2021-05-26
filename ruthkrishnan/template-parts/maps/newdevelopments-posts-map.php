<?php
/**
 * Displays google map on New Developments Posts.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="map-template-new-developments">
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

      <div class='post-developments-information__neighborhood'>
          <?php if ( $guide ) : ?>
            <h2><?php echo $guide->post_title; ?></h2>
            <div><?php echo get_field('description', $guide->ID); ?></div>
            <a href='/neighborhoods/<?php echo $guide->post_name; ?>'>learn more about this neighborhood</a>
          <?php elseif ( $additional_neighborhood ) : ?>
            <h2><?php echo $additional_neighborhood; ?></h2>
          <?php endif; ?>
          <div id='gmapnd' style='height: 800px;' data-address='<?php echo $address_1 . ' ' . $city_state; ?>'></div>
      </div>

    <?php endwhile; ?>
  <?php endif; ?>
</div>