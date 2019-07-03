$( document ).ready(function() {

	$("#search_event").keyup(function (e)  
	{ 
		_this = this;

		$.each($(".promo__block"), function() {
			if($(this).find(".promo__text").text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
				$(this).hide();
			} else {
				$(this).show();                
			}
		});

	});

});