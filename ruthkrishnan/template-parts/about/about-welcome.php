<?php
/**
 * Template Part: About Welcome Section
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
?>

<section class="about-welcome">
  <div class="about-welcome__container">
    <h2 class="about-welcome__title"><?php echo get_field('about_title') ?></h2>
    <div class="about-welcome__content">
      <div class="about-welcome__text">
        <?php echo get_field('about_content') ?>
      </div>
    </div>
  </div>
</section> 