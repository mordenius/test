$(function() {
	function getData() {
		$.getJSON( "data.json" )
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
						employee += '<img src="img/avatars/'+i+'.png" />';
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
					$('body').empty().append(employee);
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
			$.each( $('body .list'), function(i, left) {
				$(left).height(); 
				blockH = 0;
				 $('div.tasks-list', left).each(function(a, block) {
						blockH += $(block).height();
				 });
				 if ($(left).height() < blockH) {
					 person.push({name: $(left).children('div'), height: blockH-200, direction: 0, margin: 0});
				 }
				 console.log(person);
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
});