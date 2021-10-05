<?php
/**
 * The template for displaying Careers post
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

get_header(); ?>

<?php if ( have_posts() ) :
	while ( have_posts() ) : the_post(); ?>
		<div class="single-careers">
			<!-- Site Hero Template Part -->
			<?php get_template_part('template-parts/hero/site-hero'); ?>
			<!-- END Site Hero Template Part -->

			<!-- Job Description Section -->
			<?php if ( !empty(get_field('job_description')) ) : ?>
				<div class="single-careers-colorbox">
					<div class="single-careers-colorbox__container">
						<div class="single-careers-colorbox__column">
							<div class="single-careers-colorbox__background">
								<div class="single-careers-colorbox__content">
									<h2 class="single-careers-colorbox__title">Job Description</h2>
									<div class="single-careers-colorbox__text"><?php echo get_field('job_description'); ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<!-- END Job Description Section -->

			<!-- The Opportunity Section -->
			<?php if ( !empty(get_field('the_opportunity')) ) : ?>
				<div class="single-careers-information">
					<div class="single-careers-information__container">
						<div class="single-careers-information__column">
							<div class="single-careers-information__content">
								<h2 class="single-careers-information__title">The Opportunity</h2>
								<div class="single-careers-information__text"><?php echo get_field('the_opportunity'); ?></div>
							</div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<!-- END The Opportunity Section -->

			<!-- Requirements Section -->
			<?php if ( !empty(get_field('requirements')) ) : ?>
				<div class="single-careers-colorbox">
					<div class="single-careers-colorbox__container">
						<div class="single-careers-colorbox__column">
							<div class="single-careers-colorbox__background">
								<div class="single-careers-colorbox__content">
									<h2 class="single-careers-colorbox__title">Requirements</h2>
									<div class="single-careers-colorbox__text"><?php echo get_field('requirements'); ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<!-- END Requirements Section -->

			<!-- The Details Section -->
			<?php if ( !empty(get_field('the_details')) ) : ?>
				<div class="single-careers-information">
					<div class="single-careers-information__container">
						<div class="single-careers-information__column">
							<div class="single-careers-information__content">
								<h2 class="single-careers-information__title">The Details</h2>
								<div class="single-careers-information__text"><?php echo get_field('the_details'); ?></div>
							</div>
						</div>
					</div>
				</div>
			<?php endif; ?>
			<!-- END The Details Section -->

			<!-- Apply Button Section -->

			<div class="single-careers-apply">
				<div class="single-careers-apply__container">
					<a href="mailto:hiring@ruthkrishnan.com" aria-label='send email to hiring@ruthkrishnan.com.' class="single-careers-apply__btn">email hiring@ruthkrishnan.com to apply</a>
				</div>
			</div>

			<!-- Career Opportunities Template Part -->
			<?php 
				$query = new WP_Query(array(
					'post_type' => 'careers',
					'post_status' => 'publish',
					'posts_per_page' => 3,
					'post__not_in' => array( $post->ID)
				) );

				if ( $query->have_posts() ) :
					get_template_part('template-parts/career/career-opportunities'); 
				endif;
			?>
			<!-- END Career Opportunities Template Part -->

			<!-- Equal Opportunity Section -->
			<div class="single-careers-equal">
				<div class="single-careers-equal__container">
					<div class="single-careers-equal__column">
						<div class="single-careers-equal__background">
							<h2 class="single-careers-equal__title">Equal Opportunity</h2>
							<div class="single-careers-equal__text">The Krishnan Team provides equal employment opportunities (EEO to all employees and applicants for employment without regard to race, color, religion, sex, nation origin, age, disability, genetics, sexual orientation, gender identity or gender expression.</div>
						</div>
					</div>
				</div>
			</div>
			<!-- END Equal Opportunity Section -->
		</div>
	<?php endwhile;
endif; ?>

<?php get_footer(); ?>
