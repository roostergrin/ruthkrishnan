<?php
/**
 * Template Name: Neighborhoods
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
get_header(); ?>

<?php
$args = array(
  'headers' => array(
      'Authorization' => 's9-6ea57116-71cf-430f-bb73-d95ab82b0bff'
  )
);
$results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/markets/offices/get?market=hjimls', $args));

echo '<pre>';
print_r($results);
echo '</pre>';
die();

?>

<?php get_footer(); ?>
