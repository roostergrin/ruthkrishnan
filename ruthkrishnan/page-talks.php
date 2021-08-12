<?php
/**
 * Template Name: Talks
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-talks">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Talks Intro Section -->
  <div class="talks-intro">
    <div class="talks-intro__container">
      <div class="talks-intro__column">
        <h2 class="talks-intro__title"><?php echo get_field('talks_intro_title'); ?></h2>
        <div class="talks-intro__video-container">
          <iframe class="talks-intro__video" data-src="<?php echo get_field('talks_intro_video') ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
          <?php echo wp_get_attachment_image(get_field('talks_intro_thumbnail'), 'full', false, [ 'class' => 'talks-intro__thumbnail' ]); ?>
          <div class="talks-intro__play-btn">
            <?php get_template_part('icons/play', null, array('class' => 'talks-intro__icon')); ?>
          </div>
        </div>
        <div class="talks-intro__text"><?php echo get_field('talks_intro_text'); ?></div>
      </div>
    </div>
  </div>
  <!-- END Talks Intro Section -->

  <!-- Talks Video Slider -->
  <?php if ( !empty(get_field('talks_video_slider_videos')) ) : ?>
    <div class="talks-video-slider">
      <div class="talks-video-slider__container">
        <div class="talks-video-slider__column">
          <h2 class="talks-video-slider__title"><?php echo get_field('talks_video_slider_title'); ?></h2>
          <div class="talks-video-slider__slides">

            <?php foreach (get_field('talks_video_slider_videos') as $key=>$slide) :
              $video = $slide['video_src'];
              $thumbnail = wp_get_attachment_image($slide['video_thumbnail'], 'medium_large', false, [ 'class' => 'talks-video-slider__slide-image' ]);
              $title = $slide['video_title']; ?>

              <div class="talks-video-slider__slide" data-video="<?php echo $video; ?>">
                <div class="talks-video-slider__slide-container">
                  <div class="talks-video-slider__slide-image-container">
                    <?php echo $thumbnail; ?>
                    <div class="talks-video-slider__slide-overlay"></div>
                    <div class="talks-video-slider__slide-play-btn">
                      <?php get_template_part('icons/play', null, array('class' => 'talks-video-slider__slide-icon')); ?>
                    </div>
                  </div>
                  <div class="talks-video-slider__slide-title"><?php echo $title; ?></div>
                </div>
              </div>
              <!-- <?php print_r($slide['video_src']); ?> -->

            <?php endforeach; ?>

          </div>

          <div class="talks-video-slider__prev" aria-label='Previous Slide'> 
            <?php get_template_part('icons/arrow', null, array( 'class' => 'talks-video-slider__icon talks-video-slider__icon--prev' )); ?>
          </div>
          <div class="talks-video-slider__next" aria-label='Next Slide'> 
            <?php get_template_part('icons/arrow', null, array( 'class' => 'talks-video-slider__icon talks-video-slider__icon--next' )); ?>
          </div>
          
          <div class='talks-video-slider__indicators'>
            <?php $slides = get_field('talks_video_slider_videos');
              foreach ($slides as $key=>$dot) : ?>
                  <div class="talks-video-slider__dot" data-index='<?php echo $key; ?>'></div>
              <?php endforeach;
            ?>
          </div>
        </div>
      </div>
    </div>
    <div class="talks-video-slider__video-modal">
      <div class="talks-video-slider__modal-overlay"></div>
      <div class="talks-video-slider__modal-container">
        <div class="talks-video-slider__close-btn">close</div>
        <iframe class="talks-video-slider__video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>
  <?php endif; ?>
  <!-- END Talks Video Slider -->

  <!-- Talks What You'll Learn Section -->
  <div class="talks-learn">
    <div class="talks-learn__container">
      <div class="talks-learn__column">
        <h2 class="talks-learn__title"><?php echo get_field('talks_learn_title'); ?></h2>
        <div class="talks-learn__content-container">
          <div class="talks-learn__content talks-learn__content--left"><?php echo get_field('talks_learn_content_left'); ?></div>
          <div class="talks-learn__content talks-learn__content--right"><?php echo get_field('talks_learn_content_right'); ?></div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Talks What You'll Learn Section -->

  <!-- Testimonials Template Part -->
  <div class="page-talks__testimonials">
    <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  </div>
  <!-- END Testimonials Template Part -->

  <!-- Get In Touch Form Template Part -->
  <?php get_template_part('template-parts/forms/form-get-in-touch'); ?>
  <!-- END Get In Touch Form Template Part -->

</div>

<?php get_footer(); ?>
