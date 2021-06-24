<?php
/**
 * Displays the Blog archives section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="blog-archives">
  <div class="blog-archives__container">
    <h2 class="blog-archives__title">Archives</h2>
    <div class="blog-archives__slides-container">
      <?php get_template_part('icons/arrow', null, array( 'class' => 'blog-archives__navigation blog-archives__navigation--prev' ) ) ?>
      <div class="blog-archives__slides">
        <?php wp_get_archives( array(
          'format' => 'custom',
          'before' => '<div class="blog-archives__date">',
          'after' => '</div>'
        ) ); ?>
      </div>
      <?php get_template_part('icons/arrow', null, array( 'class' => 'blog-archives__navigation blog-archives__navigation--next' ) ) ?>
    </div>
  </div>
</div>
