<?php
	if(isset($_GET['username'])){
		$username = ($_GET['username']);
	} else {$username = '';}
	$package = ($_GET['package'])
?>

<h2>Seja bem vindo(a) <?php echo $username ?></h2>
<h2>Você escolheu o pacote: <?php echo $package ?></h2>
