<?php
/**
 * Template Part: About Featured In Section
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
?>

<section class="about-featured-in">
  <div class="about-featured-in__container">
    <h2 class="about-featured-in__title">Featured In</h2>
    <div class="about-featured-in__logos">
      <?php if (have_rows('about_logo_links')) :
        while (have_rows('about_logo_links')) : the_row();
          $image = get_sub_field('image');
          $link = get_sub_field('link');          
      ?>
        <div class="about-featured-in__logo-wrapper">
          <a href="<?php echo esc_url($link); ?>" class="about-featured-in__logo-link" target="_blank">
            <?php 
              if (!empty($image)) {
                echo wp_get_attachment_image($image['ID'], 'full', false, ['class' => 'about-featured-in__logo-image']);
              }
            ?>
          </a>
        </div>
      <?php 
        endwhile;
      endif; 
      ?>
    </div>
  </div>
</section> 