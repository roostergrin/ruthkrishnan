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
      <?php if ( !empty($args["introduction"]) ) : ?>
        <div class="page-blog-main__intro-text">
          <?php echo $args["introduction"]; ?>
        </div>
      <?php endif; ?>
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
            endif;
          ?>

          <div class="page-blog-main__post">
            <div class="page-blog-main__post-container">
              <?php if ( have_rows('background_image') ) :
                while ( have_rows('background_image') ) : the_row();

                  $image = get_sub_field('image'); ?>

                  <a href="<?php echo the_permalink(); ?>" class="page-blog-main__post-image" aria-label="go to blog post <?php echo the_title(); ?>">
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

                  <span class="page-blog-main__post-date-icon"><?php get_template_part('icons/clock'); ?></span>

                  <span><?php echo get_the_date(); ?></span>

                </div>

                <div class="page-blog-main__post-categories">

                  <span class="page-blog-main__post-category-icon"><?php get_template_part('icons/tag'); ?></span>

                  <?php foreach ( get_the_category() as $key=>$category ) : ?>
                    
                    <a href="/blog/<?php echo $category->slug ?>" class="page-blog-main__post-category">
                      <?php echo $category->name; ?>
                    </a>

                    <?php if ($key !== count(get_the_category()) - 1) : ?>
                      <span class="page-blog-main__post-category-spacer">, </span>
                    <?php endif; ?>

                  <?php endforeach; ?>
                </div>
              </div>

            </div>
          </div>

          <?php 
            if ( $query->current_post > 0 && ($query->current_post + 1) % 3 === 0 && $blogCount > 3 ) :
              $blogCount -= 3;
              
              echo '</div></div><div class="page-blog-main__posts-row"><div class="page-blog-main__posts-container">';
            elseif ( $query->current_post === $query->query['posts_per_page'] - 1 && $blogCount === 3) :
              $blogCount -= 3;
              echo '</div></div>';
            elseif ( $blogCount < 3 && $query->current_post === $query->found_posts - ($query->query['posts_per_page'] * ($query->query['paged'] - 1)) - 1) :
              echo '</div></div>';
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
        <div class="page-blog-main__pagination-container">
          <?php 
            $paged = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
            
            if ( $paged > 1 ) : ?>
              <a href="<?php echo get_pagenum_link($paged - 1); ?>" class="page-blog-main__pagination-prev"><?php get_template_part('icons/arrow'); ?></a>
            <?php endif; ?>
            

            <?php for ( $x = 1; $x <= $total_pages; $x++ ) : 

              if ( $paged === 1 && $x === 1 ) : ?>
                <span class="page-blog-main__pagination-dot page-blog-main__pagination-dot--active"></span>
              <?php elseif ( get_query_var('paged') === $x ) : ?>
                <span class="page-blog-main__pagination-dot page-blog-main__pagination-dot--active"></span>
              <?php else : ?>
                <a href="<?php echo get_pagenum_link($x) ?>" class="page-blog-main__pagination-dot" aria-label="go to page <?php echo get_pagenum_link($x) ?>"></a>
              <?php endif; ?>

            <?php endfor; ?>

            <?php if ( $paged < $total_pages ) : ?>
              <a href="<?php echo get_pagenum_link($paged + 1); ?>" class="page-blog-main__pagination-next" aria-label="go to next page of blog posts"><?php get_template_part('icons/arrow'); ?></a>
            <?php endif; ?> 

          <div class="page-blog-main__pagination-number"><?php echo $query->query['paged'] . '/' . $total_pages; ?></div>
        </div>
      </nav>

    <?php endif;
  ?>


</div>
