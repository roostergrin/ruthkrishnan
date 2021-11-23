<?php
/**
 * The template for displaying all Neighborhood posts
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

get_header(); ?>

<div class="single-neighborhood">
	
	<?php
if ( have_posts() ) :
	while ( have_posts() ) : the_post(); ?>

		<!-- Site Hero Template Part -->
		<?php get_template_part('template-parts/hero/site-hero'); ?>
		<!-- END Site Hero Template Part -->

		<!-- Single Neighborhoods Content Section -->
		<div class="single-neighborhoods-content">
			<div class="single-neighborhoods-content__container">
				<div class="single-neighborhoods-content__column">
					<h2 class="single-neighborhoods-content__title"><?php echo the_title(); ?></h2>
					<div class="single-neighborhoods-content__text"><?php echo get_field('description'); ?></div>
					<div class="single-neighborhoods-content__icons">
						<?php if ( have_rows('single_neighborhoods_icons') ) :
							while ( have_rows('single_neighborhoods_icons') ) : the_row();

								$icon = get_sub_field('icon');
								$text = get_sub_field('text'); ?>

								<div class="single-neighborhoods-content__icon-container">
									<?php get_template_part('icons/' . $icon, null, array( 'class' => 'single-neighborhoods-content__icon')); ?>
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
		<?php if ( !empty(get_field('neighborhood_video')) ) : ?>
			<div class="single-neighborhoods-video">
				<div class="single-neighborhoods-video__container">
					<div class="single-neighborhoods-video__column">
						<div class="single-neighborhoods-video__video-container">
							<iframe class="single-neighborhoods-video__video" data-src="<?php echo get_field('neighborhood_video') ?>?title=0&byline=0&portrait=0&autoplay=1" title="Neighborhood Video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
							<?php echo wp_get_attachment_image(get_field('neighborhood_thumbnail'), 'full', false, [ 'class' => 'single-neighborhoods-video__thumbnail' ]); ?>
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
		<?php get_template_part('template-parts/photo-gallery/photo-gallery'); ?>
		<!-- END Photo Gallery Template Part -->

		<!-- CTA Text & Button Template Part -->
		<div class="single-neighborhoods-cta">
			<?php get_template_part('template-parts/cta/cta-text-btn', null, array( 'acf_group' => 'single_neighborhoods_cta' )); ?>
		</div>
		<!-- END CTA Text & Button Template Part -->

  <?php endwhile;
endif;
?>

</div>

<?php get_footer(); ?>