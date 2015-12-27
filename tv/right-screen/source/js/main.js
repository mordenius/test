// JavaScript Document
$(function(){
	var days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье","Понедельник","Вторник","Среда"],
			months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
			date = new Date();
	window.weather = function() {
		zoneWeather = $('div.weather-wrapper');	
		$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&appid=bd82977b86bf27fb59a04b61b657fb6f" )
			.done(function( json ) {
				zoneWeather.find('div.today h1').empty().append(Math.round(json.main.temp)+'°');
				data_condition = json.weather[0].icon;
				zoneWeather.find('div.today img').attr({'src': 'source/img/conditions/'+data_condition+'.png'});
			})
			.fail(function( jqxhr, textStatus, error ) {
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
		});
		$.getJSON( "http://api.openweathermap.org/data/2.5/forecast/daily?q=Kiev&mode=json&units=metric&cnt=3&appid=bd82977b86bf27fb59a04b61b657fb6f" )
			.done(function( json ) {
				zoneWeather.find('table').empty();
					zoneWeather.find('div.tomorrow div.day img').attr({'src': 'source/img/conditions/'+json.list[1].weather[0].icon.slice(0, -1)+'d.png'});
					zoneWeather.find('div.tomorrow div.night img').attr({'src': 'source/img/conditions/'+json.list[1].weather[0].icon.slice(0, -1)+'n.png'});
					zoneWeather.find('div.tomorrow div.day h1').empty().append(Math.round(json.list[1].temp.day)+'°');
					zoneWeather.find('div.tomorrow div.night h1').empty().append(Math.round(json.list[1].temp.night)+'°');
					zoneWeather.find('div.next').children('h1').empty().append(days[date.getDay()+2]);
					zoneWeather.find('div.next div.day img').attr({'src': 'source/img/conditions/'+json.list[2].weather[0].icon.slice(0, -1)+'d.png'});
					zoneWeather.find('div.next div.night img').attr({'src': 'source/img/conditions/'+json.list[2].weather[0].icon.slice(0, -1)+'n.png'});
					zoneWeather.find('div.next div.day h1').empty().append(Math.round(json.list[2].temp.day)+'°');
					zoneWeather.find('div.next div.night h1').empty().append(Math.round(json.list[2].temp.night)+'°');
			})
			.fail(function( jqxhr, textStatus, error ) {
				var err = textStatus + ", " + error;
				console.log( "Request Failed: " + err );
		});
		setTimeout(weather, 600000);
	};
	weather();
	
	window.rates = function() {
		zoneRates = $('div.rates-wrapper');	
		$.ajax({ url : 'source/parser.php',
					type: 'POST',
					data: {'rates': 1},
		   		success: function(data) {
						source = 'source/img/rates/';
						dataP = JSON.parse(data);
						dataHtml = '';
						$.each(dataP, function(key, value){
							dataHtml += '<div><h1>'+key+'</h1><p style="background: url('+source+value['status']+'.png) 20px 0 no-repeat">'+value['today']+'</p><h2>'+value['before']+'</h2></div>';
						});
						$('div.rates-wrapper').empty().append(dataHtml);
					},
				error : function(XMLHttpRequest, textStatus, errorThrown){
           alert( "Данные ("+this.custom_parameter
              +") не получены"); 
				}
		});
		setTimeout(rates, 600000);
	};
	rates();
	window.time = function(){
		date = new Date();
		$('header div.date-wrapper').empty();
		$('header div.date-wrapper').append('<h2>'+(date.getHours()<10?'0':'') + date.getHours()+':'+(date.getMinutes()<10?'0':'') + date.getMinutes()+'</h1>');
		$('header div.date-wrapper').append('<h3><span>'+months[date.getMonth()]+'</span> '+date.getDate()+'</h3>');
		setTimeout(time, 6000);
	}
	time();
	window.rotatorTimeWeather = function(){
		weather3();
		function weather3(){
			$('header div.date-wrapper').animate({
								'margin-top': -220,
							}, {
								duration: 500,
								easing: 'easeOutCubic',
								complete: function(){
									setTimeout(weather1, 10000)
								}
							});
		}
		weather1 = function(){
			$('header div.date-wrapper').animate({
								'margin-top': 0,
							}, {
								duration: 500,
								easing: 'easeOutCubic',
								complete: function(){
									setTimeout(weather3, 5000)
								}
							});
		}
	}
	rotatorTimeWeather();
	window.rss = function(){
		$.ajax({ url : 'source/parser.php',
					type: 'POST',
					data: {'rss': 1},
		   		success: function(data) {
						$('div.wrapper-rss marquee').empty().append(data);
						console.log(data);
					},
				error : function(XMLHttpRequest, textStatus, errorThrown){
           alert( "Данные ("+this.custom_parameter
              +") не получены"); 
				}
		});
	}
	rss();
	setTimeout(rss, 50000)
	
	function review(){	
		$.ajax({ url : 'source/parser.php',
					type: 'POST',
					data: {'review': 1},
		   		success: function(data) {
						$('div.review').empty().append(data);
					},
				error : function(XMLHttpRequest, textStatus, errorThrown){
           alert( "Данные ("+this.custom_parameter
              +") не получены"); 
				}
		});
		height = 0;
		margin = 0;
		direction = 0;
			function sec() {
				height = $('body div.review').height();
				height -= 880;
			}
			setInterval(sec, 10000);
			up();
			function up() {
				if (direction == 0) {
					margin+= 1;
				} else if (direction == 1) {
					margin-= 1;
				}
				if (margin == 0) {
					direction = 2;
					setTimeout('direction = 0', 5000)
				} else if (margin == height) {
					direction = 2;
					setTimeout('direction = 1', 5000)
				}
				$('body div.review').css({'margin-top': -margin+'px'});
			}
			setInterval(up, 36);
	};
	review();
	setTimeout(review, 600000)
	var cal = $( '#calendar' ).calendario( {
						onDayClick : function( $el, $contentEl, dateProperties ) {

							for( var key in dateProperties ) {
								console.log( key + ' = ' + dateProperties[ key ] );
							}

						},
						caldata : codropsEvents
					} ),
					$month = $( '#custom-month' ).html( cal.getMonthName() ),
					$year = $( '#custom-year' ).html( cal.getYear() );

				$( '#custom-next' ).on( 'click', function() {
					cal.gotoNextMonth( updateMonthYear );
				} );
				$( '#custom-prev' ).on( 'click', function() {
					cal.gotoPreviousMonth( updateMonthYear );
				} );
				$( '#custom-current' ).on( 'click', function() {
					cal.gotoNow( updateMonthYear );
				} );

				function updateMonthYear() {				
					$month.html( cal.getMonthName() );
					$year.html( cal.getYear() );
				}

				// you can also add more data later on. As an example:
				/*
				someElement.on( 'click', function() {
					
					cal.setData( {
						'03-01-2013' : '<a href="#">testing</a>',
						'03-10-2013' : '<a href="#">testing</a>',
						'03-12-2013' : '<a href="#">testing</a>'
					} );
					// goes to a specific month/year
					cal.goto( 3, 2013, updateMonthYear );

				} );
				*/
				
				
				
			
// TASKS				
	function getData() {
		$.getJSON( "source/data.json" )
				.done(function( data ) {
					console.log("getData");
					employee = "";
					for(i=1; i<=8; i++) {
						if (i<=3) {
							employee += '<div class="wrap-first-line">';
						} else if (3<i && i<=6) {
							employee += '<div class="wrap-second-line none">';
						} else if (6<i && i<=9) {
							employee += '<div class="wrap-third-line none">';
						} else {
							alert('Error');
						}
						employee += '<div class="name">';
						employee += '<img src="source/img/tasks/avatars/'+i+'.png" />';
						employee += '<h1>'+data[i].name+'</h1>';
						employee += '<h2>'+data[i].title+'</h2>';
						employee += '</div>';
						employee += '<div class="list"><div>';
						$.each(data[i].tasks, function(a, val) {
							employee +='<div class="tasks-list"><div>'+a+'</div><div><h2>'+data[i].tasks[a].group+'</h2><h3>'+data[i].tasks[a].name+'</h3></div><div class="clearfix"></div></div>';
						});
						employee += '</div></div>';
						employee += '</div>';
					}
					$('#tasks').empty().append(employee);
				})
				.fail(function( jqxhr, textStatus, error ) {
					var err = textStatus + ", " + error;
					console.log( "Request Failed: " + err );
				})
				.complete(function() {
				slide();
			})
		}
		getData();
		setInterval(function(){getData()}, 600000);
		var person = [];
		function slide() {
			$.each( $('#tasks .list'), function(i, left) {
				$(left).height(); 
				blockH = 0;
				 $('div.tasks-list', left).each(function(a, block) {
						blockH += $(block).height();
				 });
				 if ($(left).height() < blockH) {
					 person.push({name: $(left).children('div'), height: blockH-200, direction: 0, margin: 0});
				 }
			})
			$.each(person, function(i, per) {
				setInterval(function(){
					if (per.direction == 0) {
						per.margin+= 1;
					} else if (per.direction == 1) {
						per.margin-= 1;
					}
					if (per.margin == 0) {
						per.direction = 2;
						setTimeout(function(){per.direction = 0}, 5000)
					} else if (per.margin == per.height) {
						per.direction = 2;
						setTimeout(function(){per.direction = 1}, 5000)
					}
					$(per.name).css({'margin-top': -per.margin+'px'})}, 20);
				});
		}
		index = 2;
		setInterval(function(){rotateLines()}, 45000);
		function rotateLines(){
			switch (index) {
				case 1:
					$('div.wrap-third-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-second-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-first-line').removeClass('none').animate({opacity: 1}, 1500);
					index = 2;
					break;
				case 2:
					$('div.wrap-first-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-third-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-second-line').removeClass('none').animate({opacity: 1}, 1500);
					index = 3;
					break;
				case 3:
					$('div.wrap-first-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-second-line').animate({opacity: 0}, 1500, function(){$(this).addClass('none')});
					$('div.wrap-third-line').removeClass('none').animate({opacity: 1}, 1500);
					index = 1;
					break;
			}
		}	
		
// vidgets
			var YTdeferred = $.Deferred();
				window.onYouTubeIframeAPIReady = function() {
				YTdeferred.resolve(window.YT);
			};


YTdeferred.done(function(YT) {	

	var playlist = ["1RmzlKpZTaY","yvfulPeyN94", "ONWykMKFsuI", "ONWykMKFsuI", "Fl2Ypu4s5Y0", "DbJr2vieSB4", "QXyg3fM0ATA", "P5dW6zJ51AU", "lCnvF2tDyBY", "MH9izGyVuKI", "VQXJz1G-ajA", "7jsqNYIamFk", "LWpxSh0LlY4", "U11oW-SwnQc", "u47Qq7mocCY", "XVPB6ynojHc", "WeERMgP8GaI", "mRx-nW0rybc", "ZpA2Ezt9FxI", "rlMcRF4_KD8", "LsejpOlMR6Q", "t1rLLaVD9v4", "opSHLNjizRk", "V19MjTj22gU", "t_3El9RhBSg", "_z3A2FHlnAs", "ByVA8eaLcPo", "k2CBLZAbMrM", "He4ludQK1kw", "JhafTBmnMYM", "OLlLa-ZMVGI", "5CQhDVVFe94", "ww0pzgXMpVY", "a942KiEYrD0", "xvYeofPWSvE", "xvYeofPWSvE", "IEv-n81jXj4", "rrUvnjk9hVA", "an4ONA6dgCI", "WSAjCqeCa3o", "8CRmFLOnuZg", "aiaFXBDDv1U", "5aRDwFiEUNg", "qjo-COkcZ6k", "67-igPtoM28", "zJ_QXK_pR_o", "XC6pqBOcqiE", "szor3Trgxm4", "r3-K4vvRe6E", "b8VXegLnVd8", "9JwpLJPm4OY", "5n_aW-PRIQ0", "T0Yd1FTBA5k", "2jwKEX8XCUg", "TcTmnSCpFVw", "6YWI9iwa1-E", "A0rAyTK94XA", "d3V0FiwllVg", "MrW34jNBJX8", "BZGW9D1w_84", "lIREOMxzFpU", "Syu3JKIcXCY", "jsVeN3zS9OM", "eZq5_Ui52UI", "CYFWdNypkeM", "qMyvvsI-Ct8", "ydXdX9NxYGU"];

	var whonext=0;
	var player;
	function onYouTubePlayerAPIReady() {
	    player = new YT.Player('player', {
	        height: '770',
	        width: '1370',
	        videoId: playlist[0],
	        events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	        }
	    });
	    whonext++;
			
	}
	function playNext(){
	    player.loadVideoById({'videoId': playlist[whonext],
	                          'startSeconds': 5,
	                          'endSeconds': 60,
	                          'suggestedQuality': 'large'});

	    whonext++;
			
			if (whonext === playlist.length){whonext=0;}
	}
	function onPlayerReady(event) {
	    event.target.playVideo();
	}
	function onPlayerStateChange(event) {        
	    if(event.data === 0) {            
	        playNext();
	    }
	}	

	onYouTubePlayerAPIReady();	
});


// Function apeend objects
            var tim = 6000;
            var ix = 0;
            var caunt = 0;
            var caunter = 0;
						var json_date;
						
						
						 $.getJSON("source/Events.json", function(data) {
								 json_date = data
								 console.log(json_date['dills'])
								 objSliceOut(json_date['dills'], ix, 3);
						 });


            function objSliceOut(obj, start, offset) {
                var order = [];
                $.each(obj, function(key, val) {
                    order.push(key);
                });

                caunt++;

                $.each(order.slice(start, start + offset), function(i, key) {
        
                    var ii = i,
                        imgLength = 0,
                        imgCounter = 0;
                    $('li > h1').eq(i).text(obj[key].name);
                    $('li > p').eq(i).text(obj[key].time);
										$('li > div').eq(i).text("");

                    $.each(obj[key]['ParticipantsNAme'], function(name, options) {

                        var $img = $('<img src=' + options.url + '>');

                        $img.load(function() {
                            imgCounter++;

                            $('li > div').eq(ii).append($img);
														 

                            if (imgLength == imgCounter) {
                                times();
                            }
														
											function fun(i, elem) {
													var lefted = -20 * i;
													$(this).css({
															'left': lefted + 'px'
													});
													$(this).css({
															'width':  '50px'
													});
													
													//console.log(lefted)  
											}
											
											$('.first_div > img').each(fun);
											$('.sekond_div > img').each(fun);
											$('.sird_div > img').each(fun);										

                        });
                        imgLength++;
                    });

                    var valName = json_date.dills[ix];
                });


                if ((start + offset) < order.length) {
                    ix++;
                } else {
                    ix = 0;
                };
            };

            var times = function() {
            		console.log('times')
                setTimeout(function() {
                	objSliceOut(json_date['dills'], ix, 3);
                }, tim); //Time Function
                tim += 600000;
            }; //TimeAut 

            times();
						

});//ready
