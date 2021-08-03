<?php
/**
 * Resources Links Section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="resources-links">
  <div class="resources-links__container">
    <?php echo wp_get_attachment_image(get_field('resources_links_background'), 'full', false, [ 'class' => 'resources-links__background' ]); ?>
    <h2 class="resources-links__title"><?php echo get_field('resources_links_title'); ?></h2>
    <div class="resources-links__links">
      <?php if ( have_rows('resources_links') ) :
        while ( have_rows('resources_links') ) : the_row();

          $text = get_sub_field('text'); 
          $link = get_sub_field('link'); ?>

          <a href="<?php echo $link; ?>" class="resources-links__link-container">
            <div class="resources-links__link-text-container">
              <div class="resources-links__link-background"></div>
              <h3 class="resources-links__link-text"><?php echo $text; ?></h3>
            </div>
            <div class="resources-links__icon-container">
              <?php get_template_part('icons/arrow-alt', null, array( 'class' => 'resources-links__icon' )); ?>
            </div>
          </a>
        
        <?php endwhile;
      endif; ?>
    </div>
  </div>
</div>