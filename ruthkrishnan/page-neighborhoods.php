<?php
/**
 * Template Name: Neighborhoods
 * @package WordPress
 * @subpackage ruthkrishnan
 * @version 1.0
 */
 ?>

<?php
$args = array(
  'headers' => array(
      'Authorization' => 's9-6ea57116-71cf-430f-bb73-d95ab82b0bff'
  )
);

// county => ead7906cd13415c8e165dcc09b866b23
// state => f5bf7cd3323cb6d72e0482f25c17afbd
// outer-parkside => d1db1b2e1737332ce8aff251450dbf1f

// calling individual polygon queries based on area id 

// single
// individual polygon neighborhood 
// $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$d1db1b2e1737332ce8aff251450dbf1f&propertyType=single&listingDate=1/1/2021:12/31/2021&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(quarter)', $args));

// condo - individual polygon neighborhood
// $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$d1db1b2e1737332ce8aff251450dbf1f&propertyType=condo&listingDate=1/1/2021:12/31/2021&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(quarter)', $args));

// 2br 2ba – condo. individual polygon neighborhood
$results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$ead7906cd13415c8e165dcc09b866b23&propertyType=condo&baths=2&beds=2&listingDate=1/1/2021:12/31/2021&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(quarter)', $args));

// Find the search details
// $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/search?market=SFAR&propertyType=condo&baths=2&beds=2&listingDate=1/1/2021:12/31/2021&details=true', $args));

// $neighborhoods = json_decode(wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/areas/neighborhoods/search?county=ead7906cd13415c8e165dcc09b866b23', $args)));

// print_r($results)
echo '<pre>';
// $neighborhoods = $neighborhoods->{'result'}->{'neighborhoods'};
// $neighborhood_ids = array();
// foreach ($neighborhoods as $hood) {
//   $neighborhood_ids[$hood->{'id'}] = str_replace(" ", "-", strtolower($hood->{'name'}));
// }
// print_r($neighborhood_ids);
print_r($results);
echo '</pre>';
die();

// outer-parkside id =>  d1db1b2e1737332ce8aff251450dbf1f
// These are very limited end points and will most likely not be usable for condo and single but aggregate is okay!
// $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/areas/trends/prices-and-sales?id=d1db1b2e1737332ce8aff251450dbf1f', $args));
// $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/areas/trends/days-on-market?id=d1db1b2e1737332ce8aff251450dbf1f', $args));

?>

<?php get_footer(); ?>

