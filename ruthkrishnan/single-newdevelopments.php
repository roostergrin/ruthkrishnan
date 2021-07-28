<?php
/**
 * The template for displaying all New Developments posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

  get_header(); ?>

  <div class='new-developments-single'>
      <!-- Start The Post Loop -->
      <?php if ( have_posts() ) :
        while ( have_posts() ) : the_post(); ?>

          <?php get_template_part('template-parts/hero/site-hero'); ?>
          <?php the_content(); ?>

            <!-- Start Developments Categories Loop -->
            <div class='new-developments-single__page-wrapper'>
              <section class='new-developments-single__info-section'>
                <div class='new-developments-single__container'>
                  <h2 class='new-developments-single__title--large'>The Building</h2>
                  <div class='new-developments-single__column--left'>
                    <?php
                      $categories = get_field('development_categories');
                      if ( $categories ) :
                        foreach( $categories as $category ) : ?>

                        <?php if ( $category === 'general_building_information') : ?>
                        <!-- The Builing Information -->
                          <?php $general_info = get_field('general_building_information');
                            if ( $general_info ) : ?>
                            <div class='new-developments-single__item--large'>
                                <div class='new-developments-single__building'>
                                  <?php echo $general_info; ?>
                                </div>
                              </div>

                            <?php endif; ?>

                          <!-- END The Building Information -->
                          <?php endif; ?>

                          <?php if ( $category === 'amenities') : ?>
                          <!-- Amenities Information -->
                            <?php $amenities = get_field('amenities');
                            if ( $amenities ) : ?>
                              <div class='new-developments-single__item--large'>
                                <div class='new-developments-single__amenities'>
                                  <div class='new-developments-single__title'>Amenities</div>
                                  <?php echo $amenities; ?>
                                </div>
                              </div>

                            <?php endif; ?>

                          <!-- END Amenities Information -->
                          <?php endif; ?>
                          <?php if ( $category === 'residence_features') : ?>
                          <!-- Residence Features Information -->
                            <?php $residence = get_field('residence_features');
                            if ( $residence ) : ?>
                              <div class='new-developments-single__item--large'>
                                <div class='new-developments-single__residence'>
                                  <div class='new-developments-single__title'>Residence Features</div>
                                  <?php echo $residence; ?>
                                </div>
                              </div>
                            <?php endif; ?>

                          <!-- END Residence Features Information -->
                          <?php endif; ?>
                          <?php if ( $category === 'parking') : ?>
                        <!-- Parking Information -->
                          <?php $parking = get_field('parking');
                          if ( $parking ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__parking'>
                                <div class='new-developments-single__title'>Parking</div>
                                <?php echo $parking; ?>
                              </div>
                          </div>
                          <?php endif; ?>

                        <!-- END Parking Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'average_hoa_fees') : ?>
                        <!-- Average HOA Fees Information -->
                          <?php $hoa_fees = get_field('average_hoa_fees');
                          if ( $hoa_fees ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__hoa-fees'>
                                <div class='new-developments-single__title'>Average HOA Fees</div>
                                <?php echo $hoa_fees; ?>
                              </div>
                            </div>
                          <?php endif; ?>

                        <!-- END Average HOA Fees Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'price_range') : ?>
                        <!-- Price Range Information -->
                          <?php $price_range = get_field('price_range');
                          if ( $price_range ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__price-range'>
                                <div class='new-developments-single__title'>Price Range</div>
                                <?php echo $price_range; ?>
                              </div>
                            </div>
                          <?php endif; ?>

                        <!-- END Price Range Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'units') : ?>
                        <!-- Units Information -->
                          <?php $units = get_field('units');
                          if ( $units ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__units'>
                                <div class='new-developments-single__title'>Units</div>
                                <?php echo $units; ?>
                              </div>
                            </div>
                          <?php endif; ?>

                        <!-- END Units Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'availability') : ?>
                        <!-- Availability Information -->
                          <?php $availability = get_field('availability');
                          if ( $availability ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__availability'>
                                <div class='new-developments-single__title'>Availability</div>
                                <?php echo $availability; ?>
                              </div>
                            </div>
                          <?php endif; ?>

                        <!-- END Availability Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'requirements') : ?>
                        <!-- Requirements Information -->
                          <?php $requirements = get_field('requirements');
                          if ( $requirements ) : ?>
                          <div class='new-developments-single__item--large'>
                              <div class='new-developments-single__requirements'>
                                <div class='new-developments-single__title'>Requirements</div>
                                <?php echo $requirements; ?>
                              </div>
                            </div>
                          <?php endif; ?>

                        <!-- END Requirements Information -->
                        <?php endif; ?>
                        <?php endforeach; ?>
                      <?php endif; ?>
                  </div>
                  <div class='new-developments-single__column--right'>
                    <?php
                      $categories = get_field('development_categories');
                      if ( $categories ) :
                        foreach( $categories as $category ) : ?>

                        <?php if ( $category === 'location') : ?>
                        <!-- Location Information -->
                          <?php if ( have_rows('location') ) :
                              while ( have_rows('location' ) ) : the_row();

                                $address_1 = get_sub_field('address_1');
                                $address_2 = get_sub_field('address_2');
                                $city_state = get_sub_field('city_and_state');
                                $zip = get_sub_field('zip_code'); ?>
                              <div class='new-developments-single__item'>
                                <div class='new-developments-single__location'>
                                    <div class='new-developments-single__title'>Location</div>
                                    <p><span><?php echo $address_1; ?> </span><span><?php echo $address_2; ?></span></p>
                                    <p><span><?php echo $city_state; ?> </span><span><?php echo $zip; ?></span></p>
                                </div>
                              </div>

                              <?php endwhile; ?>
                          <?php endif; ?>

                        <!-- END Location Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'neighborhood') : ?>
                        <!-- Neighborhood Information -->
                          <?php if ( have_rows('neighborhood') ) :
                              while ( have_rows('neighborhood' ) ) : the_row();

                                $guide = get_sub_field('neighborhood_guides');
                                $additional_neighborhood = get_sub_field('additional_neighborhood'); ?>
                              <div class='new-developments-single__item'>
                                <div class='new-developments-single__neighborhood'>
                                    <div class='new-developments-single__title'>Neighborhood</div>
                                    <?php if ( $guide ) : ?>
                                      <?php echo $guide->post_title; ?>
                                    <?php elseif ( $additional_neighborhood ) : ?>
                                      <?php echo $additional_neighborhood; ?>
                                    <?php endif; ?>
                                </div>
                              </div>
                              <?php endwhile; ?>
                          <?php endif; ?>

                        <!-- END Neighborhood Information -->
                        <?php endif; ?>

                        <?php if ( $category === 'current_status') : ?>
                        <!-- Current Status Information -->
                          <?php if ( have_rows('current_status') ) :
                              while ( have_rows('current_status' ) ) : the_row();

                                $date_on_market = get_sub_field('date_on_market');
                                $num_of_homes = get_sub_field('number_of_homes');
                                $in_contract = get_sub_field('in_contract');
                                $closed = get_sub_field('closed');
                                $available = get_sub_field('available');
                                $additional_info = get_sub_field('additional_information'); ?>
                              <div class='new-developments-single__item'>

                                <div class='new-developments-single__current-status'>
                                    <div class='new-developments-single__title'>Current Status</div>
                                    <?php if ( $date_on_market ) : ?>
                                      <div class='new-developments-single__current-status-info'>Date on Market: <?php echo $date_on_market; ?></div>
                                    <?php endif; ?>

                                    <?php if ( $num_of_homes ) : ?>
                                      <div class='new-developments-single__current-status-info'>Number of Homes: <?php echo $num_of_homes; ?></div>
                                    <?php endif; ?>

                                    <?php if ( $in_contract ) : ?>
                                      <div class='new-developments-single__current-status-info'>In Contract: <?php echo $in_contract; ?></div>
                                    <?php endif; ?>

                                    <?php if ( $closed ) : ?>
                                      <div class='new-developments-single__current-status-info'>Closed: <?php echo $closed; ?></div>
                                    <?php endif; ?>

                                    <?php if ( $available ) : ?>
                                      <div class='new-developments-single__current-status-info'>Available: <?php echo $available; ?></div>
                                    <?php endif; ?>

                                    <?php if ( have_rows('additional_information') ) :
                                      while ( have_rows('additional_information') ) : the_row();
                                          $title = get_sub_field('title');
                                          $text = get_sub_field('text') ?>

                                          <div class='new-developments-single__current-status-info'>
                                            <span><?php echo $title; ?>: </span><span><?php echo $text; ?></span>
                                          </div>

                                      <?php endwhile; ?>
                                    <?php endif; ?>
                                </div>
                              </div>
                              <?php endwhile; ?>
                          <?php endif; ?>

                        <!-- END Current Status Information -->
                        <?php endif; ?>

                  <?php endforeach; ?>
                <?php endif; ?>
                  </div>
                </div> <!-- container  -->
              </section>
              <?php get_template_part('template-parts/photo-gallery/photo-gallery'); ?>
              <?php get_template_part('template-parts/maps/newdevelopments-posts-map'); ?>
            </div> <!-- page-wrapper  -->

        <?php endwhile; ?>
    <?php endif; ?>
    <!-- End The Loop -->
  </div>

  <?php get_footer(); ?>
