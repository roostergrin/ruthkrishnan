<?php
/**
 * Before and After image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="before-after">
  <div class="before-after__container">
    <?php echo wp_get_attachment_image(get_field('before_after_background'), 'full', false, [ 'class' => 'before-after__background']); ?>
    <h2 class="before-after__title"><?php echo get_field('before_after_title'); ?></h2>
    <div class="before-after__text"><?php echo get_field('before_after_text'); ?></div>

      <?php $slides = get_field('before_after_gallery'); ?>

      <div class='before-after__slider' data-slider-length='<?php echo count($slides); ?>'>
        <?php if ( have_rows('before_after_gallery') ) :
          $count = 0;
          while ( have_rows('before_after_gallery') ) : the_row();
            
            $before_image = get_sub_field('before');
            $after_image = get_sub_field('after'); ?>

            <div class="before-after__slide" data-index="<?php echo $count; ?>">
              <?php echo wp_get_attachment_image($before_image, 'full', false, [ 'class' => 'before-after__image']); ?>
              <?php echo wp_get_attachment_image($after_image, 'full', false, [ 'class' => 'before-after__image']); ?>
            </div>
          
            <?php $count++; ?>
          <?php endwhile;
        endif; ?>

      <div class="before-after__prev" aria-label='Previous Slide'> 
        <?php get_template_part('icons/arrow', null, array( 'class' => 'before-after__icon before-after__icon--prev' )); ?>
      </div>
      <div class="before-after__next" aria-label='Next Slide'> 
        <?php get_template_part('icons/arrow', null, array( 'class' => 'before-after__icon before-after__icon--next' )); ?>
      </div>

    </div>
    <div class="before-after__link">
      <a href="<?php echo get_field('before_after_link'); ?>" class="before-after__btn"><?php echo get_field('before_after_link_text'); ?></a>
    </div>
    <div class='before-after__indicators'>
      <?php if ( have_rows('before_after_gallery') ) :
        $count = 0;
        while ( have_rows('before_after_gallery') ) : the_row(); ?>

          <div class="before-after__dot" data-index="<?php echo $count; ?>"></div>

          <?php $count++; ?>
        <?php endwhile;
      endif; ?>
    </div>


  </div>

</div>
