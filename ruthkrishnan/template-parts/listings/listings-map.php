<?php
/**
 * Displays "The Neighborhood" section on listing pages.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="listings-map">
<?php
  $custom_sections = get_field('custom_neighborhood_sections');
?>
<?php if ( in_array('no_photo_gallery', $custom_sections) ) : ?>

  <h2 class="listings-neighborhood__title">The Neighborhood</h2>
<?php endif; ?>


  <?php
    $address_1 = get_field('address_1');
    $city_state = get_field('city_and_state');
  ?>
  <div class='listings-map__map' id='gmapnd' data-address="<?php echo $address_1 . ' ' . $city_state; ?>"></div>


</div>
