$(document).ready(() => {
    const introTitle = $('.intro__title'),
        introText = $('.intro__text'),
        introBtn =  $('.intro__btn'),
        aboutLeft = $('.about__left'),
        aboutRight = $('.about__right'),
        servicesLeft =  $('.services__left'),
        servicesRight =  $('.services__right'),
        casesLeft = $('.cases__left'),
        casesRight = $('.cases__right'),
        careerTitle = $('.career__title'),
        careerText = $('.career__text'),
        careerBox = $('.career__box'),
        contactsLeft = $('.contacts__left'),
        contactsRight = $('.contacts__right');

    //fullpage plugin
    if($('#fullpage').fullpage) {
        $('#fullpage').fullpage({
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            css3: true,
            scrollingSpeed: 700,
            fixedElements: '.header',
            responsiveWidth: 1024,
            
            onLeave: function(origin, destination, direction){
                var leavingSection = this;
                //intro screen
                if( $(window).width() > 1024) {
                    if(origin.index == 0){
                        introTitle.removeClass(' animate__fadeInUp')
                        introText.removeClass(' animate__fadeInUp')
                        introBtn.removeClass(' animate__fadeInUp')
                    } 
                    if(destination.index == 0) {
                        introTitle.addClass(' animate__fadeInUp')
                        introText.addClass(' animate__fadeInUp')
                        introBtn.addClass(' animate__fadeInUp')
                    }
                    //end intro start about
                    if(origin.index == 1){
                        aboutLeft.removeClass(' animate__fadeInLeft')
                        aboutRight.removeClass(' animate__fadeInRight')
                    } 
                    if(destination.index == 1) {
                        aboutLeft.addClass(' animate__fadeInLeft')
                        aboutRight.addClass(' animate__fadeInRight')
                    }
                    //end intro start services
                    if(origin.index == 2){
                        servicesLeft.removeClass(' animate__zoomIn')
                        servicesRight.removeClass(' animate__fadeInRight')
                    } 
                    if(destination.index == 2) {
                        servicesLeft.addClass(' animate__zoomIn')
                        servicesRight.addClass(' animate__fadeInRight')
                    }
                    //end services start cases
                    if(origin.index == 3){
                        casesLeft.removeClass(' animate__fadeInLeft')
                        casesRight.removeClass(' animate__fadeInRight')
                    } 
                    if(destination.index == 3) {
                        casesLeft.addClass('animate__fadeInLeft')
                        casesRight.addClass('animate__fadeInRight')
                    }             
                    //end cases start career
                    if(origin.index == 5){
                        careerTitle.removeClass(' animate__fadeInDown')
                        careerText.removeClass(' animate__fadeInDown')
                        careerBox.removeClass(' animate__fadeInDown')
                    } 
                    if(destination.index == 5) {
                        careerTitle.addClass('animate__fadeInDown')
                        careerText.addClass('animate__fadeInDown')
                        careerBox.addClass('animate__fadeInDown')
                    } 
                    //end career start contacts
                    if(origin.index == 6){
                        contactsLeft.removeClass(' animate__fadeInLeft')
                        contactsRight.removeClass(' animate__fadeInRight')
                    } 
                    if(destination.index == 6) {
                        contactsLeft.addClass('animate__fadeInLeft')
                        contactsRight.addClass(' animate__fadeInRight')
    
                    } 
                }
                
                
            }
        });
    }
    

    //tabs
    $('.services__item').on('click', function() {
        const tab = $(this).data('tab');
        $(this).addClass('is-active').siblings().removeClass('is-active');
        $(`#${tab}`).show().siblings().hide()
    })

    //slider
    if($('#cases-slider').slick) {
        $('#cases-slider').slick({
            prevArrow: $('#cases-slider-prev'),
            nextArrow: $('#cases-slider-next'),
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                },
            ]
        });
    }
    

    //mobile menu
    $('.header__burger').on('click', function() {
        $('.header__menu').addClass('is-active');
        $('body').addClass('no-scroll');
    })
    $('.header__close').on('click', function() {
        $('.header__menu').removeClass('is-active');
        $('body').removeClass('no-scroll');
    })
})


// playing with code found on http://bucht-der-traeumer.de/
// I like the animated-elements-container whoever did this code!

var firefly = (function(){
	
	var count = 3;
	var speed = 0.04;
	var maxDirectionDelta = Math.PI / 20;
	var maxDirectionDeltaDelta = maxDirectionDelta / 20;
	
	var viewportWidth = $(window).width() + 100;
	var viewportHeight = $(window).height() + 100;
	
	var $layer = $('.animated-elements-container');
	var state = {
		flies : []
	};
	
	var frames = 0;
	
	function modifyDirectionDelta(fly) {
		var old = fly.directionDelta;
		var to_max = Math.abs(fly.directionDelta) / maxDirectionDelta;
		var deltaDelta = maxDirectionDeltaDelta * (Math.random() - 0.5 - 0.5 * to_max);
		if(fly.directionDelta >= 0) {
			fly.directionDelta += deltaDelta;
		} else {
			fly.directionDelta += deltaDelta * (-1);
		}
/*
		if(Math.abs(fly.directionDelta) > maxDirectionDelta) {
			console.log(
				'modifyDirectionDelta',
				old * (180/Math.PI),
				maxDirectionDelta * (180/Math.PI),
				to_max,
				deltaDelta * (180/Math.PI),
				fly.directionDelta * (180/Math.PI)
			);
		}
*/
	}
	
	function modifyDirection(fly) {
		fly.direction += fly.directionDelta;
	}
	
	function modifyPosition(fly) {
		var left = fly.left + Math.cos(fly.direction) * speed;
		var top = fly.top + Math.sin(fly.direction) * speed;
		
		if(left < 0) { left = 100; }
		else if(left > 100) { left = 0; }
		
		if(top < 0) { top = 100; }
		else if(top > 100) { top = 0; }
		
		fly.left = left;
		fly.top = top;
	}
	
	function render() {
		frames++;
		// if(frames > 200) { return; }
		for(var i = 0; i < state.flies.length; i++) {
			modifyDirectionDelta(state.flies[i]);
			modifyDirection(state.flies[i]);
			modifyPosition(state.flies[i]);
			
/*
			state.flies[i].$element.css({
				left : state.flies[i].left + '%',
				top : state.flies[i].top + '%'
			});
*/

			state.flies[i].$element.css({
				transform : 'translate3d(' +
					(viewportWidth * state.flies[i].left / 100) + 'px, ' +
					(viewportHeight * state.flies[i].top / 100) + 'px, 0)'
			});			
			
		}
		window.requestAnimationFrame(render);
	}
	
	function createFly() {
		var $element = $('<div class="fly-wrap"><div class="fly"></div>');
		$layer.append($element);
		var fly = {
			$element : $element,
			directionDelta : Math.random() * maxDirectionDelta * 2 - maxDirectionDelta,
			direction : Math.random() * Math.PI * 2,
			left : Math.random() * 100 - 50,
			top : Math.random() * 100 - 50
		}
		state.flies.push(fly);
	}

	function init() {
		$('body').append($layer);
		for(var i = 0; i < count; i++) {
			createFly();
		}
		window.requestAnimationFrame(render);
	}

	return {
		init : init
	};
	
})();;

$(document).ready(function() {
  firefly.init();
});

