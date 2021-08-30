<?php
  function custom_taxonomy() {
    register_taxonomy(
      'development-category',
      'newdevelopments',
      array(
          'label' => __( 'Categories' ),
          'rewrite' => array( 'slug' => 'development-category' ),
          'hierarchical' => true,
          'show_admin_column' => true
      )
    );

    register_taxonomy(
      'neighborhood-category',
      'neighborhoods',
      array(
          'label' => __( 'Categories' ),
          'rewrite' => array( 'slug' => 'neighborhood-category' ),
          'hierarchical' => true,
          'show_admin_column' => true
      )
    );

    register_taxonomy(
      'listings-category',
      'propertylistings',
      array(
          'label' => __( 'Categories' ),
          'rewrite' => array( 'slug' => 'listings-category' ),
          'hierarchical' => true,
          'show_admin_column' => true
      )
    );
  }
  add_action( 'init', 'custom_taxonomy' );
