<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Документ без названия</title>

<style>
@font-face {
    font-family: 'Exo2-Thin';
    src: url('Exo2-ThinCondensed.otf');
}
@font-face {
    font-family: 'Exo2-Regular';
    src: url('Exo2-RegularCondensed.otf');
}
body {
	padding: 0;
	margin: 0;
	background: url('bg-DS-Review.jpg') no-repeat;
	padding: 200px 0 0 0;
	overflow: hidden;
}
.review-wrapper {
	text-align: center;	
	color: #fff;
	width: 400px;
	padding: 0 40px;
}
.review-wrapper img {
	margin: 0 auto;
}
.review-wrapper h2 {
	text-align: left;
	font-family: 'Exo2-Thin';
	font-size: 33px;
	line-height: 35px;
  margin: 10px 0 100px 0;
}
.review-wrapper h3 {
	text-align: left;
	font-family: 'Exo2-Regular';
	font-size: 25px;
	margin: 0;
}
</style>
<script type="text/javascript" src="jquery-2.1.3.min.js"></script>
<script type="text/javascript">
$(function() {
height = 0;
margin = 0;
direction = 0;
	function sec() {
		height = $('body div.wrap').height();
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
		$('body div.wrap').css({'margin-top': -margin+'px'});
	}
	setInterval(up, 36);
});
</script>
</head>

<body>
<?php
include('simple_html_dom.php');
$html = file_get_html('http://digitalsignage.net.ua/');
$ret = $html->find('div[id=recent-posts-2] ul li'); 
echo "<div class='wrap'>"; 
foreach($ret as $tr){
		echo "<div class='review-wrapper'>";
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
?>
</body>
</html>