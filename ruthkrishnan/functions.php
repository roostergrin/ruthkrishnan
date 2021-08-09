<?php

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

// remove wysiwyg editors -------------------------

function remove_wysiwyg_editor () {
  remove_post_type_support( 'post', 'editor');
  remove_post_type_support( 'page', 'editor');
}

add_action( 'init', 'remove_wysiwyg_editor' );

add_action( 'admin_menu', 'my_remove_admin_menus' );
function my_remove_admin_menus() {
    remove_menu_page( 'edit-comments.php' );
}

// load stylesheets -------------------------
function theme_enqueue_styles() {
  // global styles
  wp_enqueue_style( 'global', get_template_directory_uri() . '/styles/global.css' );

  // page specific styles
  if ( is_home() || is_front_page() ) {
    wp_enqueue_style( 'homepage', get_template_directory_uri() . '/styles/homepage.css' );
  }

  if ( is_page_template('page-newdevelopments.php') ) {
    wp_enqueue_style( 'newdevelopments', get_template_directory_uri() . '/styles/newdevelopments.css' );
  }

  if ( is_single() && get_post_type() === 'newdevelopments' ) {
    wp_enqueue_style( 'single-newdevelopments', get_template_directory_uri() . '/styles/single-newdevelopments.css' );
  }

  if ( is_page_template('page-neighborhoods.php') ) {
    wp_enqueue_style( 'neighborhoods', get_template_directory_uri() . '/styles/neighborhoods.css' );
  }

  if ( is_category() || is_page_template('page-blog.php') ) {
    wp_enqueue_style( 'blog', get_template_directory_uri() . '/styles/blog.css' );
  }

  if ( is_single() && get_post_type() === 'post' ) {
    wp_enqueue_style( 'single-blog', get_template_directory_uri() . '/styles/single-blog.css' );
  }

  if ( is_archive() ) {
    wp_enqueue_style( 'archive', get_template_directory_uri() . '/styles/archive.css' );
  }

  if ( is_page_template('page-about.php') ) {
    wp_enqueue_style( 'about-page', get_template_directory_uri() . '/styles/about.css' );
  }

  if ( is_single() && get_post_type() === 'propertylistings' ) {
    wp_enqueue_style( 'single-listings', get_template_directory_uri() . '/styles/single-listings.css' );
  }

  if ( is_page_template('page-thankyou.php') ) {
    wp_enqueue_style( 'thankyou', get_template_directory_uri() . '/styles/thankyou.css' );
  }

  if ( is_page_template('page-sell.php') ) {
    wp_enqueue_style( 'sell', get_template_directory_uri() . '/styles/sell.css' );
  }

  if ( is_page_template('page-buy.php') ) {
    wp_enqueue_style( 'buy', get_template_directory_uri() . '/styles/buy.css' );
  }

  if ( is_single() && get_post_type() === 'neighborhoods' ) {
    wp_enqueue_style( 'single-neighborhoods', get_template_directory_uri() . '/styles/single-neighborhoods.css' );
  }

  if ( is_page_template('page-contact.php') ) {
    wp_enqueue_style( 'contact', get_template_directory_uri() . '/styles/contact.css' );
  }

  if ( is_page_template('page-talks.php') ) {
    wp_enqueue_style( 'talks', get_template_directory_uri() . '/styles/talks.css' );
  }

  if ( is_page_template('page-coaching.php') ) {
    wp_enqueue_style( 'coaching', get_template_directory_uri() . '/styles/coaching.css' );
  }

  if ( is_page_template('page-careers.php') ) {
    wp_enqueue_style( 'careers', get_template_directory_uri() . '/styles/careers.css' );
  }

  if ( is_single() && get_post_type() === 'careers' ) {
    wp_enqueue_style( 'single-careers', get_template_directory_uri() . '/styles/single-careers.css' );
  } 

  if ( is_page_template('page-privacy.php') ) {
    wp_enqueue_style( 'privacy', get_template_directory_uri() . '/styles/privacy.css' );
  }

  if ( is_page_template('page-marketing.php') ) {
    wp_enqueue_style( 'marketing', get_template_directory_uri() . '/styles/marketing.css' );
  }

  if ( is_404() ) {
    wp_enqueue_style( '404', get_template_directory_uri() . '/styles/404.css' );
  }

}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');

// load scripts -------------------------
function theme_enqueue_scripts() {

  // Third Party Scripts
  wp_register_script( 'axios', 'https://unpkg.com/axios/dist/axios.min.js', array(), '', true);
  wp_enqueue_script( 'axios' );
  
  // global scripts
  if ( !is_page_template('page-thankyou.php') ) {
    wp_register_script( 'global', get_template_directory_uri() . '/js/global.js', array(), '', true);
    wp_enqueue_script( 'global' );
  }

  // page specific scripts
  if ( is_home() || is_front_page() ) {
    wp_register_script( 'homepage', get_template_directory_uri() . '/js/homepage.js', array(), '', true );
    wp_enqueue_script( 'homepage' );
    
    wp_register_script( 'vimeo-player', 'https://player.vimeo.com/api/player.js', array(), '', true);
    wp_enqueue_script( 'vimeo-player' );
  }

  if ( !is_home() && !is_front_page() && get_post_type() !== 'propertylistings' && !is_page_template('page-thankyou.php') && !is_page_template('page-careers.php') && !is_page_template('page-privacy.php') && !is_404() ) {
    wp_register_script( 'siteHero', get_template_directory_uri() . '/js/site-hero.js', array(), '', true);
    wp_enqueue_script( 'siteHero' );
  }

  if ( is_page_template('page-newdevelopments.php') ) {
    wp_register_script( 'newdevelopments', get_template_directory_uri() . '/js/newdevelopments.js', array(), '', true);
    wp_enqueue_script( 'newdevelopments' );
  }

  if ( is_single() && get_post_type() === 'newdevelopments' ) {
    wp_register_script('single-newdevelopments', get_template_directory_uri() . '/js/single-newdevelopments.js', array(), '', true);
    wp_enqueue_script('single-newdevelopments');
  }

  if ( is_page_template('page-neighborhoods.php') ) {
    wp_register_script( 'neighborhoods', get_template_directory_uri() . '/js/neighborhoods.js', array(), '', true);
    wp_enqueue_script( 'neighborhoods' );
  }

  if ( is_page_template('page-blog.php') || is_archive() ) {
    wp_register_script( 'blog', get_template_directory_uri() . '/js/blog.js', array(), '', true);
    wp_enqueue_script( 'blog' );
  }

  if ( is_single() && get_post_type() === 'post' ) {
    wp_register_script( 'single-blog', get_template_directory_uri() . '/js/single-blog.js', array(), '', true);
    wp_enqueue_script( 'single-blog' );
  }

  if ( is_page_template('page-about.php') ) {
    wp_register_script( 'about-page', get_template_directory_uri() . '/js/about.js', array(), '', true);
    wp_enqueue_script( 'about-page' );
  }

  if ( is_single() && get_post_type() === 'propertylistings' ) {
    wp_register_script( 'single-listings', get_template_directory_uri() . '/js/single-listings.js', array(), '', true);
    wp_enqueue_script( 'single-listings' );

    wp_register_script( 'vimeo-player', 'https://player.vimeo.com/api/player.js', array(), '', true);
    wp_enqueue_script( 'vimeo-player' );
  }

  if ( is_page_template('page-thankyou.php') ) {
    wp_register_script( 'thankyou', get_template_directory_uri() . '/js/thankyou.js', array(), '', true);
    wp_enqueue_script( 'thankyou' );
  }

  if ( is_page_template('page-sell.php') ) {
    wp_register_script( 'sell', get_template_directory_uri() . '/js/sell.js', array(), '', true);
    wp_enqueue_script( 'sell' );
  }

  if ( is_page_template('page-buy.php') ) {
    wp_register_script( 'buy', get_template_directory_uri() . '/js/buy.js', array(), '', true);
    wp_enqueue_script( 'buy' );
  }

  if ( is_single() && get_post_type() === 'neighborhoods' ) {
    wp_register_script( 'single-neighborhoods', get_template_directory_uri() . '/js/single-neighborhoods.js', array(), '', true);
    wp_enqueue_script( 'single-neighborhoods' );
  }

  if ( is_page_template('page-talks.php') ) {
    wp_register_script( 'talks', get_template_directory_uri() . '/js/talks.js', array(), '', true);
    wp_enqueue_script( 'talks' );
  }

  if ( is_page_template('page-coaching.php') ) {
    wp_register_script( 'coaching', get_template_directory_uri() . '/js/coaching.js', array(), '', true);
    wp_enqueue_script( 'coaching' );
  }

  if ( is_page_template('page-careers.php') ) {
    wp_register_script( 'careers', get_template_directory_uri() . '/js/careers.js', array(), '', true);
    wp_enqueue_script( 'careers' );
  }

  if ( is_single() && get_post_type() === 'careers' ) {
    wp_register_script('single-careers', get_template_directory_uri() . '/js/single-careers.js', array(), '', true);
    wp_enqueue_script('single-careers');
  }

  if ( is_page_template('page-privacy.php') ) {
    wp_register_script( 'privacy', get_template_directory_uri() . '/js/privacy.js', array(), '', true);
    wp_enqueue_script( 'privacy' );
  }
  
  if ( is_page_template('page-marketing.php') ) {
    wp_register_script( 'marketing', get_template_directory_uri() . '/js/marketing.js', array(), '', true);
    wp_enqueue_script( 'marketing' );
  }

  if ( is_404() ) {
    wp_register_script( '404', get_template_directory_uri() . '/js/404.js', array(), '', true);
    wp_enqueue_script( '404' );
  }

}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts');

// google api -------------------------

// Google Maps ACF
function my_acf_init() {
	acf_update_setting('google_api_key', 'AIzaSyBiifcKk2OyOUEMprGC7VFm92OeRq5ZKWo');
}
add_action('acf/init', 'my_acf_init');

function google_maps_scripts() {
  if (!is_admin()) {
    wp_register_script('googlemapsapi', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiifcKk2OyOUEMprGC7VFm92OeRq5ZKWo', array(), '', true);
    wp_enqueue_script('googlemapsapi');
  }
}

add_action('wp_enqueue_scripts', 'google_maps_scripts', 100);

add_theme_support( 'title-tag' );

// Add Menus
function theme_menu() {
  register_nav_menus(
    array(
      'main-menu' => ( 'Main Menu' ),
      'mobile-menu' => ( 'Mobile Menu' ),
      'footer-menu' => ( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'theme_menu');

// Add ACF Options Page
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page( array(
    'page_title' => 'Global Data',
    'menu_title' => 'Global Data',
    'menu_slug' => 'globaldata',
    'icon_url' => 'dashicons-admin-site-alt3'
  ) );
	
}
