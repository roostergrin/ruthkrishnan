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

<footer>
  this is the footer
  <?php 
    wp_nav_menu( array(
      'theme_location' => 'footer-menu',
      'menu_class' => 'footer__links',
      'container' => 'ul'
    ) );
  ?>
</footer>

</body>
</html>
