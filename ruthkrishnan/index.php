<?php

wp_header(); ?>

<h1>Ruth Krishnan</h1>

<?php
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        echo get_the_content()
    endwhile;
endif;
?>

<?php wp_footer(); ?>
