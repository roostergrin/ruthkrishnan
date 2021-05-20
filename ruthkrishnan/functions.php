<?php

// load stylesheets
function theme_enqueue_styles() {
  wp_enqueue_style( 'test', get_template_directory_uri() . '/styles/test.css' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');

// load scripts
function theme_enqueue_scripts() {
  wp_enqueue_script( 'test', get_template_directory_uri() . '/scripts/test.js' );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_scripts');