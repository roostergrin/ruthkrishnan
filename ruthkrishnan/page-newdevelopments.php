<?php
/**
 * Template Name: New Developments
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

  <div class="page-new-developments">
    <?php get_template_part('template-parts/hero/site-hero'); ?>

    <section class="new-developments-welcome">
      <div class="new-developments-welcome__container">
        <h2 class="new-developments-welcome__title"><?php echo get_field( 'title' ) ?></h2>
        <div class="new-developments-welcome__content">
          <div class="new-developments-welcome__text">
            <?php echo get_field( 'content' ) ?>
          </div>
          <a class='new-developments-welcome__link' href="/contact-us">schedule your showing</a>
        </div>
      </div>
    </section>

    <section class="page-new-developments__gallery">
      <div class="page-new-developments__container">

        <div class="page-new-developments__filters">
          <a data-filter='available-now' class="page-new-developments__filter page-new-developments__filter--active">Available Now</a>
          <a data-filter='coming-soon' class="page-new-developments__filter">Coming Soon</a>
          <a data-filter='sold-out' class="page-new-developments__filter">Sold Out</a>
        </div>

        <div id="gmapdev" class='page-new-developments__map'></div>

        <?php
          $args = array(
            'post_type' => 'newdevelopments',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'ASC',
          );

          $query = new WP_Query( $args );
          if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post();
              $category = get_the_terms(get_post()->ID, 'development-category'); 
            ?>
            
              <div class='page-new-developments__development page-new-developments__development--<?php echo $category[0]->slug; ?>'>
                <a class="page-new-developments__development-container" href="/new-developments/<?php echo get_post()->post_name; ?>">
                  <div class="page-new-developments__development-image-container">
                    <div class="page-new-developments__development-image-overlay"></div>
                    <?php if ( have_rows('background_image') ) :
                      while ( have_rows('background_image' ) ) : the_row();

                        $image = get_sub_field('image');

                        echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'page-new-developments__development-image' ]);

                      endwhile;
                    endif;
                    ?>
                  </div>

                  <?php $dev_categories = get_field('development_categories'); ?>

                  <?php if ( have_rows('location') && in_array('location', $dev_categories) ) :
                    while ( have_rows('location' ) ) : the_row();
                      $address_1 = get_sub_field('address_1');
                      $address_2 = get_sub_field('address_2');
                      $city_state = get_sub_field('city_and_state');
                      $zip = get_sub_field('zip_code');
                    ?>
                      <?php if ( $address_1 ) : ?>
                        <div class="page-new-developments__development-title page-new-developments__development-title-address--<?php echo $category[0]->slug; ?>" data-address='<?php echo $address_1 . ' ' . $city_state; ?>' data-title='<?php echo the_title(); ?>' data-slug='<?php echo get_post()->post_name; ?>'>
                          <?php echo the_title(); ?>
                        </div>
                      <?php else : ?>
                        <div class="page-new-developments__development-title page-new-developments__development-title-address--<?php echo $category[0]->slug; ?>">
                          <?php echo the_title(); ?>
                        </div>
                      <?php endif; ?>
                    <?php endwhile; ?>
                  <?php else : ?>
                    <div class="page-new-developments__development-title page-new-developments__development-title-address--<?php echo $category[0]->slug; ?>">
                      <?php echo the_title(); ?>
                    </div>
                  <?php endif; ?>
                </a>
              </div>
              
            <?php endwhile;
          endif;
        ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
