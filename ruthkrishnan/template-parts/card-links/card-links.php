<?php
/**
 * Displays multi-card image links section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( have_rows($args['acf_group']) ) :
  while ( have_rows($args['acf_group']) ) : the_row(); 

    $background_image = get_sub_field('background');
    $title = get_sub_field('title'); ?>

    <div class="card-links">
      <div class="card-links__background">
        <?php echo wp_get_attachment_image($background_image, 'full', false, [ 'class' => 'card-links__background-image' ]); ?>
      </div>
      <div class="card-links__container">
        <h2 class="card-links__title"><?php echo $title; ?></h2>
        <div class="card-links__cards">

          <?php if ( have_rows('cards') ) :
            while ( have_rows('cards') ) : the_row(); 
              
            $card_image = get_sub_field('image');
            $card_link = get_sub_field('link');
            $card_text = get_sub_field('text');
            $card_aria = get_sub_field('context') ?>

              <div class="card-links__card">
                <a href="<?php echo $card_link; ?>" aria-label="<?php echo $card_aria; ?>" class="card-links__card-container">
                  <?php echo wp_get_attachment_image($card_image, 'medium_large', false, [ 'class' => 'card-links__card-image' ]); ?>
                  <div class="card-links__card-overlay"></div>
                  <div class="card-links__card-text"><?php echo $card_text; ?></div>
                </a>
              </div>

            <?php endwhile;
          endif; ?>

        </div>
        <!-- <?php print_r($args['content']); ?> -->
      </div>
    </div>

  <?php endwhile;
endif; ?>
