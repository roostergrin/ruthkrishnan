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
    <div id="tooltip-close" class="map-neighborhoods__tooltip-close"></div>
    <div id="tooltip-content" class="map-neighborhoods__tooltip-content"></div>
  </div>
  <div class="map-neighborhoods__container">
    <div class="map-neighborhoods__column">
      <?php get_template_part('icons/map', null, array( 'class' => 'map-neighborhoods__icon' )); ?>
    </div>
  </div>
</div>
