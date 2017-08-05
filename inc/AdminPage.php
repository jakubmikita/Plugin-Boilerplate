<?php
/**
 * AdminPage class
 * Registers admin screen
 */

namespace underDEV\BoilerPlate;
use underDEV\Utils\View;
use underDEV\Utils\Files;

class AdminPage {

	/**
	 * Admin page hook
	 * @var string
	 */
	public $page_hook;

	/**
	 * View class
	 * @var object
	 */
	private $view;

	/**
	 * Files class
	 * @var object
	 */
	private $files;

	public function __construct( View $view, Files $files ) {
		$this->view  = $view;
		$this->files = $files;
	}

	/**
	 * Registers the plugin page under Tools in WP Admin
	 * @return void
	 */
	public function register_screen() {
		$this->page_hook = add_menu_page(
			__( 'Plugin Boilerplate' ),
			__( 'Plugin Boilerplate' ),
			'manage_options',
			'plugin-boilerplate',
			array( $this, 'load_page_wrapper' ),
			$this->files->image_base64( 'admin-icon.svg' ),
			100
		);
	}

	/**
	 * Loads page wrapper
	 * @return void
	 */
	public function load_page_wrapper() {
		$this->view->get_view( 'admin/wrapper' );
	}

}
