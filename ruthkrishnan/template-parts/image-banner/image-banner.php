<?php
/**
 * Three Image Banner Template Part.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="image-banner">
  <div class="image-banner__container">
    <?php if ( have_rows($args['field_name']) ) :
        while ( have_rows($args['field_name']) ) : the_row();
        $image = get_sub_field('image'); ?>
          <div class="image-banner__column">
            <div class="image-banner__image-container">
              <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'image-banner__image' ]); ?>
            </div>
          </div>
        <?php endwhile;
      endif; ?>
  </div>
</div>
