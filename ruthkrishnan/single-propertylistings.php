<?php
/**
 * The template for displaying Property Listings
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

get_header(); ?>

<div class="listings-single">
	<?php get_template_part('template-parts/hero/listings-hero'); ?>

	<?php
	if ( have_posts() ) :
		while ( have_posts() ) : the_post(); ?>
			<div class="listings-single__container">
				<!-- Virtual Tour -->
				<?php if ( get_field('hero_type') === 'video' && !empty(get_field('title_option')) ) : ?>
					<div class="listings-single__title-container">
						<h1 class="listings-single__title">
							<span class="listings-single__title-text"><?php echo the_title(); ?></span>
							<span class="listings-single__title-price"><?php echo get_field('listing_price'); ?></span>
						</h1>
						<h2 class="listings-single__subtitle"><?php echo get_field('title_option'); ?></h2>
					</div>
				<?php else : ?>
					<div class="listings-single__title-container">
						<h2 class="listings-single__title">
							<span class="listings-single__title-text"><?php echo the_title(); ?></span>
							<span class="listings-single__title-price"><?php echo get_field('listing_price'); ?></span>
						</h2>
					</div>
				<?php endif; ?>
				<div class="listings-single__main-column">
					<?php if ( get_field('virtual_tour_video') ) : ?>
						<h2 class="listings-single__tour-title">Take a Virtual Tour</h2>
						<figure class="listings-single__tour">
								<?php echo wp_get_attachment_image( get_field('virtual_tour_thumbnail'), 'full', false, [ 'class' => 'listings-single__tour-thumbnail' ]); ?>
                <?php get_template_part('icons/play', null, array('class' => 'listings-single__play-btn')); ?>
						</figure>

						<div class="listings-single__modal-tour">
							<div class="listings-single__modal-overlay"></div>
							<div class="listings-single__modal-container">
								<div class="listings-single__modal-close">
									<span></span>
									<span></span>
								</div>
								<iframe data-src="<?php echo get_field('virtual_tour_video') ?>?autoplay=1" class="listings-single__modal-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
							</div>
						</div>
					<?php endif; ?>
					<!-- END Virtual Tour -->

					<!-- Intro Text -->
					<?php if ( get_field('intro_text') ) : ?>
						<div class="listings-single__intro-text"><?php echo get_field('intro_text'); ?></div>
					<?php endif; ?>
					<!-- END Intro Text -->
				</div>

				<!-- About The Home -->
				<div class="listings-single__about-home">
				<div class="listings-single__about-home-container">
					<h2 class="listings-single__about-home-title">About the Home</h2>
					<div class="listings-single__about-home-icons">
						

						
						<?php
						$icons_arr = get_field('about_home_icons');

						if ( have_rows('about_the_home') && count($icons_arr) > 0 ) :
							while ( have_rows('about_the_home') ) : the_row(); 
								$bedrooms = get_sub_field('bedrooms');
								$bathrooms = get_sub_field('bathrooms');
								$square_feet = get_sub_field('square_feet');
								$parking_spot = get_sub_field('parking_spot');
								$year_built = get_sub_field('year_built'); ?>

								<?php foreach ( $icons_arr as $icon ) : ?>
									<div class="listings-single__about-home-column">

										<?php get_template_part('icons/' . $icon, null , array( 'class' => 'listings-single__about-home-icon')); ?>

										<?php if ( $icon === 'bed' ) : ?>
											<div class="listings-single__about-home-icon-number"><?php echo $bedrooms; ?></div>
											<div class="listings-single__about-home-icon-text">
												<?php if ( intval($bedrooms) === 1 ) : ?>
													Bedroom
												<?php else : ?>
													Bedrooms
												<?php endif; ?>
											</div>

										<?php elseif ( $icon === 'bath' ) : ?>
											<div class="listings-single__about-home-icon-number"><?php echo $bathrooms; ?></div>
											<div class="listings-single__about-home-icon-text">
												<?php if ( intval($bathrooms) === 1 ) : ?>
													Bathroom
												<?php else : ?>
													Bathrooms
												<?php endif; ?>
											</div>

										<?php elseif ( $icon === 'square_feet' ) : ?>
											<div class="listings-single__about-home-icon-number"><?php echo $square_feet; ?></div>
											<div class="listings-single__about-home-icon-text">Square Feet</div>

										<?php elseif ( $icon === 'parking' ) : ?>
											<div class="listings-single__about-home-icon-number"><?php echo $parking_spot; ?></div>
											<div class="listings-single__about-home-icon-text">
												<?php if ( intval($parking_spot) === 1 ) : ?>
													Parking Spot
												<?php else : ?>
													Parking Spots
												<?php endif; ?>
											</div>

										<?php elseif ( $icon === 'year' ) : ?>
											<div class="listings-single__about-home-icon-number"><?php echo $year_built; ?></div>
											<div class="listings-single__about-home-icon-text">Year Built</div>
										<?php endif; ?>

									</div>
								<?php endforeach; ?>

							<?php endwhile;
						endif; ?>

					</div>
				</div>
				</div>
				<!-- END About The Home -->
				
				<!-- Features -->
				<div class="listings-single__features listings-single__main-column">
					<div class="listings-single__features-container">
						<h2 class="listings-single__features-title">Features</h2>
						<div class="listings-single__features-list-container">
							<div class="listings-single__features-list"><?php echo get_field('features'); ?></div>
							<div class="listings-single__features-overlay"></div>
						</div>
						<div class="listings-single__features-see-more"><span class="listings-single__features-see-more-btn">see more</span></div>
					</div>
				</div>
				<!-- END Features -->
			</div>

		<?php endwhile;
	endif;
	?>
</div>



<script src="https://player.vimeo.com/api/player.js"></script>
<?php get_footer(); ?>
