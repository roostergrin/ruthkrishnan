<?php
// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');
function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'contact', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route'
  ));
}
// function for handling post request to new api route
function rg_serve_route () {
  require('wp-load.php');

  global $wpdb;

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'bryant@roostergrin.com';
  $subject = 'Ruth Krishnan Contact Form';
  $headers = array('Content-Type: text/html; charset=UTF-8');
  $message = '<html><body>';
  // $message .= '<p><h4><strong>Form Submission by: </strong></h4>' . $data['firstName'] . ' ' . $data['lastName'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['email'] . '</p>';
  // $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['phone'] . '</p>';
  // $message .= '<p><h4><strong>First Time Patient?: </strong></h4>' . $data['firstTime'] . '</p>';
  // $message .= '<p><h4><strong>Location: </strong></h4>' . $data['location'] . '</p>';
  // $message .= '<p><h4><strong>Message:</strong></h4> ' . $data['message'] . '</p>';
  $message .= '</body></html>';

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
