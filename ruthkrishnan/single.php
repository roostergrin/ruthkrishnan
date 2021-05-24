<?php
/**
 * The template for displaying all posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

<h1>Default Single</h1>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        echo the_title();
    endwhile;
endif;
?>

<?php get_footer(); ?>