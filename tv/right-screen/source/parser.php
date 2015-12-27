<?php
include('simple_html_dom.php');
function getRates(){
	$string2 = file_get_contents("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3");
	$rss2 = json_decode($string2, true);
	//$yesterday = date('d.m.Y', strtotime('yesterday')); 
	$yesterday = date("d.m.Y", mktime( 0, 0, 0, date("m"), date("d")-2, date("Y")));
	$string = file_get_contents('https://api.privatbank.ua/p24api/exchange_rates?json&date='.$yesterday);
	$rss = json_decode($string, true);
	
	$rur_yes = $rss2[0]['buy'];
	$eur_yes = $rss2[1]['buy'];
	$usd_yes = $rss2[2]['buy'];
	
	function just($yes, $tod) {
		if ($yes < $tod) {
			$value1 = '+'.($tod - $yes);	
			$value2 = "bad";
		} else if ($yes > $tod) {
			$value1 = '-'.abs($tod - $yes);
			$value2 = "good";
		} else {
			$value1 = 0;
			$value2 = "non";	
		}
		return array($value1, $value2);
	};

		$rur = just(floatval(preg_replace("/[^-0-9\.]/",".",$rss['exchangeRate'][4]['purchaseRateNB'])), floatval(preg_replace("/[^-0-9\.]/",".",$rur_yes)));
		$rur_tod = $rur[0];
		$color1 = $rur[1];

		$usd = just(floatval(preg_replace("/[^-0-9\.]/",".",$rss['exchangeRate'][7]['purchaseRateNB'])), floatval(preg_replace("/[^-0-9\.]/",".",$usd_yes)));
		$usd_tod = $usd[0];
		$color2 = $usd[1];

		$eur = just(floatval(preg_replace("/[^-0-9\.]/",".",$rss['exchangeRate'][1]['purchaseRateNB'])), floatval(preg_replace("/[^-0-9\.]/",".",$eur_yes)));
		$eur_tod = $eur[0];
		$color3 = $eur[1];
		
	$now = getdate();
	 $day_of_the_week_array = array(1 => 'Понедельник', 2 => 'Вторник', 3 => 'Среда', 4 => 'Четверг', 5 => 'Пятница', 6 => 'Суббота', 0 => 'Воскресенье'); 
	 $trans = array("January" => "Январь",
								 "February" => "Февраль",
								 "March" => "Март",
								 "Apri;" => "Апрель",
								 "May" => "Май",
								 "June" => "Июнь",
								 "July" => "Июль",
								 "August" => "Август",
								 "September" => "Сентябрь",
								 "October" => "Октябрь",
								 "November" => "Ноябрь",
								 "December" => "Декабрь");
	
		$result  = strtr( $now[month], $trans);
		$resultDay  = strtr( $now[wday], $day_of_the_week_array);
	$data = '{
		"EUR": {"status":"'.$color3.'", "today":"'.substr($eur_tod, 0, 6).'", "before":"'.substr($eur_yes, 0, 6).'"},
		"USD": {"status":"'.$color2.'", "today":"'.substr($usd_tod, 0, 6).'", "before":"'.substr($usd_yes, 0, 6).'"},
		"RUR": {"status":"'.$color1.'", "today":"'.substr($rur_tod, 0, 6).'", "before":"'.substr($rur_yes, 0, 6).'"}
		}';
	echo $data;
}

function getRss(){
	$xml = simplexml_load_file('http://k.img.com.ua/rss/ua/all_news2.0.xml');
	foreach ($xml->channel->item as $item) {
 	 echo $item->title;
	 echo '   |   ';
	}
};

function digitalReview(){
	$html = file_get_html('http://digitalsignage.net.ua/');
	$ret = $html->find('div[id=recent-posts-2] ul li'); 
	echo "<div class='wrap'>"; 
	foreach($ret as $tr){
			echo "<div class='review-item'>";
			foreach($tr->find('a img') as $img) {
				$newSrc = str_replace("-50x50","",$img -> src);
				echo "<img src='" . $newSrc . "' width='400px' />";
			}
			foreach($tr->find('span[class=post-stats]') as $text) {
				echo "<h3>" . $text . "</h3>";
			}
			foreach($tr->find('span[class=wpp-post-title]') as $text) {
				echo "<h2>" . $text . "</h2>";
			}
			echo "</div>";
	}
	echo "</div>";
}
if ($_POST['rates']==1) {
 getRates();
	return;
}
if ($_POST['rss']==1) {
 getRss();
	return;
}
if ($_POST['review']==1) {
 digitalReview();
	return;
}
?>