<?php

function app_init() {

  $argsNd = array(
    'label' => 'New Developments',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'has_archive' => false,
		'rewrite' => array('slug' => 'new-developments'),
		'query_var' => true,
		'menu_icon' => 'dashicons-building',
		'supports' => array(
			'title',
			'custom-fields',),
    'taxonomies' => array(
      'development-category'
    )
	);

  $argsNb = array (
    'label' => 'Neighborhoods',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'has_archive' => false,
		'rewrite' => array('slug' => 'neighborhoods'),
		'query_var' => true,
		'menu_icon' => 'dashicons-store',
		'supports' => array(
			'title',
			'custom-fields',),
    'taxonomies' => array(
			'neighborhood-category'
		)
  );

  $argsListings = array(
    'label' => 'Listings',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'has_archive' => false,
		'rewrite' => array('slug' => 'property-listings'),
		'query_var' => true,
		'menu_icon' => 'dashicons-location-alt',
		'supports' => array(
			'title',
			'custom-fields',),
    'taxonomies' => array()
	);

  $argsCareers = array(
    'label' => 'Job Posts',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'has_archive' => false,
		'rewrite' => array('slug' => 'careers'),
		'query_var' => true,
		'menu_icon' => 'dashicons-businesswoman',
		'supports' => array(
			'title',
			'custom-fields',),
    'taxonomies' => array()
	);

    register_post_type( 'newdevelopments', $argsNd );
    register_post_type( 'neighborhoods', $argsNb );
    register_post_type( 'propertylistings', $argsListings );
    register_post_type( 'careers', $argsCareers );
}

add_action( 'init', 'app_init' );
