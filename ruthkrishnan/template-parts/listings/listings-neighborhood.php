<?php
/**
 * Displays "The Neighborhood" section on listing pages.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="listings-neighborhood">
  <h2 class="listings-neighborhood__title">The Neighborhood</h2>

  <?php 
    $neighborhood = get_field('neighborhood');
    $is_custom_gallery = in_array('custom_photo_gallery', get_field('custom_neighborhood_sections'));
    $images = $is_custom_gallery ? get_field('neighborhood_photo_gallery') : get_field('photo_gallery', $neighborhood->ID);

    if ( (!empty($neighborhood) || $is_custom_gallery) && $images ) : ?>
      <div class="listings-neighborhood__photo-gallery">
        <div class="listings-neighborhood__photo-gallery-container">

            <div class='listings-neighborhood__photo-gallery-slider' data-slider-length='<?php echo count($images); ?>'>
              <?php
              foreach ($images as $key=>$image) : ?>
                <div class="listings-neighborhood__photo-gallery-slide" data-index='<?php echo $key; ?>'>
                  <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'photo-gallery__image']); ?>
                </div>
              <?php endforeach; ?>

            <div class="listings-neighborhood__photo-gallery-prev" aria-label='Previous Slide'> 
              <?php get_template_part('icons/arrow', null, array( 'class' => 'photo-gallery__icon photo-gallery__icon--prev' )); ?>
            </div>
            <div class="listings-neighborhood__photo-gallery-next" aria-label='Next Slide'> 
              <?php get_template_part('icons/arrow', null, array( 'class' => 'listings-neighborhood__photo-gallery-icon listings-neighborhood__photo-gallery-icon--next' )); ?>
            </div>

          </div>
          <div class='listings-neighborhood__photo-gallery-indicators'>

            <?php
              foreach ($images as $key=>$dot) : ?>
                <div class="listings-neighborhood__photo-gallery-dot" data-index='<?php echo $key; ?>'></div>
            <?php endforeach; ?>
          </div>

        </div>

      </div>
    <?php endif; ?>
  
  <?php 
    $address_1 = get_field('address_1');
    $city_state = get_field('city_and_state');
  ?>
  <div class='listings-neighborhood__map' id='gmapnd' data-address="<?php echo $address_1 . ' ' . $city_state; ?>"></div>


</div>
