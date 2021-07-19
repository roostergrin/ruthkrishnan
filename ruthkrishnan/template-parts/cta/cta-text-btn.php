<?php
/**
 * Displays CTA (text & button) section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( have_rows($args['acf_group']) ) :
  while ( have_rows($args['acf_group']) ) : the_row();

    $title = get_sub_field('title');
    $text = get_sub_field('text');
    $btn_text = get_sub_field('button_text');
    $btn_link = get_sub_field('button_link'); ?>

    <div class="cta-text-btn">
      <div class="cta-text-btn__container">
        <div class="cta-text-btn__column">
          <h2 class="cta-text-btn__title"><?php echo $title; ?></h2>
          <?php if ( !empty($text) ) : ?>
            <div class="cta-text-btn__text"><?php echo $text; ?></div>
          <?php endif; ?>
          <a href="<?php echo $btn_link; ?>" class="cta-text-btn__btn"><?php echo $btn_text; ?></a>
        </div>
      </div>
    </div>

  <?php endwhile;
endif; ?>