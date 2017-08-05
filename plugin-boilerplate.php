<?php
/*
Plugin Name: Plugin Boilerplate
Description: Description
Author: underDEV
Author URI: http://underdev.it
Version: 1.0.0
License: GPL3
Text Domain: Text Domain
Domain Path: Domain Path
*/

$plugin_version    = '1.0.0';
$plugin_textdomain = 'plugin-boilerplate';
$plugin_file       = __FILE__;
$namespace         = 'underDEV\\BoilerPlate\\';

/**
 * Composer autoload
 */
require_once( 'vendor/autoload.php' );

/**
 * Requirements check
 */
$requirements = new underDEV_Requirements( __( 'Plugin Boilerplate' ), array(
	'php' => '5.3.9',
	'wp'  => '4.0'
) );

if ( ! $requirements->satisfied() ) {
	add_action( 'admin_notices', array( $requirements, 'notice' ) );
	return;
}

/**
 * Bootstrap
 */
$dice = new underDEV\Utils\Dice;

$dice->addRule( 'underDEV\Utils\Files', array(
	'shared'          => true,
	'constructParams' => array( $plugin_file )
) );

$dice->addRule( $namespace . 'Internationalization', array(
	'constructParams' => array( $plugin_textdomain )
) );

// load textdomain
add_action( 'plugins_loaded', array(
	$dice->create( $namespace . 'Internationalization' ), 'load_textdomain'
) );

// Admin page registration
add_action( 'admin_menu', array(
	$dice->create( $namespace . 'AdminPage' ), 'register_screen'
) );
