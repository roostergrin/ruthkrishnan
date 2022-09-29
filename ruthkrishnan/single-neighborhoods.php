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
			<!-- END Site Hero Template Part -->

			<!-- Single Neighborhoods Content Section -->
			<div class="single-neighborhoods-content">
				<div class="single-neighborhoods-content__container">
					<div class="single-neighborhoods-content__column">
						<h2 class="single-neighborhoods-content__title"><?php echo the_title(); ?></h2>
						<div class="single-neighborhoods-content__text"><?php echo get_field('description'); ?></div>
						<div class="single-neighborhoods-content__data"
							 data-neighborhoodHJISingle='<?php echo get_field("single_data"); ?>'
							 data-neighborhoodHJICondo='<?php echo get_field("condo_data"); ?>'
						></div>
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

			<!-- Home Stats Section -->
			<section class="home-stats">
				<div class="home-stats__container">
					<h2 class="home-stats__title">Need some more information on the neighborhood?</h2>
					<div class="home-stats__cards">
								<div class="home-stats__card">
									<div class="home-stats__card-container">
										<div class="home-stats__card-circle">
											<?php
												// 90–100	Walker’s Paradise
												// Daily errands do not require a car

												// 70–89	Very Walkable
												// Most errands can be accomplished on foot

												// 50–69	Somewhat Walkable
												// Some errands can be accomplished on foot

												// 25–49	Car-Dependent
												// Most errands require a car

												// 0–24	Car-Dependent
												// Almost all errands require a car
												$walk_score = get_field('walk_score');
												if($walk_score <=100) {
													$walk_score_result = "walker's paradise, daily errands do not require a car";
												}
												if($walk_score <= 89) {
													$walk_score_result = "very walkable, most errands can be accomplished on foot";
												}
												if($walk_score <= 69) {
													$walk_score_result = "somewhat Walkable, some errands can be accomplished on foot";
												}
												if($walk_score <= 49) {
													$walk_score_result = "car dependent, most errands require a car";
												}
												if($walk_score <= 24) {
													$walk_score_result = "car dependent, almost all errands require a car";
												}
												$weather = get_field('weather');
												$temperature = "46°/74°";
												$compete_score = "92";
												$compete_score_result = "This market is rather competitive";
											?>
											<h3 class="home-stats__card-title"><?php echo $walk_score; ?></h3>
										</div>
										<div class="home-stats__card-text"><?php echo $walk_score_result; ?></div>
									</div>
								</div>
								<div class="home-stats__card">
									<div class="home-stats__card-container">
										<div class="home-stats__card-circle">
											<h3 class="home-stats__card-title"><?php echo $temperature; ?></h3>
										</div>
										<div class="home-stats__card-text"><?php echo $weather; ?></div>
									</div>
								</div>

								<!-- calculated in neighborhood-data-table -->
								<div class="home-stats__card">
									<div class="home-stats__card-container">
										<div class="home-stats__card-circle">
											<?php
													// 90–100	Rider's Paradise
													// World-class public transportation.
													// 70–89	Excellent Transit
													// Transit is convenient for most trips.
													// 50–69	Good Transit
													// Many nearby public transportation options.
													// 25–49	Some Transit
													// A few nearby public transportation options.
													// 0–24	Minimal Transit
													// It is possible to get on a bus.
												$transit_score = get_field('transit_score');
												if($transit_score <=100) {
													$transit_score_result = "rider's paradise, world-class public transportation";
												}
												if($transit_score <= 89) {
													$transit_score_result = "excellent transit, transit is convenient for most trips";
												}
												if($transit_score <= 69) {
													$transit_score_result = "good transit, many nearby public transportation options";
												}
												if($transit_score <= 49) {
													$transit_score_result = "some transit, a few nearby public transportation options";
												}
												if($transit_score <= 24) {
													$transit_score_result = "minimal transit, it is possible to get on a bus";
												}
											?>
											<h3 class="home-stats__card-title"><?php echo $transit_score; ?></h3>
										</div>
										<div class="home-stats__card-text"><?php echo $transit_score_result; ?></div>
									</div>
								</div>
					</div>
				</div>
			</section>
			<!-- END Home Stats Section -->
			<!-- Data Table Template Part -->
			<?php get_template_part('template-parts/neighborhood-data-table/neighborhood-data-table'); ?>
			<!-- END Data Table Template Part -->


			<!-- Graph Section -->
			<?php get_template_part('template-parts/neighborhood-chart/neighborhood-chart'); ?>
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
			<div class="resources-links">
				<div class="resources-links__container">
					<img width="1280" height="572" src="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg" class="resources-links__background entered lazyloaded" alt="Neighborhoods" data-lazy-srcset="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg 1280w,https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg-768x343.jpg 768w" data-lazy-sizes="(max-width: 1280px) 100vw, 1280px" data-lazy-src="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg" data-ll-status="loaded" sizes="(max-width: 1280px) 100vw, 1280px" srcset="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg 1280w,https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg-768x343.jpg 768w"><noscript><img width="1280" height="572" src="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg" class="resources-links__background" alt="Neighborhoods" srcset="https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg.jpg 1280w,https://d1nkwan2sp5tun.cloudfront.net/wp-content/uploads/2021/06/10-column-bg-768x343.jpg 768w" sizes="(max-width: 1280px) 100vw, 1280px" /></noscript>
					<h2 class="resources-links__title">Buyers Resources</h2>
					<div class="resources-links__links">

					<a href="/blog/buying-a-home/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">Homebuyer resources</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>


						<a href="/hire-an-agent-before-you-go-to-an-open-house/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">Why hire an agent before going to an open house</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>


						<a href="/advantages-of-a-dedicated-buyer-agent/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">Advantages of a dedicated buyer's agent</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>


						<a href="/the-home-search/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">Your home search</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>


						<a href="/what-is-liquefaction/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">What is liquefaction</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>


						<a href="/san-francisco-microclimates-and-impact-on-home-prices/" class="resources-links__link-container" style="height: 78px;">
							<div class="resources-links__link-text-container">
								<div class="resources-links__link-background"></div>
								<p class="resources-links__link-text">Microclimates and impact on home prices</p>
							</div>
							<div class="resources-links__icon-container">

								<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="resources-links__icon">
									<path d="M14.78,7.67H0v.66H14.78L10,13h.9L16,8,10.85,3H10Z" style="fill: #232323"></path>
								</svg>
							</div>
						</a>

					</div>
				</div>
			</div>

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
