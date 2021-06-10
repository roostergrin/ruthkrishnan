<?php
/**
 * Displays Neighborhood Map.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="map-neighborhoods">
  <div class="map-neighborhoods__tooltip">
    <div class="map-neighborhoods__tooltip-close"></div>
    <div id="tooltip-content" class="map-neighborhoods__tooltip-content"></div>
  </div>
  <div class="map-neighborhoods__container">
    <div class="map-neighborhoods__column">
      <h2>This is the Neighborhood Map</h2>
      <?php get_template_part('icons/test-map', null, array( 'class' => 'map-neighborhoods__icon' )); ?>
    </div>
  </div>
</div>