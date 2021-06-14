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
      <div class="site-navigation__btn"> schedule consultation</div>
    </div>
  </div>

</header>
