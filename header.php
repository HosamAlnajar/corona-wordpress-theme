<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Corona
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'corona' ); ?></a>

<!--	<header id="masthead" class="site-header">-->
<!---->
<!--		<div class="main_menu">-->
<!--			<nav id="site-navigation" class="navbar navbar-expand-lg navbar-light">-->
<!--				<div class="container box_1620">-->
<!--					<div class="site-branding">-->
<!--						--><?php
//						the_custom_logo();
//						if ( is_front_page() && is_home() ) :
//							?>
<!--							<h1 class="site-title"><a href="--><?php //echo esc_url( home_url( '/' ) ); ?><!--"-->
<!--													  rel="home">--><?php //bloginfo( 'name' ); ?><!--</a></h1>-->
<!--						--><?php
//						else :
//							?>
<!--							<p class="site-title"><a href="--><?php //echo esc_url( home_url( '/' ) ); ?><!--"-->
<!--													 rel="home">--><?php //bloginfo( 'name' ); ?><!--</a></p>-->
<!--						--><?php
//						endif;
//						$corona_description = get_bloginfo( 'description', 'display' );
//						if ( $corona_description || is_customize_preview() ) :
//							?>
<!--							<p class="site-description">--><?php //echo $corona_description; /* WPCS: xss ok. */ ?><!--</p>-->
<!--						--><?php //endif; ?>
<!--					</div>
					<button class="navbar-toggler" type="button" data-toggle="collapse"-->
<!--							data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"-->
<!--							aria-expanded="false" aria-label="Toggle navigation">-->
<!--						<span class="icon-bar"></span>-->
<!--						<span class="icon-bar"></span>-->
<!--						<span class="icon-bar"></span>-->
<!--					</button>-->
<!--					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">-->
<!--						--><?php
//						wp_nav_menu( array(
//							'theme_location' => 'primary',
//							'depth'          => 3,
//							'container'      => false,
//							'menu_class'     => 'nav navbar-nav menu_nav justify-content-end',
//
//						) );
//						?>
<!--					</div>-->
<!--			</nav>
		</div>-->
<!--	</header>
-->
	<div id="content" class="site-content">
