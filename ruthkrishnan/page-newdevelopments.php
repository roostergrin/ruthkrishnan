<?php
/**
 * Template Name: New Developments 
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

  <div class="page-new-developments">
    

    <h1>New Developments Page</h1>

    <?php get_template_part('template-parts/hero/site-hero'); ?>

    <div class="page-new-developments__container">

      <div class="page-new-developments__filters">
        <div class="page-new-developments__filter">Available Now</div>
        <div class="page-new-developments__filter">Coming Soon</div>
        <div class="page-new-developments__filter">Sold Out</div>
      </div>

      <div id="gmapdev" class='page-new-developments__map'></div>

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
            $category = get_the_category()
      ?>
            <div class='page-new-developments__development page-new-developments__development--<?php echo $category[0]->slug; ?>'>
              <h2><?php echo the_title(); ?></h2>
              <?php if ( have_rows('location') ) :
                while ( have_rows('location' ) ) : the_row();
                  $address_1 = get_sub_field('address_1');
                  $address_2 = get_sub_field('address_2');
                  $city_state = get_sub_field('city_and_state');
                  $zip = get_sub_field('zip_code'); 
                ?>
                  <div class="page-new-developments__development-address" data-address='<?php echo $address_1 . ' ' . $city_state; ?>'>
                    <p><span><?php echo $address_1; ?> </span><span><?php echo $address_2; ?></span></p>
                    <p><span><?php echo $city_state; ?> </span><span><?php echo $zip; ?></span></p>
                  </div>
                <?php endwhile; ?>
              <?php endif; ?>
            </div>
          <?php endwhile;
        endif;
      ?>
  </div>
</div>

<?php get_footer(); ?>