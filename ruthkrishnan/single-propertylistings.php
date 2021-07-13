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
						<div class="listings-single__about-home-icon">a</div>
						<div class="listings-single__about-home-icon">b</div>
						<div class="listings-single__about-home-icon">c</div>
						<div class="listings-single__about-home-icon">d</div>
					</div>
				</div>
				</div>
				<!-- END About The Home -->
				
				<!-- Features -->
				<div class="listings-single__features listings-single__main-column">
					<div class="listings-single__features-container">
						<h2 class="listings-single__features-title">Features</h2>
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
