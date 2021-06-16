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
    <div class="page-blog-main__posts-container">
      <?php 
        $query = new WP_Query( $args["query_args"] );

        if ( $query->have_posts() ) :
          while ( $query->have_posts() ) : $query->the_post();
          ?>
            <div class="page-blog-main__post">
              <div class="page-blog-main__post-container">
                <?php if ( have_rows('background_image') ) :
                  while ( have_rows('background_image') ) : the_row();

                    $image = get_sub_field('image'); ?>

                    <a href="<?php echo the_permalink(); ?>">
                      <div class="page-blog-main__post-image">
                        <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'page-blog-main__post-background' ]); ?>
                      </div>
                    </a>

                  <?php endwhile;
                endif; ?>

                <a href="<?php echo the_permalink(); ?>">
                  <h2 class="page-blog-main__post-title"><?php echo the_title(); ?></h2>
                </a>

                <div class="page-blog-main__post-date">
                    <?php echo get_the_date(); ?>
                </div>

                <div class="page-blog-main__post-category">
                  <a href="/blog/<?php echo get_the_category()[0]->slug ?>">
                    <?php echo get_the_category()[0]->name; ?>
                  </a>
                </div>
              </div>
            </div>

          <?php endwhile;
        else : ?>
          <p>Coming Soon.</p>
        <?php endif;
      ?>

    </div>
  </div>

  <?php
    $total_pages = $query->max_num_pages;

    if ( $total_pages > 1 ) : ?>
    
      <nav class="page-blog-main__pagination" role="navigation" aria-label="Pagination Navigation">
        <?php 
          $paged = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
          
          if ( $paged > 1 ) : ?>
            <a href="<?php echo get_pagenum_link($paged - 1); ?>"><</a>
          <?php endif; ?>
          

          <?php for ( $x = 1; $x <= $total_pages; $x++ ) : 

            if ( $paged === 1 && $x === 1 ) : ?>
              <span class="page-blog-main__pagination-page page-blog-main__pagination-page--active">o</span>
            <?php elseif ( get_query_var('paged') === $x ) : ?>
              <span class="page-blog-main__pagination-page page-blog-main__pagination-page--active">o</span>
            <?php else : ?>
              <a href="<?php echo get_pagenum_link($x) ?>" class="page-blog-main__pagination-page">o</a>
            <?php endif; ?>

          <?php endfor; ?>

          <?php if ( $paged < $total_pages ) : ?>
            <a href="<?php echo get_pagenum_link($paged + 1); ?>">></a>
          <?php endif; ?> 
      </nav>

    <?php endif; ?>

    <?php get_template_part('template-parts/blog/blog-archive'); ?>

</div>




