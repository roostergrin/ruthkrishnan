<?php

/**
 *
 *  Functions and Definitions
 *
 */

// include additional functionality -------------------------
include_once(get_template_directory() . '/functions/custom-post.php');

// remove wysiwyg editors -------------------------

function remove_wysiwyg_editor () {
  remove_post_type_support( 'post', 'editor');
  remove_post_type_support( 'page', 'editor');
}

add_action( 'init', 'remove_wysiwyg_editor' );

// load stylesheets -------------------------
function theme_enqueue_styles() {
  wp_enqueue_style( 'global', get_template_directory_uri() . '/styles/global.css' );

  if ( is_home() || is_front_page() ) {
    wp_enqueue_style( 'homepage', get_template_directory_uri() . '/styles/homepage.css' );
  }

  if ( is_page_template('page-newdevelopments.php') ) {
    wp_enqueue_style( 'newdevelopments-page', get_template_directory_uri() . '/styles/newdevelopments-page.css' );
  }

}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');

// load scripts -------------------------
function theme_enqueue_scripts() {
  // wp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' );
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
    wp_register_script('googlemapsapi', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBiifcKk2OyOUEMprGC7VFm92OeRq5ZKWo', array(), '', false);
    wp_enqueue_script('googlemapsapi');
    
    if ( is_single() && get_post_type() === 'newdevelopments' ) { 
      wp_register_script('gmaps-init', get_template_directory_uri() . '/js/gmaps.js', array(), '', false);
      wp_enqueue_script('gmaps-init');
    } else if ( is_page_template('page-newdevelopments.php') ) {
      wp_register_script('gmaps-new-developments-init', get_template_directory_uri() . '/js/gmap-development.js', array(), '', false);
      wp_enqueue_script('gmaps-new-developments-init');
    }
  } 
}

add_action('wp_enqueue_scripts', 'google_maps_scripts', 100);
