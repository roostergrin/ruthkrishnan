<?php

// load stylesheets
function theme_enqueue_styles() {
  wp_enqueue_style( 'global', get_template_directory_uri() . '/styles/global.css' );
  if( is_home() || is_front_page() ) :
    wp_enqueue_style( 'homepage', get_template_directory_uri() . '/styles/homepage.css' );
  endif;
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');

// load scripts
function theme_enqueue_scripts() {
  wp_enqueue_script( 'test', get_template_directory_uri() . '/js/test.js' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts');