<?php
/**
 * Template Name: New Developments 
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

  <h1>New Developments Page</h1>

  <?php get_template_part('template-parts/hero/site-hero'); ?>

  <?php
    $args = array(  
      'post_type' => 'newdevelopments',
      'post_status' => 'publish',
      'posts_per_page' => 8,
      'orderby' => 'date',
      'order' => 'ASC', 
    );

    $query = new WP_Query( $args );
    if ( $query->have_posts() ) :
      while ( $query->have_posts() ) : $query->the_post();
  ?>
        <div>
          <h2><?php echo the_title(); ?></h2>
          <?php if ( have_rows('location') ) :
            while ( have_rows('location' ) ) : the_row();
              $address_1 = get_sub_field('address_1');
              $address_2 = get_sub_field('address_2');
              $city_state = get_sub_field('city_and_state');
              $zip = get_sub_field('zip_code'); 
            ?>
              <p><span><?php echo $address_1; ?> </span><span><?php echo $address_2; ?></span></p>
              <p><span><?php echo $city_state; ?> </span><span><?php echo $zip; ?></span></p>
            <?php endwhile; ?>
          <?php endif; ?>
        </div>
      <?php endwhile;
    endif;
  ?>

<?php get_footer(); ?>
