<?php
/**
 * Displays image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>
<!-- 
  1. Custom component video-slider
  2. combine photo gallery and talks ACF      -->



<!-- video slider -->
<?php $videos = get_field('video_slider_videos');?>
  <?php if ( count(get_field('video_slider_videos')) > 0 ) : ?>
  <div class="slider-video">
    <div class="slider-video__container">
      <h2 class="slider-video__title">
        <?php if ( !empty(get_field('video_slider_title')) ) :
          echo get_field('video_slider_title');
        else : 
          echo 'Watch Now';
        endif; ?>
      </h2>
      <div class='slider-video__slider' data-slider-length='<?php echo count($videos); ?>'>
        <?php foreach (get_field('video_slider_videos') as $key=>$slide) :
                $video = $slide['video_src'];
                $thumbnail = $slide['video_thumbnail'];
                $title = $slide['video_title']; ?>

            <div class="slider-video__slide" data-index='<?php echo $key; ?>'>
              <?php echo wp_get_attachment_image($thumbnail, 'full', false, [ 'class' => 'slider-video__image']); ?>
            </div>
            
            <?php endforeach; ?>
      </div>


        <div class="slider-video__prev" aria-label='Previous Slide'> 
          <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-video__icon slider-video__icon--prev' )); ?>
        </div>
        <div class="slider-video__next" aria-label='Next Slide'> 
          <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-video__icon slider-video__icon--next' )); ?>
        </div>

      </div>
      <div class='slider-video__indicators'>
        <?php $videos = get_field('video_slider_videos'); ?>
          <?php if ( count($videos) > 8 ) : ?>
            <div class="slider-video__numpagination" data-slides="<?php echo count($videos); ?>"></div>
          <?php else : ?>
            <?php foreach ($videos as $key=>$dot) : ?>
                <div class="slider-video__dot" data-index='<?php echo $key; ?>'></div>
            <?php endforeach; ?>
          <?php endif; ?>
      </div>


    </div>

  </div>

  
<?php endif; ?>

<!-- end photo gallery -->




<!-- 1. play button 
2. modal
3. event listener - loop on every image

-->




<div class="talks-video-slider__video-modal">
      <div class="talks-video-slider__modal-overlay"></div>
      <div class="talks-video-slider__modal-container">
        <div class="talks-video-slider__close-btn">close</div>
        <iframe class="talks-video-slider__video" title="talks videos" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div>
    </div>