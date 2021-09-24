<?php
/**
 * Displays the website Hero component.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class='hero-listings'>
  <?php if ( get_field('hero_type') === 'image' ) : ?>

    <!-- Hero Image -->
    <?php if ( have_rows('background_image') ) :
      while ( have_rows('background_image') ) : the_row();
        $image = get_sub_field('image');

        // Hero Positioning
        if ( have_rows('positioning') ) :
          while (have_rows('positioning') ) : the_row();
            $xcoord  = get_sub_field('x_coordinates');
            $ycoord = get_sub_field('y_coordinates'); ?>

            <figure class='hero-listings__wrapper' data-position-x='<?php echo $xcoord ?>' data-position-y='<?php echo $ycoord ?>'>
              <!-- <div class='hero-listings__overlay'></div> -->

              <?php if ( !empty($image) ) : 
                echo wp_get_attachment_image( $image, 'full', false, [ 'class' => 'hero-listings__background' ]);
              endif; ?>

            </figure>
        
          <?php endwhile;
        endif; ?>  
        <!-- END Hero Positioning -->

      <?php endwhile;
    endif; ?> 
    <!-- END Hero Image -->
      
  <?php else : ?>
    
    <!-- Hero Video -->
    <figure class='hero-listings__wrapper' data-position-x='center' data-position-y='center'>
      <!-- <div class='hero-listings__overlay'></div> -->

        <?php if ( !empty(get_field('background_video')) ) : ?>
          <div class="hero-listings__background">
            <iframe src="<?php echo get_field('background_video') ?>?portrait=0&byline=0&title=0&autoplay=1&loop=1" class="hero-listings__iframe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          </div>
        <?php endif; ?>

    </figure>
    <!-- END Hero Video -->

  <?php endif; ?>

</div>
