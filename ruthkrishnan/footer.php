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
      <a href="https://goo.gl/maps/JkD8e24iXX59588aA" class="footer__contact-group footer__link footer__address">
        1400 Van Ness Ave.<br>
        San Francisco, CA 94109
      </a>
      <div class="footer__contact-group">
        <a href="tel:+14157353867" class="footer__link footer__phone">(415) 735-3867</a>
        <div class="footer__contact-info">CalBRE# 01862279</div>
        <a href="mailto:info@ruthkrishnan.com" class="footer__link">info@ruthkrishnan.com</a>
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
                  <?php echo the_title() . " | " . get_the_date(); ?>
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
      <div class="footer__follow-conatiner">
        <div class="footer__title">Follow Us</div>
        <div class="footer__social">
          <a href="#" aria-label='Facebook page (opens in a new tab)' class="footer__social-link">
            <?php get_template_part('icons/facebook', null, array( 'class' => 'footer__social-icon' )); ?>
          </a>
          <a href="#" aria-label='Instagram page (opens in a new tab)' class="footer__social-link">
            <?php get_template_part('icons/instagram', null, array( 'class' => 'footer__social-icon' )); ?>
          </a>
          <a href="#" aria-label='LinkedIn page (opens in a new tab)' class="footer__social-link">
            <?php get_template_part('icons/linkedin', null, array( 'class' => 'footer__social-icon' )); ?>
          </a>
          <a href="#" aria-label='Yelp page (opens in a new tab)' class="footer__social-link">
            <?php get_template_part('icons/yelp', null, array( 'class' => 'footer__social-icon' )); ?>
          </a>
          <a href="#" aria-label='YouTube page (opens in a new tab)' class="footer__social-link">
            <?php get_template_part('icons/youtube', null, array( 'class' => 'footer__social-icon' )); ?>
          </a>
        </div>

        <div class="footer__affiliate-logos">
          <?php get_template_part('icons/wall-street', null, array( 'class' => 'footer__affiliate-icon' )); ?>
          <?php get_template_part('icons/real-trends', null, array( 'class' => 'footer__affiliate-icon' )); ?>
        </div>


      </div>
    </div>

  </div>
</footer>

</body>
</html>
