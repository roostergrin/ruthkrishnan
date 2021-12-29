<?php
/**
 * Displays image gallery.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php $videos = get_field('video_slider_videos');?>
<?php if ( count(get_field('video_slider_videos')) > 0 ) : ?>
<div class='slider-video'>
    <div class='slider-video__container'>
        <h2 class='slider-video__title'>
            <?php if ( !empty(get_field('video_slider_title')) ) :
                echo get_field('video_slider_title');
            endif; ?>
        </h2>
        <div class='slider-video__slider' data-slider-length='<?php echo count($videos); ?>'>
            <?php foreach (get_field('video_slider_videos') as $key=>$slide) :
                  $video = $slide['video_src'];
                  $thumbnail = $slide['video_thumbnail'];
                  $title = $slide['video_title']; ?>

            <div class='slider-video__slide' data-index='<?php echo $key; ?>'>
                <div class='slider-video__slide-container'>
                    <div class='slider-video__slide-image-container'>
                        <iframe class='slider-video__video' 
                            title='talks videos' frameborder='0'
                            data-src='<?php echo $video; ?>'
                            allow='autoplay; fullscreen; picture-in-picture'>
                        </iframe>
                        <?php echo wp_get_attachment_image($thumbnail, 'full', false, [ 'class' => 'slider-video__slide-image']); ?>
                        <div class='slider-video__slide-play-btn'>
                            <?php get_template_part('icons/play', null, array('class' => 'slider-video__slide-icon')); ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>

        <div class='slider-video__nav'>
            <div class='slider-video__prev' aria-label='Previous Slide'>
                <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-video__icon slider-video__icon--prev' )); ?>
            </div>
            <div class='slider-video__indicators'>
            <?php foreach (get_field('video_slider_videos') as $key=>$slide) : ?>
                <div class='slider-video__dot' data-target='<?php echo $key; ?>'></div>
            <?php endforeach; ?>
            </div>
            <div class='slider-video__next' aria-label='Next Slide'>
                <?php get_template_part('icons/arrow', null, array( 'class' => 'slider-video__icon slider-video__icon--next' )); ?>
            </div>
        </div>
    </div>
</div>
<!-- 
<div class='slider-video__video-modal'>
    <div class='slider-video__modal-overlay'></div>
    <div class='slider-video__modal-container'>
        <div class='slider-video__close-btn'>close</div>
        <iframe class='slider-video__video' title='talks videos' frameborder='0'
            allow='autoplay; fullscreen; picture-in-picture'></iframe>
    </div>
</div> -->

<?php endif; ?>