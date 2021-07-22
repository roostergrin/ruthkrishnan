<?php
/**
 * Before and After image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="case-studies">
  <div class="case-studies__container">
    <div class="case-studies__background"></div>
    <h2 class="case-studies__title"><?php echo get_field('case_studies_title'); ?></h2>
    <div class="case-studies__text"><?php echo get_field('case_studies_text'); ?></div>
    <div class="case-studies__link">
      <a href="<?php echo get_field('case_studies_link'); ?>" class="case-studies__btn"><?php echo get_field('case_studies_link_text'); ?></a>
    </div>

      <?php $slides = get_field('case_studies_gallery'); ?>

      <div class='case-studies__slider' data-slider-length='<?php echo count($slides); ?>'>
        <?php if ( have_rows('case_studies_gallery') ) :
          $count = 0;
          while ( have_rows('case_studies_gallery') ) : the_row();
            
            $left_image = get_sub_field('left');
            $right_image = get_sub_field('right'); ?>

            <div class="case-studies__slide" data-index="<?php echo $count; ?>">
              <?php echo wp_get_attachment_image($left_image, 'full', false, [ 'class' => 'case-studies__image']); ?>
              <?php echo wp_get_attachment_image($right_image, 'full', false, [ 'class' => 'case-studies__image']); ?>
            </div>
          
            <?php $count++; ?>
          <?php endwhile;
        endif; ?>

      <div class="case-studies__prev" aria-label='Previous Slide'> 
        <?php get_template_part('icons/arrow', null, array( 'class' => 'case-studies__icon case-studies__icon--prev' )); ?>
      </div>
      <div class="case-studies__next" aria-label='Next Slide'> 
        <?php get_template_part('icons/arrow', null, array( 'class' => 'case-studies__icon case-studies__icon--next' )); ?>
      </div>

    </div>
    <div class='case-studies__indicators'>
      <?php if ( have_rows('case_studies_gallery') ) :
        $count = 0;
        while ( have_rows('case_studies_gallery') ) : the_row(); ?>

          <div class="case-studies__dot" data-index="<?php echo $count; ?>"></div>

          <?php $count++; ?>
        <?php endwhile;
      endif; ?>
    </div>


  </div>

</div>
