<?php
/**
 * Displays Our Performance Section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="our-performance">
  <div class="our-performance__container">
    <h2 class="our-performance__title"><?php echo get_field('performance_title'); ?></h2>
    <div class="our-performance__content">
      <div class="our-performance__text"><?php echo get_field('performance_text'); ?></div>
      <?php echo wp_get_attachment_image(get_field('performance_image'), 'full', false, [ 'class' => 'our-performance__image' ]); ?>
    </div>
  </div>
</div>
