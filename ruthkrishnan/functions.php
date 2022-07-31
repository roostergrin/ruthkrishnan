<?php

add_action('wpseo_add_opengraph_additional_images', 'add_images');

function add_images($object)
{
  if (!is_page_template('page-privacy.php')) {
    if (!$object->has_images()) {
      if (have_rows('background_image')) :
        while (have_rows('background_image')) : the_row();
          $image = get_sub_field('image');

          if (!empty($image)) :
            $imageUrl = wp_get_attachment_image_src($image, $size = 'full')[0];
            $object->add_image($imageUrl);
          endif;
        endwhile;
      endif;
    }
  }
}



// include additional functionality -------------------------
include_once(get_template_directory() . '/email.php');

/**
 *
 *  Functions and Definitions
 *
 */

// include additional functionality -------------------------
include_once(get_template_directory() . '/functions/custom-taxonomies.php');
include_once(get_template_directory() . '/functions/custom-post.php');

if (!wp_next_scheduled('update_brewery_list')) {
  wp_schedule_event(time(), 'weekly', 'get_breweries_from_api');
}
add_action('wp_ajax_nopriv_get_breweries_from_api', 'get_breweries_from_api');
add_action('wp_ajax_get_breweries_from_api', 'get_breweries_from_api');


add_action('wp_ajax_nopriv_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');
add_action('wp_ajax_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');

function get_neighborhood_data_from_api()
{
  $current_page = (!empty($_POST['current_page'])) ? $_POST['current_page'] : 1;
  $file = get_stylesheet_directory() . '/report-2.txt';
  $sales_statistics = [];

  // token for https://slipstream.homejunction.com/#/ws/api?id=status
  $args = array(
    'headers' => array(
      'Authorization' => 's9-6ea57116-71cf-430f-bb73-d95ab82b0bff'
    )
  );

  // helpful id's
  // San Francisco County ID
  // county => ead7906cd13415c8e165dcc09b866b23

  // https://slipstream.homejunction.com/#/ws/sales?id=search
  // changes per neighborhood
  // you can add multiple neighborhood id's with a comma (outer-sunset&inner-sunset)
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

  $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=' . $neighborhood_id . '&propertyType=' . $propertyType . $two_bed_two_bath . '&listingDate=' . $listing_date . '&measurements=' . $measurements . '&groups=' . $grouping, $args));

  file_put_contents($file, 'Current Page: ' . $results . '\n\n', FILE_APPEND);

  $post_id = get_page_by_path('little-hollywood', 'OBJECT', 'neighborhoods');
  update_field('field_62e6f47df35d1', $results, $post_id);

  // echo $results;
  $sales_statistics[] = $results;
  // echo json_encode($sales_statistics);
  echo $results;
  $results = json_decode($results);
  if (!is_array($results) || empty($results)) {
    return false;
  }

  // $sales_statistics[] = $results;
  // echo json_encode($results);
  // echo json_encode($sales_statistics);

  // If you needed to create new neighborhoods programmatically. 
  // $neighborhoods = 'an array of neighborhoods...';
  // foreach( $neighborhoods[0] as $neighborhood ) {
  //   // If neighborhood slugs did not already exist you could add the neighborhoods through 
  //   $neighborhood_slug = sanitize_title($neighborhood_name->name . '-' . $hji_id->id);
  //   $inserted_neighborhood = wp_insert_post([
  //     'post_name' => $neighborhood_slug,
  //     'post_title' => $neighborhood_slug,
  //     'post_type' => 'neighborhood',
  //     'post_status' => 'publish'
  //   ]);


  // Note on update_field

  // group ACF's accept an array w/ key value pairs.
  // 'field_XgroupX' => array(
  //   // nested group
  //   // field key => value pairs for each sub field
  //   'field_Xsub_fieldX' => 'value',
  // ),

  // repeater ACF's accept an array of arrays
  // 'field_XrepeaterX' => array(
  //   // nested repeater
  //   // field key => value pairs for each sub field
  //   array(
  //     'field_Xsub_fieldX' => 'link title',
  //   ),
  //   array(
  //     'field_Xsub_fieldX' => 'link title',
  //   ),
  // ),


  $neighborhood_data_key = 'field_62e59db962413';
  $sales_price_group_key = 'field_62e6aae0b4e5c';
  $days_on_market_group_key = 'field_62e59ddf65317';
  $list_price_per_sq_foot_group_key = 'field_62e59dfd0bb70';
  $list_price_to_sales_price_received_group_key = 'field_62e59e41650c5';

  $neighborhood_data_data = array(
    // repeater is an array of arrays
    array(
      // groups are an array of key value pairs
      $sales_price_group_key => array(
        'field_62e6aaf4b4e5d' => 'average',
        'field_62e6aafcb4e5e' => 'median',
        'field_62e6ab01b4e5f' => 'low',
        'field_62e6ab05b4e60' => 'high',
      ),
      $days_on_market_group_key => array(
        'field_62e59deb65318' => 'average'
      ),
      $list_price_per_sq_foot_group_key => array(
        'field_62e59e080bb71' => 'average'
      ),
      $list_price_to_sales_price_received_group_key => array(
        'field_62e59e4b650c6' => 'average'
      ),
    ),

    // next quarter
    array(
      // groups are an array of key value pairs
      $sales_price_group_key => array(
        'field_62e6aaf4b4e5d' => 'average',
        'field_62e6aafcb4e5e' => 'median',
        'field_62e6ab01b4e5f' => 'low',
        'field_62e6ab05b4e60' => 'high',
      ),
      $days_on_market_group_key => array(
        'field_62e59deb65318' => 'average'
      ),
      $list_price_per_sq_foot_group_key => array(
        'field_62e59e080bb71' => 'average'
      ),
      $list_price_to_sales_price_received_group_key => array(
        'field_62e59e4b650c6' => 'average'
      ),
    ),
  );

  // echo json_encode($neighborhood_data_data);

  // update_field($neighborhood_data_key, $neighborhood_data_data, $post_id);


  $mapinfo_window_key = 'field_60c29eb2ab16e';
  $mapinfo_repeater_key = 'field_60c29ed8ab171';

  $mapinfo_info = array(
    $mapinfo_repeater_key => array(
      array(
        'field_60c29eedab172' => 'lets',
      ),
      array(
        'field_60c29eedab172' => 'go'
      )
    )
  );

  // update_field($mapinfo_window_key, $mapinfo_info, $post_id);

  // echo json_encode($mapinfo_info);

  // idk if this is necessary, but good to know
  $current_page = $current_page + 1;

  wp_remote_post(admin_url('admin-ajax.php?action=get_neighborhood_data_from_api'), [
    'blocking' => false,
    'sslverify' => false,
    'body' => [
      'current_page' => $current_page
    ]
  ]);
}

function get_breweries_from_api()
{

  $file = get_stylesheet_directory() . '/report.txt';
  $current_page = (!empty($_POST['current_page'])) ? $_POST['current_page'] : 1;

  $breweries = [];

  $results = wp_remote_retrieve_body(wp_remote_get('https://api.openbrewerydb.org/breweries/?page=' . $current_page . '&per_page=50'));
  file_put_contents($file, "Current Page: " . $current_page . "\n\n", FILE_APPEND);

  $results = json_decode($results);

  if (!is_array($results) || empty($results)) {
    return false;
  }

  $breweries[] = $results;

  foreach ($breweries[0] as $brewery) {
    $brewery_slug = sanitize_title($brewery->name . '-' . $brewery->id);

    $existing_brewery = get_page_by_path($brewery_slug, 'OBJECT', 'brewery');

    if ($existing_brewery === null) {
      $inserted_brewery = wp_insert_post([
        'post_name' => $brewery_slug,
        'post_title' => $brewery_slug,
        'post_type' => 'brewery',
        'post_status' => 'publish'
      ]);

      if (is_wp_error($inserted_brewery)) {
        continue;
      }

      $fillable = [
        'field_622bc72b69a27' => 'name',
        'field_622bc73669a28' => 'brewery_type',
        'field_622bc74469a29' => 'street',
        'field_622bc74a69a2a' => 'city',
        'field_622bc77269a2b' => 'state',
        'field_622bc77a69a2c' => 'postal_code',
        'field_622bc78169a2d' => 'country',
        'field_622bc78a69a2e' => 'longitude',
        'field_622bc78a69a2e' => 'latitude',
        'field_622bc79669a2f' => 'phone',
        'field_622bc79d69a30' => 'website',
        'field_622bc7a269a31' => 'updated_at'
      ];

      foreach ($fillable as $key => $name) {
        update_field($key, $brewery->$name, $inserted_brewery);
      }
    } else {

      $existing_brewery_id = $existing_brewery->ID;
      $existing_brewery_timestamp = get_field('updated_at', $existing_brewery_id);

      if ($brewery->updated_at >= $existing_brewery_timestamp) {

        $fillable = [
          'field_622bc72b69a27' => 'name',
          'field_622bc73669a28' => 'brewery_type',
          'field_622bc74469a29' => 'street',
          'field_622bc74a69a2a' => 'city',
          'field_622bc77269a2b' => 'state',
          'field_622bc77a69a2c' => 'postal_code',
          'field_622bc78169a2d' => 'country',
          'field_622bc78a69a2e' => 'longitude',
          'field_622bc78a69a2e' => 'latitude',
          'field_622bc79669a2f' => 'phone',
          'field_622bc79d69a30' => 'website',
          'field_622bc7a269a31' => 'updated_at'
        ];

        foreach ($fillable as $key => $name) {
          update_field($key, $brewery->$name, $existing_brewery_id);
        }
      }
    }
  }

  $current_page = $current_page + 3;
  wp_remote_post(admin_url('admin-ajax.php?action=get_breweries_from_api'), [
    'blocking' => false,
    'sslverify' => false,
    'body' => [
      'current_page' => $current_page
    ]
  ]);
}
// remove wysiwyg editors -------------------------

function remove_wysiwyg_editor()
{
  remove_post_type_support('post', 'editor');
  remove_post_type_support('page', 'editor');
}

add_action('init', 'remove_wysiwyg_editor');

add_action('admin_menu', 'my_remove_admin_menus');
function my_remove_admin_menus()
{
  remove_menu_page('edit-comments.php');
}

// load stylesheets -------------------------
function theme_enqueue_styles()
{
  // global styles
  wp_enqueue_style('global', get_template_directory_uri() . '/styles/global.css');

  // page specific styles
  if (is_home() || is_front_page()) {
    wp_enqueue_style('homepage', get_template_directory_uri() . '/styles/homepage.css');
  }

  if (is_page_template('page-newdevelopments.php')) {
    wp_enqueue_style('newdevelopments', get_template_directory_uri() . '/styles/newdevelopments.css');
  }

  if (is_single() && get_post_type() === 'newdevelopments') {
    wp_enqueue_style('single-newdevelopments', get_template_directory_uri() . '/styles/single-newdevelopments.css');
  }

  if (is_page_template('page-neighborhoods.php')) {
    wp_enqueue_style('neighborhoods', get_template_directory_uri() . '/styles/neighborhoods.css');
  }

  if (is_category() || is_page_template('page-blog.php')) {
    wp_enqueue_style('blog', get_template_directory_uri() . '/styles/blog.css');
  }

  if (is_single() && get_post_type() === 'post') {
    wp_enqueue_style('single-blog', get_template_directory_uri() . '/styles/single-blog.css');
  }

  if (is_archive()) {
    wp_enqueue_style('archive', get_template_directory_uri() . '/styles/archive.css');
  }

  if (is_page_template('page-about.php')) {
    wp_enqueue_style('about-page', get_template_directory_uri() . '/styles/about.css');
  }

  if (is_single() && get_post_type() === 'propertylistings') {
    wp_enqueue_style('single-listings', get_template_directory_uri() . '/styles/single-listings.css');
  }

  if (is_page_template('page-thankyou.php')) {
    wp_enqueue_style('thankyou', get_template_directory_uri() . '/styles/thankyou.css');
  }

  if (is_page_template('page-sell.php')) {
    wp_enqueue_style('sell', get_template_directory_uri() . '/styles/sell.css');
  }

  if (is_page_template('page-buy.php')) {
    wp_enqueue_style('buy', get_template_directory_uri() . '/styles/buy.css');
  }

  if (is_single() && get_post_type() === 'neighborhoods') {
    wp_enqueue_style('single-neighborhoods', get_template_directory_uri() . '/styles/single-neighborhoods.css');
  }

  if (is_page_template('page-contact.php')) {
    wp_enqueue_style('contact', get_template_directory_uri() . '/styles/contact.css');
  }

  if (is_page_template('page-talks.php')) {
    wp_enqueue_style('talks', get_template_directory_uri() . '/styles/talks.css');
  }

  if (is_page_template('page-coaching.php')) {
    wp_enqueue_style('coaching', get_template_directory_uri() . '/styles/coaching.css');
  }

  if (is_page_template('page-careers.php')) {
    wp_enqueue_style('careers', get_template_directory_uri() . '/styles/careers.css');
  }

  if (is_single() && get_post_type() === 'careers') {
    wp_enqueue_style('single-careers', get_template_directory_uri() . '/styles/single-careers.css');
  }

  if (is_page_template('page-privacy.php')) {
    wp_enqueue_style('privacy', get_template_directory_uri() . '/styles/privacy.css');
  }

  if (is_page_template('page-marketing.php')) {
    wp_enqueue_style('marketing', get_template_directory_uri() . '/styles/marketing.css');
  }

  if (is_404()) {
    wp_enqueue_style('404', get_template_directory_uri() . '/styles/404.css');
  }
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// load scripts -------------------------
function theme_enqueue_scripts()
{

  // Third Party Scripts
  wp_register_script('axios', 'https://unpkg.com/axios/dist/axios.min.js', array(), '', true);
  wp_enqueue_script('axios');

  // global scripts
  if (!is_page_template('page-thankyou.php')) {
    wp_register_script('global', get_template_directory_uri() . '/js/global.js', array(), '', true);
    wp_enqueue_script('global');
  }

  // page specific scripts
  if (is_home() || is_front_page()) {
    wp_register_script('homepage', get_template_directory_uri() . '/js/homepage.js', array(), '', true);
    wp_enqueue_script('homepage');

    wp_register_script('vimeo-player', 'https://player.vimeo.com/api/player.js', array(), '', true);
    wp_enqueue_script('vimeo-player');
  }

  if (!is_home() && !is_front_page() && get_post_type() !== 'propertylistings' && !is_page_template('page-thankyou.php') && !is_page_template('page-privacy.php') && !is_404()) {
    wp_register_script('siteHero', get_template_directory_uri() . '/js/site-hero.js', array(), '', true);
    wp_enqueue_script('siteHero');
  }

  if (is_page_template('page-newdevelopments.php')) {
    wp_register_script('newdevelopments', get_template_directory_uri() . '/js/newdevelopments.js', array(), '', true);
    wp_enqueue_script('newdevelopments');
  }

  if (is_single() && get_post_type() === 'newdevelopments') {
    wp_register_script('single-newdevelopments', get_template_directory_uri() . '/js/single-newdevelopments.js', array(), '', true);
    wp_enqueue_script('single-newdevelopments');
  }

  if (is_page_template('page-neighborhoods.php')) {
    wp_register_script('neighborhoods', get_template_directory_uri() . '/js/neighborhoods.js', array(), '', true);
    wp_enqueue_script('neighborhoods');
  }

  if (is_page_template('page-blog.php') || is_archive()) {
    wp_register_script('blog', get_template_directory_uri() . '/js/blog.js', array(), '', true);
    wp_enqueue_script('blog');
  }

  if (is_single() && get_post_type() === 'post') {
    wp_register_script('single-blog', get_template_directory_uri() . '/js/single-blog.js', array(), '', true);
    wp_enqueue_script('single-blog');
  }

  if (is_page_template('page-about.php')) {
    wp_register_script('about-page', get_template_directory_uri() . '/js/about.js', array(), '', true);
    wp_enqueue_script('about-page');
  }

  if (is_single() && get_post_type() === 'propertylistings') {
    wp_register_script('single-listings', get_template_directory_uri() . '/js/single-listings.js', array(), '', true);
    wp_enqueue_script('single-listings');

    wp_register_script('vimeo-player', 'https://player.vimeo.com/api/player.js', array(), '', true);
    wp_enqueue_script('vimeo-player');
  }

  if (is_page_template('page-thankyou.php')) {
    wp_register_script('thankyou', get_template_directory_uri() . '/js/thankyou.js', array(), '', true);
    wp_enqueue_script('thankyou');

    wp_register_script('thankyou-conversion-script', get_template_directory_uri() . '/js/thankyou-conversion-script.js', array(), '', false);
    wp_enqueue_script('thankyou-conversion-script');
  }

  if (is_page_template('page-sell.php')) {
    wp_register_script('sell', get_template_directory_uri() . '/js/sell.js', array(), '', true);
    wp_enqueue_script('sell');
  }

  if (is_page_template('page-buy.php')) {
    wp_register_script('buy', get_template_directory_uri() . '/js/buy.js', array(), '', true);
    wp_enqueue_script('buy');
  }

  if (is_single() && get_post_type() === 'neighborhoods') {
    wp_register_script('single-neighborhoods', get_template_directory_uri() . '/js/single-neighborhoods.js', array(), '', true);
    wp_enqueue_script('single-neighborhoods');
  }

  if (is_page_template('page-talks.php')) {
    wp_register_script('talks', get_template_directory_uri() . '/js/talks.js', array(), '', true);
    wp_enqueue_script('talks');
  }

  if (is_page_template('page-coaching.php')) {
    wp_register_script('coaching', get_template_directory_uri() . '/js/coaching.js', array(), '', true);
    wp_enqueue_script('coaching');
  }

  if (is_page_template('page-careers.php')) {
    wp_register_script('careers', get_template_directory_uri() . '/js/careers.js', array(), '', true);
    wp_enqueue_script('careers');
  }

  if (is_single() && get_post_type() === 'careers') {
    wp_register_script('single-careers', get_template_directory_uri() . '/js/single-careers.js', array(), '', true);
    wp_enqueue_script('single-careers');
  }

  if (is_page_template('page-privacy.php')) {
    wp_register_script('privacy', get_template_directory_uri() . '/js/privacy.js', array(), '', true);
    wp_enqueue_script('privacy');
  }

  if (is_page_template('page-marketing.php')) {
    wp_register_script('marketing', get_template_directory_uri() . '/js/marketing.js', array(), '', true);
    wp_enqueue_script('marketing');
  }

  if (is_404()) {
    wp_register_script('404', get_template_directory_uri() . '/js/404.js', array(), '', true);
    wp_enqueue_script('404');
  }
}
add_action('wp_enqueue_scripts', 'theme_enqueue_scripts');

// google api -------------------------

// Google Maps ACF
function my_acf_init()
{
  acf_update_setting('google_api_key', 'AIzaSyBiifcKk2OyOUEMprGC7VFm92OeRq5ZKWo');
}
add_action('acf/init', 'my_acf_init');

function google_maps_scripts()
{
  if (!is_admin()) {
    wp_register_script('googlemapsapi', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiifcKk2OyOUEMprGC7VFm92OeRq5ZKWo', array(), '', true);
    wp_enqueue_script('googlemapsapi');
  }
}

add_action('wp_enqueue_scripts', 'google_maps_scripts', 100);

add_theme_support('title-tag');

// Add Menus
function theme_menu()
{
  register_nav_menus(
    array(
      'main-menu' => ('Main Menu'),
      'mobile-menu' => ('Mobile Menu'),
      'footer-menu' => ('Footer Menu')
    )
  );
}
add_action('init', 'theme_menu');

// Add ACF Options Page
if (function_exists('acf_add_options_page')) {

  acf_add_options_page(array(
    'page_title' => 'Global Data',
    'menu_title' => 'Global Data',
    'menu_slug' => 'globaldata',
    'icon_url' => 'dashicons-admin-site-alt3'
  ));
}
