<div id="cases" class="c-works">
  <div class="heshed">
    <div class="bigest"> </div>
  </div>
</div>
<script>

   $( document ).ready(function() {
	   
	   

    function renderWorks(items) {
      var container = $('#cases'), html = [], i, item;

      html.push('<h2 class="work-header" style="display:none"></h2>');

      for (i = 0; i < items.length; i ++){
        item = items[i];

        html.push('<div class="box_skvere">');
        html.push('<img data-url="works', item['image-data'], '" src="img/works/', item['image-data'], '.jpg">');
        html.push('<h3>', item['title'], '</h3>');
        html.push('</div>');
		
      }
	  
	  
	   
    
      html.push('<div class="clearfix"></div>');	
      container.html(html.join(''));
	
    }
    
    var workItems = [
	
	{ 'image-data': 'Azk',        'title': 'Digital Signage <br> для АЗК' },
	{ 'image-data': 'FastFood',   'title': 'Digital Signage <br> у фастфуді' },
	{ 'image-data': 'Fitness',    'title': 'Digital Signage <br> у фітнес клубі' },
	{ 'image-data': 'Cinema',     'title': 'Digital Signage <br> в кінотеатрі' },
	{ 'image-data': 'Restaurant', 'title': 'Digital Signage <br> для ресторану' },
	{ 'image-data': 'Retail',     'title': 'Digital Signage <br> в ритейлі' }];
      
    renderWorks(workItems);
	
	
	  
  $(function() {
       function renderWorked(arr) {
		   
           var Category = {};
           arr = $.map(arr, function(item) {
			   
               var div = $("<div/>", {
                       "class": "works" + item["Category"]
                   }),
                   img = $("<img/>", {
                       src: "img/works/preview/" + item["data-video"] + '.jpg'  ,
                       attr: {
                           "data-video": item["data-video"],
                           "data-alt-src": item["data-video"] + '.jpg'
                       }
 
 
 
 
                   }),
				   
				      
				   
                   h3 = $("<h3/>", {
                       html: item["title"]
                   });
               Category[item["Category"]] ? (div = Category[item["Category"]]) : (Category[item["Category"]] = div);
               div.append($("<div/>", {
                   html: [img, h3],
                   "class": 'work-wrapper closed w' + item["Wraper"]
               }));
               return div
           })

		   
		   
           $('#cases').append($("<div/>", {
               html: arr,
               "class": "works block"
           }))
		            var pragness =  $('.Azk, .FastFood, .Fitness, .Cinema, .Restaurant, .Retail ')
		   
		   		    $('.worksAzk, .worksFastFood, .worksFitness, .worksCinema, .worksRestaurant, .worksRetail ').append('<div class="clearfix"></div>');

                    console.log(pragness)
       }
        var arr = [
		
//Azk

{'Wraper': '1', 'Category': 'Azk', 'data-video': '5n_aW-PRIQ0', 'title': 'Цифровий контент на АЗК (Приклад1)'},
{'Wraper': '2', 'Category': 'Azk', 'data-video': 'T0Yd1FTBA5k', 'title': 'Цифровий контент на АЗК (Приклад2)'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'JOMXK_UlO3I', 'title': 'Цифровий контент на АЗК (Приклад3)'}, 
{'Wraper': '2', 'Category': 'Azk', 'data-video': '9JwpLJPm4OY', 'title': 'Цифрові рішення для АЗК'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'OLlLa-ZMVGI', 'title': 'Промо кава'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'JhafTBmnMYM', 'title': 'Промо картопля фрі'},
{'Wraper': '2', 'Category': 'Azk', 'data-video': 'He4ludQK1kw', 'title': 'Menu Board кава і випічка'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 't_3El9RhBSg', 'title': 'Нова пропозиція від Burger Grill'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'nPXbzQb6-sU', 'title': 'Промо кави WOG'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'Ln50Y6ifzeY', 'title': 'Промо АЗК'},
	
	
//FastFood
	 
{'Wraper': '2','Category': 'FastFood','data-video': 'r3-K4vvRe6E', 'title': 'Нова пропозиція від Burger Grill' },
{'Wraper': '1','Category': 'FastFood','data-video': 'szor3Trgxm4', 'title': 'Весняне меню від Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': '67-igPtoM28', 'title': 'Промо піца Таки Було' },
{'Wraper': '2','Category': 'FastFood','data-video': '5aRDwFiEUNg', 'title': 'Menu Board Burger Grill' },
{'Wraper': '1','Category': 'FastFood','data-video': '8CRmFLOnuZg', 'title': 'Menu Board Burger Grill закуски' },
{'Wraper': '1','Category': 'FastFood','data-video': 'WSAjCqeCa3o', 'title': 'Menu Board Burger Grill напої' },
{'Wraper': '2','Category': 'FastFood','data-video': 'an4ONA6dgCI',  'title': 'Промо піца Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': 'rrUvnjk9hVA',  'title': 'Menu Board Белісіма' },
{'Wraper': '2','Category': 'FastFood','data-video': 'jsVeN3zS9OM',  'title': 'Cartel' },
{'Wraper': '1','Category': 'FastFood','data-video': '6YWI9iwa1-E',  'title': 'Digital Signage в фаст-фудах' },
{'Wraper': '2','Category': 'FastFood','data-video': 'c07KApRjLKs',  'title': 'Контент для компанії "Мамин Хліб"' },
{'Wraper': '2','Category': 'FastFood','data-video': 'TcTmnSCpFVw',  'title': 'Контент для сети заведений "ТАКі БУЛО"' },
{'Wraper': '2','Category': 'FastFood','data-video': 'b8VXegLnVd8',  'title': 'Big Burger Sandwich Promo' },
{'Wraper': '2','Category': 'FastFood','data-video': 'elWaOVCkWss',  'title': 'Menu Board Sky Park' },
{'Wraper': '1','Category': 'FastFood','data-video': 'ww0pzgXMpVY',  'title': 'Промо Digital Signage' },
{'Wraper': '1','Category': 'FastFood','data-video': 'k2CBLZAbMrM',  'title': 'Гриль меню Sky Park' },
{'Wraper': '1','Category': 'FastFood','data-video': 'aiaFXBDDv1U',  'title': 'Menu Board Burger Grill піца' },
{'Wraper': '1','Category': 'FastFood','data-video': 'opSHLNjizRk',  'title': 'Промо Menu Board кава' },
{'Wraper': '1','Category': 'FastFood','data-video': 'ZpA2Ezt9FxI',  'title': 'Промо Menu Board для Fast Food 1' },
{'Wraper': '1','Category': 'FastFood','data-video': 'mRx-nW0rybc',  'title': 'Промо Menu Board для Fast Food 2' },
{'Wraper': '1','Category': 'FastFood','data-video': 'WeERMgP8GaI',  'title': 'Menu Board піца Sky Park)' },
{'Wraper': '1','Category': 'FastFood','data-video': 'XVPB6ynojHc',  'title': 'Промо Menu Board Так і Було 1' },
{'Wraper': '1','Category': 'FastFood','data-video': 'u47Qq7mocCY',  'title': 'Промо Menu Board бургер' },
{'Wraper': '1','Category': 'FastFood','data-video': 'U11oW-SwnQc',  'title': 'Фреш Menu Board' },
{'Wraper': '1','Category': 'FastFood','data-video': 'LWpxSh0LlY4',  'title': 'Промо Menu Board Так і Було 2' },
{'Wraper': '1','Category': 'FastFood','data-video': 'lCnvF2tDyBY',  'title': 'Промо Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': '-iO40JJGZeE',  'title':  'Промо картопля фрі' },
{'Wraper': '2','Category': 'FastFood','data-video': 'u47Qq7mocCY',  'title': 'Промо Menu Board ' },
{'Wraper': '1','Category': 'FastFood','data-video': 'Efwu-6f1c1Q',  'title': 'Промо Menu Board Мамин Хліб' },


//Fitnes



{'Wraper': '1','Category': 'Fitness','data-video': 'np_IEdf2z0I', 'title': 'mScreen для Фітнес-клубу' },
{'Wraper': '1','Category': 'Fitness','data-video': '1RmzlKpZTaY', 'title': 'Цифровий контент для фітнес клубу' },
{'Wraper': '1','Category': 'Fitness','data-video': 'yvfulPeyN94', 'title': 'Концепт - Фітнес Клуб або Рішення Digital Signage для фітнес клубу' },


//Cinema

{'Wraper': '2','Category': 'Cinema','data-video': 'IEv-n81jXj4', 'title': 'Концепція Кіно-меню попкорн 1' },
{'Wraper': '1','Category': 'Cinema','data-video': 'xvYeofPWSvE', 'title': 'Концепція Кіно-меню попкорн 2' },
{'Wraper': '2','Category': 'Cinema','data-video': 'CYFWdNypkeM', 'title': 'mScreen для Кінотеатрів' },
{'Wraper': '2','Category': 'Cinema','data-video': 'RbLVIL_bSyI', 'title': 'Digital Signage в кінотеатрах' },
{'Wraper': '2','Category': 'Cinema','data-video': '2jwKEX8XCUg', 'title': 'Digital Signage в кінотеатрах' },
{'Wraper': '2','Category': 'Cinema','data-video': '7jsqNYIamFk', 'title': 'Промо поп корн сирний' },
{'Wraper': '1','Category': 'Cinema','data-video': 'VQXJz1G-ajA', 'title': 'Промо поп корн 1' },
{'Wraper': '2','Category': 'Cinema','data-video': 'P5dW6zJ51AU', 'title': 'Промо поп корн 2' },
{'Wraper': '1','Category': 'Cinema','data-video': 'DbJr2vieSB4', 'title': 'Рішення Digital Signage для кінотеатрів' },
{'Wraper': '1','Category': 'Cinema','data-video': 'ONWykMKFsuI', 'title': 'Кінотеатр місця і сеанси в залах' },



//Restaurant

{'Wraper': '2','Category': 'Restaurant','data-video': 'qMyvvsI-Ct8', 'title': 'mScreen by KVINTO' },
{'Wraper': '1','Category': 'Restaurant','data-video': 'eZq5_Ui52UI', 'title': 'mScreen спеціально для Vodka Bar' },
{'Wraper': '1','Category': 'Restaurant','data-video': 'A0rAyTK94XA', 'title': 'Digital Signage в ресторанах та кафе' },
{'Wraper': '2','Category': 'Restaurant','data-video': 'uVtYyndqXow', 'title': 'Меню Mugaritz Mugaritz' },
{'Wraper': '2','Category': 'Restaurant','data-video': 't1rLLaVD9v4', 'title': 'Промо меню-бар Mugaritz' },



//Retail

{'Wraper': '2','Category': 'Retail','data-video': 'wSszoG2JMTM', 'title': 'Digital Signage в брендовому магазині одягу' },
{'Wraper': '2','Category': 'Retail','data-video': '0Rb4eA28qDE', 'title': 'Digital Signage в брендовому магазині одягу' },
{'Wraper': '2','Category': 'Retail','data-video': 'ZJZvdtDLHb4', 'title': 'Digital Signage в брендовому магазині одягу' },
{'Wraper': '2','Category': 'Retail','data-video': 'XC6pqBOcqiE', 'title': 'Великоднє промо Lagarto' },
{'Wraper': '1','Category': 'Retail','data-video': 'p9D3b2dcwdk', 'title': '14 лютого Lagarto' },
{'Wraper': '2','Category': 'Retail','data-video': 'hw3_6jbsbpM', 'title': 'Акційні пропозиції' },
{'Wraper': '1','Category': 'Retail','data-video': 'Syu3JKIcXCY', 'title': 'Продукт mScreen від компанії KVINTO для компанії Форвард' }];



   renderWorked(arr);
 
 
   });











   });
   
   
$( document ).ready(function() {
   

$('#cases').append('<div id="show-video"></div>');
});



</script> 
