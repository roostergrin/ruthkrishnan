<?php
/**
* Template Name: Front Page Template
* @package WordPress
* @subpackage ruthkrishnan
* @version 1.0.0
*/
get_header(); ?>

<div class='site-wrapper'>
  <main id='content' role='main'>
    <div class="page-home">
      <div class="page-home__loader"></div>
      <?php get_template_part('template-parts/hero/home-hero'); ?>
      <?php get_template_part('template-parts/testimonials/testimonials'); ?>
    </div>
    <h1>Home Page</h1>
  </main>
</div>

<?php get_footer(); ?>
