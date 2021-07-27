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
		
			<div class="single-careers__content">
				<div class="single-careers__container">
					<div class="single-careers__column">
						<h2 class="single-careers__title"><?php echo the_title(); ?></h2>
						<div class="single-careers__text"><?php echo get_field('content'); ?></div>
					</div>
				</div>
			</div>
		
			<!-- Get In Touch Form Template Part -->
			<?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
			<!-- END Get In Touch Form Template Part -->
		</div>
	<?php endwhile;
endif; ?>

<?php get_footer(); ?>
