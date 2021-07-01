<?php
/**
 * The template for displaying the footer
 *
 * Contains footer content and the closing of the #main and #page div elements.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
?>

<?php wp_footer(); ?>

<footer class="footer">
  <div class="footer__container">
    <div class="footer__column footer__contact">
      <a class="footer__home" href="/">
        <?php get_template_part('icons/logo-main', null, array( 'class' => 'footer__logo' )); ?>
      </a>
      <a href="<?php echo get_field('address_link', 'options') ?>" class="footer__contact-group footer__link footer__address">
        <?php echo get_field('address_text', 'options'); ?>
      </a>
      <div class="footer__contact-group">
        <a href="<?php echo get_field('phone_link', 'options'); ?>" class="footer__link footer__phone"><?php echo get_field('phone_number', 'options') ?></a>
        <div class="footer__contact-info">CalBRE# <?php echo get_field('calbre', 'options'); ?></div>
        <a href="mailto:<?php echo get_field('email_address', 'options'); ?>" class="footer__link"><?php echo get_field('email_address', 'options'); ?></a>
      </div>
    </div>

    <div class="footer__column footer__recent">
      <div class="footer__title">Recent Posts</div>
      <div class="footer__posts">
        <?php 
          $args = array(
            'post_status' => 'publish',
            'posts_per_page' => 3
          );
          $query = new WP_Query( $args ); ?>

          <?php if ( $query->have_posts() ) :
            while ( $query->have_posts() ) : $query->the_post(); ?>
              <div class="footer__post">
                <a href="<?php echo the_permalink(); ?>" class="footer__post-link">
                  <?php echo the_title(); ?>
                </a>
              </div>
            <?php endwhile;
          endif; ?>
      </div>
    </div>

    <div class="footer__column footer__learnmore">
      <div class="footer__learnmore-container">
        <div class="footer__title">Learn More</div>
        <?php 
          wp_nav_menu( array(
            'theme_location' => 'footer-menu',
            'menu_class' => 'footer__navigation',
            'container' => 'ul'
          ) );
        ?>
      </div>
    </div>

    <div class="footer__column footer__follow">
      <div class="footer__follow-container">
        <div class="footer__title">Follow Us</div>
        <div class="footer__social">
          <?php if ( have_rows('social_media', 'options') ) :
            while ( have_rows('social_media', 'options') ) : the_row(); 
              $icon = get_sub_field('icon_name');
              $link = get_sub_field('link');
            ?>

              <a href="<?php echo $link; ?>" aria-label='<?php echo $icon; ?> page (opens in a new tab)' class="footer__social-link" target="_blank">
                <?php get_template_part('icons/' . $icon, null, array( 'class' => 'footer__social-icon' )); ?>
              </a>

            <?php endwhile;
          endif; ?>
        </div>

        <div class="footer__affiliate-logos">
          <?php if ( have_rows('affiliate_logos', 'options') ) :
            while ( have_rows('affiliate_logos', 'options') ) : the_row(); 
              $type = get_sub_field('type'); 

              if ( $type === 'image' ) :
                $image = get_sub_field('image');
                $link = get_sub_field('link'); 
                ?>

                <a href="<?php echo $link; ?>" class="footer__affiliate-link" aria-label="Affiliate Page (opens in a new tab)" target="_blank">
                  <?php echo wp_get_attachment_image($image, 'medium_large', false, [ 'class' => 'footer__affiliate-image' ]); ?>
                </a>

              <?php elseif ( $type === 'svg' ) :
                $icon = get_sub_field('icon');
                $link = get_sub_field('link');
                ?>

                <a href="<?php echo $link; ?>" class="footer__affiliate-link" aria-label="Affiliate Page (opens in a new tab)" target="_blank">
                  <?php get_template_part('icons/' . $icon, null, array( 'class' => 'footer__affiliate-icon' )); ?>
                </a>
              
              <?php endif; ?>

            <?php endwhile;
          endif; ?>

        </div>


      </div>
    </div>

  </div>
</footer>

</body>
</html>
