<?php

// connexion bdd
// $bdd = new PDO('mysql:host=db5001841472.hosting-data.io;dbname=dbs1514150;charset=utf8','dbu253495','!a8tAm9Rx792A8CD%');
try
{
    // $bdd = new PDO('mysql:host=127.0.0.1;dbname=leviatf42;charset=utf8','root','root');    
    $bdd = new PDO('mysql:host=leviatf42.mysql.db;dbname=leviatf42;charset=utf8','leviatf42','cGma7HtzkMND');    
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}    
?>