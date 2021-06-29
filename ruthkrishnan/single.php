<?php
/**
 * The template for displaying all posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

<?php get_template_part('template-parts/hero/site-hero'); ?>

<div class="post-blog">
  <div class="post-blog__container">
    <div class="post-blog__column">
      <?php
        if ( have_posts() ) :
          while ( have_posts() ) : the_post(); ?>

            <div class="post-blog__content">
              <?php echo get_field('content'); ?>
            </div>

            <div class="post-blog__infobar">
            
              <div class="post-blog__infobar-column post-blog__infobar-column--left">
                <div id="blog-share" class="post-blog__infobar-share">
                  <span><?php get_template_part('icons/share'); ?></span>
                  <span>Share</span>
                </div>
                <div id="share-popup" class="post-blog__infobar-share-popup">
                  <div class="post-blog__infobar-copy">
                    <input name="share-copy-link" id="share-copy-link" class="post-blog__infobar-copy-input" value="<?php echo the_permalink(); ?>" />
                    <div id="share-copy-button" class="post-blog__infobar-copy-button"><?php get_template_part( 'icons/copy', null, array( 'class' => 'post-blog__infobar-copy-icon' ) ); ?></div>
                  </div>
                  <div class="post-blog__infobar-social">
                    <?php echo do_shortcode('[Sassy_Social_Share]') ?>
                  </div>
                </div>
              </div>
            

              <div class="post-blog__infobar-column post-blog__infobar-column--center">
                <div class="post-blog__infobar-date">
                  <span><?php get_template_part('icons/calendar'); ?></span>
                  <?php echo get_the_date(); ?>
                </div>
              </div>

              <div class="post-blog__infobar-column post-blog__infobar-column--rightnst">
                <div class="post-blog__infobar-categories">
                  <?php get_template_part('icons/tag'); ?>
                  <?php foreach ( get_the_category() as $key=>$category ) : ?>
                    <a href="/blog/<?php echo $category->slug; ?>" class="post-blog__infobar-category">
                      <?php echo $category->name; ?>
                    </a>

                    <?php if ( $key !== count(get_the_category()) - 1) : ?>
                      <span>, </span>
                    <?php endif; ?>

                  <?php endforeach; ?>
                </div>
              </div>

            </div>

            <?php
              $prev_post = get_previous_post( $in_same_term = true, $excluded_terms = '', $taxonomy = 'category' );
              $next_post = get_next_post( $in_same_term = true, $excluded_terms = '', $taxonomy = 'category' ); 
            ?>

            <div class="post-blog__navigation <?php echo $next_post && !$prev_post ? 'post-blog__navigation--justify-end' : null; ?>">

              <?php if ( $prev_post ) : ?>
                <a href="<?php echo get_the_permalink( $prev_post->ID ); ?>" class="post-blog__navigation-prev">previous</a>
              <?php endif; ?>

              <?php if ( $next_post ) : ?>
                <a href="<?php echo get_the_permalink( $next_post->ID ); ?>" class="post-blog__navigation-next">next</a>
              <?php endif; ?>

            </div>

          <?php endwhile;
        endif;
      ?>
    </div>
  </div>

  <?php get_template_part('template-parts/blog/blog-recent'); ?>
</div>

<?php get_footer(); ?>