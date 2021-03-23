<?php 

require ('./php/connexion-bdd.php');
include ('./php/functions.php');

$errors = [];
$imageUrl = null;

if ( $_SERVER['REQUEST_METHOD'] === 'POST'){
    $returnValidation = validateForm();
    $errors = $returnValidation['errors'];
    
    if(count ($errors) === 0){
        addCommentaire($bdd);
        // die();
        // Redirection du visiteur vers la page d'accueil
        // header('Location: contact-me.php');
    }
}

?>

<!-- <div class="cadre-top"></div> -->

<div class="block-center">



    <div class="panneau-centre">
        <div class="section-formulaire darkNeon">
            <h3>aidez-moi à améliorer ce site</h3>
            <form class="formulaire-tarik" enctype="multipart/form-data" action="" method="POST">
                <div class="section-input">
                    <label for="pseudo">indiquez un pseudo</label>
                    <input id="pseudo" type="text" name="pseudo" placeholder="">
                </div>
                <div class="section-input">
                    <label for="notation">notation</label>
                    <input id="notation" type="number" min="0" max="5" name="notation" placeholder="">
                </div>
                <div class="section-input">
                    <label for="reponse1">Quel feature avez-vous le plus apprécié ?</label>
                    <select name="reponse1" id="reponse1">
                        <option value="diaporamas">les slideshow</option>
                        <option value="drag&drop">le quizz drag & drop</option>
                        <option value="section3d">l'espace 3d</option>
                    </select>
                </div>
                <div class="section-input">
                    <label for="reponse2">Quelle domaine mériterait d'être amélioré ?</label>
                    <select name="reponse2" id="reponse2">
                        <option value="graphisme">revoie ta maquette et tes graphismes !</option>
                        <option value="fonctionnaliteFront">revoie tes fonctionnalités front !</option>
                        <option value="structure">revoie la structure de ton site</option>
                        <option value="database">revoie ta base de données :)</option>
                        <option value="toutRefaire">rien ne va !</option>
                        <option value="goodJob">c'est plutot pas mal</option>
                    </select>
                </div>
                <div id="special-input" class="section-input">
                    <textarea name="commentaire" cols="30" rows="4" placeholder="saisissez votre message ici !"></textarea>
                    <input class="boutonSubmit boutonTk darkNeon" type="submit" value="valider">
                </div>
                
                <!-- <div class="section-input"> -->
                    <!-- <label for='image'>photo</label> -->
                    <!-- <input type="file" name="image">
                </div> -->


                <div class="section-error">
                    <?php
                    if(count($errors) != 0){
                        foreach ($errors as $error){
                            echo('<p class="error">'.$error.'</p>');
                        }
                    }
                    if ( $_SERVER['REQUEST_METHOD'] === 'POST'){
                        if(count ($errors) === 0){
                            echo("<p class='valid'>votre commentaire a bien été posté, merci pour votre feedback !</p>");
                        }
                    }
                    ?>
                </div>
            </form>

        </div>
    </div>
    <div class="panneau-droit darkNeon">
        <div class="carreGris">
            <div class="cercleContact">
                <div class="modeContact">
                <a href="https://www.github.com/tKlancelot" target="_blank"><button class="buttonGithub"></button></a>
                </div>
                <div class="socle"></div>
            </div>
        </div>
        <div class="carreGris">
            <div class="cercleContact">
                <div class="modeContact">
                    <a href="tel:+33763740559"><button class="buttonTelephone"></button></a>
                </div>
                <div class="socle"></div>
            </div>
        </div>
        <div class="carreGris">
            <div class="cercleContact">
                <div class="modeContact">
                    <a href="https://www.linkedin.com/in/tarik-louatah-7983481b3/" target="_blank"><button class="buttonLinkedin"></button></a>
                </div>
                <div class="socle"></div>
            </div>
        </div>
        <div class="carreGris">
            <div class="cercleContact">
                <div class="modeContact">
                    <a href="mailto:tarik.louatah@gmail.com"><button class="buttonMail"></button></a>
                </div>
            <div class="socle"></div>
        </div>
    </div>
</div>
<!-- <div class="cadre-bottom"> -->
    <?php 
    require('elements/copyright.php');
    ?>
<!-- </div> -->

