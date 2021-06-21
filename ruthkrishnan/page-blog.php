<?php
/**
 * Template Name: Blog
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class='page-blog'>

  <?php get_template_part('template-parts/hero/site-hero'); ?>

  <?php get_template_part('template-parts/blog/blog-navigation'); ?>

  <?php
    global $post;
    $category_id = null;
    $all_categories = get_categories( array( 'hide_empty' => false ) );
    foreach( $all_categories as $cat ) :
      if ($cat->slug === $post->post_name) :
        $category_id = $cat->term_id; 
      endif;
    endforeach;

    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    if ($category_id) : 
      $args = array(
        'post_status' => 'publish',
        'posts_per_page' => 12,
        'paged' => $paged,
        'cat' => $category_id
      );
    else :
      $args = array(
        'post_status' => 'publish',
        'posts_per_page' => 12,
        'paged' => $paged
      );
    endif;
    $blog_intro = get_field('introduction');
  
    
    get_template_part('template-parts/blog/blog-main', null, array( 'query_args' => $args, 'introduction' => $blog_intro ));

  ?>

</div>

<?php get_footer(); ?>