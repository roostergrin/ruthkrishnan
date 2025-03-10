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

<?php get_template_part('template-parts/forms/form-subscribe'); ?>

<footer class="footer">
  <div class="footer__logo">
    <div class="footer__logo-link--rk" aria-label="RK Krishnan Team Logo">
      <?php get_template_part('icons/logo-white', null, array('class' => 'footer__logo-icon')); ?>
    </div>
    <div class="footer__vertical-line"></div>
    <div class="footer__logo-link--compass" aria-label="Compass logo">
      <a href="https://www.compass.com/agents/ruth-krishnan/" target="_blank">
        <?php get_template_part('icons/logo-compass', null, array('class' => 'footer__logo-icon')); ?>
      </a>
    </div>
  </div>
  <div class="footer__container">
    <div class="footer__column footer__contact">
      <div class="footer__title">Contact Us</div>
      <a href="<?php echo get_field('address_link', 'options') ?>" target="_blank"
        aria-label="go to Compass 1400 Van Ness Ave San Francisco, CA 94109 on Google Maps(opens in new window)"
        class="footer__contact-group footer__link footer__address">
        <?php echo get_field('address_text', 'options'); ?>
      </a>
      <div class="footer__contact-group">
        <a href="<?php echo get_field('phone_link', 'options'); ?>"
          class="footer__link footer__phone"><?php echo get_field('phone_number', 'options') ?></a>
        <p class="footer__contact-info">CalBRE# <span
            class="footer__calbre-number"><?php echo get_field('calbre', 'options'); ?></span></p>
        <a href="mailto:<?php echo get_field('email_address', 'options'); ?>"
          class="footer__link"><?php echo get_field('email_address', 'options'); ?></a>
      </div>
      <div class="footer__contact-group">
        <div class="footer__accessibility" id="accessibilityWidget" tabindex="0">Click for Accessibility</div>
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
        $query = new WP_Query($args); ?>

        <?php if ($query->have_posts()) :
          while ($query->have_posts()) : $query->the_post(); ?>
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
        wp_nav_menu(array(
          'theme_location' => 'footer-menu',
          'menu_class' => 'footer__navigation',
          'container' => 'ul'
        ));
        ?>
      </div>
    </div>

    <div class="footer__column footer__follow">
      <div class="footer__follow-container">
        <div class="footer__title">Follow Us</div>
        <div class="footer__social">
          <?php if (have_rows('social_media', 'options')) :
            while (have_rows('social_media', 'options')) : the_row();
              $icon = get_sub_field('icon_name');
              $link = get_sub_field('link');
          ?>

              <a href="<?php echo $link; ?>" aria-label='<?php echo $icon; ?> page (opens in a new tab)'
                class="footer__social-link" target="_blank">
                <?php get_template_part('icons/' . $icon, null, array('class' => 'footer__social-icon')); ?>
              </a>

          <?php endwhile;
          endif; ?>
        </div>

        <div class="footer__affiliate-logos">
          <?php if (have_rows('affiliate_logos', 'options')) :
            while (have_rows('affiliate_logos', 'options')) : the_row();
              $type = get_sub_field('type');
              $aria = get_sub_field('aria_label');

              if ($type === 'image') :
                $image = get_sub_field('image');
                $link = get_sub_field('link');
          ?>

                <a href="<?php echo $link; ?>" class="footer__affiliate-link" aria-label='<?php echo $aria; ?>'
                  target="_blank">
                  <?php echo wp_get_attachment_image($image, 'medium_large', false, ['class' => 'footer__affiliate-image']); ?>
                </a>

              <?php elseif ($type === 'svg') :
                $icon = get_sub_field('icon');
                $link = get_sub_field('link');
              ?>

                <a href="<?php echo $link; ?>" class="footer__affiliate-link" aria-label="<?php echo $aria; ?>"
                  target="_blank">
                  <?php get_template_part('icons/' . $icon, null, array('class' => 'footer__affiliate-icon')); ?>
                </a>

              <?php endif; ?>

          <?php endwhile;
          endif; ?>

        </div>

      </div>
    </div>

    <p class="footer__disclaimer"><?php echo get_field('disclaimer', 'options'); ?></p>

  </div>
</footer>

<?php wp_footer(); ?>

<!-- RubyChat -->
<script>
  window.rubyApi = {
    l: [],
    t: [],
    on: function() {
      this.l.push(arguments)
    },
    trigger: function() {
      this.t.push(arguments)
    }
  };
  (function() {
    var e = "09af067c-d163-465e-9bb2-8a972fce43de";
    var a = false;
    var t = document.createElement("script");
    t.async = true;
    t.type = "text/javascript";
    t.src = "https://chatwidget.ruby.com/" + e;
    document.getElementsByTagName("HEAD").item(0).appendChild(t);
    t.onreadystatechange = t.onload = function(t) {
      if (!a && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        if (window.RubyChat) window.RubyChat({
          c: e
        });
        a = true
      }
    }
  })();
</script>

<!-- Userway -->
<script>
  (function(d) {
    var s = d.createElement("script");
    s.setAttribute("data-account", "D3656BNpyD");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);
  })(document)
</script><noscript>Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website
    accessibility</a></noscript>
<!-- END Userway -->
</body>

</html>