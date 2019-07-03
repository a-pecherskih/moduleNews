<? include 'theme/header.php'; ?>
<!-- begin bread -->
<div class="bread container">
	<a href="/" class="bread__link bread__item">Главная</a>
	<span class="bread__dash bread__item">/</span>
	<span class="bread__link bread__item">События</span>
</div>
<!-- end bread -->
<!-- begin promo -->
<div class="promo">
	<div class="single__title-block">
		<h1 class="typecal__title single__title">события royal music hall</h1>
	</div>
	<div class="container">
		<div class="promo__list">
			<a href="/" class="promo__item <? if(!isset($_GET['cat'])) echo 'promo__item-active';?>  promo__item-development">Все события</a>
			<?php 

			foreach ($categories as $category) { ?>
				<a href="<?="?cat=".$category['id'] ?>" class="promo__item <? if($_GET['cat']==$category['id']) echo 'promo__item-active';?> promo__item-<?=$category['icon'] ?>">
					<?=$category['name'] ?></a>
				<? } ?>
				<div class="promo__search-block">
					<input type="text" class="promo__item promo__search" placeholder="Поиск по событиям" id="search_event">
					<button class="promo__search-submit"></button>
					<button class="promo__search-btn"></button>
				</div>
			</div>
		</div>
		<div class="promo__top">
			<div class="container">
				<form class="promo__form">
					<div class="promo__swip promo__prev">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
					</div>
					<div class="promo__line">
						<div class="line__year">2019</div>
						<div class="line__main"></div>
						<ul class="line__list">
							<li class="line__item line__item-active" data-info="1">
								<span class="line__name">Январь</span>
								<span class="line__name-mobile">01</span>
							</li>
							<li class="line__item line__item-active" data-info="2">
								<span class="line__name">Февраль</span>
								<span class="line__name-mobile">02</span>
							</li>
							<li class="line__item line__item-active" data-info="3">
								<span class="line__name">Март</span>
								<span class="line__name-mobile">03</span>
							</li>
							<li class="line__item line__item-active" data-info="4">
								<span class="line__name">Апрель</span>
								<span class="line__name-mobile">04</span>
							</li>
							<li class="line__item line__item-active" data-info="5">
								<span class="line__name">Май</span>
								<span class="line__name-mobile">05</span>
							</li>
							<li class="line__item" data-info="6">
								<span class="line__name">Июнь</span>
								<span class="line__name-mobile">06</span>
							</li>
							<li class="line__item" data-info="7">
								<span class="line__name">Июль</span>
								<span class="line__name-mobile">07</span>
							</li>
							<li class="line__item" data-info="8">
								<span class="line__name">Август</span>
								<span class="line__name-mobile">08</span>
							</li>
							<li class="line__item" data-info="9">
								<span class="line__name">Сентябрь</span>
								<span class="line__name-mobile">09</span>
							</li>
							<li class="line__item" data-info="10">
								<span class="line__name">Октябрь</span>
								<span class="line__name-mobile">10</span>
							</li>
							<li class="line__item" data-info="11">
								<span class="line__name">Ноябрь</span>
								<span class="line__name-mobile">11</span>
							</li>
							<li class="line__item" data-info="12">
								<span class="line__name">Декабрь</span>
								<span class="line__name-mobile">12</span>
							</li>
						</ul>
					</div>
					<div class="promo__swip promo__next">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
					</div>
					<button class="promo__show disabled">Показать</button>
					<div class="promo__reset disabled">Сбросить</div>
					<button class="promo__btn promo__btn-show">
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm7 7.457l-9.005 9.565-4.995-5.865.761-.649 4.271 5.016 8.24-8.752.728.685z"/></svg>
					</button>
					<div class="promo__btn promo__btn-reset">
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z"/></svg>
					</div>
				</form>
				<div class="promo__mobile">
					<select name="" id="" class="mobile__year">
						<option value="2019">2019</option>
					</select>
					<div class="dash"></div>
					<select name="" id="" class="mobile__mon">
						<option value="0">Выбрать месяц</option>
						<option value="январь">январь</option>
						<option value="февраль">февраль</option>
						<option value="апрель">апрель</option>
						<option value="май">май</option>
						<option value="июнь">июнь</option>
						<option value="июль">июль</option>
						<option value="август">август</option>
						<option value="сентябрь">сентябрь</option>
						<option value="октябрь">октябрь</option>
						<option value="ноябрь">ноябрь</option>
						<option value="декабрь">декабрь</option>
					</select>
					<div class="promo__search-block">
						<input type="text" class="promo__item promo__search" placeholder="Поиск по событиям">
						<button class="promo__search-submit"></button>
						<button class="promo__search-btn"></button>
					</div>
				</div>
			</div>
		</div>
		<div class="container promo__wrapper">
			<?php foreach ($events as $event) { ?>
				<div class="promo__block">
					<div class="promo__img" style="background-image: url('<?=$event['image'] ?>');">
						<div class="promo__left promo__abs">
							<button class="promo__pop callback">Забронировать стол</button>
						</div>
						<div class="promo__right promo__abs">
							<a href="<?=$event['link'] ?>" target="_blank" class="promo__pop">Подробнее</a>
						</div>
					</div>
					<div class="promo__desc">
						<div class="promo__desc-top">
							<div class="promo__little">
								<?php  
								if (isset($event['categories'])) {
									foreach ($event['categories'] as $event_category) { ?>
										<a href="/?cat=<?=$event_category['category_id'] ?>" class="promo__little-btn promo__item-<?=$event_category['icon'] ?>"></a>
									<?php }
								} ?>
							</div>
							<div class="promo__date">
								<div class="date__day"><?=$event['date']; ?></div> <div class="date__time"><?=$event['time'] ?></div>
								<input type="hidden" id="month-start" value="<?=date('n', strtotime($event['date_start'])); ?>">
								<input type="hidden" id="month-end" value="<? if ($event['date_end']) echo date('n', strtotime($event['date_end'])); ?>">
							</div>
						</div>
						<p class="promo__text"><?=$event['title'] ?></p>
					</div>
				</div>
			<?php } ?>
		</div>
		<!-- <div class="container">
			<ul class="pag">
				<li class="pag__item pag__item-prev">
					<a href="#" class="pag__link"><</a>
				</li>
				<li class="pag__item">
					<a href="#" class="pag__link">1</a>
				</li>
				<li class="pag__item">
					<a href="#" class="pag__link pag__link-active">2</a>
				</li>
				<li class="pag__item">
					<a href="#" class="pag__link">3</a>
				</li>
				<li class="pag__item">
					<a href="#" class="pag__link">4</a>
				</li>
				<li class="pag__item pag__item-last">
					<a href="#" class="pag__link">></a>
				</li>
			</ul>
		</div> -->
	</div>
	<!-- end promo -->
	<? include 'theme/footer.php'; ?>