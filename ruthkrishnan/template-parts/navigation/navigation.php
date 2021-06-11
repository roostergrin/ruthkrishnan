<?php
/**
 * Displays the site Navigation.
 *
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */

?>

<nav class="navigation" >
  I am the navigation.
  <?php 
    wp_nav_menu( array(
      'theme_location' => 'main-menu',
      'menu_class' => 'navigation__links',
      'container' => 'ul'
    ) );
  ?>
</nav>
