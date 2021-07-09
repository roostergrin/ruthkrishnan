<?php
/**
 * The template for displaying Property Listings
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

<?php get_template_part('template-parts/hero/listings-hero'); ?>

<h1>Property Listing</h1>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        echo the_title();
    endwhile;
endif;
?>

<?php get_footer(); ?>
