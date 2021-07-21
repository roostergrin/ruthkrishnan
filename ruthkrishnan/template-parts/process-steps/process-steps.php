<?php
/**
 * Process Steps.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="process-steps">
  <div class="process-steps__container">
    <div class="process-steps__column-sm">
      <h2 class="process-steps__title"><span>Process:</span> <?php echo get_field('process_steps_title'); ?></h2>
      <?php if ( !empty(get_field('process_steps_text')) ) : ?>
        <div class="process-steps__text"><?php echo get_field('process_steps_text'); ?></div>
      <?php endif; ?>
    </div>
    <div class="process-steps__column-lg">
      <ul class="process-steps__list">
        <?php if ( have_rows('process_steps') ) :
          $count = 1;
          while ( have_rows('process_steps') ) : the_row();

            $text = get_sub_field('text'); ?>

            <li class="process-steps__list-item">
              <span class="process-steps__list-number"><?php echo '0' . $count; ?></span>
              <h4 class="process-steps__list-text"><?php echo $text; ?></h4>
            </li>

            <?php $count++; ?>
          
          <?php endwhile;
        endif; ?>
      </ul>
    </div>
  </div>
</div>
