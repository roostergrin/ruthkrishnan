<?php
/**
 * Displays image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( !empty(get_field('photo_gallery')) ) : ?>
  <div class="photo-gallery">
    <div class="photo-gallery__container">
      <h2 class="photo-gallery__title">
        <?php if ( !empty(get_field('photo_gallery_alternate_title')) ) :
          echo get_field('photo_gallery_alternate_title');
        else : 
          echo 'Photo Gallery';
        endif; ?>
      </h2>

        <?php $images = get_field('photo_gallery'); ?>

        <div class='photo-gallery__slider' data-slider-length='<?php echo count($images); ?>'>
          <?php
          foreach ($images as $key=>$image) : ?>
            <div class="photo-gallery__slide" data-index='<?php echo $key; ?>'>
              <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'photo-gallery__image']); ?>
            </div>
          <?php endforeach; ?>

        <div class="photo-gallery__prev" aria-label='Previous Slide'> 
          <?php get_template_part('icons/arrow', null, array( 'class' => 'photo-gallery__icon photo-gallery__icon--prev' )); ?>
        </div>
        <div class="photo-gallery__next" aria-label='Next Slide'> 
          <?php get_template_part('icons/arrow', null, array( 'class' => 'photo-gallery__icon photo-gallery__icon--next' )); ?>
        </div>

      </div>
      <div class='photo-gallery__indicators'>
        <?php $images = get_field('photo_gallery'); ?>
          <?php
            foreach ($images as $key=>$dot) : ?>
              <div class="photo-gallery__dot" data-index='<?php echo $key; ?>'></div>
          <?php endforeach; ?>
      </div>


    </div>

  </div>
<?php endif; ?>
