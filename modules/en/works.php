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
      { 'image-data': 'Azk',        'title': 'Digital Signage <br> for refueling complex' },
	  { 'image-data': 'FastFood',   'title': 'Digital Signage <br> in fastfood' },
	  { 'image-data': 'Fitness',    'title': 'Digital Signage <br> a fitness club' },
	  { 'image-data': 'Cinema',     'title': 'Digital Signage <br> the cinema' },
	  { 'image-data': 'Restaurant', 'title': 'Digital Signage <br> for restaurant' },
	  { 'image-data': 'Retail',     'title': 'Digital Signage <br> in retail' }];
      
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
{'Wraper': '1', 'Category': 'Azk', 'data-video': '5n_aW-PRIQ0', 'title': 'The digital content on the filling stations (Example 1)'},
{'Wraper': '2', 'Category': 'Azk', 'data-video': 'T0Yd1FTBA5k', 'title': 'The digital content on the filling stations (Example 2)'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'JOMXK_UlO3I', 'title': 'The digital content on the filling stations (Example 3)'}, 
{'Wraper': '2', 'Category': 'Azk', 'data-video': '9JwpLJPm4OY', 'title': 'Digital solutions for filling stations'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'OLlLa-ZMVGI', 'title': 'Promo coffee'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'JhafTBmnMYM', 'title': 'Promo potato fries'},
{'Wraper': '2', 'Category': 'Azk', 'data-video': 'He4ludQK1kw', 'title': 'Menu Board Coffee and baking'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 't_3El9RhBSg', 'title': 'The new proposition from Burger Grill'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'nPXbzQb6-sU', 'title': 'Promotional coffee WOG'},
{'Wraper': '1', 'Category': 'Azk', 'data-video': 'Ln50Y6ifzeY', 'title': 'Promo filling stations'},

	
//FastFood
{'Wraper': '2','Category': 'FastFood','data-video': 'r3-K4vvRe6E', 'title': 'New offer from Burger Grill' },
{'Wraper': '1','Category': 'FastFood','data-video': 'szor3Trgxm4', 'title': 'The spring menu from Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': '67-igPtoM28', 'title': 'Promo pizza  TAk i bulo' },
{'Wraper': '2','Category': 'FastFood','data-video': '5aRDwFiEUNg', 'title': 'Menu Board Burger Grill' },
{'Wraper': '1','Category': 'FastFood','data-video': '8CRmFLOnuZg', 'title': 'Menu Board Burger Grill Appetizers' },
{'Wraper': '1','Category': 'FastFood','data-video': 'WSAjCqeCa3o', 'title': 'Menu Board Burger Grill drinks' },
{'Wraper': '2','Category': 'FastFood','data-video': 'an4ONA6dgCI',  'title': 'Promotional Pizza Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': 'rrUvnjk9hVA',  'title': 'Menu Board Belisima' },
{'Wraper': '2','Category': 'FastFood','data-video': 'jsVeN3zS9OM',  'title': 'Cartel' },
{'Wraper': '1','Category': 'FastFood','data-video': '6YWI9iwa1-E',  'title': 'Digital Signage in fast foods' },
{'Wraper': '2','Category': 'FastFood','data-video': 'c07KApRjLKs',  'title': 'Content for  "Mamin Hlib"' },
{'Wraper': '2','Category': 'FastFood','data-video': 'TcTmnSCpFVw',  'title': 'Content for chain sets "ТАКі БУЛО"' },
{'Wraper': '2','Category': 'FastFood','data-video': 'b8VXegLnVd8',  'title': 'Big Burger Sandwich Promo' },
{'Wraper': '2','Category': 'FastFood','data-video': 'elWaOVCkWss',  'title': 'Menu Board Sky Park' },
{'Wraper': '1','Category': 'FastFood','data-video': 'ww0pzgXMpVY',  'title': 'Promo Digital Signage' },
{'Wraper': '1','Category': 'FastFood','data-video': 'k2CBLZAbMrM',  'title': 'Grill menu Sky Park' },
{'Wraper': '1','Category': 'FastFood','data-video': 'aiaFXBDDv1U',  'title': 'Menu Board Burger Grill Pizza' },
{'Wraper': '1','Category': 'FastFood','data-video': 'opSHLNjizRk',  'title': 'Promo Coffee Menu Board' },
{'Wraper': '1','Category': 'FastFood','data-video': 'ZpA2Ezt9FxI',  'title': 'Promo Menu Board for Fast Food 1' },
{'Wraper': '1','Category': 'FastFood','data-video': 'mRx-nW0rybc',  'title': 'Promo Menu Board for Fast Food 2' },
{'Wraper': '1','Category': 'FastFood','data-video': 'WeERMgP8GaI',  'title': 'Menu Board  pizza Sky Park)' },
{'Wraper': '1','Category': 'FastFood','data-video': 'XVPB6ynojHc',  'title': 'Promo Menu Board Tak i bulo 1' },
{'Wraper': '1','Category': 'FastFood','data-video': 'u47Qq7mocCY',  'title': 'Promo Menu Board burger' },
{'Wraper': '1','Category': 'FastFood','data-video': 'U11oW-SwnQc',  'title': 'Fresh Menu Board' },
{'Wraper': '1','Category': 'FastFood','data-video': 'LWpxSh0LlY4',  'title': 'Promo Menu Board Tak i bulo 2' },
{'Wraper': '1','Category': 'FastFood','data-video': 'lCnvF2tDyBY',  'title': 'Promo Burger Grill' },
{'Wraper': '2','Category': 'FastFood','data-video': '-iO40JJGZeE',  'title': 'Promo potato fries' },
{'Wraper': '2','Category': 'FastFood','data-video': 'u47Qq7mocCY',  'title': 'Promo Menu Board ' },
{'Wraper': '1','Category': 'FastFood','data-video': 'Efwu-6f1c1Q',  'title': 'Promo Menu Board Mamin Hleb' },


//Fitnes
{'Wraper': '1','Category': 'Fitness','data-video': 'np_IEdf2z0I', 'title': 'mScreen for Fitness Club' },
{'Wraper': '1','Category': 'Fitness','data-video': '1RmzlKpZTaY', 'title': 'The digital content for fitness club' },
{'Wraper': '1','Category': 'Fitness','data-video': 'yvfulPeyN94', 'title': 'Concept - Fitness Club or Solution for Digital Signage fitness club' },


//Cinema
{'Wraper': '2','Category': 'Cinema','data-video': 'IEv-n81jXj4', 'title': 'Concept Movie menu popcorn 1' },
{'Wraper': '1','Category': 'Cinema','data-video': 'xvYeofPWSvE', 'title': 'Concept Movie menu popcorn 2' },
{'Wraper': '2','Category': 'Cinema','data-video': 'CYFWdNypkeM', 'title': 'mScreen to Cinemas' },
{'Wraper': '2','Category': 'Cinema','data-video': 'RbLVIL_bSyI', 'title': 'Digital Signage in theaters' },
{'Wraper': '2','Category': 'Cinema','data-video': '2jwKEX8XCUg', 'title': 'Digital Signage in theaters' },
{'Wraper': '2','Category': 'Cinema','data-video': '7jsqNYIamFk', 'title': 'Promotional cheesy pop corn' },
{'Wraper': '1','Category': 'Cinema','data-video': 'VQXJz1G-ajA', 'title': 'Promo pop corn 1' },
{'Wraper': '2','Category': 'Cinema','data-video': 'P5dW6zJ51AU', 'title': 'Promo pop corn 2' },
{'Wraper': '1','Category': 'Cinema','data-video': 'DbJr2vieSB4', 'title': 'Digital Signage Solutions for cinemas' },
{'Wraper': '1','Category': 'Cinema','data-video': 'ONWykMKFsuI', 'title': 'Cinema seats and sessions in the halls' },



//Restaurant
{'Wraper': '2','Category': 'Restaurant','data-video': 'qMyvvsI-Ct8', 'title': 'mScreen by KVINTO' },
{'Wraper': '1','Category': 'Restaurant','data-video': 'eZq5_Ui52UI', 'title': 'mScreen specially for Vodka Bar' },
{'Wraper': '1','Category': 'Restaurant','data-video': 'A0rAyTK94XA', 'title': 'Digital Signage in restaurants and cafes' },
{'Wraper': '2','Category': 'Restaurant','data-video': 'uVtYyndqXow', 'title': 'Menu Mugaritz Mugaritz' },
{'Wraper': '2','Category': 'Restaurant','data-video': 't1rLLaVD9v4', 'title': 'Promo menu bar Mugaritz' },



//Retail
{'Wraper': '2','Category': 'Retail','data-video': 'wSszoG2JMTM', 'title': 'Digital Signage  in brands clothing store' },
{'Wraper': '2','Category': 'Retail','data-video': '0Rb4eA28qDE', 'title': 'Digital Signage  in brands clothing store' },
{'Wraper': '2','Category': 'Retail','data-video': 'ZJZvdtDLHb4', 'title': 'Digital Signage  in brands clothing store' },
{'Wraper': '2','Category': 'Retail','data-video': 'XC6pqBOcqiE', 'title': 'Easter promo Lagarto' },
{'Wraper': '1','Category': 'Retail','data-video': 'p9D3b2dcwdk', 'title': 'February 14 Lagarto' },
{'Wraper': '2','Category': 'Retail','data-video': 'hw3_6jbsbpM', 'title': 'Special Offer' },
{'Wraper': '1','Category': 'Retail','data-video': 'Syu3JKIcXCY', 'title': 'Product mScreen from company to company KVINTO Forward' }];



   renderWorked(arr);
 
 
   });











   });
   
   
$( document ).ready(function() {
   

$('#cases').append('<div id="show-video"></div>');
});



</script>