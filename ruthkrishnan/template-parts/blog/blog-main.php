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

  <?php 
    $query = new WP_Query( $args["query_args"] ); 
    $blogCount = $query->found_posts > $query->query['posts_per_page'] ? $query->query['posts_per_page'] : $query->found_posts;
    if ( $query->query['paged'] > 1 ) :
      $blogCount = $query->found_posts - ($query->query['posts_per_page'] * ($query->query['paged'] - 1));
    endif;
    ?>
    <div class="page-blog-main__posts">
      <?php if ( $query->have_posts() ) :
        while ( $query->have_posts() ) : $query->the_post(); ?>
        
          <?php
            if ($query->current_post === 0) :
              echo '<div class="page-blog-main__posts-row"><div class="page-blog-main__posts-container">';
              // echo 'start';
            endif;
          ?>

          <div class="page-blog-main__post">
            <div class="page-blog-main__post-container">
              <?php if ( have_rows('background_image') ) :
                while ( have_rows('background_image') ) : the_row();

                  $image = get_sub_field('image'); ?>

                  <a href="<?php echo the_permalink(); ?>" class="page-blog-main__post-image">
                    <div class="page-blog-main__post-image-overlay"></div>
                    <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'page-blog-main__post-background' ]); ?>
                  </a>

                <?php endwhile;
              endif; ?>

              <div class="page-blog-main__post-top">
                <a href="<?php echo the_permalink(); ?>">
                  <h2 class="page-blog-main__post-title"><?php echo the_title(); ?></h2>
                </a>
              </div>

              <div class="page-blog-main__post-bottom">
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
          </div>

          <?php 
            if ( $query->current_post > 0 && ($query->current_post + 1) % 3 === 0 && $blogCount > 3 ) :
              $blogCount -= 3;
              
              echo '</div></div><div class="page-blog-main__posts-row"><div class="page-blog-main__posts-container">';
              // echo 'end start';
            elseif ( $query->current_post === $query->query['posts_per_page'] - 1 && $blogCount === 3) :
              $blogCount -= 3;
              echo '</div></div>';
              // echo 'end';
            elseif ( $blogCount < 3 && $query->current_post === $query->found_posts - ($query->query['posts_per_page'] * ($query->query['paged'] - 1)) - 1) :
              echo '</div></div>';
              // echo 'end';
            endif; 
          ?>
        <?php endwhile;
      else : ?>
        <div class="page-blog-main__posts">
          <div class="page-blog-main__posts-container">
            <div class="page-blog-main__coming-soon">Coming Soon.</div>
          </div>
        </div>
      <?php endif; ?>
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

    <?php endif;
  ?>

  <?php get_template_part('template-parts/blog/blog-archive'); ?>

</div>
