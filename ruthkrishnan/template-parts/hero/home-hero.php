<?php
/**
 * Displays the Hero component on the home page.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="home-hero__overlay"></div>
<video class="home-hero__video" autoplay controls loop muted playsinline>
  <source src="<?php echo get_field('hero_video'); ?>" type="video/mp4">
  <track kind="captions" src="<?php echo get_field('hero_webvtt'); ?>" srclang="en">
  <track kind="descriptions" src="<?php echo get_field('hero_webvtt_ad'); ?>" srclang="en" default>
</video>
<!-- <div class="home-hero__pause-btn"></div> -->
