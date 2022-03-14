<?php
/**
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0.0
 */

get_header(); ?>

<h1>Ruth Krishnan</h1>

<?php
$results = wp_remote_get('https://api.openbrewerydb.org/breweries/?page=1&per_page=50')

echo '<pre>';
print_r($results);
echo '</pre>';
die();
?>

<?php get_footer(); ?>
