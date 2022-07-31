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

// helpful id's
// San Francisco County ID
// county => ead7906cd13415c8e165dcc09b866b23
// outer-parkside neighborhood ID
// neighborhood_id => d1db1b2e1737332ce8aff251450dbf1f

// https://slipstream.homejunction.com/#/ws/sales?id=search
// changes per neighborhood
$neighborhood_id = '$ead7906cd13415c8e165dcc09b866b23';

// returns propertyType 'condo' or 'single'
$propertyType = 'condo';

// specifically for the neighborhoods ACF – Map Info Window
$two_bed_two_bath = '&baths=2&beds=2';


// https://slipstream.homejunction.com/#/ws/parameters?id=search-criteria
// date ranges can be chosen with a colon in the middle.
$listing_date = '1/1/2021:12/31/2021';

// https://slipstream.homejunction.com/#/ws/sales/statistics?id=computation
$grouping = 'saleDate:interval(quarter)';
$measurements = 'listPrice,salePrice,daysOnMarket,listPricePerSqFt';

$results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=' . $neighborhood_id. '&propertyType=' . $propertyType . $two_bed_two_bath . '&listingDate=' .$listing_date . '&measurements=' . $measurements . '&groups=' . $grouping , $args));
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

