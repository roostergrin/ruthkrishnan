<?php
/**
 * Displays image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<h2>Photo Gallery</h2>
<div class="photo-gallery">
  <?php 

    $images = get_field('photo_gallery');

    foreach ($images as $key=>$image) : ?>
      <div class="photo-gallery__image-container" data-index='<?php echo $key; ?>'>
        <!-- <?php print_r($key); ?> -->
        <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'photo-gallery__image']); ?>
      </div>
    <?php endforeach;
  ?>
</div>