<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Royal music hall</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="favicon.png" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="css/libs.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/media.css">
	<script src="js/libs.min.js"></script>
	<script src="js/choice.js"></script>
	<script src="js/main.js"></script>	
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" ></script>
	<!-- <meta property="og:type" content="article"/>
	<meta property="og:title" content="Кресла-качалки Каравелла"/>
	<meta property="og:url" content= "http://kreslokachalka.online/" />
	<meta property="og:description" content="Кресла-качалки Каравелла"/>
	<meta property="og:image" content="http://kreslokachalka.online/img/logo.png"> -->
</head>
<body>
	<!-- begin header -->
	<div class="header">
		<div class="container">
			<div class="header__left">
				<nav class="header__nav">
					<ul class="header__list">
						<li class="header__item">
							<a href="menu" class="header__link">mеню</a>
						</li>
						<li class="header__item">
							<a href="promotions" class="header__link">события</a>
						</li>
						<li class="header__item">
							<a href="contacts" class="header__link">контакты</a>
						</li>
					</ul>
				</nav>
				<div class="header__social">
					<a href="https://vk.com/royalmusichall" target="_blank" class="header__social-link">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.581 15.997c.304 0 .429-.204.425-.458-.016-.958.356-1.474 1.03-.802.744.744.896 1.26 1.801 1.26h1.601c.403 0 .562-.13.562-.334 0-.432-.711-1.194-1.312-1.752-.844-.783-.882-.802-.156-1.744.9-1.169 2.079-2.667 1.037-2.667h-1.991c-.387 0-.414.217-.551.542-.498 1.173-1.443 2.693-1.803 2.461-.377-.243-.204-1.203-.175-2.63.008-.377.006-.636-.571-.77-.314-.073-.621-.103-.903-.103-1.137 0-1.922.477-1.477.56.785.146.711 1.846.527 2.58-.319 1.278-1.518-1.012-2.018-2.152-.12-.275-.155-.488-.586-.488h-1.627c-.247 0-.394.08-.394.258 0 .301 1.479 3.36 2.892 4.885 1.379 1.487 2.742 1.354 3.689 1.354z"/></svg>
					</a>
					<a href="https://www.facebook.com/royalmusichallul/" target="_blank" class="header__social-link">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z"/></svg>
					</a>
					<a href="https://www.instagram.com/royalmusichall/" target="_blank" class="header__social-link">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
					</a>
				</div>
				<a href="tel:+78422712211" class="header__phone header__phone-before">
					<img src="img/header-phone.svg" alt="" class="header__icon">
					<span class="header__number">+7 (8422) 71-22-11</span>
				</a>
			</div>
			<a href="/" class="header__logo">
				<img src="img/logo.png" alt="">
			</a>
			<div class="header__right">
				<a href="tel:+78422712211" class="header__phone">
					<img src="img/header-phone.png" alt="" class="header__icon">
					<span class="header__number">+7 (8422) 71-22-11</span>
				</a>
				<button class="header__pop callback">ЗАБРОНИРОВАТЬ стол</button>
				<a href="#" class="header__events">RMH LIVE</a>
			</div>
			<div class="burger">
				<button class="burder__btn">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
				</button>
			</div>
			<div class="burger__block">
				<a href="menu" class="burger__link">mеню</a>
				<a href="promotions" class="burger__link">события</a>
				<a href="contacts" class="burger__link">контакты</a>
				<a href="#" class="burger__link">rmh live</a>
				<button class="callback burger__link">ЗАБРОНИРОВАТЬ стол</button>
			</div>
		</div>
	</div>
	<!-- end header -->
	<div class="main">