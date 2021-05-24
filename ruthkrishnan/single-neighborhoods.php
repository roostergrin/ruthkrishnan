<?php
/**
 * The template for displaying all Neighborhood posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

<h1>Neighborhood Post</h1>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        echo the_title();
    endwhile;
endif;
?>

<?php get_footer(); ?>