<?php

	if(isset($_POST['imgd'])){

		$img = $_POST['imgd'];
		$img = str_replace('data:image/png;base64,', '', $img);
		$img = str_replace(' ', '+', $img);
		$fileData = base64_decode($img);
		$fileName = 'img2.jpg';
		//file_put_contents($fileName, $fileData);
		mkdir("testing")
		$file = fopen($fileName,'w');
		fwrite($file,$fileData);
		fclose($file);
	}

	print_r ($_POST);
?>