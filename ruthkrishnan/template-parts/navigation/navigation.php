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
          'theme_location' => 'main-menu',
          'menu_class' => 'site-navigation__menu--mobile',
          'container' => 'ul'
        ) );
        ?>
      </nav>
      <a href='/contact-us' class="site-navigation__btn--mobile"> schedule consultation</a>
    </div>
    <div class="site-navigation__lower">
      <a href="tel:1-415-735-5867" class="site-navigation__phone">(415) 735-5867</a>
      <div class="site-navigation__social-media">
        <a href="#" aria-label='Facebook page (opens in a new tab)'>
          <?php get_template_part('icons/facebook', null, array( 'class' => 'site-navigation__social-icon' )); ?>
        </a>
        <a href="#" aria-label='Instagram page (opens in a new tab)'>
          <?php get_template_part('icons/instagram', null, array( 'class' => 'site-navigation__social-icon' )); ?>
        </a>
        <a href="#" aria-label='LinkedIn page (opens in a new tab)'>
          <?php get_template_part('icons/linkedin', null, array( 'class' => 'site-navigation__social-icon' )); ?>
        </a>
        <a href="#" aria-label='Yelp page (opens in a new tab)'>
          <?php get_template_part('icons/yelp', null, array( 'class' => 'site-navigation__social-icon' )); ?>
        </a>
        <a href="#" aria-label='YouTube page (opens in a new tab)'>
          <?php get_template_part('icons/youtube', null, array( 'class' => 'site-navigation__social-icon' )); ?>
        </a>
      </div>
    </div>
  </div>

</header>
