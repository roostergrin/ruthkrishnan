<?php
/**
 * Displays the site Hero.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( have_rows('background_image') ) :
   while ( have_rows('background_image' ) ) : the_row();

      $image = get_sub_field('image');

      if ( have_rows('positioning') ) :
        while (have_rows('positioning') ) : the_row();
          $xcoord  = get_sub_field('x_coordinates');
          $ycoord = get_sub_field('y_coordinates');

      ?>

      <div class='hero-template'>
        <div class='hero-template__overlay'></div>
        <div class='hero-template__background' style='background-image: url( <?php echo $image; ?> ); background-position: <?php echo $xcoord; echo " "; echo $ycoord; ?> '></div>
        <div class='hero-template__container'>
          <div class='hero-template__content'>
            <h1 class='hero-template__title'>
              <?php if ( get_field('title_option') ) :
                echo get_field('title_option');
                else : echo the_title();
              endif; ?>
          </div>
        </div>
      </div>

    <?php endwhile; ?> <!-- end positioning while -->
 <?php endif; ?> <!-- end positioning if -->
   <?php endwhile; ?>
<?php endif; ?>
