<?php
/**
 * Process Steps.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="compass-program">
  <div class="compass-program__container">
    <div class="compass-program__column">
      <h2 class="compass-program__title"><?php echo get_field('compass_program_title'); ?></h2>
      <?php if ( !empty(get_field('compass_program_text')) ) : ?>
        <div class="compass-program__text"><?php echo get_field('compass_program_text'); ?></div>
      <?php endif; ?>
    </div>
  </div>
</div>
