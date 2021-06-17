<?php
/**
 * The template for displaying archives
 *
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
?>

<div class="page-archives">


  <h2 class="page-archives__title">Archive Page</h2>

  <?php
    if ( have_posts() ) :
        while ( have_posts() ) : the_post();
            echo the_title();
        endwhile;
    endif;
  ?>
</div>