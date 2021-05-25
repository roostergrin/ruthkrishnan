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
      'category'
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
      'category'
    )
  );

    register_post_type( 'newdevelopments', $argsNd );
    register_post_type( 'neighborhoods', $argsNb );
}

add_action( 'init', 'app_init' );
