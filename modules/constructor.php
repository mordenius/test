<?php
if (isset($_POST['lang'])) {
	if (isset($_POST['action'])) {
		switch ($_POST['action']) {
			case 'header':
				getHeader($_POST['lang']);
				break;	
			case 'footer':
				getFooter($_POST['lang']);
				break;
			default:
				echo "error";
				break;
		}
		return;
	} else if (isset($_POST['content']) && "abra" != $_POST['content']) {
		getContent($_POST['content'], $_POST['lang'], $_POST['device']);
		return;
	} else if ("abra" == $_POST['content']){
		include('en/error.php');
	  return;
	};
} else {
	include('ua/error.php');
}


function getHeader($lang){
	include($lang.'/header.php');
	return;
}
function getFooter($lang){
	include($lang.'/footer.php');
	return;
}
function getContent($content, $lang, $device){
	if ('m' == $device && 'news' == $content) {
		include($lang.'/'.$device.'/'.$content.'.php');
	} else {
		include($lang.'/'.$content.'.php');
	}
	return;
}
?>