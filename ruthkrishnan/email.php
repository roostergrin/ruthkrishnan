<?php

// GET IN TOUCH FORM EMAILER ---------------------------------------

// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes_get_in_touch');
function rg_register_routes_get_in_touch () {
  register_rest_route('rg-mail/v1', 'form-get-in-touch', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_get_in_touch'
  ));
}
// function for handling post request to new api route
function rg_serve_route_get_in_touch () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'no-reply@ruthkrishnan.com';
  $to = 'info@ruthkrishnan.com';
  $subject = 'Ruth Krishnan Contact Form';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<!DOCTYPE html><html><body>';
  $message .= '<div class="container" style="background-color: #ebf5ff; padding: 1.5rem 0;">';
  $message .= '<div style="padding: 2rem 0; margin: 0 auto;"><img style="width: auto; height: 6rem; display: block; margin-left: auto; margin-right: auto; margin-bottom: 1rem;" src="https://www.roostergrin.com/wp-content/uploads/2019/11/rg-logo.png">';
  $message .= '<h1 style="font-size: 40px; margin: 0; text-align: center; width: 100%; color: #003b75;">Form Received!</h1></div></div>';
  $message .= '<div class="section" style="background-color: #fdfdfd;"><div class="container" style="padding: 4rem 32px 1rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<div class="card-holder" style="padding: 7px; background-color: #e6e6e6;"><div class="card-holder" style="padding: 2rem; background-color: white;">';
  $message .= '<table style="width: 100%; text-align: left"><tr><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Full Name</p></th></tr><tr>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['fullname'] . '</h5></td></tr>';
  $message .= '</table><table style="width: 100%; text-align: left">';
  $message .= '<tr><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">E-Mail</p></th><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Phone</p></th></tr><tr>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['email'] . '</h5></td>';
  $message .= '<td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">'. $data['phone'] . '</h5></td></tr>';
  $message .= '</table><table style="width: 100%; text-align: left">';
  $message .= '<tr><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">Message</p></th></tr>';
  $message .= '<tr><td style="font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300;">' . $data['message'] . '</h5></td></tr></table></div></div></div>';
  $message .= '<div class="container" style="padding: 0 32px 4rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<p style="color: #3f3f3f;">This form was generated from <a href="https://ruthkrishnan.com" target="_blank" style="text-decoration: none">ruthkrishnan.com</a></p>';
  $message .= '</div></div></body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}


// EXCLUSIVE ACCESS FORM EMAILER ---------------------------------------

// wp api custom endpoints
add_action('rest_api_init', 'rg_register_route_exclusive');
function rg_register_route_exclusive () {
  register_rest_route('rg-mail/v1', 'exclusive-access', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_exclusive'
  ));
}
// function for handling post request to new api route
function rg_serve_route_exclusive () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'no-reply@ruthkrishnan.com';
  $to = 'info@ruthkrishnan.com';
  $subject = 'Ruth Krishnan Newsletter Signup';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<!DOCTYPE html><html><body>';
  $message .= '<div class="container" style="background-color: #ebf5ff; padding: 1.5rem 0;">';
  $message .= '<div style="padding: 2rem 0; margin: 0 auto;"><img style="width: auto; height: 6rem; display: block; margin-left: auto; margin-right: auto; margin-bottom: 1rem;" src="https://www.roostergrin.com/wp-content/uploads/2019/11/rg-logo.png">';
  $message .= '<h1 style="font-size: 40px; margin: 0; text-align: center; width: 100%; color: #003b75;">Form Received!</h1></div></div>';
  $message .= '<div class="section" style="background-color: #fdfdfd;">';
  $message .= '<div class="container" style="padding: 4rem 32px 1rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<div class="card-holder" style="padding: 7px; background-color: #e6e6e6;">';
  $message .= '<div class="card-holder" style="padding: 2rem; background-color: white;">';
  $message .= '<table style="width: 100%; text-align: left">';
  $message .= '<tr><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">E-Mail</p></th></tr>';
  $message .= '<tr><td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['email'] . '</h5></td></tr>';
  $message .= '</table></div></div></div>';
  $message .= '<div class="container" style="padding: 0 32px 4rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<p style="color: #3f3f3f;">This form was generated from <a href="https://www.ruthkrishnan.com" target="_blank" style="text-decoration: none">ruthkrishnan.com</a></p>';
  $message .= '</div></div></body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}


// SUBSCRIBE FORM EMAILER ---------------------------------------

// wp api custom endpoints
add_action('rest_api_init', 'rg_register_route_subscribe');
function rg_register_route_subscribe () {
  register_rest_route('rg-mail/v1', 'form-subscribe', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_subscribe'
  ));
}
// function for handling post request to new api route
function rg_serve_route_subscribe () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'no-reply@ruthkrishnan.com';
  $to = 'info@ruthkrishnan.com';
  $subject = 'Ruth Krishnan Email Subscribed';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<!DOCTYPE html><html><body>';
  $message .= '<div class="container" style="background-color: #ebf5ff; padding: 1.5rem 0;">';
  $message .= '<div style="padding: 2rem 0; margin: 0 auto;"><img style="width: auto; height: 6rem; display: block; margin-left: auto; margin-right: auto; margin-bottom: 1rem;" src="https://www.roostergrin.com/wp-content/uploads/2019/11/rg-logo.png">';
  $message .= '<h1 style="font-size: 40px; margin: 0; text-align: center; width: 100%; color: #003b75;">Form Received!</h1></div></div>';
  $message .= '<div class="section" style="background-color: #fdfdfd;">';
  $message .= '<div class="container" style="padding: 4rem 32px 1rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<div class="card-holder" style="padding: 7px; background-color: #e6e6e6;">';
  $message .= '<div class="card-holder" style="padding: 2rem; background-color: white;">';
  $message .= '<table style="width: 100%; text-align: left">';
  $message .= '<tr><th><p style="font-size: 14px; margin-bottom: .5rem; color: #848484; font-weight: 300;">E-Mail</p></th></tr>';
  $message .= '<tr><td style="width: 50%; font-size: 20px;"><h5 style="margin-top: 0; padding-top: 0; font-weight: 300; border-bottom: 1px solid #3f3f3f; margin-right: 10%;">' . $data['email'] . '</h5></td></tr>';
  $message .= '</table></div></div></div>';
  $message .= '<div class="container" style="padding: 0 32px 4rem 32px; max-width: 1440px; margin: 0 auto">';
  $message .= '<p style="color: #3f3f3f;">This form was generated from <a href="https://www.ruthkrishnan.com" target="_blank" style="text-decoration: none">ruthkrishnan.com</a></p>';
  $message .= '</div></div></body></html>';

  $table_name = $wpdb->prefix . 'emails';

  $charset_collate = $wpdb->get_charset_collate();

  $sql = "CREATE TABLE IF NOT EXISTS $table_name (
    `id` mediumint(9) NOT NULL AUTO_INCREMENT,
    `email` text NOT NULL,
    `message` text NOT NULL,
    UNIQUE (`id`)
  ) $charset_collate;";

  require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

  dbDelta( $sql );

  $wpdb->insert($table_name, array(
    'email' => (string)$data['email'],
    'message' => (string)$message
  ));

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
