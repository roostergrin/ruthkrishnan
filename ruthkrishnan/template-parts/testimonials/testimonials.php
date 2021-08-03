<?php
/**
 * Client Testimonials.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
wp_reset_query();
?>

<div class="testimonials-section">
  <div class="testimonials-section__container">
    <div class="testimonials-section__color-block"></div>

    <div class="testimonials-section__col">
      <div class="testimonials-section__images-slider" data-image-slider-length='<?php echo count(get_field('testimonials')); ?>'>
        <?php if ( have_rows('testimonials') ) :
          while ( have_rows('testimonials' ) ) : the_row();

          $image = get_sub_field('image');

          ?>
          <div class="testimonials-section__image-slide" data-image-index='<?php echo get_row_index(); ?>'>
            <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'testimonials-section__image' ]); ?>
          </div>
          <?php endwhile; ?>
        <?php endif; ?>
      </div>
    </div>

    <div class="testimonials-section__content-col">
      <div class="testimonials-section__content-slider">
        <?php echo wp_get_attachment_image(get_field('background'), 'medium_large', false, [ 'class' => 'testimonials-section__background-image' ]); ?>
        <div class="testimonials-section__title">
          <h2><?php echo get_field('title')?></h2>
        </div>
        <div class="testimonials-section__content-wrapper">
          <?php if ( have_rows('testimonials') ) :
            while ( have_rows('testimonials' ) ) : the_row();

              $text = get_sub_field('content');
              $name = get_sub_field('name');
              ?>
              <div class="testimonials-section__content-slide" data-content-index='<?php echo get_row_index(); ?>'>
                <div class="testimonials-section__content">
                  <div class="testimonials-section__text"><?php echo $text ?></div>
                  <div class="testimonials-section__name"><?php echo $name ?></div>
                </div>
              </div>
            <?php endwhile; ?>
          <?php endif; ?>
          <div class="testimonials-section__indicators">
            <div class="testimonials-section__nav testimonials-section__nav--prev">
              <?php get_template_part('icons/arrow', null, array( 'class' => 'testimonials-section__nav-icon testimonials-section__nav-icon--prev')); ?>
            </div>
            <?php foreach (get_field('testimonials') as $key=>$dot) : ?>
              <div class="testimonials-section__dot" data-index='<?php echo $key; ?>'></div>
            <?php endforeach; ?>
            <div class="testimonials-section__nav testimonials-section__nav--next">
              <?php get_template_part('icons/arrow', null, array( 'class' => 'testimonials-section__nav-icon testimonials-section__nav-icon--next')); ?>
            </div>
          </div>
        </div>
      </div>
    </div> <!-- content-col -->
  </div> <!-- container -->
</div>
