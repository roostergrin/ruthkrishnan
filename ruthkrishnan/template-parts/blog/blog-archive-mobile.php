<?php
/**
 * Displays the Blog archives section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="blog-archives-mobile">
  <div class="blog-archives-mobile__container">
    <?php if (is_archive()) : ?>
      <h2 class="blog-archives-mobile__title">Archives</h2>
    <?php endif; ?>
    <div class="blog-archives-mobile__slides-container">
      <?php get_template_part('icons/arrow', null, array( 'class' => 'blog-archives-mobile__navigation blog-archives-mobile__navigation--prev' ) ) ?>
      <div class="blog-archives-mobile__slides">
        <?php wp_get_archives( array(
          'format' => 'custom',
          'before' => '<div class="blog-archives-mobile__date">',
          'after' => '</div>'
        ) ); ?>
      </div>
      <?php get_template_part('icons/arrow', null, array( 'class' => 'blog-archives-mobile__navigation blog-archives-mobile__navigation--next' ) ) ?>
    </div>
  </div>
</div>
