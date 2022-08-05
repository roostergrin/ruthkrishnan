<?php

/**
 * The template for displaying all Neighborhood posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

get_header(); ?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.js"></script>
<div class="single-neighborhood">

	<?php
	if (have_posts()) :
		while (have_posts()) : the_post(); ?>

			<!-- Site Hero Template Part -->
			<?php get_template_part('template-parts/hero/site-hero'); ?>
			<!-- END Site Hero Template Part -->\

			<!-- Single Neighborhoods Content Section -->
			<div class="single-neighborhoods-content">
				<div class="single-neighborhoods-content__container">
					<div class="single-neighborhoods-content__column">
						<h2 class="single-neighborhoods-content__title"><?php echo the_title(); ?></h2>
						<div class="single-neighborhoods-content__text"><?php echo get_field('description'); ?></div>
						<div class="single-neighborhoods-content__data" data-neighborhoodHJISingle='<?php echo json_encode(get_field('field_62e6f47df35d1')); ?>' data-neighborhoodHJICondo='<?php echo json_encode(get_field('field_62e82053acca6')); ?>'></div>
						<div class="single-neighborhoods-content__icons">
							<?php if (have_rows('single_neighborhoods_icons')) :
								while (have_rows('single_neighborhoods_icons')) : the_row();

									$icon = get_sub_field('icon');
									$text = get_sub_field('text'); ?>

									<div class="single-neighborhoods-content__icon-container">
										<?php get_template_part('icons/' . $icon, null, array('class' => 'single-neighborhoods-content__icon')); ?>
										<div class="single-neighborhoods-content__icon-text"><?php echo $text; ?></div>
									</div>

							<?php endwhile;
							endif; ?>
						</div>
					</div>
				</div>
			</div>
			<!-- END Single Neighborhoods Content Section -->

			<!-- Video Section -->
			<?php if (!empty(get_field('neighborhood_video'))) : ?>
				<div class="single-neighborhoods-video">
					<div class="single-neighborhoods-video__container">
						<div class="single-neighborhoods-video__column">
							<div class="single-neighborhoods-video__video-container">
								<iframe class="single-neighborhoods-video__video" data-src="<?php echo get_field('neighborhood_video') ?>?title=0&byline=0&portrait=0&autoplay=1" title="Neighborhood Video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
								<?php echo wp_get_attachment_image(get_field('neighborhood_thumbnail'), 'full', false, ['class' => 'single-neighborhoods-video__thumbnail']); ?>
								<div class="single-neighborhoods-video__play-btn">
									<?php get_template_part('icons/play', null, array('class' => 'single-neighborhoods-video__icon')); ?>
								</div>
							</div>
							<div class="single-neighborhoods-video__text"><?php echo get_field('talks_intro_text'); ?></div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<!-- END Video Section -->


			<!-- Photo Gallery Template Part -->
			<?php get_template_part('template-parts/neighborhood-data-table/neighborhood-data-table'); ?>
			<!-- END Photo Gallery Template Part -->


			<!-- Graph Section -->
			<div class="single-neighborhoods-cart__button-container">
				<button class="single-neighborhoods-cart__button" value="Average Sales Price">Average Sales Price</button>
				<button class="single-neighborhoods-cart__button" value="Median Sales Price">Median Sales Price</button>
				<button class="single-neighborhoods-cart__button" value="Lowest Sales Price">Lowest Sales Price</button>
				<button class="single-neighborhoods-cart__button" value="Highest Sales Price">Highest Sales Price</button>
				<button class="single-neighborhoods-cart__button" value="List Price per Sq Foot">List Price per Sq Foot</button>
				<button class="single-neighborhoods-cart__button" value="List Price to Sales Price">List price to sales price</button>
			</div>

			<div class="single-neighborhoods-cart__container">
				<div class="single-neighborhoods-cart__graph">
					<div class="single-neighborhoods-cart__info">
						<div class="single-neighborhoods-cart__title">
							<h3 id="graphTitle">Average Sales Price</h3>
							<hr />
						</div>
						<div class="single-neighborhoods-cart__details">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices sed fringilla pellentesque malesuada condimentum nulla nulla. Vitae, ultrices scelerisque suspendisse leo</p>
							<hr />
						</div>
						<div class="single-neighborhoods-cart__key">
							<p>Key</p>

							<div class="key-pairs">
								<svg height="10" width="10">
									<circle cx="5" cy="5" r="4" fill="#232323" />
								</svg>
								<p>Single family home</p>
							</div>

							<div class="key-pairs">
								<svg height="10" width="10">
									<circle cx="5" cy="5" r="3.5" stroke="black" stroke-width="0.5" fill="#e9e8e8" />
								</svg>
								<p>Condominiums</p>
							</div>

							<hr />
						</div>
					</div>
					<div class="single-neighborhoods-cart__graph-container">
						<canvas id="neighborhoodChart"></canvas>
					</div>
				</div>
			</div>
			<!-- END Graph Section -->

			<!-- CTA Text & Button Template Part -->
			<div class="single-neighborhoods-cta">
				<?php get_template_part('template-parts/cta/cta-text-btn', null, array('acf_group' => 'single_neighborhoods_cta')); ?>
			</div>
			<!-- END CTA Text & Button Template Part -->

			<!-- Photo Gallery Template Part -->
			<?php get_template_part('template-parts/photo-gallery/photo-gallery'); ?>
			<!-- END Photo Gallery Template Part -->

			<div class="single-neighborhoods-intro">
				<div class="single-neighborhoods-intro__container">
					<div class="single-neighborhoods-intro__column">
						<h2 class="single-neighborhoods-intro__title"><?php echo get_field('neighborhoods_intro_title', 35); ?></h2>
						<div class="single-neighborhoods-intro__text"><?php echo get_field('neighborhoods_intro_text', 35); ?></div>
					</div>
				</div>
			</div>
			<!-- Slider Template Part -->
			<?php get_template_part('template-parts/sliders/slider-neighborhoods'); ?>
			<!-- END Slider Template Part -->

	<?php endwhile;
	endif;
	?>

	<!-- TODO rewrite the testimonials part to query the neighborhoods page instead of hard coding it -->
	<!-- Testimonials Template Part -->
	<div class="testimonials-section" aria-label="slideshow" role="region">
		<div class="testimonials-section__container">
			<div class="testimonials-section__color-block"></div>

			<div class="testimonials-section__col">
				<div class="testimonials-section__images-slider" data-image-slider-length="1">
					<div class="testimonials-section__image-slide testimonials-section__image-slide--active" data-image-index="1" aria-hidden="true" tabindex="0">
						<img width="752" height="534" src="/wp-content/uploads/2021/06/testimonial-1.jpg" class="testimonials-section__image" alt="Holly Hirshfield &amp; Alan Peterson" loading="lazy">
					</div>
				</div>
			</div>

			<div class="testimonials-section__content-col">
				<div class="testimonials-section__content-slider">
					<div class="testimonials-section__background" aria-hidden="true">
						<img width="768" height="343" src="/wp-content/uploads/2021/06/10-column-bg-768x343.jpg" class="testimonials-section__background-image" alt="" loading="lazy" srcset="/wp-content/uploads/2021/06/10-column-bg-768x343.jpg 768w, /wp-content/uploads/2021/06/10-column-bg.jpg 1280w" sizes="(max-width: 768px) 100vw, 768px">
					</div>
					<div class="testimonials-section__title" aria-label="">
						<h2>Hear from our satisfied clients</h2>
					</div>
					<div class="testimonials-section__content-wrapper" style="height: 160px;">
						<div class="testimonials-section__content-slide testimonials-section__content-slide--active" data-content-index="1" aria-live="polite" role="group" aria-hidden="false" tabindex="0">
							<div class="testimonials-section__content">
								<div class="testimonials-section__text">“In this very tough market, she got my family into a fantastic home. I was getting ready to walk away from the SF market altogether, because I just didn't think we could find what we wanted in a home at a price we could pay. Ruth is an absolute pro and helped us get the house we wanted. Ruth is a master real estate agent and the one you want in San Francisco.”</div>
								<div class="testimonials-section__name">Holly Hirshfield &amp; Alan Peterson</div>
							</div>
						</div>
					</div>
				</div>
			</div> <!-- content-col -->
		</div> <!-- container -->
	</div>
	<!-- END Testimonials Template Part -->
	
</div>

<?php get_footer(); ?>