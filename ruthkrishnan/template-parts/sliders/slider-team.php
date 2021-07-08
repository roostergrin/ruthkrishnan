<?php
/**
 * Displays Meet the Team Slider.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<?php if ( have_rows('slider_team') ) :
  while ( have_rows('slider_team') ) : the_row();

    $background = get_sub_field('background'); 
    $title = get_sub_field('title');
    $intro_text = get_sub_field('text'); ?>

    <section class="slider-team">
      <div class="slider-team__background">
        <?php echo wp_get_attachment_image($background, 'full', false, [ 'class' => 'slider-team__background-image' ]); ?>
      </div>
      <div class="slider-team__container">

        <!-- Intro title and paragraph -->
        <div class="slider-team__intro">
          <div class="slider-team__intro-column">
            <h2 class="slider-team__title"><?php echo $title; ?></h2>
          <div class="slider-team__text"><?php echo $intro_text; ?></div>
          </div>
        </div>

        <!-- Image slider of team member headshots -->
        <div class="slider-team__images">
          <?php if ( have_rows('team_members') ) :
            while ( have_rows('team_members') ) : the_row();
              $image = get_sub_field('image'); ?>

              <div class="slider-team__images-slide" data-index="<?php echo get_row_index(); ?>">
                <div class="slider-team__images-container">
                  <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'slider-team__image' ]); ?>
                </div>
              </div>

            <?php endwhile;
          endif; ?>
        </div>

        <!-- Display Team Member information -->

            <div class="slider-team__members-info">
              <div class="slider-team__members-container">
                <?php if ( have_rows('team_members') ) :
                  while ( have_rows('team_members') ) : the_row();
                    $name = get_sub_field('name');
                    $member_text = get_sub_field('text'); ?>

                    <div class="slider-team__member-slide" data-index="<?php echo get_row_index(); ?>">
                      <h3 class="slider-team__name"><?php echo $name; ?></h3>
                      <div class="slider-team__bio"><?php echo $member_text; ?></div>
                    </div>

                  <?php endwhile;
                endif; ?>
              </div>
            </div>


      </div>
    </section>

  <?php endwhile;
endif; ?>