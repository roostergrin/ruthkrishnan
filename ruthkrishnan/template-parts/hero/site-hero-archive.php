<?php
/**
 * Displays the site Hero.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php

  $blogID = get_page_by_title('Blog')->ID;

  if ( have_rows('background_image', $blogID) ) :
    while ( have_rows('background_image', $blogID) ) : the_row();

      $image = get_sub_field('image');

      if ( have_rows('positioning', $blogID) ) :
        while (have_rows('positioning', $blogID) ) : the_row();
          $xcoord  = get_sub_field('x_coordinates');
          $ycoord = get_sub_field('y_coordinates');

      ?>

          <div class='hero-template'>
            <figure class='hero-template__wrapper' data-position-x='<?php echo $xcoord ?>' data-position-y='<?php echo $ycoord ?>'>
              <div class='hero-template__overlay'></div>
              <?php if ( !empty($image) ) :
                echo wp_get_attachment_image( $image, 'full', false, [ 'class' => 'hero-template__background' ]);
              endif; ?>
            </figure>

            <div class='hero-template__container'>
              <div class='hero-template__content'>
                <h1 class='hero-template__title'>Archives</h1>
              </div>
            </div>
          </div>

        <?php endwhile; // end positioning while ?>
      <?php endif; // end positioning if ?>
   <?php endwhile; ?>
<?php endif; ?>
