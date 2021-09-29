<?php
/**
 * Template Name: Careers
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

get_header(); ?>

<div class="page-careers">

  <!-- Site Hero Template Part -->
  <?php get_template_part('template-parts/hero/site-hero'); ?>
  <!-- END Site Hero Template Part -->

  <!-- Careers Welcome Section -->
  <div class="careers-welcome">
    <div class="careers-welcome__container">
      <div class="careers-welcome__column">
        <h2 class="careers-welcome__title"><?php echo get_field('careers_welcome_title'); ?></h2>
        <div class="careers-welcome__text"><?php echo get_field('careers_welcome_text'); ?></div>
      </div>
    </div>
  </div>
  <!-- END Careers Welcome Section -->

  <!-- Career Opportunities Template Part -->
    <?php get_template_part('template-parts/career/career-opportunities'); ?>
  <!-- END Career Opportunities Template Part -->

  <!-- Core Values Section -->
  <div class="careers-values">
    <div class="careers-values__color-box"></div>
    <div class="careers-values__container">
      <h2 class="careers-values__title"><?php echo get_field('careers_values_title'); ?></h2>
      <div class="careers-values__cards">
        <?php if ( have_rows('careers_values') ) :
          while ( have_rows('careers_values') ) : the_row();

            $icon = get_sub_field('icon');
            $title = get_sub_field('title'); ?>

            <div class="careers-values__card">
              <?php get_template_part('icons/' . $icon, null, array( 'class' => 'careers-values__card-icon' )); ?>
              <h3 class="careers-values__card-title"><?php echo $title; ?></h3>
            </div>
        
          <?php endwhile;
        endif; ?>
      </div>
    </div>
  </div>
  <!-- END Core Values Section -->

  <!-- Perks and Benefits Section -->
  <div class="careers-perks">
    <div class="careers-perks__container">
      <div class="careers-perks__column">
        <h2 class="careers-perks__title"><?php echo get_field('careers_perks_title'); ?></h2>
        <div class="careers-perks__lists">
          <ul class="careers-perks__list">
            <?php if ( have_rows('careers_perks_column_one') ) :
              while ( have_rows('careers_perks_column_one') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
          </ul>
          <ul class="careers-perks__list">
            <?php if ( have_rows('careers_perks_column_two') ) :
              while ( have_rows('careers_perks_column_two') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
          </ul>
          <ul class="careers-perks__list">
            <?php if ( have_rows('careers_perks_column_three') ) :
              while ( have_rows('careers_perks_column_three') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
          </ul>
        </div>

        <div class="careers-perks__lists--mobile">
          <ul class="careers-perks__list">
            <?php if ( have_rows('careers_perks_column_one') ) :
              while ( have_rows('careers_perks_column_one') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
            <?php if ( have_rows('careers_perks_column_two') ) :
              while ( have_rows('careers_perks_column_two') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
            <?php if ( have_rows('careers_perks_column_three') ) :
              while ( have_rows('careers_perks_column_three') ) : the_row(); 
                $text = get_sub_field('text'); ?>
                <li class="careers-perk__list-item"><?php echo $text; ?></li>
              <?php endwhile;
            endif; ?>
          </ul>
        </div>

      </div>
    </div>
  </div>
  <!-- END Perks and Benefits Section -->

  <!-- Image Banner One -->
  <?php get_template_part('template-parts/image-banner/image-banner', null, array( 'field_name' => 'image_banner_one')); ?>
  <!-- Image Banner One -->

  <!-- Who We Are Section -->
  <div class="careers-who">
    <div class="careers-who__color-box"></div>
    <div class="careers-who__container">
      <div class="careers-who__main-column">
        <div class="careers-who__col-left">
          <div class="careers-who__image-container">
            <?php echo wp_get_attachment_image(get_field('careers_who_image'), 'full', false, [ 'class' => 'careers-who__image' ]); ?>
          </div>
        </div>
        <div class="careers-who__col-right">
          <h2 class="careers-who__title"><?php echo get_field('careers_who_title'); ?></h2>
          <div class="careers-who__content">
            <div class="careers-who__text"><?php echo get_field('careers_who_text'); ?></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Who We Are Section -->

  <!-- Image Banner Two -->
  <?php get_template_part('template-parts/image-banner/image-banner', null, array( 'field_name' => 'image_banner_two')); ?>
  <!-- Image Banner Two -->

  <!-- Testimonails Template Part -->
  <?php get_template_part('template-parts/testimonials/testimonials'); ?>
  <!-- END Testimonails Template Part -->

  <!-- Testimonail Video Section -->
  <div class="careers-video">
    <div class="careers-video__container">
      <div class="careers-video__column">
        <div class="careers-video__colorbox"></div>
        <h2 class="careers-video__title"><?php echo get_field('careers_video_title'); ?></h2>
        <div class="careers-video__video-container">
          <?php if ( have_rows('careers_video_slides') ) :
            while ( have_rows('careers_video_slides') ) : the_row();

              $video_type = get_sub_field('careers_video_type');
              $video_src = get_sub_field('careers_video');
              $video_thumbnail = get_sub_field('careers_video_thumbnail'); ?>

              <?php if ( $video_type === 'video_file' ) : ?>
                <div class="careers-video__video-slide" data-slideindex="<?php echo get_row_index(); ?>">
                  <video class="careers-video__video" data-src="<?php echo $video_src; ?>" autoplay controls playsinline></video>
                  <?php echo wp_get_attachment_image($video_thumbnail, 'full', false, array( 'class' => 'careers-video__thumbnail')); ?>
                  <div class="careers-video__play-btn">
                    <?php get_template_part('icons/play', null, array('class' => 'careers-video__play-icon')); ?>
                  </div>
                </div>
              <?php else : ?>
                <div class="careers-video__video-slide" data-slideIndex="<?php echo get_row_index(); ?>">
                  <iframe title="Ruth Krishnan Careers Video" class="careers-video__video" data-src="<?php echo $video_src; ?>?title=0&byline=0&portrait=0&autoplay=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                  <?php echo wp_get_attachment_image($video_thumbnail, 'full', false, array( 'class' => 'careers-video__thumbnail')); ?>
                  <div class="careers-video__play-btn">
                    <?php get_template_part('icons/play', null, array('class' => 'careers-video__play-icon')); ?>
                  </div>
                </div>
              <?php endif; ?>
            <?php endwhile;
          endif; ?>
        </div>
        <?php if ( count(get_field('careers_video_slides')) > 1 ) : ?>
          <div class="careers-video__nav">
            <div class="careers-video__nav-prev">
              <?php get_template_part('icons/arrow', null, array( 'class' => 'careers-video__nav-prev-icon')); ?>
            </div>
            <div class="careers-video__nav-indicators">
            <?php if ( have_rows('careers_video_slides') ) :
              while ( have_rows('careers_video_slides') ) : the_row(); ?>
                <div class="careers-video__nav-dot" data-target="<?php echo get_row_index(); ?>"></div>
              <?php endwhile;
            endif; ?>
            </div>
            <div class="careers-video__nav-next">
              <?php get_template_part('icons/arrow', null, array( 'class' => 'careers-video__nav-next-icon')); ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
  <!-- END Testimonail Video Section -->

  <!-- Equal Opportunity Section -->
  <div class="careers-equal">
    <div class="careers-equal__container">
      <div class="careers-equal__column">
        <div class="careers-equal__background">
          <h2 class="careers-equal__title"><?php echo get_field('careers_equal_title'); ?></h2>
          <div class="careers-equal__text"><?php echo get_field('careers_equal_text'); ?></div>
        </div>
      </div>
    </div>
  </div>
  <!-- END Equal Opportunity Section -->

</div>

<?php get_footer(); ?>
