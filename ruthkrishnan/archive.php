<?php
/**
 * The template for displaying archives
 *
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header() ?>

<?php get_template_part('template-parts/hero/site-hero-archive'); ?>

<div class="page-archive">

  <div class="page-archive__intro-container">
    <div class="page-archive__intro">
      <h2 class="page-archive__intro-title"><?php echo get_the_archive_title(); ?></h2>
    </div>
  </div>

  <div class="page-archive__posts">
    <div class="page-archive__posts-container">
      <?php
        if ( have_posts() ) :
          while ( have_posts() ) : the_post(); ?>
            <div class="page-archive__post">
              <div class="page-archive__post-container">
                <?php if ( have_rows('background_image') ) :
                  while ( have_rows('background_image') ) : the_row();

                    $image = get_sub_field('image'); ?>

                    <a href="<?php echo the_permalink(); ?>" class="page-archive__post-image">
                      <div class="page-archive__post-image-overlay"></div>
                      <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'page-archive__post-background' ]); ?>
                    </a>
                  
                  <?php endwhile;
                endif; ?>

                <div class="page-archive__post-top">
                  <a href="<?php echo the_permalink(); ?>">
                    <h2 class="page-archive__post-title"><?php echo the_title(); ?></h2>
                  </a>
                </div>

                <div class="page-archive__post-bottom">
                  <div class="page-archive__post-date">
                    <span class="page-archive__post-date-icon"><?php get_template_part('icons/clock'); ?></span>
                    <span><?php echo get_the_date(); ?></span>
                  </div>

                  <div class="page-archive__post-categories">
                    <span class="page-archive__post-category-icon"><?php get_template_part('icons/tag'); ?></span>
                    <?php foreach ( get_the_category() as $key=>$category ) : ?>
                      <a href="/blog/<?php echo $category->slug; ?>" class="page-archive__post-category">
                        <?php echo $category->name; ?>
                      </a>

                      <?php if ( $key !== count(get_the_category()) - 1 ) : ?>
                        <span>, </span>
                      <?php endif; ?>
                    <?php endforeach; ?>
                  </div>
                </div>
                
              </div>
            </div>
          <?php endwhile;
        endif;
      ?>
    </div>
  </div>

  <?php get_template_part('template-parts/blog/blog-archive'); ?>
  
</div>

<?php get_footer(); ?>
