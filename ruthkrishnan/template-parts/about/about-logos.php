<?php
/**
 * Displays About Logos section.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( !empty(get_field('about_logos')) ) : ?>
  <div class="about-logos">
    <div class="about-logos__container">
      <div class="about-logos__track">
        <?php 
        $count = 0;
        $logos = get_field('about_logos'); 

        foreach ( $logos as $key=>$logo ) : ?>
          <div class="about-logos__logo-container" data-index="<?php echo $count; ?>">
            <?php echo wp_get_attachment_image($logo, 'full', false, [ 'class' => 'about-logos__logo']); ?>
          </div>
          <?php $count++; ?>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
<?php endif; ?>
