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
			<div class="single-careers-description">
				<div class="single-careers-description__container">
					<div class="single-careers-description__column">
						<div class="single-careers-description__background">
							<div class="single-careers-description__content">
								<h2 class="single-careers-description__title">Job Description</h2>
								<div class="single-careers-description__text"><?php echo get_field('job_description'); ?></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- END Job Description Section -->

			<!-- Job Requirements Section -->
			<div class="single-careers-requirements">
				<div class="single-careers-requirements__container">
					<div class="single-careers-requirements__column">
						<div class="single-careers-requirements__content">
							<h2 class="single-careers-requirements__title">Requirements</h2>
							<div class="single-careers-requirements__text"><?php echo get_field('requirements'); ?></div>
						</div>
					</div>
				</div>
			</div>
			<!-- END Job Requirements Section -->

			<!-- Apply Button Section -->

			<div class="single-careers-apply">
				<div class="single-careers-apply__container">
					<a href="mailto:careers@ruthkrishnan.com" aria-label='send email to careers@ruthkrishnan.com.' class="single-careers-apply__btn">email careers@ruthkrishnan.com to apply</a>
				</div>
			</div>

			<!-- Career Opportunities Template Part -->
			<?php get_template_part('template-parts/career/career-opportunities'); ?>
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
