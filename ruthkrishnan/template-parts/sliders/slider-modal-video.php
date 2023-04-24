<?php
/**
 * Displays Video Slider.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>
 <!-- Slider Modal Video -->
 <?php if (!empty(get_field('talks_video_slider_videos', $args['page_id']))) :
    $background_image = get_field('background', $args['page_id']);
    $paths = array();
    ?>
    <div class="slider-modal-video">
      <div class="slider-modal-video__background">
        <?php echo wp_get_attachment_image($background_image, 'full', false, [ 'class' => 'slider-modal-video__background-image' ]); ?>
      </div>
      <div class="slider-modal-video__container">
        <div class="slider-modal-video__column">
          <h2 class="slider-modal-video__title"><?php echo get_field('talks_video_slider_title', $args['page_id']); ?></h2>
          <div class="slider-modal-video__slides">

            <?php foreach (get_field('talks_video_slider_videos', $args['page_id']) as $key=>$slide) :
              $video = $slide['video_src'];
              $thumbnail = wp_get_attachment_image($slide['video_thumbnail'], 'medium_large', false, [ 'class' => 'slider-modal-video__slide-image' ]);
              $title = $slide['video_title'];
              $path = $slide['video_path']; ?>
              <div class="slider-modal-video__slide" data-video="<?php echo $video; ?>" data-path="<?php echo $path; ?>" data-title="<?php echo $title; ?>">
                <div class="slider-modal-video__slide-container">
                  <div class="slider-modal-video__slide-image-container">
                    <?php echo $thumbnail; ?>
                    <div class="slider-modal-video__slide-overlay"></div>
                    <div class="slider-modal-video__slide-play-btn">
                      <?php get_template_part('icons/play', null, array('class' => 'slider-modal-video__slide-icon')); ?>
                    </div>
                  </div>
                  <div class="slider-modal-video__slide-title"><?php echo $title; ?></div>
                </div>
              </div>
            <?php endforeach; ?>

          </div>

          <div class="slider-modal-video__prev" aria-label='Previous Slide'>
            <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-modal-video__icon slider-modal-video__icon--prev' )); ?>
          </div>
          <div class="slider-modal-video__next" aria-label='Next Slide'>
            <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-modal-video__icon slider-modal-video__icon--next' )); ?>
          </div>

          <div class='slider-modal-video__indicators'>
            <?php $slides = get_field('talks_video_slider_videos', $args['page_id']);
              foreach ($slides as $key=>$dot) : ?>
                  <div class="slider-modal-video__dot" data-index='<?php echo $key; ?>'></div>
              <?php endforeach;
            ?>
          </div>
        </div>
      </div>
    </div>
    <?php if (!is_page(35)): ?>
      <a class="slider-modal-video__neighborhood-button" href="/neighborhoods/">more neighborhood data and videos</a>
    <?php endif; ?>
    <div class="slider-modal-video__video-modal">
      <div class="slider-modal-video__modal-overlay"></div>
      <div class="slider-modal-video__modal-container">
        <div class="slider-modal-video__close-btn">close</div>
        <iframe class="slider-modal-video__video" title="talks videos" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        <a class="slider-modal-video__button" id="neighborhoods_button" href="#" aria-label="">Learn More</a>
      </div>
      <!-- <a class="slider-modal-video__button" id="neighborhoods_button" href="#" aria-label="">Learn More</a> -->
    </div>
  <?php endif; ?>
  <!-- END Slider Modal Video -->
