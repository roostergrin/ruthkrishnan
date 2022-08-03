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

if (!wp_next_scheduled('update_neighborhoods_data')) {
  wp_schedule_event(time(), 'weekly', 'get_neighborhood_data_from_api');
}
add_action('wp_ajax_nopriv_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');
add_action('wp_ajax_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');

function get_neighborhood_data_from_api()
{
  $file = get_stylesheet_directory() . '/report-2.txt';

  // token for https://slipstream.homejunction.com/#/ws/api?id=status
  $args = array(
    'headers' => array(
      'Authorization' => 's9-6ea57116-71cf-430f-bb73-d95ab82b0bff'
    )
  );

  $neighborhoods = [
    // hear me out okay.. all the slugs are already set up like this AND some of the slugs encompass 2 neighborhoods so you have to do these by hand :(

    // 'hji_id' => 'neighborhood_slug'
    // https://slipstream.homejunction.com/#/ws/sales?id=search
    // you can add multiple neighborhood id's with a comma (outer-sunset&inner-sunset)
    // example '1b84669d78562747a5fd4c5e0a0c14c5,$d1db1b2e1737332ce8aff251450dbf1f'
    'd1db1b2e1737332ce8aff251450dbf1f' =>'outer-parkside',
    'e26f4f96ba6dfb979e6eecb6911c34fe' =>'parkside',
    '600167f914c398013cd4f9776ab5acaf' =>'inner-parkside',
    '4f3f3b863d7a2eacfd28b68947642d11' =>'pine-lake-park',
    '364751fdef3d22cf84097b8c2e2c7893' =>'merced-manor',
    '8ddb94335c0127a3814f310141abea5b' =>'stonestown',
    'd579da0e998015c80ba3b5e8e1e3f25c' =>'lakeside',
    '7c62e1e825a99721fc24f5e08622e154' =>'balboa-terrace',
    '9c329926133863aff39fc0f5ff707e93' =>'st-francis-wood',
    '042e514b2f772338996ce58cd91cf14e' =>'ingleside-terrace',
    '8c12bf4f76f10d8ba87dfda8b93b73d3' =>'merced-heights',
    '78f821619717dbca854fe1484da916fd' =>'lake-shore',
    '2d32161b17c3ec0d643fb6ea42c953f7' =>'sherwood-forest',
    'e5b71c07b671a828fceaa5f557a4fd84' =>'ingleside-heights',
    'd2ebadfe4b9dd48ee2f54dbb5a88a77c,$db1e746dee2b6d07c2471ba60000f857' =>'richmond-central-outer',
    '152b6d65a3ea70b07b40daa4ffeb79b0' =>'sea-cliff',
    '386fcf260a455271ea1d6e2709003ad5' =>'lake-street',
    '797d07d905d51e24c9cebd90023a6bf9' =>'richmond-inner',
    'addbe69ad993c071bafd8410e4d39298' =>'golden-gate-heights',
    'f20b34f258d17f72bb66d6304205781e' =>'west-portal',
    'c5a21993bb78b98ddfe9839381a73ff5' =>'forest-hills-extensions',
    '58eac8532cc073b4656e111dec93bb82' =>'forest-hill',
    'c42c3503b4073c0ef9f8ada97fa9cfa3' =>'forest-knolls',
    '777a293a115918b78caab51ca659bf31' =>'sunset-inner',
    '88ad77f396753826aa6d96fcfd54f7dd,$c69e9cfbaa5c13c72e66a06888347bb7' =>'golden-gate-park',
    '4c5e39591372f576fff2428c506892b3' =>'cole-valley',
    '83d45a574fb8447549dfcbf1f73162a5' =>'midtown-terrace',
    '07e32b07f633c5544171df09bfe6e176' =>'twin-peaks',
    '96d15f1062a98ce9ebc7fdd11fa4f77f' =>'diamond-heights',
    '974b7a3e5bd6433385aa4ec1c6c5de2e' =>'miraloma-park',
    '5854a7bea1c28ef54e1ad17132bf02d9' =>'sunnyside',
    'eb19fb50183fcf50cd20efdd35e764b0' =>'westwood-park',
    'dcddfc93dd4c2644fbda067289b37954' =>'ingleside',
    '7bf09c65b12ca39d1cae671c338fee88' =>'oceanview',
    '46cc8f9742f92a53da9c32d9a50f081c' =>'mission-central-outer',
    '27d7e1f8dff986a399e0c624265b3f13' =>'mission-terrace',
    'c1855ca77f85ef9f21e5ab207adad483' =>'glen-park',
    '51aea0f9a4604f2c2f5fc6a3cbd24c97' =>'noe-valley',
    '5766361a5895c8f55b6fceccf645928d' =>'mount-davidson-manor',
    'b923b1c54151a85b4519795ed8a7573b' =>'monterey-heights',
    '82d037461b9e8c23159a476d1fe117c9' =>'westwood-highlands',
    '993ab7aefbf6ead201515a4de74e4316' =>'corona-heights',
    '098bc7564305b93dccb495f1080b33e3' =>'duboce-triangle',
    '68847480a3a3fa3bfcac72e75fb00959' =>'haight-ashbury',
    '65f0d59433f6f44d22fc9b239d366d78' =>'nopa',
    'fcedca80babe921e2142f5f818c4653e' =>'lone-mountain',
    '227ad36920d9d8c32513ea952dd5a9ea' =>'jordan-park-laurel-heights',
    'a6087ad901b05fd96680fa66ba58fbbb' =>'presidio-heights',
    '5c142096d2824acd020d9d23c9ed7b15' =>'anza-vista',
    'ca1c97a1a267579623d09d97d3869cb8' =>'clarendon-heights',
    '5465e768eba289e29968bc9a862023ba' =>'castro-eureka-valley',
    '513677bd98d7e92c42d067529cecfae9' =>'alamo-square',
    '67226b68206c7bbe7ad15a151a8ca253' =>'western-addition',
    'e19cd5f405a9bda13b81f13b00315afa' =>'lower-pacific-heights',
    'ab8078cbc1eb35bc57b2ebec32bc265a' =>'tenderloin',
    '3fcd0fd755a568aaff6cab0d08afd206' =>'van-ness-civic-center',
    '68847480a3a3fa3bfcac72e75fb00959' =>'ashbury-buena-vista',
    '43168cdb7462b4c0953d91dcc040f91e' =>'hayes-valley',
    '78a74f4ea3f2d2d312bd75048798d3f2' =>'mission-dolores',
    '689f1992cccc14225e65145521d973c7' =>'mission-inner',
    '1b84669d78562747a5fd4c5e0a0c14c5' =>'bernal-heights',
    '707cae2aa656c5b5cdf8a1aedb6141c5' =>'crocker-amazon',
    'bce3d3eb6485f84750871d98430e84f7' =>'excelsior',
    'f0baaa11e8dc883197d9ab67e16af6e0' =>'portola',
    '29b0de9e6ed31ba6d7d4ea58294de0fc' =>'visitacion-valley',
    '016261d0981f8c6038c573f73139d84d' =>'bayview-heights',
    '781cca28a1aac3d8ea326357e39c4cec' =>'little-hollywood',
    'c76c64ed4bf28b634f4c8dc25704e838' =>'candlestick-point',
    '0f28297d15c23cacb908d475de6458a4' =>'silver-terrace',
    '8f26f0d0c358c0bde6ff10ddc8acb806' =>'bayview',
    'eb002036d892b08e01b5581ab8c48da3' =>'hunters-point',
    '833335b873fc2c16dd6c9204f65a9f60' =>'dogpatch',
    'd012f8007897f37532f7de3103f94da6' =>'soma',
    '18260bd37ef120f5d6280049dcdd987c' =>'potrero-hill',
    'be51a2f797d30662f94381cb51b42094' =>'mission-bay',
    '44d2fd34565e25cc00b25cfd8d5c80c9' =>'yerba-buena',
    '23531852cde1155f0e020d68e3b5bfe4' =>'south-beach',
    '40372df140deabb14cd11c8f0624ce3d' =>'financial-district',
    '8c957379b7f82065c3b24022b38cd44c' =>'north-beach',
    'e7cca730c9f3e2305d0fd8cb33116fce' =>'telegraph-hill',
    'c0dd9c55f0564a9c1dc3f2fc671b3e7b' =>'north-waterfront',
    '3fcd0fd755a568aaff6cab0d08afd206' =>'downtown',
    '79bf959cc58423a4ff765fce74c97f24' =>'pacific-heights',
    'de2112150cda778b5c3ac274e777b879' =>'nob-hill',
    '1e97b564c928946c5a397acaabef1e94' =>'cow-hollow',
    'cbc767947f37f149c3fb1d80136fe667' =>'russian-hill',
    'cbed05eb0e7a04fff72274a410721d65' =>'marina',
    'f2bc0961e85dfe6bce72a41362c00018' =>'presidio',
  ];

  $API_params = [
    // https://slipstream.homejunction.com/#/ws/sales?id=search
    
    // 'ACF_field'=> 'API propertyType parameter'
    // single data
    'field_62e6f47df35d1' => '&propertyType=single&listingDate=1/1/2019:12/31/2022&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(quarter)',
    // condo data
    'field_62e82053acca6' => '&propertyType=condo&listingDate=1/1/2019:12/31/2022&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(quarter)',
    
    // single yearly
    'field_62e9a3ed06487' => '&propertyType=single&listingDate=1/1/2019:12/31/2022&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(yearly)',
    // condo yearly
    'field_62e9a3e306486' => '&propertyType=condo&listingDate=1/1/2019:12/31/2022&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt&groups=saleDate:interval(yearly)',

    // single monthly
    'field_62e99eb4410d7' => '&propertyType=single&listingDate=1/31/2022:12/31/2022&measurements=salePrice,listPricePerSqFt',
    // condo 2br 2ba data monthly
    'field_62e84063b6f36' => '&propertyType=condo&baths=2&beds=2&listingDate=1/31/2022:12/31/2022&measurements=salePrice,listPricePerSqFt',
    
  ];

  foreach($API_params as $ACF_field => $API_parameter) {
    foreach($neighborhoods as $hji_id => $neighborhood_slug) {
      // call the data`
      // https://slipstream.homejunction.com/#/ws/sales/statistics?id=computation
      $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$' . $hji_id . $API_parameter, $args));
      $results = json_decode($results);
      // $results = json_encode($results);
      file_put_contents($file, 'Current field: ' . $ACF_field .', '. $API_parameter ."\n\n Current Neighborhood:". $neighborhood_slug .', '. $hji_id .', '. "\n\n", FILE_APPEND);
      $neighborhood_post_id_wp = get_page_by_path($neighborhood_slug, 'OBJECT', 'neighborhoods');
      update_field($ACF_field, $results, $neighborhood_post_id_wp);
    }
  }
  // http://localhost:8888/wp-admin/admin-ajax.php?action=get_neighborhood_data_from_api
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
