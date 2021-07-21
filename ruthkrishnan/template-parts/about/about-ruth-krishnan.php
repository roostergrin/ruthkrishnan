<?php
/**
 * Displays About Ruth Krishnan section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="about-ruth">
  <div class="about-ruth__color-box"></div>
  <div class="about-ruth__container">
    <div class="about-ruth__col-left">
      <div class="about-ruth__image-container">
        <?php echo wp_get_attachment_image(get_field('about_ruth_image'), 'full', false, [ 'class' => 'about-ruth__image' ]); ?>
      </div>
    </div>
    <div class="about-ruth__col-right">
      <h2 class="about-ruth__title"><?php echo get_field('about_ruth_title'); ?></h2>

      <div class="about-ruth__content">

        <div class="about-ruth__navigation">
          <?php if ( have_rows('about_ruth_slides') ) :
              while ( have_rows('about_ruth_slides') ) : the_row(); 
  
                $title = get_sub_field('title'); ?>
  
                <div class="about-ruth__nav-link"><?php echo $title; ?></div>
  
              <?php endwhile;
            endif; ?>
        </div>
  
        <div class="about-ruth__slides">
          <?php if ( have_rows('about_ruth_slides') ) :
            while ( have_rows('about_ruth_slides') ) : the_row(); 
  
              $text = get_sub_field('text'); ?>
  
              <div class="about-ruth__slide">
                <div class="about-ruth__slide-text"><?php echo $text; ?></div>
              </div>
  
            <?php endwhile;
          endif; ?>
        </div>
        
      </div>


    </div>
  </div>
</div>