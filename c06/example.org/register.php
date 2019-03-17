<?php
	if(isset($_GET['username'])){
		$username = ($_GET['username']);
	} else {$username = '';}
?>

<h2>Seja bem vindo(a) <?php echo $username ?></h2>