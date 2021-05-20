<?php

function app_init() {

  $argsNd = array(
    'label' => 'New Developments',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'rewrite' => array('slug' => 'newDevelopments'),
		'query_var' => true,
		'menu_icon' => 'dashicons-building',
		'supports' => array(
			'title',
			'editor',
			'custom-fields',)
	);

  $argsNb = array (
    'label' => 'Neighborhoods',
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'hierarchical' => false,
		'rewrite' => array('slug' => 'neighborhoods'),
		'query_var' => true,
		'menu_icon' => 'dashicons-store',
		'supports' => array(
			'title',
			'editor',
			'custom-fields',)
  );

    register_post_type( 'newDevelopments', $argsNd );
    register_post_type( 'neighborhoods', $argsNb );
}

add_action( 'init', 'app_init' );
