<?php

function addCommentaire($bdd){
    $notation = $_POST['notation'];
    $reponse1 = $_POST['reponse1'];
    $reponse2 = $_POST['reponse2'];
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $commentaire = htmlspecialchars($_POST['commentaire']);
    $req1 = $bdd->prepare('INSERT INTO commentaires (pseudo, commentaire, notation,dateEnvoi,reponse1,reponse2) VALUES (?,?,?,NOW(),?,?)');
    $req1->execute(array($pseudo,$commentaire,$notation,$reponse1,$reponse2));  
    //     // 'image' => $imageUrl
}

function validateForm(){
    $errors = [];
    $imageUrl= '';

    if (empty($_POST['pseudo'])) {
        $errors[] = 'saisis un pseudo valide';
    }
    if (empty($_POST['commentaire'])) {
        $errors[] = 'saisis un commentaire valide';
    }
    if (empty($_POST['notation'])) {
        $errors[] = 'saisis une notation valide';
    }
    $pseudo = htmlspecialchars($_POST['pseudo']);
    $commentaire = htmlspecialchars($_POST['commentaire']);
    if((strlen($pseudo)<0)&&(strlen($pseudo)>20)){
        $errors[] = 'ton pseudo est trop long';
    }
    if((strlen($commentaire)<0)&&(strlen($commentaire)>1000)){
        $errors[] = 'ton commentaire est trop long';
    }

    // if($_FILES['image']['size'] == 0){
    //     $errors[] = 'ajoute une image';
    // }
    // if($_FILES['image']['type'] === 'image/png' || $_FILES['image']['type'] === 'image/jpeg' ){
    //     if($_FILES['image']['size']< 800000){
    //         $extension = explode('/', $_FILES['image']['type'])[1];
    //         $imageUrl = uniqid().'.'.$extension;
    //         move_uploaded_file($_FILES['image']['tmp_name'], 'uploads/'.$imageUrl);
    //     } else {
    //         $errors[] = 'Fichier trop lourd impossible';
    //     }
    // } else {
    //     $errors[] = 'Impossible : j\'accepte que les png et les jpg !';
    // }
    return ['errors'=>$errors];
}


function switchNote($data){
    if($data['notation'] == 1){
        echo "⭐";
    }
    elseif($data['notation']==2){
        echo "⭐⭐";
    }
    elseif($data['notation']==3){
        echo "⭐⭐⭐";
    }
    elseif($data['notation']==4){
        echo "⭐⭐⭐⭐";
    }
    elseif($data['notation']==5){
        echo "⭐⭐⭐⭐⭐";
    }
    else{
        echo "0";
    }
}

?>