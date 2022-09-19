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

// if (!wp_next_scheduled('update_neighborhoods_data')) {
//   wp_schedule_event(time(), 'weekly', 'get_neighborhood_data_from_api');
// }
add_action('wp_ajax_nopriv_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');
add_action('wp_ajax_get_neighborhood_data_from_api', 'get_neighborhood_data_from_api');

add_action('wp_ajax_nopriv_get_san_francisco_data_from_api', 'get_san_francisco_data_from_api');
add_action('wp_ajax_get_san_francisco_data_from_api', 'get_san_francisco_data_from_api');

add_action('wp_ajax_nopriv_add_weather_score', 'add_weather_score');
add_action('wp_ajax_add_weather_score', 'add_weather_score');

add_action('wp_ajax_nopriv_add_transit_score', 'add_transit_score');
add_action('wp_ajax_add_transit_score', 'add_transit_score');

add_action('wp_ajax_nopriv_add_walk_score', 'add_walk_score');
add_action('wp_ajax_add_walk_score', 'add_walk_score');

add_action('wp_ajax_nopriv_update_cta_button_text', 'update_cta_button_text');
add_action('wp_ajax_update_cta_button_text', 'update_cta_button_text');

add_action('wp_ajax_nopriv_update_scores', 'update_scores');
add_action('wp_ajax_update_scores', 'update_scores');

// /wp-admin/admin-ajax.php?action=update_scores

function update_scores() {
  add_weather_score();
  add_transit_score();
  add_walk_score();
}

function update_cta_button_text() {
  // /wp-admin/admin-ajax.php?action=update_cta_button_text
  $neighborhoods_transit_score= [
    // 'neighborhood_slug' =>'transit score',
    'outer-parkside' =>'schedule time to talk',
    'parkside' =>'schedule time to talk',
    'inner-parkside' =>'schedule time to talk',
    'pine-lake-park' =>'schedule time to talk',
    'merced-manor' =>'schedule time to talk',
    'stonestown' =>'schedule time to talk',
    'lakeside' =>'schedule time to talk',
    'balboa-terrace' =>'schedule time to talk',
    'st-francis-wood' =>'schedule time to talk',
    'ingleside-terrace' =>'schedule time to talk',
    'merced-heights' =>'schedule time to talk',
    'lake-shore' =>'schedule time to talk',
    'sherwood-forest' =>'schedule time to talk',
    'ingleside-heights' =>'schedule time to talk',
    'richmond-central-outer' =>'schedule time to talk',
    'lincoln-park' =>'schedule time to talk',
    'sea-cliff' =>'schedule time to talk',
    'lake-street' =>'schedule time to talk',
    'richmond-inner' =>'schedule time to talk',
    'golden-gate-heights' =>'schedule time to talk',
    'west-portal' =>'schedule time to talk',
    'forest-hills-extensions' =>'schedule time to talk',
    'forest-hill' =>'schedule time to talk',
    'forest-knolls' =>'schedule time to talk',
    'sunset-central-outer' =>'schedule time to talk',
    'golden-gate-park' =>'schedule time to talk',
    'cole-valley' =>'schedule time to talk',
    'midtown-terrace' =>'schedule time to talk',
    'twin-peaks' =>'schedule time to talk',
    'diamond-heights' =>'schedule time to talk',
    'miraloma-park' =>'schedule time to talk',
    'sunnyside' =>'schedule time to talk',
    'westwood-park' =>'schedule time to talk',
    'ingleside' =>'schedule time to talk',
    'oceanview' =>'schedule time to talk',
    'mission-central-outer' =>'schedule time to talk',
    'mission-terrace' =>'schedule time to talk',
    'glen-park' =>'schedule time to talk',
    'noe-valley' =>'schedule time to talk',
    'mount-davidson-manor' =>'schedule time to talk',
    'monterey-heights' =>'schedule time to talk',
    'westwood-highlands' =>'schedule time to talk',
    'corona-heights' =>'schedule time to talk',
    'duboce-triangle' =>'schedule time to talk',
    'haight-ashbury' =>'schedule time to talk',
    'nopa' =>'schedule time to talk',
    'lone-mountain' =>'schedule time to talk',
    'jordan-park-laurel-heights' =>'schedule time to talk',
    'presidio-heights' =>'schedule time to talk',
    'anza-vista' =>'schedule time to talk',
    'clarendon-heights' =>'schedule time to talk',
    'castro-eureka-valley' =>'schedule time to talk',
    'alamo-square' =>'schedule time to talk',
    'western-addition' =>'schedule time to talk',
    'lower-pacific-heights' =>'schedule time to talk',
    'tenderloin' =>'schedule time to talk',
    'van-ness-civic-center' =>'schedule time to talk',
    'ashbury-buena-vista' =>'schedule time to talk',
    'hayes-valley' =>'schedule time to talk',
    'mission-dolores' =>'schedule time to talk',
    'mission-inner' =>'schedule time to talk',
    'bernal-heights' =>'schedule time to talk',
    'crocker-amazon' =>'schedule time to talk',
    'excelsior' =>'schedule time to talk',
    'portola' =>'schedule time to talk',
    'visitacion-valley' =>'schedule time to talk',
    'bayview-heights' =>'schedule time to talk',
    'little-hollywood' =>'schedule time to talk',
    'candlestick-point' =>'schedule time to talk',
    'silver-terrace' =>'schedule time to talk',
    'bayview' =>'schedule time to talk',
    'hunters-point' =>'schedule time to talk',
    'dogpatch' =>'schedule time to talk',
    'soma' =>'schedule time to talk',
    'potrero-hill' =>'schedule time to talk',
    'mission-bay' =>'schedule time to talk',
    'yerba-buena' =>'schedule time to talk',
    'south-beach' =>'schedule time to talk',
    'financial-district' =>'schedule time to talk',
    'north-beach' =>'schedule time to talk',
    'telegraph-hill' =>'schedule time to talk',
    'north-waterfront' =>'schedule time to talk',
    'downtown' =>'schedule time to talk',
    'pacific-heights' =>'schedule time to talk',
    'nob-hill' =>'schedule time to talk',
    'cow-hollow' =>'schedule time to talk',
    'russian-hill' =>'schedule time to talk',
    'marina' =>'schedule time to talk',
    'presidio' =>'schedule time to talk',
  ];
  
  $ACF_group_field = "single_neighborhoods_cta";
  
  foreach($neighborhoods_transit_score as $neighborhood_slug => $transit_score) {
    // echo $transit_score;
    // echo $neighborhood_slug;
    $value = array("button_text" => "$transit_score");
    $neighborhood_post_id_wp = get_page_by_path($neighborhood_slug, 'OBJECT', 'neighborhoods');
    echo $neighborhood_slug;
    echo "\n";
    echo $value;
    echo " ";
    echo $ACF_field;
    update_field($ACF_group_field, $value, $neighborhood_post_id_wp);
  }

  // /wp-admin/admin-ajax.php?action=add_transit_score
}
function add_transit_score() {
  $neighborhoods_transit_score= [
    // 'neighborhood_slug' =>'transit score',
    'outer-parkside' =>'83',
    'parkside' =>'62',
    'inner-parkside' =>'71',
    'pine-lake-park' =>'65',
    'merced-manor' =>'64',
    'stonestown' =>'68',
    'lakeside' =>'71',
    'balboa-terrace' =>'70',
    'st-francis-wood' =>'72',
    'ingleside-terrace' =>'70',
    'merced-heights' =>'78',
    'lake-shore' =>'53',
    'sherwood-forest' =>'66',
    'ingleside-heights' =>'70',
    'richmond-central-outer' =>'68',
    'lincoln-park' =>'55',
    'sea-cliff' =>'62',
    'lake-street' =>'66',
    'richmond-inner' =>'70',
    'golden-gate-heights' =>'67',
    'west-portal' =>'73',
    'forest-hills-extensions' =>'73',
    'forest-hill' =>'72',
    'forest-knolls' =>'64',
    'sunset-inner' =>'66',
    'sunset-central-outer' =>'57',
    'golden-gate-park' =>'51',
    'cole-valley' =>'70',
    'midtown-terrace' =>'69',
    'twin-peaks' =>'65',
    'diamond-heights' =>'68',
    'miraloma-park' =>'66',
    'sunnyside' =>'79',
    'westwood-park' =>'77',
    'ingleside' =>'78',
    'oceanview' =>'84',
    'mission-central-outer' =>'80',
    'mission-terrace' =>'84',
    'glen-park' =>'80',
    'noe-valley' =>'75',
    'mount-davidson-manor' =>'72',
    'monterey-heights' =>'68',
    'westwood-highlands' =>'67',
    'corona-heights' =>'84',
    'duboce-triangle' =>'93',
    'haight-ashbury' =>'73',
    'nopa' =>'74',
    'lone-mountain' =>'71',
    'jordan-park-laurel-heights' =>'70',
    'presidio-heights' =>'68',
    'anza-vista' =>'74',
    'clarendon-heights' =>'69',
    'castro-eureka-valley' =>'89',
    'alamo-square' =>'82',
    'western-addition' =>'81',
    'lower-pacific-heights' =>'74',
    'tenderloin' =>'100',
    'van-ness-civic-center' =>'100',
    'ashbury-buena-vista' =>'80',
    'hayes-valley' =>'94',
    'mission-dolores' =>'96',
    'mission-inner' =>'79',
    'bernal-heights' =>'78',
    'crocker-amazon' =>'71',
    'excelsior' =>'79',
    'portola' =>'69',
    'visitacion-valley' =>'67',
    'bayview-heights' =>'68',
    'little-hollywood' =>'68',
    'candlestick-point' =>'64',
    'silver-terrace' =>'72',
    'bayview' =>'68',
    'hunters-point' =>'59',
    'dogpatch' =>'68',
    'soma' =>'99',
    'potrero-hill' =>'71',
    'mission-bay' =>'83',
    'yerba-buena' =>'100',
    'south-beach' =>'96',
    'financial-district' =>'100',
    'north-beach' =>'86',
    'telegraph-hill' =>'86',
    'north-waterfront' =>'96',
    'downtown' =>'100',
    'pacific-heights' =>'80',
    'nob-hill' =>'96',
    'cow-hollow' =>'68',
    'russian-hill' =>'84',
    'marina' =>'67',
    'presidio' =>'54',
  ];
  $ACF_transit_score = "transit_score";

  foreach($neighborhoods_transit_score as $neighborhood_slug => $transit_score) {
    // echo $transit_score;
    // echo $neighborhood_slug;
    $neighborhood_post_id_wp = get_page_by_path($neighborhood_slug, 'OBJECT', 'neighborhoods');
    update_field($ACF_transit_score, $transit_score, $neighborhood_post_id_wp);
  }

  // /wp-admin/admin-ajax.php?action=add_transit_score
}
function add_walk_score() {
  $neighborhoods_walk_score= [
    // 'neighborhood_slug' =>'walk score',
    'outer-parkside' =>'83',
    'parkside' =>'83',
    'inner-parkside' =>'94',
    'pine-lake-park' =>'64',
    'merced-manor' =>'79',
    'stonestown' =>'87',
    'lakeside' =>'88',
    'balboa-terrace' =>'80',
    'st-francis-wood' =>'86',
    'ingleside-terrace' =>'82',
    'merced-heights' =>'77',
    'lake-shore' =>'43',
    'sherwood-forest' =>'53',
    'ingleside-heights' =>'72',
    'richmond-central-outer' =>'90',
    'lincoln-park' => '22',
    'sea-cliff' =>'81',
    'lake-street' =>'92',
    'richmond-inner' =>'95',
    'golden-gate-heights' =>'77',
    'golden-gate-park' =>'74',
    'west-portal' =>'93',
    'forest-hills-extensions' =>'79',
    'forest-hill' =>'68',
    'forest-knolls' =>'50',
    'sunset-inner' =>'96',
    'sunset-central-outer' =>'83',
    'cole-valley' =>'97',
    'midtown-terrace' =>'49',
    'twin-peaks' =>'36',
    'diamond-heights' =>'76',
    'miraloma-park' =>'62',
    'sunnyside' =>'79',
    'westwood-park' =>'84',
    'ingleside' =>'83',
    'oceanview' =>'76',
    'mission-central-outer' =>'87',
    'mission-terrace' =>'87',
    'glen-park' =>'83',
    'noe-valley' =>'94',
    'mount-davidson-manor' =>'86',
    'monterey-heights' =>'66',
    'westwood-highlands' =>'69',
    'corona-heights' =>'94',
    'duboce-triangle' =>'98',
    'haight-ashbury' =>'97',
    'nopa' =>'91',
    'lone-mountain' =>'92',
    'jordan-park-laurel-heights' =>'96',
    'presidio-heights' =>'92',
    'anza-vista' =>'95',
    'clarendon-heights' =>'60',
    'castro-eureka-valley' =>'96',
    'alamo-square' =>'97',
    'western-addition' =>'97',
    'lower-pacific-heights' =>'97',
    'tenderloin' =>'100',
    'van-ness-civic-center' =>'99',
    'ashbury-buena-vista' =>'93',
    'hayes-valley' =>'99',
    'mission-dolores' =>'99',
    'mission-inner' =>'99',
    'bernal-heights' =>'92',
    'crocker-amazon' =>'76',
    'excelsior' =>'86',
    'portola' =>'79',
    'visitacion-valley' =>'72',
    'bayview-heights' =>'84',
    'little-hollywood' =>'64',
    'candlestick-point' =>'41',
    'silver-terrace' =>'87',
    'bayview' =>'84',
    'hunters-point' =>'84',
    'dogpatch' =>'91',
    'soma' =>'97',
    'potrero-hill' =>'90',
    'mission-bay' =>'87',
    'yerba-buena' =>'96',
    'south-beach' =>'90',
    'financial-district' =>'99',
    'north-beach' =>'99',
    'telegraph-hill' =>'97',
    'north-waterfront' =>'98',
    'downtown' =>'99',
    'pacific-heights' =>'97',
    'nob-hill' =>'99',
    'cow-hollow' =>'94',
    'russian-hill' =>'98',
    'marina' =>'94',
    'presidio' =>'40',
  ];
  $ACF_walk_score = "walk_score";

  foreach($neighborhoods_walk_score as $neighborhood_slug => $walk_score) {
    // echo $walk_score;
    // echo $neighborhood_slug;
    $neighborhood_post_id_wp = get_page_by_path($neighborhood_slug, 'OBJECT', 'neighborhoods');
    update_field($ACF_walk_score, $walk_score, $neighborhood_post_id_wp);
  }

  // /wp-admin/admin-ajax.php?action=add_walk_score
}
function add_weather_score() {
  // 'neighborhood_slug' =>'Microclimate Map',
  $neighborhoods_weather = [
  'outer-parkside' =>'cold & foggy with heavy winds',
  'parkside' =>'cold & foggy with heavy winds',
  'inner-parkside' =>'cold & foggy with heavy winds',
  'pine-lake-park' =>'cold & foggy with heavy winds',
  'merced-manor' =>'cold & foggy with heavy winds',
  'stonestown' =>'cold & foggy with heavy winds',
  'lakeside' =>'cold & foggy with heavy winds',
  'balboa-terrace' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'st-francis-wood' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'ingleside-terrace' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'merced-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'lake-shore' =>'cold & foggy with heavy winds',
  'sherwood-forest' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'ingleside-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'richmond-central-outer' =>'cold, with some fog and light winds',
  'sea-cliff' =>'cold, with some fog and light winds',
  'lake-street' =>'cold, with some fog and light winds',
  'richmond-inner' =>'cold, with some fog and light winds',
  'lincoln-park' =>'cold, with some fog and light winds',
  'golden-gate-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'west-portal' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'forest-hills-extensions' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'forest-hill' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'forest-knolls' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'sunset-central-outer' =>'cold & foggy with heavy winds',
  'sunset-inner' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'golden-gate-park' =>'cool to moderate, with some fog and light winds',
  'cole-valley' =>'moderate to hot, clear skies and light winds',
  'midtown-terrace' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'twin-peaks' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'diamond-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'miraloma-park' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'sunnyside' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'westwood-park' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'ingleside' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'oceanview' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'mission-central-outer' =>'moderate to hot, clear skies and light winds',
  'mission-terrace' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'glen-park' =>'moderate to hot, clear skies and light winds',
  'noe-valley' =>'moderate to hot, clear skies and light winds',
  'mount-davidson-manor' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'monterey-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'westwood-highlands' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'corona-heights' =>'moderate to hot, clear skies and light winds',
  'duboce-triangle' =>'moderate to hot, clear skies and light winds',
  'haight-ashbury' =>'moderate to hot, clear skies and light winds',
  'nopa' =>'moderate to hot, clear skies and light winds',
  'lone-mountain' =>'moderate to hot, clear skies and light winds',
  'jordan-park-laurel-heights' =>'moderate to hot, clear skies and light winds',
  'presidio-heights' =>'moderate to hot, clear skies and light winds',
  'anza-vista' =>'moderate to hot, clear skies and light winds',
  'clarendon-heights' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  'castro-eureka-valley' =>'moderate to hot, clear skies and light winds',
  'alamo-square' =>'moderate to hot, clear skies and light winds',
  'western-addition' =>'moderate to hot, clear skies and light winds',
  'lower-pacific-heights' =>'moderate to hot, clear skies and light winds',
  'tenderloin' =>'moderate to hot, clear skies and light winds',
  'van-ness-civic-center' =>'moderate to hot, clear skies and light winds',
  'ashbury-buena-vista' =>'moderate to hot, clear skies and light winds',
  'hayes-valley' =>'moderate to hot, clear skies and light winds',
  'mission-dolores' =>'moderate to hot, clear skies and light winds',
  'mission-inner' =>'moderate to hot, clear skies and light winds',
  'bernal-heights' =>'moderate to hot, clear skies and light winds',
  'crocker-amazon' =>'moderate to hot, clear skies and heavy winds',
  'excelsior' =>'moderate to hot, clear skies and heavy winds',
  'portola' =>'moderate to hot, clear skies and heavy winds',
  'visitacion-valley' =>'moderate to hot, clear skies and heavy winds',
  'bayview-heights' =>'moderate to hot, clear skies and light winds',
  'little-hollywood' =>'moderate to hot, clear skies and heavy winds',
  'candlestick-point' =>'moderate to hot, clear skies and heavy winds',
  'silver-terrace' =>'moderate to hot, clear skies and light winds',
  'bayview' =>'moderate to hot, clear skies and light winds',
  'hunters-point' =>'moderate to hot, clear skies and heavy winds',
  'dogpatch' =>'moderate to hot, clear skies and heavy winds',
  'soma' =>'moderate to hot, clear skies and light winds',
  'potrero-hill' =>'moderate to hot, clear skies and light winds',
  'mission-bay' =>'moderate to hot, clear skies and light winds',
  'yerba-buena' =>'moderate to hot, clear skies and light winds',
  'south-beach' =>'moderate to hot, clear skies and light winds',
  'financial-district' =>'moderate to hot, clear skies and light winds',
  'north-beach' =>'moderate to hot, clear skies and light winds',
  'telegraph-hill' =>'moderate to hot, clear skies and light winds',
  'north-waterfront' =>'moderate to hot, clear skies and heavy winds',
  'downtown' =>'moderate to hot, clear skies and light winds',
  'pacific-heights' =>'moderate to hot, clear skies and light winds',
  'nob-hill' =>'moderate to hot, clear skies and light winds',
  'cow-hollow' =>'cool to moderate, with some fog and light winds',
  'russian-hill' =>'moderate to hot, clear skies and light winds',
  'marina' =>'cool to moderate, with some fog and light winds',
  'presidio' =>'cool to moderate, a mixture of foggy and clear days, light winds',
  ];


  $ACF_weather_field = "weather";
  $ACF_walk_score = "walk_score";

  foreach($neighborhoods_weather as $neighborhood_slug => $weather) {
    echo $weather;
    echo $neighborhood_slug;
    $neighborhood_post_id_wp = get_page_by_path($neighborhood_slug, 'OBJECT', 'neighborhoods');
    update_field($ACF_weather_field, $weather, $neighborhood_post_id_wp);
  }
  // http://localhost:8888/wp-admin/admin-ajax.php?action=add_weather_score
}
// ead7906cd13415c8e165dcc09b866b23
function get_san_francisco_data_from_api() {
  // token for https://slipstream.homejunction.com/#/ws/api?id=status
    $args = array(
      'headers' => array(
        'Authorization' => 's9-6ea57116-71cf-430f-bb73-d95ab82b0bff'
      )
    );

  $hji_id = 'ead7906cd13415c8e165dcc09b866b23';
  $API_parameter = '&propertyType=single&listingDate=1/1/2019:12/31/2022&measurements=listPrice,salePrice,daysOnMarket,listPricePerSqFt,size&groups=saleDate:interval(year)';
  $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/areas/neighborhoods/search?market=SFAR&pageSize=1000&polygon=$' . $hji_id . $API_parameter, $args));
  // $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$' . $hji_id . $API_parameter, $args));
  echo $results;
  // http://localhost:8888/wp-admin/admin-ajax.php?action=get_san_francisco_data_from_api
}
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

    // 'neighborhood_slug' => 'hji_id'
    // https://slipstream.homejunction.com/#/ws/sales?id=search
    // you can add multiple neighborhood id's with a comma (central-sunset&outer-sunset)
    // example 'd1554796190bbf84a00802c2142e6df4,$cc508a11c03f2e020cc4c4f131a5ff75'
    'outer-parkside' =>'d1db1b2e1737332ce8aff251450dbf1f',
    'parkside' =>'e26f4f96ba6dfb979e6eecb6911c34fe',
    'inner-parkside' =>'600167f914c398013cd4f9776ab5acaf',
    'pine-lake-park' =>'4f3f3b863d7a2eacfd28b68947642d11',
    'merced-manor' =>'364751fdef3d22cf84097b8c2e2c7893',
    'stonestown' =>'8ddb94335c0127a3814f310141abea5b',
    'lakeside' =>'d579da0e998015c80ba3b5e8e1e3f25c',
    'balboa-terrace' =>'7c62e1e825a99721fc24f5e08622e154',
    'st-francis-wood' =>'9c329926133863aff39fc0f5ff707e93',
    'ingleside-terrace' =>'042e514b2f772338996ce58cd91cf14e',
    'merced-heights' =>'8c12bf4f76f10d8ba87dfda8b93b73d3',
    'lake-shore' =>'78f821619717dbca854fe1484da916fd',
    'sherwood-forest' =>'2d32161b17c3ec0d643fb6ea42c953f7',
    'ingleside-heights' =>'e5b71c07b671a828fceaa5f557a4fd84',
    'richmond-central-outer' =>'d2ebadfe4b9dd48ee2f54dbb5a88a77c,$db1e746dee2b6d07c2471ba60000f857',
    'sea-cliff' =>'152b6d65a3ea70b07b40daa4ffeb79b0',
    'lake-street' =>'386fcf260a455271ea1d6e2709003ad5',
    'richmond-inner' =>'797d07d905d51e24c9cebd90023a6bf9',
    'golden-gate-heights' =>'addbe69ad993c071bafd8410e4d39298',
    'west-portal' =>'f20b34f258d17f72bb66d6304205781e',
    'forest-hills-extensions' =>'c5a21993bb78b98ddfe9839381a73ff5',
    'forest-hill' =>'58eac8532cc073b4656e111dec93bb82',
    'forest-knolls' =>'c42c3503b4073c0ef9f8ada97fa9cfa3',
    'sunset-inner' =>'777a293a115918b78caab51ca659bf31',
    'sunset-central-outer' => 'd1554796190bbf84a00802c2142e6df4,$cc508a11c03f2e020cc4c4f131a5ff75',
    'golden-gate-park' =>'88ad77f396753826aa6d96fcfd54f7dd,$c69e9cfbaa5c13c72e66a06888347bb7',
    'cole-valley' =>'4c5e39591372f576fff2428c506892b3',
    'midtown-terrace' =>'83d45a574fb8447549dfcbf1f73162a5',
    'twin-peaks' =>'07e32b07f633c5544171df09bfe6e176',
    'diamond-heights' =>'96d15f1062a98ce9ebc7fdd11fa4f77f',
    'miraloma-park' =>'974b7a3e5bd6433385aa4ec1c6c5de2e',
    'sunnyside' =>'5854a7bea1c28ef54e1ad17132bf02d9',
    'westwood-park' =>'eb19fb50183fcf50cd20efdd35e764b0',
    'ingleside' =>'dcddfc93dd4c2644fbda067289b37954',
    'oceanview' =>'7bf09c65b12ca39d1cae671c338fee88',
    'mission-central-outer' =>'46cc8f9742f92a53da9c32d9a50f081c',
    'mission-terrace' =>'27d7e1f8dff986a399e0c624265b3f13',
    'glen-park' =>'c1855ca77f85ef9f21e5ab207adad483',
    'noe-valley' =>'51aea0f9a4604f2c2f5fc6a3cbd24c97',
    'mount-davidson-manor' =>'5766361a5895c8f55b6fceccf645928d',
    'monterey-heights' =>'b923b1c54151a85b4519795ed8a7573b',
    'westwood-highlands' =>'82d037461b9e8c23159a476d1fe117c9',
    'corona-heights' =>'993ab7aefbf6ead201515a4de74e4316',
    'duboce-triangle' =>'098bc7564305b93dccb495f1080b33e3',
    'haight-ashbury' =>'68847480a3a3fa3bfcac72e75fb00959',
    'nopa' =>'65f0d59433f6f44d22fc9b239d366d78',
    'lone-mountain' =>'fcedca80babe921e2142f5f818c4653e',
    'jordan-park-laurel-heights' =>'227ad36920d9d8c32513ea952dd5a9ea',
    'presidio-heights' =>'a6087ad901b05fd96680fa66ba58fbbb',
    'anza-vista' =>'5c142096d2824acd020d9d23c9ed7b15',
    'clarendon-heights' =>'ca1c97a1a267579623d09d97d3869cb8',
    'castro-eureka-valley' =>'5465e768eba289e29968bc9a862023ba',
    'alamo-square' =>'513677bd98d7e92c42d067529cecfae9',
    'western-addition' =>'67226b68206c7bbe7ad15a151a8ca253',
    'lower-pacific-heights' =>'e19cd5f405a9bda13b81f13b00315afa',
    'tenderloin' =>'ab8078cbc1eb35bc57b2ebec32bc265a',
    // civic center and downtown are the same
    'van-ness-civic-center' =>'3fcd0fd755a568aaff6cab0d08afd206',
    'downtown' =>'3fcd0fd755a568aaff6cab0d08afd206',
    'ashbury-buena-vista' =>'68847480a3a3fa3bfcac72e75fb00959',
    'hayes-valley' =>'43168cdb7462b4c0953d91dcc040f91e',
    'mission-dolores' =>'78a74f4ea3f2d2d312bd75048798d3f2',
    'mission-inner' =>'689f1992cccc14225e65145521d973c7',
    'bernal-heights' =>'1b84669d78562747a5fd4c5e0a0c14c5',
    'crocker-amazon' =>'707cae2aa656c5b5cdf8a1aedb6141c5',
    'excelsior' =>'bce3d3eb6485f84750871d98430e84f7',
    'portola' =>'f0baaa11e8dc883197d9ab67e16af6e0',
    'visitacion-valley' =>'29b0de9e6ed31ba6d7d4ea58294de0fc',
    'bayview-heights' =>'016261d0981f8c6038c573f73139d84d',
    'little-hollywood' =>'781cca28a1aac3d8ea326357e39c4cec',
    'candlestick-point' =>'c76c64ed4bf28b634f4c8dc25704e838',
    'silver-terrace' =>'0f28297d15c23cacb908d475de6458a4',
    'bayview' =>'8f26f0d0c358c0bde6ff10ddc8acb806',
    'hunters-point' =>'eb002036d892b08e01b5581ab8c48da3',
    'dogpatch' =>'833335b873fc2c16dd6c9204f65a9f60',
    'soma' =>'d012f8007897f37532f7de3103f94da6',
    'potrero-hill' =>'18260bd37ef120f5d6280049dcdd987c',
    'mission-bay' =>'be51a2f797d30662f94381cb51b42094',
    'yerba-buena' =>'44d2fd34565e25cc00b25cfd8d5c80c9',
    'south-beach' =>'23531852cde1155f0e020d68e3b5bfe4',
    'financial-district' =>'40372df140deabb14cd11c8f0624ce3d',
    'north-beach' =>'8c957379b7f82065c3b24022b38cd44c',
    'telegraph-hill' =>'e7cca730c9f3e2305d0fd8cb33116fce',
    'north-waterfront' =>'c0dd9c55f0564a9c1dc3f2fc671b3e7b',
    'pacific-heights' =>'79bf959cc58423a4ff765fce74c97f24',
    'nob-hill' =>'de2112150cda778b5c3ac274e777b879',
    'cow-hollow' =>'1e97b564c928946c5a397acaabef1e94',
    'russian-hill' =>'cbc767947f37f149c3fb1d80136fe667',
    'marina' =>'cbed05eb0e7a04fff72274a410721d65',
    'presidio' =>'f2bc0961e85dfe6bce72a41362c00018',
  ];

  date_default_timezone_set('America/Los_Angeles');
  $date = date('m/d/Y', time());
  $four_year_date = date_create($date);
  $one_year_date = date_create($date);

  date_default_timezone_set('America/Los_Angeles');
  $date = date('m/d/Y', time());
  // echo $date;
  $four_year_date = date_create($date);
  $one_year_date = date_create($date);
  $four_year_date = date_sub($four_year_date,date_interval_create_from_date_string("4 years"));
  $one_year_date = date_sub($one_year_date,date_interval_create_from_date_string("1 year"));

  $four_year_date_range = $four_year_date->format('m/d/Y') . ':' . $date;
  $one_year_date_range = $one_year_date->format('m/d/Y') . ':' . $date;

  $API_params = [
    // https://slipstream.homejunction.com/#/ws/sales?id=search

    // 'ACF_field'=> 'API propertyType parameter'
    // single data

    // TODO: set up dates programmatically
    'single_data' => '&propertyType=single&listingDate=' . $four_year_date_range . '&measurements=listPrice,salePrice,daysOnMarket,size&groups=saleDate:interval(quarter)',
    // condo data
    'condo_data' => '&propertyType=condo&listingDate=' . $four_year_date_range . '&measurements=listPrice,salePrice,daysOnMarket,size&groups=saleDate:interval(quarter)',

    // single year
    'single_yearly' => '&propertyType=single&listingDate=' . $four_year_date_range . '&measurements=listPrice,salePrice,daysOnMarket,size&groups=saleDate:interval(year)',
    // condo year
    'condo_yearly' => '&propertyType=condo&listingDate=' . $four_year_date_range . '&measurements=listPrice,salePrice,daysOnMarket,size&groups=saleDate:interval(year)',

    // single monthly
    'single_last_month' => '&propertyType=single&listingDate=' . $one_year_date_range . '&measurements=salePrice,listPrice,size,daysOnMarket',
    // condo 2br 2ba data monthly
    'condo2br2b_data' => '&propertyType=condo&baths=2&beds=2&listingDate=' . $one_year_date_range . '&measurements=salePrice,listPrice,size,daysOnMarket',

  ];


  foreach($API_params as $ACF_field => $API_parameter) {
    foreach($neighborhoods as $neighborhood_slug => $hji_id) {
      // call the data`
      // https://slipstream.homejunction.com/#/ws/sales/statistics?id=computation
      $results = wp_remote_retrieve_body(wp_remote_get('https://slipstream.homejunction.com/ws/sales/statistics/measure?market=SFAR&polygon=$' . $hji_id . $API_parameter, $args));
      // $results = json_decode($results);
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
