<?php
/**
 * Displays all the Blog Posts.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<div class="page-blog-main">
  <div class="page-blog-main__intro-container">
    <div class="page-blog-main__intro">
      <h2 class="page-blog-main__intro-title"><?php echo the_title(); ?></h2>
      <div class="page-blog-main__intro-text">
        <?php echo $args["introduction"]; ?>
      </div>
    </div>
  </div>

  <div class="page-blog-main__posts">
    <?php 
      $query = new WP_Query( $args["query_args"] );

      if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post();
        ?>
    
          <?php echo the_title(); ?>
          <?php next_posts_link(); ?>

        <?php endwhile;
      else : ?>
        <p>Coming Soon.</p>
      <?php endif;
    ?>
  </div>
</div>




