$(function() {
$('#preload').fadeIn(200); 
var devi = 'd';
if(device.mobile() || $("html").width() < 480) {
	devi = 'm';
} else if (device.tablet()) {
	devi = 't';
} else {
	devi = 'd';
};
var lang = "ru";
var content = "home";

function historyLoad() {
	var	State = History.getState();
	History.log('initial:', State.data, State.title, State.url);
	$('#preload').fadeIn(200);
		if ("/" == State.url.slice(-1)) {
			content = "home";
			getHeader();
			return;
			};
		str = State.url.split('?');
		strSplit = str[1];
		console.log(strSplit);
		l = strSplit.split('&');
		if(l[0]) {
			switch (l[0])	{
				case "en":
				case "ru":
				case "ua":
					lang = l[0];
					getHeader();
					break;
				default:
					content = "abra";
					getHeader();
					break;
			}
			if(l[1]&&undefined!=l[1]) content = l[1]
		} else {
			getHeader();
		}
};
	historyLoad();
History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
	// Log the State
	historyLoad();
});	
	

function preloadImages() {
    if (typeof arguments[arguments.length - 1] == 'function') {
        var callback = arguments[arguments.length - 1];
    } else {
        var callback = false;
    }
    if (typeof arguments[0] == 'object') {
        var images = arguments[0];
        var n = images.length;
    } else {
        var images = arguments;
        var n = images.length - 1;
    }
    var not_loaded = n;
    for (var i = 0; i < n; i++) {
        jQuery(new Image()).attr('src', images[i]).load(function() {
            if (--not_loaded < 1 && typeof callback == 'function') {
                callback();
            }
        });
    }
}

// ajax header & footer & content  ----------------------------	
function getHeader() {
	$.post('modules/constructor.php',
			{ 'action': "header", 'lang': lang },
			 function(data) { 
				  $('div#header').empty().append(data); 
			 	}
			).done(function() {
				getFooter()
			})
}
function getFooter() {
	$.post('modules/constructor.php', 
			{ 'action': "footer", 'lang': lang },
			 function(data) { 
				  $('div#footer').empty().append(data); 
			 	}
			).done(function() {
				getScriptHandF()
				getContent(content)
			})
}
function getContent(cont) {
	$.post('modules/constructor.php', 
			{ 'content': cont, 'lang': lang, 'device': devi },
			 function(data) { 
				  $('div#content-wrapper').empty().append(data); 
			 	}
			).done(function() {
				var paths  = [];
				var images = $('body').find('img');
				images.each(function() {
					paths.push($(this).attr('src'));
				});
				 
				preloadImages(paths, function () {
					$("html,body").animate({"scrollTop":0},200);
					$('#preload').fadeOut(1000); 
					getScript(); 
					if (cont=="home") getSlider();
				});
			})
}				
//	$.ajax({
//  type: 'POST',
//  url: "modules/constructor.php",
//  data: { 'content': cont, 'lang': lang },
//  xhr: function() {
//                var xhr = new window.XMLHttpRequest();
//                xhr.upload.addEventListener("progress", function(evt){
//                    if (evt.lengthComputable) {
//                        console.log(evt.loaded);
//                    }
//                }, false);
//            return xhr;
//        },
//  done: function(data){
//    //Do something success-ish
//	$('div#content-wrapper').empty().append(data); 
//				var paths  = [];
//				var images = $('body').find('img');
//				images.each(function() {
//					paths.push($(this).attr('src'));
//				});
//				 
//				preloadImages(paths, function () {
//					$('#preload').fadeOut(1000); 
//					getScript(); 
//				});
//				
//			}
//});
// JavaScript Document
//Google map
	var map;
	var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
	var MY_MAPTYPE_ID = 'Purple';
	function initialize() {
		var featureOpts = [
		{
		  stylers: [

			{ hue: '#6b20a1' },
			{ visibility: 'simplified' },
			{ gamma: 0.5 },
			{ weight: 0.5 }
		  ]
		},
		{
		  elementType: 'labels',
		  stylers: [
			{ visibility: 'on' }
		  ]
		},
		{
		  featureType: 'water',
		  stylers: [
			{ color: '#6b20a1' }
		  ]
		}
	  ];
	  var mapOptions = {
		zoom: 16,
		center: new google.maps.LatLng(50.43334581, 30.39332191),
	  mapTypeControlOptions: {
		  mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	  };
	  map = new google.maps.Map(document.getElementById('map_canvas'),
		  mapOptions);
		var styledMapOptions = {
		name: 'Purple'
	  };
	
	  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	
	  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
		var image = 'img/MapTiger.gif';
	  var myLatLng = new google.maps.LatLng(50.43334581, 30.39332191);
	  var beachMarker = new google.maps.Marker({
		  position: myLatLng,
		  map: map,
		  icon: image,
		  size: new google.maps.Size(20, 32),
		  optimized: false
	  });
	var contentString = '<div id="content">'+
		  '<div id="siteNotice">'+
		  '</div>'+
		  '<h1 id="firstHeading" class="firstHeading">Kvinto</h1>'+
		  '<div id="bodyContent">'+
		  '<p><b>Kvinto</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
		  'sandstone rock formation in the southern part of the '+
		  'Heritage Site.</p>'+
		  '</div>'+
		  '</div>';
	
	  var infowindow = new google.maps.InfoWindow({
		  content: contentString
	  });
	  google.maps.event.addListener(beachMarker, 'click', function() {
		infowindow.open(map,beachMarker);
	  });
	}

function sourceSwap($this) {
		var newSource = '';
        newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
		console.log(newSource);
    }
		
function getScriptHandF() {
	initialize();
	// Main menu  ----------------------------	
// sets active class to menu link if submenu is active ----------------------------
	if($("ul.submenu li a").hasClass("active")){
		$("ul.submenu li a").parent().parent().parent().find("a").first().addClass("active");
	}
	var dir = -260;
	$(document.body).on("click", ".toggle", function(){
	     dir = dir===0 ? -260 : 0;
	     $(".nav").stop().animate({left: dir }, 'fast');
		 if(dir == 0){
		 	$("#darkmask").fadeIn();
			$('video').hide();
		 }else{
		 	$("#darkmask").fadeOut();
			$('video').show();
		 }
		 $('.searchfield input').val('');
		 $('.searchfield input').keyup();
	});	
	$(".nav .submenu").hide();
	$(".nav ul > li > a").click(function(e){
		if ($(this).parent().find("ul.submenu li.sub").length>0){
			e.preventDefault();
			
			if ($(this).hasClass("menu-closed")){
				
				$('.menu-open').click();
				
				$(this).removeClass("menu-closed");
				$(this).addClass("menu-open");
			}else{
	
				$(this).removeClass('menu-open');
				$(this).addClass("menu-closed");
			}
				$(this).parent().find("ul.submenu").slideToggle();
				
		} else if ("contacts" == $(this).attr('href')) {
			e.preventDefault();
			a = $('#footer').find('.contact').offset().top;
			$("html,body").animate({"scrollTop":a},200);
			dir = -260;
			$(".nav").stop().animate({left: dir }, 'fast');
			$("#darkmask").fadeOut();
		}else{
			e.preventDefault();
			$('#preload').fadeIn(200);
			content = $(this).attr('href');
			getContent(content);
			History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
			console.log('update   '+$(this).attr('href'));
			dir = -260;
			$(".nav").stop().animate({left: dir }, 'fast');
			$("#darkmask").fadeOut();
		}
	});
	$(".nav ul.submenu li.sub").each(function(i,el){
		$(this).parent().parent().find("a").first().addClass("hassub menu-closed");
	});


// Clients & Partners menus in footer animation on hover ----------------------------	
	i=0, a=0
	$('.sub-menu-scroll div').bind('mouseenter', function() {
    	direction = $(this).attr('data-scroll');
		elem = $(this).parent('div.sub-menu-scroll').parent('div').children('div.content').children('div').children('ul');
		switch ($(this).parent('div').parent('div').attr('class')) {
			case "clients":
				console.log("clients")
				intW=0;
				break;
			case "partners":
				console.log("partners")
				intW=1;
				break;	
		}
		this.iid = setInterval(function() {
		   someAnim(elem, intW, direction);
		}, 25);
	}).bind('mouseleave', function(){
		this.iid && clearInterval(this.iid);
	});
	function someAnim(elem, intW, direction) {
		switch (intW) {
			case 0:
				elem.css({ "position": "relative", "top": -i});
				if ("up" == direction && i <= elem.height()-elem.parent().height()) {
					i++
				} else if ("down" == direction && i > 0) {
					i--   
				}
				break;
			case 1:
				elem.css({ "position": "relative", "top": -a});
				if ("up" == direction && a <= elem.height()-elem.parent().height()) {
					a++
				} else if ("down" == direction && a > 0) {
					a--   
				}
				break;	
		}
	};
	
// Social icons on hover ----------------------------		
	$('div.followus img').on({
		mouseenter: function() {
			sourceSwap($(this));
		},
		mouseout: function() {
			sourceSwap($(this));
		}
	});
	
// language menu animation on hover ----------------------------	
	switch (devi) {	
		case "d":
			$('#header-bg').on('mouseover', '#lang', function() {
				$('#lang').stop().animate({width: '180px' }, 'fast');
			});
			$('#header-bg').on('mouseout', '#lang', function() {
				$('#lang').stop().animate({width: '60px' }, 'fast');
			});
			break;
		case "m":
		case "t":
			$('#header-bg').on('click', '#lang', function() {
				if (180 != $('#lang').width()) {
					$('#lang').stop().animate({width: '180px' }, 'fast');
				} else {
					$('#lang').stop().animate({width: '60px' }, 'fast');
				}
			});
			break;
	}
	$('#header-bg').on('click', '#lang li', function() {
		  if(!$(this).hasClass('active')) {
			  lang = $(this).attr('data-lang');
			  $('#preload').fadeIn(200);
			  getHeader();
			  History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
			  console.log('update   '+$(this).attr('data-lang'));
		  }
		  
	  });
	// #map-scale on hover ----------------------------	
	function scroll_to_bottom(speed) {
		var height= $("body").height(); 
		$("html,body").animate({"scrollTop":height},speed); 
	}	
	$('#map-scale img').on({
		mouseenter: function() {
			sourceSwap($(this));
		},
		mouseout: function() {
			sourceSwap($(this));
		}
	});
	mapState = 0;
	mapHeight = 0;
	$('#map-scale').on('click', 'img', function() {
		if(0 == mapState) {
			mapHeight = $('#map_canvas').height();
			$('#map_canvas').stop().animate({'height': $(window).innerHeight()-60+'px' }, 500);
			setInterval(function() {
				   google.maps.event.trigger(map, 'resize');
				}, 500);
			
			scroll_to_bottom(500);
			mapState = 1;
		} else {
			$('#map_canvas').stop().animate({'height': mapHeight+'px' }, 'fast');
			mapState = 0;
		}
	});
}; //getScriptHandF END -------------------
function getScript() {
// Resize when browser window resolution change  ----------------------------	
	resizeCubics($("html").width());
	function resizeCubics(pageWidth) {	
			halfPageWidth = pageWidth/2;
			casesInt = 3;
			newsInt1 = 1.5;
			newsInt2 = halfPageWidth;
			worksInt = 5;
			if(1280 < pageWidth && pageWidth < 1920) {
				casesInt = 3;
				newsInt1 = 1.5;
				newsInt2 = halfPageWidth;
				worksInt = 5;
			} else if (1280 > pageWidth && pageWidth > 1024) {
				casesInt = 3;
				newsInt1 = 1.5;
				newsInt2 = halfPageWidth;
				worksInt = 5;
			} else if (1024 > pageWidth && pageWidth > 800) {
				casesInt = 3;
				newsInt1 = 1.5;
				newsInt2 = halfPageWidth;
				worksInt = 3;
			} else if (800 > pageWidth && pageWidth > 480) {
				casesInt = 2;
				newsInt1 = 1.5;
				newsInt2 = halfPageWidth;
				worksInt = 3;
			} else if (480 > pageWidth){
				casesInt = 1;
				newsInt1 = 1;
				newsInt2 = pageWidth;
				worksInt = 2;
			}
			$("div.preview_news > div.preview-news-img > img").width(newsInt2);
			$("div.preview_news div.preview-news-text div.news-date").width(halfPageWidth/100*80);
			if(newsInt1 > 1) {
				$("div.preview_news div.preview-news-text div.news-date").css({'margin-top':newsInt2/newsInt1-$("div.preview_news div.preview-news-text div.news-date").height()-10+'px'})
			}
			$(".works .work-wrapper").width(pageWidth/worksInt);
			$("#cases .box_skvere").width(pageWidth/casesInt);
			$("#cases .box_skvere").height(pageWidth/casesInt);
		}
		$(window).resize(function(){
			resizeCubics($("html").width());
		})
	//$('.home').on('mouseover', '.video-wrapper', function() {
//		$(this).find('.video-poster > img.poster').stop().animate({'opacity': 0.4}, 700);
//	});
//	$('.home').on('mouseout', '.video-wrapper', function() {
//		$(this).find('.video-poster > img.poster').stop().animate({'opacity': 1}, 700);
//	});
//	$('div.video-poster img.play').on({
//		mouseenter: function() {
//			sourceSwap($(this));
//		},
//		mouseout: function() {
//			sourceSwap($(this));
//		},
//		click: function() {
//			$(this).parent(".video-poster").addClass('hide');
//			$(this).parents(".video-wrapper").children('.player-wrapper').removeClass('hide');
//			video.play();
//  			play = 1;
//		}
//	})

	$('.home').on('click', 'img, video', function() {
		content = $(this).attr('data-url');
		$('#preload').fadeIn(200);
		getContent(content);
		History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
	});
// Cases animation on hover ----------------------------		
	$('#cases').on('mouseover', '.box_skvere', function() {
		$(this).children('img').stop().animate({width: '110%', height: '110%', 'margin': '-5% 0 0 -5%' }, 'fast');
		$(this).children('h3').stop().animate({'margin-top': '-180px' }, 'fast').css({'background-color': 'rgba(0,0,0,0.8)'});
	});
	$('#cases').on('mouseout', '.box_skvere', function() {
		$(this).children('img').stop().animate({width: '100%', height: '100%', 'margin': '0' }, 'fast');
		$(this).children('h3').stop().animate({'margin-top': '-110px' }, 'fast').css( {'background-color': 'rgba(0,0,0,0.5)' });
	});
	workWrapHeight = 0;
	$('#cases').on('click', '.box_skvere', function() {
		if ($(this).parent('#cases').hasClass('c-works')) {
			currentHeader = $(this).children('h3').text();
			works = $(this).children('img').attr('data-url');
			//History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+works);
			$('#cases').children('.box_skvere').animate({height: 0},500).hide(1000);
			$('#cases').children('.works').children('div.'+works).removeClass('hide').height('auto');
			switch(lang) {
				case "en":
					tit = "Our works";
					break;
				case "ua":
					tit = "Наші роботи";
					break;
				case "ru":
					tit = "Наши работы";
					break;	
				default:
					tit = "Our works";
			}
			$('#cases').children('h2.work-header').empty().append('<img src="img/icon/all-works-'+lang+'.png" data-alt-src="img/icon/all-works_h-'+lang+'.png" style="float:right; margin: 0;" />'+tit+' - '+currentHeader).show(1000);
			$("html,body").animate({"scrollTop":0},500);
		} else {
			content = $(this).children('img').attr('data-url');
			$('#preload').fadeIn(200);
			getContent(content);
			History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
		}
	});
	$('#cases h2.work-header').on({
		mouseenter: function() {
			sourceSwap($(this));
		},
		mouseout: function() {
			sourceSwap($(this));
		},
		click: function() {
			//History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
			$("html,body").animate({"scrollTop":0},500);
			$('#cases').children('.box_skvere').show(0).stop().animate({height: $('#cases .box_skvere').width()},1000, function(){resizeCubics();});
			$('.works').children('div').animate({height: 0}, 1000, function(){$('.works').children('div').addClass('hide')});
			$('#cases').children('h2.work-header').hide(1000).empty();
		}
	}, 'img');	
	 
// News animation on hover ----------------------------		
	$('.preview_news').on('mouseover', 'h2', function() {
		$(this).css({'text-decoration':'underline'});
	});
	$('.preview_news').on('mouseout', 'h2', function() {
		$(this).css({'text-decoration':'none'});
	});
	$('.preview_news').on('click', 'h2, div.preview-news-img', function() {
		content = $(this).attr('data-url');
		$('#preload').fadeIn(200);
		getContent(content);
		History.pushState({state:1,rand:Math.random()}, null, "?"+lang+"&"+content);
	});
	
// Works on hover ----------------------------	
	blockLeft = '';
	blockTop = '';
	parentWidth = '';
	parentHeight = '';
	nowOpenWorks = 0;
	$('div.works').on({
		mouseenter: function() {
			$(this).css({'background-color': '#6b20a1'});
		},
		mouseleave: function() {
			$(this).css({'background-color': '#212121'});
		},
		click: function() {
				$("#darkmask").fadeIn();
				parentDiv = $(this);
				video = $(this).children('img').eq(0).attr('data-video');
				textTitle = parentDiv.find('h4').text();
				x = "<iframe width='640' height='360' src='https://www.youtube.com/embed/"+video+"?rel=0&amp;controls=1&amp;showinfo=0' frameborder='0' allowfullscreen></iframe>";
				c = '<img id="close" data-alt-src="img/icon/close_h.png" src="img/icon/close.png" title="Close" alt="Close" style="  float: right; margin: 0px 0px 0 0;" />';	
				topM = 100;
				if(device.mobile() || $("html").width() < 480) {
					topM = 20;
				}
				$('#show-video').empty().append(c+'<h4>'+textTitle+'</h4>'+x).animate({top: topM+'px'}, 500);
			}
	}, '.closed');
	
	$('div#show-video').on({
		mouseenter: function() {
			sourceSwap($(this));
		},
		mouseout: function() {
			sourceSwap($(this));
		},
		click: function() {
			$(this).parent('div#show-video').animate({top: -800+'px'}, 500, function() {
				$(this).parent('div#show-video').empty();
				$("#darkmask").fadeOut();
			})
		}
	}, 'img#close');
	
	$('select[name="budgetselect"]').on('change', function() {
		budget = $(this).val();
		$(this).siblings('input[name="budget"]').val(budget);
	});
	
// Get Form ----------------------------		
	$('#content-wrapper').on({
		click: function(e) {
			e.preventDefault();
			$('#preload').fadeIn(200);
			form = $(this);
			a = form.parent('.form-wrapper').offset().top;
			$("html,body").animate({"scrollTop":a},200);
			console.log('form'+lang);
			$.post('modules/constructor.php', 
			{ 'content': "form", 'lang': lang },
			 function(data) { 
				  form.parent('div.form-wrapper').empty().append(data); 
			 	}
			).done(function() {
				$('#preload').fadeOut(200);
			})
		}
	}, '.form-wrapper a.get-form');
}; //getScript END -------------------

function getSlider() {
	$('#slides').slidesjs({
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true,
		  effect: "fade"
        }, navigation: {
          effect: "fade"
        },
        pagination: {
          effect: "fade"
        },
        effect: {
          fade: {
            speed: 1000,
			crossfade: true
          }
        }
      });	
};
});