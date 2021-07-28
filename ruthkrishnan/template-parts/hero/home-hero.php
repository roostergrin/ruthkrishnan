<?php
/**
 * Displays the Hero component on the home page.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="home-hero">
  <div class="home-hero__overlay"></div>
  <video class="home-hero__video" src="<?php echo get_field('hero_video'); ?>" autoplay loop muted playsinline></video>
  <!-- <div class="home-hero__pause-btn"></div> -->
</div>
