<?php
/**
 * Displays the site Navigation.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<header class="site-navigation" >
  <div class="site-navigation__container">
    <div class="site-navigation__navbar">
      <a class="site-navigation__home" href="/">
        <?php get_template_part('icons/logo-main', null, array( 'class' => 'site-navigation__logo' )); ?>
      </a>
      <nav class="site-navigation__menu-container">
        <?php
        wp_nav_menu( array(
          'theme_location' => 'main-menu',
          'menu_class' => 'site-navigation__menu',
          'container' => 'ul'
        ) );
        ?>
      </nav>
      <a href='/contact-us' class="site-navigation__btn"> schedule consultation</a>
      <div class="site-navigation__hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <div class="site-navigation__overlay"></div>
  <div class="site-navigation__drawer">
    <div class="site-navigation__upper">
      <nav class="site-navigation__mobile-menu">
        <?php
        wp_nav_menu( array(
          'theme_location' => 'mobile-menu',
          'menu_class' => 'site-navigation__menu--mobile',
          'container' => 'ul'
        ) );
        ?>
      </nav>
      <a href='/contact-us' class="site-navigation__btn--mobile"> schedule consultation</a>
    </div>
    <div class="site-navigation__lower">
      <a href="<?php echo get_field('phone_link', 'options'); ?>" class="site-navigation__phone"><?php echo get_field('phone_number', 'options'); ?></a>
      <div class="site-navigation__social-media">
        <?php if ( have_rows('social_media', 'options') ) :
          while ( have_rows('social_media', 'options') ) : the_row(); 
            $icon = get_sub_field('icon_name');
            $link = get_sub_field('link');
          ?>

            <a href="<?php echo $link; ?>" aria-label="<?php echo $icon; ?> page (opens in a new tab)" target="_blank">
              <?php get_template_part('icons/' . $icon, null, array( 'class' => 'site-navigation__social-icon' )); ?>
            </a>

          <?php endwhile;
        endif; ?>
      </div>
    </div>
  </div>

</header>
