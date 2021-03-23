<?php

require('./php/connexion-bdd.php');
include('./php/functions.php');
session_start();

// var_dump($_SESSION['nom']);
if(!empty($_SESSION)){
    include('display-commentaires.php');
}

if(empty($_SESSION)){
    ?>
    <div class="flex">
        <div class="align-self">
            <form class="formulaire-tarik" action="" method="post">
                <div class="section-input">
                    <input type="password" name="password">
                </div>
                <div class="section-input">
                    <input type="submit" value="valider">
                </div>
            </form>
        </div>
    </div>
    <?php
    if (isset($_POST['password'])){
        $password = $_POST['password'];
        if($password == "!stratien86%"){
            session_start();
            $_SESSION['nom'] = "stratien";
        }
    }
}

?>



