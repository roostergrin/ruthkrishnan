<?php
  function custom_taxonomy() {
    register_taxonomy(
      'development-category',
      'newdevelopments',
      array(
          'label' => __( 'Categories' ),
          'rewrite' => array( 'slug' => 'development-category' ),
          'hierarchical' => true,
      )
    );
  }
  add_action( 'init', 'custom_taxonomy' );
