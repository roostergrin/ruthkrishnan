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
				<?php if ( !empty(get_the_terms($post->ID, 'listings-category')[0]->name) ) : ?>
					<div class="listings-single__tag">
						<div class="listings-single__category"><?php echo get_the_terms($post->ID, 'listings-category')[0]->name; ?></div>
					</div>
				<?php endif; ?>
				<?php if ( get_field('hero_type') === 'video' && !empty(get_field('title_option')) ) : ?>
					<div class="listings-single__title-container">
						<h1 class="listings-single__title">
							<span class="listings-single__title-text"><?php echo the_title(); ?></span>
							<?php if ( !empty(get_field('listing_price')) ) : ?>
								<span class="listings-single__title-price"><?php echo get_field('listing_price'); ?></span>
							<?php endif; ?>
						</h1>
						<h2 class="listings-single__subtitle"><?php echo get_field('title_option'); ?></h2>
					</div>
				<?php else : ?>
					<div class="listings-single__title-container">
            <h2 class='listings-single__title'>
              <?php if ( get_field('title_option') ) :
                      echo get_field('title_option');
                    else :
                      echo the_title();
                    endif;?>
            </h2>
						<h2 class="listings-single__title">
							<span class="listings-single__title-text"><?php echo the_title(); ?></span>
							<?php if ( !empty(get_field('listing_price')) ) : ?>
								<span class="listings-single__title-price"><?php echo get_field('listing_price'); ?></span>
							<?php endif; ?>
						</h2>
					</div>
				<?php endif; ?>
				
				<!-- Virtual Tour -->
				<div class="listings-single__main-column">
					<?php if ( get_field('virtual_tour_video') ) : ?>
						<h2 class="listings-single__tour-title">
							<?php if ( empty(get_field('optional_virtual_tour_title')) ) : ?>
								Take a Virtual Tour
								<?php else : ?>
									<?php echo get_field('optional_virtual_tour_title') ?>
								<?php endif; ?>
						</h2>
								
						<div class="listings-single__tour">
							<iframe src="<?php echo get_field('virtual_tour_video') ?>" class="listings-single__tour-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
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
				<?php
				$icons_arr = get_field('about_home_icons');

				if (count($icons_arr) > 0) : ?>
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
				<?php endif; ?>
				<!-- END About The Home -->
				
				<!-- Features -->
				<?php if ( !empty(get_field('features')) ) : ?>
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
				<?php endif; ?>

				<!-- END Features -->
				<!-- The Home: Photo Gallery -->
				<?php if ( !empty(get_field('photo_gallery')) ) : ?>
				<div class="listings-single__photo-gallery">
					<?php get_template_part('template-parts/photo-gallery/photo-gallery'); ?>
				</div>
				<?php endif; ?>
				<!-- END The Home: Photo Gallery -->
				
				<!-- Loop through -->
					<?php
					// Check rows exists.
					if( have_rows('multiple_listings') ):
							// Loop through rows.
							while( have_rows('multiple_listings') ) : the_row();
									// Load sub field value.
									?>
									<!-- Address and Listing Price  -->
										<?php if ( get_sub_field('hero_type') === 'video' && !empty(get_sub_field('title_option')) ) : ?>
												</h1>
												<h2 class="listings-single__subtitle"><?php echo get_sub_field('title_option'); ?></h2>
											</div>
										<?php else : ?>
											<div class="listings-single__title-container">
												<h2 class="listings-single__title">
													<span class="listings-single__title-text"><?php echo get_sub_field('address_1'); ?></span>
													<?php if ( !empty(get_sub_field('listing_price')) ) : ?>
														<span class="listings-single__title-price"><?php echo get_sub_field('listing_price'); ?></span>
													<?php endif; ?>
												</h2>
											</div>
										<?php endif; ?>
										<!-- Virtual Tour -->
									<div class="listings-single__main-column">
										<?php if ( get_field('virtual_tour_video') ) : ?>
											<h2 class="listings-single__tour-title">
												<?php if ( empty(get_field('optional_virtual_tour_title')) ) : ?>
													Take a Virtual Tour
													<?php else : ?>
														<?php echo get_field('optional_virtual_tour_title') ?>
													<?php endif; ?>
											</h2>
													
											<div class="listings-single__tour">
												<iframe src="<?php echo get_field('virtual_tour_video') ?>" class="listings-single__tour-video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
											</div>
										<?php endif; ?>
										<!-- END Virtual Tour -->
										<!-- Intro Text -->
										<?php if ( get_field('intro_text') ) : ?>
											<div class="listings-single__intro-text"><?php echo get_field('intro_text'); ?></div>
											</div> 
										<?php endif; ?>
										<!-- END Intro Text -->
										<!-- About the home -->
										<?php
										$icons_arr = get_sub_field('about_home_icons');

										if (count($icons_arr) > 0) : ?>
										<div class="listings-single__about-home">
										<div class="listings-single__about-home-container">
											<h2 class="listings-single__about-home-title">About the Home</h2>
											<div class="listings-single__about-home-icons">

												
												<?php
												$icons_arr = get_sub_field('about_home_icons');

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
										<?php endif; ?>
										<!-- END About The Home -->
										
										<!-- Features -->
										<?php if ( !empty(get_sub_field('features')) ) : ?>
										<div class="listings-single__features listings-single__main-column">
											<div class="listings-single__features-container">
												<h2 class="listings-single__features-title">Features</h2>
												<div class="listings-single__features-list-container">
													<div class="listings-single__features-list"><?php echo get_sub_field('features'); ?></div>
													<div class="listings-single__features-overlay"></div>
												</div>
												<div class="listings-single__features-see-more"><span class="listings-single__features-see-more-btn">see more</span></div>
											</div>
										</div>
										<?php endif; ?>
										<!-- Photo Gallery -->
										<?php if ( !empty(get_sub_field('photo_gallery')) ) : ?>
												<div class="photo-gallery__container">
													<h2 class="photo-gallery__title">
														<?php if ( !empty(get_sub_field('photo_gallery_alternate_title')) ) :
															echo get_sub_field('photo_gallery_alternate_title');
														else : 
															echo 'Photo Gallery';
														endif; ?>
													</h2>

														<?php $images = get_sub_field('photo_gallery'); ?>

														<div class='photo-gallery__slider' data-slider-length='<?php echo count($images); ?>'>
															<?php
															foreach ($images as $key=>$image) : ?>
																<div class="photo-gallery__slide" data-index='<?php echo $key; ?>'>
																	<?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'photo-gallery__image']); ?>
																</div>
															<?php endforeach; ?>

														<div class="photo-gallery__prev" aria-label='Previous Slide'> 
															<?php get_template_part('icons/arrow', null, array( 'class' => 'photo-gallery__icon photo-gallery__icon--prev' )); ?>
														</div>
														<div class="photo-gallery__next" aria-label='Next Slide'> 
															<?php get_template_part('icons/arrow', null, array( 'class' => 'photo-gallery__icon photo-gallery__icon--next' )); ?>
														</div>

													</div>
													<div class='photo-gallery__indicators'>
														<?php $images = get_sub_field('photo_gallery'); ?>
															<?php if ( count($images) > 8 ) : ?>
																<div class="photo-gallery__numpagination" data-slides="<?php echo count($images); ?>"></div>
															<?php else : ?>
																<?php foreach ($images as $key=>$dot) : ?>
																		<div class="photo-gallery__dot" data-index='<?php echo $key; ?>'></div>
																<?php endforeach; ?>
															<?php endif; ?>
													</div>
											</div>
										<?php endif; ?>
									<?php
									
										
							// End loop.
							endwhile;
					endif;
					?>

        <?php if ( !get_field('hide_neighborhood_information') ) : ?>
          <!-- About the Neighborhood -->
          <div class="listings-single__main-column">
            <div class="listings-single__about-neighborhood">
              <h2 class="listings-single__about-neighborhood-title">About the Neighborhood</h2>
              <div class="listings-single__about-neighborhood-description">

                <?php 
                  $neighborhood = get_field('neighborhood');
                  $custom_sections = get_field('custom_neighborhood_sections');
                ?>

                <?php if ( in_array('custom_description', $custom_sections) ) :
                  echo get_field('about_the_neighborhood');
                elseif ( $neighborhood ) :
                  echo get_field('description', $neighborhood->ID);
                endif; ?> 

              </div>
            </div>
          </div>
          <!-- END About the Neighborhood -->

          <!-- The Neighborhood -->
          <?php 
            $custom_sections = get_field('custom_neighborhood_sections');
          ?>
          <?php if ( !in_array('no_photo_gallery', $custom_sections) ) :
            get_template_part('template-parts/listings/listings-neighborhood');
          endif; ?> 
          <!-- END The Neighborhood -->
        <?php endif; ?>

				<!-- Floor Plan -->
				<!-- If photo && text are empty display empty div for small spacing -->
				<?php if ( empty(get_field('floor_plan_text')) && empty(get_field('floor_plan'))  ) : ?>
					<div></div>
					<?php else : ?>
					<div class="listings-single__plan listings-single__main-column">
						<div class="listings-single__plan-container">
							<?php echo wp_get_attachment_image(get_field('floor_plan'), 'full', false, [ 'class' => 'listings-single__plan-image' ]); ?>
							<?php if ( !empty(get_field('floor_plan_text')) ) : ?>
								<div class="listings-single__plan-text"><?php echo get_field('floor_plan_text'); ?></div>
								<?php endif; ?>
						</div>
					</div>
				<?php endif; ?>
				<!-- END Floor Plan -->
		</div>


		<?php endwhile;
	endif;
	?>

	<!-- Testimonials -->
	<div class="listings-single__testimonials">
		<div class="testimonials-section">
			<div class="testimonials-section__container">
				<div class="testimonials-section__color-block"></div>

				<div class="testimonials-section__col">
					<?php $home_ID = get_page_by_title('home')->ID; ?>
					<div class="testimonials-section__images-slider" data-image-slider-length='<?php echo count(get_field('testimonials', $home_ID)); ?>'>
						<?php if ( have_rows('testimonials', $home_ID) ) :
							while ( have_rows('testimonials', $home_ID ) ) : the_row();

							$image = get_sub_field('image');

							?>
							<div class="testimonials-section__image-slide" data-image-index='<?php echo get_row_index(); ?>'>
								<?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'testimonials-section__image' ]); ?>
							</div>
							<?php endwhile; ?>
						<?php endif; ?>
					</div>
				</div>

				<div class="testimonials-section__content-col">
					<div class="testimonials-section__content-slider">
						<?php echo wp_get_attachment_image(get_field('background'), 'medium_large', false, [ 'class' => 'testimonials-section__background-image' ]); ?>
						<div class="testimonials-section__title">
							<h2><?php echo get_field('title')?></h2>
						</div>
						<div class="testimonials-section__content-wrapper">
							<?php if ( have_rows('testimonials', $home_ID) ) :
								while ( have_rows('testimonials', $home_ID) ) : the_row();

									$text = get_sub_field('content');
									$name = get_sub_field('name');
									?>
									<div class="testimonials-section__content-slide" data-content-index='<?php echo get_row_index(); ?>'>
										<div class="testimonials-section__content">
											<div class="testimonials-section__text"><?php echo $text ?></div>
											<div class="testimonials-section__name"><?php echo $name ?></div>
										</div>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
							<div class="testimonials-section__indicators">
								<div class="testimonials-section__nav testimonials-section__nav--prev">
									<?php get_template_part('icons/arrow', null, array( 'class' => 'testimonials-section__nav-icon testimonials-section__nav-icon--prev')); ?>
								</div>
								<?php foreach (get_field('testimonials', $home_ID) as $key=>$dot) : ?>
									<div class="testimonials-section__dot" data-index='<?php echo $key; ?>'></div>
								<?php endforeach; ?>
								<div class="testimonials-section__nav testimonials-section__nav--next">
									<?php get_template_part('icons/arrow', null, array( 'class' => 'testimonials-section__nav-icon testimonials-section__nav-icon--next')); ?>
								</div>
							</div>
						</div>
					</div>
				</div> <!-- content-col -->
			</div> <!-- container -->
		</div>
	</div>
	<!-- END Testimonials -->

	<!-- Exclusive Access Section -->
	<div class="listings-single__access">
		<div class="listings-single__access-container">
			<div class="listings-single__access-column">
				<div class="listings-single__access-content">
					<h2 class="listings-single__access-title">Get Exclusive Access</h2>
					<div class="listings-single__access-text">Sign up to hear about the Krishnan Team’s new listings, open houses, off-market opportunities & quarterly market updates.</div>
					<a class="listings-single__access-submit" href="https://paragon-re.us5.list-manage.com/subscribe/post?u=c8474b2af5037cd0c2709da5c&id=47357a5c28" class="form-subscribe__button" target="_blank" aria-label="subscribe on subscription page (opens in new window).">subscribe</a>
					<!-- <form action="" class="listings-single__access-form" id="exclusive-access-form">
						<div class="listings-single__access-form-group">
							<label for="email" class="listings-single__access-label">Email</label>
							<input type="email" name="email" id="email" placeholder="Email" class="listings-single__access-input" required>
						</div>
						<input type="submit" value="subscribe" class="listings-single__access-submit">
					</form> -->
				</div>
			</div>
		</div>
	</div>
	<!-- END Exclusive Access Section -->
	
	<!-- Card Links Section -->
	<?php if ( have_rows('listings_card_links', 'options') ) :
		while ( have_rows('listings_card_links', 'options') ) : the_row(); 


			$background_image = get_sub_field('background');
			$title = get_sub_field('title'); ?>
			<div class="listings-single__card-links">
				<div class="card-links">
					<div class="card-links__background">
						<?php echo wp_get_attachment_image($background_image, 'full', false, [ 'class' => 'card-links__background-image' ]); ?>
					</div>
					<div class="card-links__container">
						<h2 class="card-links__title"><?php echo $title; ?></h2>
						<div class="card-links__cards">

							<?php if ( have_rows('cards') ) :
								while ( have_rows('cards') ) : the_row(); 
									
								$card_image = get_sub_field('image');
								$card_link = get_sub_field('link');
								$card_text = get_sub_field('text'); ?>

									<div class="card-links__card">
										<a href="<?php echo $card_link; ?>" class="card-links__card-container">
											<?php echo wp_get_attachment_image($card_image, 'medium_large', false, [ 'class' => 'card-links__card-image' ]); ?>
											<div class="card-links__card-overlay"></div>
											<div class="card-links__card-text"><?php echo $card_text; ?></div>
										</a>
									</div>

								<?php endwhile;
							endif; ?>

						</div>
					</div>
				</div>
			</div>

		<?php endwhile;
	endif; ?>
	<!-- END Card Links Section -->

	<!-- Get in Touch Form -->
	<div class="listings-single__get-in-touch">
	<section class="form-get-in-touch">
		<?php $homepage_ID = get_page_by_title('home')->ID; ?>
    <?php if ( have_rows('get_in_touch', $homepage_ID) ) :
      while ( have_rows('get_in_touch', $homepage_ID) ) : the_row();
      $image = get_sub_field('background_image'); 
      $title = get_sub_field('title'); 
      $text = get_sub_field('text');

      ?>

        <div class="form-get-in-touch__background">
          <?php echo wp_get_attachment_image($image, 'full', false, [ 'class' => 'form-get-in-touch__background' ]); ?>
        </div>

        <div class="form-get-in-touch__container">
          <div class="form-get-in-touch__info">
            <h2 class="form-get-in-touch__title"><?php echo $title; ?></h2>
            <div class="form-get-in-touch__text"><?php echo $text; ?></div>
            <div class="form-get-in-touch__phone">
              <a href="<?php echo get_field('phone_link', 'options') ?>" class="form-get-in-touch__phone-link">
                <?php echo get_field('phone_number', 'options'); ?>
              </a>
            </div>
            <div class="form-get-in-touch__calbre">CalBRE# <?php echo get_field('calbre', 'options'); ?></div>
            <div class="form-get-in-touch__email">
              <a href="mailto:<?php echo get_field('email_address', 'options'); ?>" class="form-get-in-touch__email-link">
                <?php echo get_field('email_address', 'options'); ?>
              </a>
            </div>
            <div class="form-get-in-touch__address">
              <a href="<?php echo get_field('address_link', 'options'); ?>" class="form-get-in-touch__address-link">
                <?php echo get_field('address_text', 'options'); ?>
              </a>
            </div>
          </div>
          <div class="form-get-in-touch__form-column">
            <div class="form-get-in-touch__form-container">
              <form action="" class="form-get-in-touch__form" id="new-dev-form">
                <div class="form-get-in-touch__form-group">
                  <label for="fullname" class="form-get-in-touch__label">First and Last Name</label>
                  <input type="text" name="fullname" id="fullname" placeholder="First and Last Name*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="fullname-validation">Please enter valid full name.</small>
                </div>

                <div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="email" class="form-get-in-touch__label">Email</label>
                  <input type="email" name="email" id="email" placeholder="Email*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="email-validation">Please enter a valid email address.</small>
                </div>

                <div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="phone" class="form-get-in-touch__label">Phone Number</label>
                  <input type="tel" pattern="^[0-9-+\s()]*$" name="phone" id="phone" placeholder="Phone Number*" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="phone-validation">Please enter a valid phone number</small>
                </div>

								<div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="property" class="form-get-in-touch__label">Property Name</label>
                  <input type="text" name="property" id="property" placeholder="Property Name*" value="<?php echo the_title(); ?>" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="property-validation">Please enter valid property.</small>
                </div>

								<?php 
									$address_1 = get_field('address_1');
									$city_state = get_field('city_and_state');
									$zip = get_field('zip_code');
								?>

								<div class="form-get-in-touch__form-group form-get-in-touch__form-group--half">
                  <label for="address" class="form-get-in-touch__label">Property Address</label>
                  <input type="text" name="address" id="address" placeholder="Property Address*" value="<?php echo $address_1 . ' ' . $city_state . ' ' . $zip; ?>" class="form-get-in-touch__input">
                  <small class="form-get-in-touch__validation-message" id="address-validation">Please enter valid address.</small>
                </div>

                <div class="form-get-in-touch__form-group">
                  <label for="message" class="form-get-in-touch__label">Message</label>
                  <textarea name="message" id="message" placeholder="Message" rows="5" class="form-get-in-touch__textarea"></textarea>
                </div>

                <input type="submit" value="send" class="form-get-in-touch__submit">
              </form>
            </div>
          </div>
        </div>
      
      <?php endwhile;
    endif; ?>
      
	</section>
	</div>
	<!-- END Get in Touch Form -->

</div>

<?php get_footer(); ?>
