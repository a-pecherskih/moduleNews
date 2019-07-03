$(function() {
    // calcWidth();
    // $(window).resize(function() {
    //     calcWidth();
    // });

    function searchMonth(start, finish){
        $.each($(".promo__block"), function() {
            month_start = $(this).find("#month-start").val();
            month_end = $(this).find("#month-end").val();
            if((month_start >= start && month_start <= finish) || (month_end >= start && month_end <= finish) ) {
                $(this).show();
            } else {
                $(this).hide();                
            }
        });
    };

    function royalSlider(){
        $('.royal__item[data-show="true"] .royal__slider').slick({
            dots: false,
            centerMode: true,
            slidesToScroll: 1,
            prevArrow: $('.slider__btn-left'),
            nextArrow: $('.slider__btn-right'),
            autoplay: true,
            autoplaySpeed: 3000,
        });
    };
    royalSlider();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });
    $('.up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $('.burger').on('click', function(){
        $('.burger__block').toggleClass('burger__block--active');
    })
    $(window).scroll(function(){
        console.log(1)
        if ($('.burger__block').hasClass('burger__block--active')) {
            $('.burger__block').removeClass('burger__block--active');
        }
    });

    $('.royal__btn').on('click', function(){
        number = $(this).attr('data-number');
        if (!$(this).hasClass('royal__btn--active')) {
            $('.royal__item[data-show="true"] .royal__slider').slick('destroy');
            $('.royal__btn').removeClass('royal__btn--active');
            $(this).addClass('royal__btn--active');
            $('.royal__item').attr('data-show','false');
            $('.royal__item[data-number='+number+']').attr('data-show','true');
            royalSlider();
        }
    });  

    $('.jump').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr("id");
        $('body,html').animate({
            scrollTop: $('.' + id).offset().top
        }, 1000);
    });

    $(".line__main").slider({
        animate: "slow",
        range: true,
        min: 1,
        max: 13,
        values: [ 1, 6 ],
        slide: function( event, ui ) { 
            $('.promo__show').removeClass('disabled');
            start = ui.values[0];
            finish = ui.values[1];
            $('.line__item').removeClass('line__item-active');
            for (i = start; i < finish; i++) {
                $('.line__item[data-info='+i+']').addClass('line__item-active');
            }
            searchMonth(start, finish);
        }
    });

    $('.callback').on('click', function(){
        if ($(window).width() > 1265) {
            $('.pop').addClass('pop--active');
            $('.modal').addClass('modal--active');    
        } else{
            $('body').css('overflow','hidden');
            $('.modal').fadeIn(300);
        }
    })

    $('.pop__close').on('click', function(){
        $('.pop').removeClass('pop--active');
    })

    $('.modal__close').on('click', function(){
        $('body').css('overflow','auto');
        $('.modal').fadeOut(300);
    })

    $('.pop__enter-btn').on('click', function(){
        a = +$('.pop__body[data-show="true"]').attr('data-step');
        if (!$(this).hasClass('pop__enter-desibled')) {
            if ($(this).hasClass('pop__enter-next')) {
                if (!$(this).hasClass('pop__enter-submit')) {
                    if (a != 4) {
                        a++;
                        if (a == 2) {
                            $('.pop__info-data[data-name="hall"]').parent().css('opacity', '1');
                            if (!$('.pop__room-btn').hasClass('pop__room-done')) {
                                $('.pop__enter-next').addClass('pop__enter-desibled');
                            }
                            
                        }
                        if (a == 3) {
                            $('.pop__enter-next').hide();
                            $('.pop__enter-submit').show();
                            $('.pop__info-data').each(function(){
                                $('input[name="'+$(this).attr('data-name')+'"]').val($(this).text());
                            })
                            v = Math.floor(Math.random() * (125 - 25)) + 25;
                            $('.pop__number').text(v);
                            $('.modal__number').text(v);
                            $('input[name="number"]').val(v);
                        }
                    }
                    $('.pop__enter-prev').css('display', 'inline-block');
                }
            } else{
                if (a != 1) {
                    if (a == 2) {
                        $('.pop__enter-prev').css('display', 'none');
                        if ($('.pop__input-calendar').val() != '' && $('.pop__input-date').val() != 0) {
                            $('.pop__enter-next').removeClass('pop__enter-desibled');
                        }
                    }
                    if (a == 3) {
                        $('.pop__enter-next').show()
                        $('.pop__enter-submit').hide();
                    }
                    a--;
                } 
            }
            $('.pop__body[data-show="true"]').css('height', '0');
            setTimeout($('.pop__body[data-show="true"]').attr('data-show', 'false'), 1000);
            $('.pop__body[data-step="'+a+'"]').attr('data-show', 'true');
            $('.pop__step').removeClass('pop__step--active');
            $('.pop__step[data-number="'+a+'"]').addClass('pop__step--active')
        } else if (a == 1) {
            calendar = 'pop__input-calendar';
            select = 'pop__input-date';
            validateInputStep(calendar,$('.'+calendar).val());
            validateInputStep(select, $('.'+select).val());
        }
    })

    $('.pop__booking-title').on('click', function(){
        $('.pop__booking').toggleClass('pop__booking--active');
        $('.pop__up').toggleClass('pop__up--active');
    });

    $('.pop__room-btn').on('click', function(){
        $('.pop__room-btn').removeClass('pop__room-done');
        $('.pop__room-btn').text('Выбрать');
        $(this).addClass('pop__room-done');
        $(this).text('Выбрано');
        a = $(this).siblings('.pop__room-text').attr('data-name');
        $('.pop__info-data[data-name="'+a+'"]').text($(this).siblings('.pop__room-text').text());
        $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','1');

        b = $(this).siblings('.pop__room-price').attr('data-name');
        $('.pop__info-data[data-name="'+b+'"]').text($(this).siblings('.pop__room-price').text());
        $('.pop__info-data[data-name="'+b+'"]').parent().css('opacity','1');

        $('.pop__enter-next').removeClass('pop__enter-desibled');

    });

    $('.pop__room').on('click', function(){
        a = $(this).attr('data-number');
        $('.pop__room').removeClass('pop__room--active');
        $(this).addClass('pop__room--active');
        $('.pop__container').attr('data-show','false');
        $('.pop__container[data-number="'+a+'"]').attr('data-show','true');
    });

    var valueDate;
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: new Date(),
        beforeShow: function(){
         valueDate = $('.datepicker').val();
     },
     onClose: function(){
        if (valueDate != $('.datepicker').val()) {
            refreshStepTwo();
        }
        if ($(this).val() != '' ){
            $( ".pop__input-date" ).selectmenu({
              disabled: false
          });

            $('.pop__info-data[data-name="'+$('.pop__input-calendar').attr('data-name')+'"]').text($(this).val());
            $('.pop__info-data[data-name="'+$('.pop__input-calendar').attr('data-name')+'"]').parent().css('opacity','1');
        } else{
            $( ".pop__input-date" ).selectmenu({
              disabled: true
          });
            $('.pop__info-data').parent().css('opacity', '0')
        }
    },
    onSelect: function(){
        selectDate = $('.pop__input-calendar').val();
        Data = new Date();
        Year = Data.getFullYear();
        Month = Data.getMonth();
        Day = Data.getDate();
        Month = +Month + 1;
        if (Month < 10) {
            Month = '0'+Month;
        }
        thisDate = Day+'.'+Month+'.'+Year;
        $('.js-calen').empty();
        if (selectDate == thisDate) {
            Hour = Data.getHours();
            Minutes = Data.getMinutes();
            if (Hour < 12) {
                $('.js-calen').append('<option value="0">Выберите время</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option>');
            } else if (Hour > 12){
                for (let h = +Hour + 1; h < 24; h++) {
                    if (h == +Hour + 1 && Minutes > 30) {
                        $('.js-calen').append('<option value="0">Выберите время</option><option value="'+h+':00">'+h+':00</option>');
                    } else if (h == +Hour + 1 && Minutes < 30){
                        $('.js-calen').append('<option value="0">Выберите время</option><option value="'+Hour+':30">'+Hour+':30</option><option value="'+h+':00">'+h+':00</option><option value="'+h+':30">'+h+':30</option>');
                    } else{
                        $('.js-calen').append('<option value="'+h+':00">'+h+':00</option><option value="'+h+':30">'+h+':30</option>');
                    }
                }
                $('.js-calen').append('<option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option>');
            }
        } else{
            $('.js-calen').append('<option value="0">Выберите время</option><option value="12:00">12:00</option><option value="12:30">12:30</option><option value="13:00">13:00</option><option value="13:30">13:30</option><option value="14:00">14:00</option><option value="14:30">14:30</option><option value="15:00">15:00</option><option value="15:30">15:30</option><option value="16:00">16:00</option><option value="16:30">16:30</option><option value="17:00">17:00</option><option value="17:30">17:30</option><option value="18:00">18:00</option><option value="18:30">18:30</option><option value="19:00">19:00</option><option value="19:30">19:30</option><option value="20:00">20:00</option><option value="20:30">20:30</option><option value="21:00">21:00</option><option value="21:30">21:30</option><option value="22:00">22:00</option><option value="22:30">22:30</option><option value="23:00">23:00</option><option value="23:30">23:30</option><option value="00:00">00:00</option><option value="00:30">00:30</option><option value="01:00">01:00</option><option value="01:30">01:30</option><option value="02:00">02:00</option><option value="02:30">02:30</option>');
        }
        $('.pop__input.pop__input-date').selectmenu( "refresh" );
    }
});



createSelectmenu();

$('.pop__input-phone').mask("+7(999) 999-99-99");
$('.modal__input[name="phone"]').mask("+7(999) 999-99-99");

$('.validate').on('change', function(){
    if ($(this).val() != '' && $(this).val() != '0') {
        $(this).removeClass('invalid');
    }
});

$('.js__data').on('change', function(){
    a = $(this).attr('data-name');
    if ($(this).hasClass('pop__room')) {
        b = $(this).attr('data-info');
    } else{
        b = $(this).val();
    }
    if (b != '' || b != 0) {
        $('.pop__info-data[data-name="'+a+'"]').text(b);
        $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','1');
    } else{
        $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','0');
    }
    enabledBtn();
})

$('.js__data-two').on('click', function(){
    a = $(this).attr('data-name');
    b = $(this).attr('data-info');

    $('.pop__enter-next').addClass('pop__enter-desibled')
    $('.pop__room-btn').removeClass('pop__room-done');
    $('.pop__room-btn').text('Выбрать');
    $('.pop__info-data[data-name="table"]').parent().css('opacity','0');
    $('.pop__info-data[data-name="price"]').parent().css('opacity','0');

    if (b != '' || b != 0) {
        $('.pop__info-data[data-name="'+a+'"]').text(b);
        $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','1');
    } else{
        $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','0');
    }
});

$('.pop__enter-submit').on('click', function(){
    if ($('.pop__input[name="name"]').val() != '' && $('.pop__input[name="phone"]').val() != '' && $('#pers').is(':checked') ) {
        if (!$(this).hasClass('pop__enter-desibled')) {
            $(this).addClass('pop__enter-desibled');
            form = $('.pop__form'); 
            $.ajax({
                data: form.serialize(),
                url: '../send.php',
                type: 'POST',
                success: function(data) {
                    $('.pop__body[data-show="true"]').css('height', '0');
                    setTimeout($('.pop__body[data-show="true"]').attr('data-show', 'false'), 1000);
                    $('.pop__body[data-step="4"]').attr('data-show', 'true');
                    $('.pop__step').removeClass('pop__step--active');
                    $('.pop__step[data-number="4"]').addClass('pop__step--active');
                    $('.pop__name').text($('.pop__input[name="name"]').val());
                    $('.pop__phone-user').text($('.pop__input[name="phone"]').val());
                    $('.pop__enter-btn').hide();
                    $('.pop__enter-lost').show();
                },
            });
        }
    }

    if ($('.pop__input[name="name"]').val() == ''){
        $('.pop__input[name="name"]').addClass('invalid')
    } else{
        $('.pop__input[name="name"]').removeClass('invalid')
    }
    if ($('.pop__input[name="phone"]').val() == ''){
        $('.pop__input[name="phone"]').addClass('invalid')
    } else{
        $('.pop__input[name="phone"]').removeClass('invalid')
    }
    if (!$('#pers').is(':checked')){
        $('.pop__sqad[for="pers"]').addClass('invalid')
    } else{
        $('.pop__sqad[for="pers"]').removeClass('invalid')
    }
})

$('.modal__form').on('submit', function(e){
    e.preventDefault();
    v = Math.floor(Math.random() * (125 - 25)) + 25;
    $('.modal__number').text(v);
    $('input[name="number"]').val(v);
    $('.modal__add').attr('disabled', 'disabled');
    form = $('.modal__form'); 
    $.ajax({
        data: form.serialize(),
        url: '../send-mobile.php',
        type: 'POST',
        success: function(data) {
            $('.modal__inner').hide();
            $('.modal__after').fadeIn(300);
            $('.modal__name').text($('.modal__input[name="name"]').val());
            $('.modal__phone').text($('.modal__input[name="phone"]').val());
            $('.modal__data-date').text($('.modal__input[name="date"]').val());
            if ($('.modal__input[name="time"]').val() != 0) {
                $('.modal__data-time').text($('.modal__input[name="time"]').val());
            } else{
                $('.modal__data-time').parent().hide();
            }
            if ($('.modal__input[name="hall"]').val() != 0) {
                $('.modal__data-hall').text($('.modal__input[name="hall"]').val());
            } else{
                $('.modal__data-hall').parent().hide();
            }
            if ($('.modal__input[name="guest"]').val() != 0) {
                $('.modal__data-guest').text($('.modal__input[name="guest"]').val());
            } else{
                $('.modal__data-guest').parent().hide();
            }

        },
    });
});

$('.modal__again').on('click', function(){
    $('.refresh').val('');
    $('.modal__add').removeAttr('disabled');
    $('.modal__input.datepicker').datepicker( "refresh" );
    $('.modal__select').val(0);
    $('.modal__inner').fadeIn(300);
    $('.modal__after').hide();
    $('.pop__check').prop('checked', false);
});

$('.pop__enter-lost').on('click', function(){
    $('.pop__step').removeClass('pop__step--active');
    $('.pop__step[data-number="1"]').addClass('pop__step--active');

    $('.pop__body[data-show="true"]').css('height', '0');
    setTimeout($('.pop__body[data-show="true"]').attr('data-show', 'false'), 1000);
    $('.pop__body[data-step="1"]').attr('data-show', 'true');

    $('.pop__info-text').css('opacity','0');

    $('.pop__input-calendar').datepicker( "refresh" );
    $('.pop__input-date').selectmenu( "destroy" );
    $('.pop__input-date').val(0)
    createSelectmenu();

    $('.pop__room').removeClass('pop__room--active');
    $('.pop__room:first-child').addClass('pop__room--active');
    $('.pop__room-btn').removeClass('pop__room-done');
    $('.pop__room-btn').text('выбрать');

    $('.pop__input').val('');
    $('.pop__check').prop('checked', false);

    $('.pop__enter-lost').hide();
    $('.pop__enter-next').show().addClass('pop__enter-desibled');
    $('.pop__enter-submit').hide();

})

$('.pop__step--active').on('click', function(){
    $('.pop__input-date').selectmenu( "refresh" );
    $('.pop__input-date').selectmenu( "refresh" );
})

$('.promo__search-btn').on('click', function(){
    $('.promo__search-block').toggleClass('promo__search--active');
});

    //$('.modal__select').selectmenu();

    $('#ui-id-1-menu').parent().css('border-radius','24px');

    $('.modal__bottom .pop__booking').on('click', function(){
        if ($('.pop__booking').hasClass('pop__booking--active')) {
            $('.modal__bottom').css('overflow', 'visible');
        } else{
            $('.modal__bottom').css('overflow', 'hidden');
        }
    });



})



function calcWidth(){
    if (+$(window).width() > 1008) {
        widthZoom = +$(window).width() / 19.2;
        $('body').css('zoom', widthZoom+'%');
    } else{
        $('body').css('zoom', '100%');
    }
}

function validateInputStep(name, val){
    if (name == 'pop__input-date' && val == 0) {
        $('#ui-id-1-button').addClass('invalid')
    }
    if ($('.'+name).val() == '0' || $('.'+name).val() == '') {
        $('.'+name).addClass('invalid');
    } else{
        $('.'+name).removeClass('invalid');
    }
}

function removeInvalid(){
    $('#ui-id-1-button').removeClass('invalid')
}

function enabledBtn(){
    a = +$('.pop__body[data-show="true"]').attr('data-step');
    if ($('.pop__input-calendar').val() != '' && $('.pop__input-date').val() != 0) {
        $('.pop__enter-next').removeClass('pop__enter-desibled');
    } else{
        $('.pop__enter-next').addClass('pop__enter-desibled');
    }
}

function createSelectmenu(){
    $('.pop__input-date').selectmenu({
        disabled: true,
        change: function( event, ui ) {
            refreshStepTwo();
            removeInvalid();
            a = $(this).attr('data-name');
            if ($(this).val() != '' && $(this).val() != 0) {
                $('.pop__info-data[data-name="'+a+'"]').text($(this).val())
                $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','1')
            } else{
                $('.pop__info-data[data-name="'+a+'"]').parent().css('opacity','0')
            }
            enabledBtn();
        }
    });
}

function refreshStepTwo(){
    $('.pop__room').removeClass('pop__room--active');
    $('.pop__room:first-child').addClass('pop__room--active');
    $('.pop__room-btn').removeClass('pop__room-done');
    $('.pop__room-btn').text('выбрать');
    $('.pop__info-data[data-name="price"]').parent().css('opacity','0');
    $('.pop__info-data[data-name="table"]').parent().css('opacity','0');
    $('.pop__info-data[data-name="hall"]').parent().css('opacity','0');
}