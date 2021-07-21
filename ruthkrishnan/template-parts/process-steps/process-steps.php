<?php
/**
 * Process Steps.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="sell-process">
  <div class="sell-process__container">
    <div class="sell-process__column-sm">
      <h2 class="sell-process__title"><span>Process:</span> <?php echo get_field('process_steps_title'); ?></h2>
      <?php if ( !empty(get_field('process_steps_text')) ) : ?>
        <div class="sell-process__text"><?php echo get_field('process_steps_text'); ?></div>
      <?php endif; ?>
    </div>
    <div class="sell-process__column-lg">
      <ul class="sell-process__list">
        <?php if ( have_rows('process_steps') ) :
          $count = 1;
          while ( have_rows('process_steps') ) : the_row();

            $text = get_sub_field('text'); ?>

            <li class="sell-process__list-item">
              <span class="sell-process__list-number"><?php echo '0' . $count; ?></span>
              <h4 class="sell-process__list-text"><?php echo $text; ?></h4>
            </li>

            <?php $count++; ?>
          
          <?php endwhile;
        endif; ?>
      </ul>
    </div>
  </div>
</div>
