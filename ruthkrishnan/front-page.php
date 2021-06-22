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
    <h1>Home Page</h1>
    <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  </main>
</div>

<?php get_footer(); ?>
