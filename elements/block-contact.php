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
<?php
if(isset($_POST["pseudo"])){
    $msgError = "ok";
    if(!empty($_POST['pseudo'])&& !empty($_POST['commentaire'])&& !empty($_POST['notation'])){
        $msgError = "donnees ok";
        $pseudo = htmlspecialchars($_POST['pseudo']);
        $commentaire = htmlspecialchars($_POST['commentaire']);
        $notation = htmlspecialchars($_POST['notation']);
        
        if((strlen($pseudo)>0)&&(strlen($pseudo)<20)){
            $msgError = "ok";
            if((strlen($commentaire)>0)&&(strlen($commentaire)<1000)){
    
                $req1 = $bdd->prepare('INSERT INTO commentaires (pseudo, commentaire, notation,dateEnvoi) VALUES (?,?,?,NOW())');
                $req1->execute(array($pseudo,$commentaire,$notation));  
                $msgError = "<span style='color:#4c8'>ton commentaire a bien été publié</span>";
            }
            else{
                $msgError = "ton message est trop long!";
            }
        }
        else{
            $msgError = "ton pseudo est trop long!";
        }
    }
    else{
        $msgError = "champs non remplis";
    }
}
else{
    $msgError = "";
}
?>



<div class="cadre-top"></div>

<div class="block-center">

    <div class="panneau-gauche">
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

    <div class="panneau-centre">
        <div class="section-formulaire">
            <h3>commentaires</h3>
            <form class="formulaire-tarik" action="" method="POST">
                <div class="section-input">
                    <input id="pseudo" type="text" name="pseudo" placeholder="renseigne un pseudo">
                    <input id="notation" type="number" min="0" max="5" name="notation" placeholder="note">
                </div>
                <div id="special-input" class="section-input">
                    <textarea name="commentaire" cols="30" rows="4" placeholder="saisis ton commentaire ici !"></textarea>
                    <input class="boutonSubmit boutonTk darkNeon" type="submit" value="valider">
                </div>
                <div class="section-input">
                    <p style="color:red"><?php if(isset($msgError)){echo $msgError;}?></p>
                </div>
            </form>

            <div class="section-display" style="color:white">
                <?php 
                $req = $bdd->query("SELECT * FROM commentaires ORDER BY dateEnvoi DESC");
                // lister les commentaires
                ?>
                <table class="tableauCommentaire">
                <?php
                while ($donnees = $req->fetch())
                {
                ?>
                    <tr>
                        <td><?php echo $donnees['pseudo'];?></td>
                        <td><?php echo $donnees['dateEnvoi'];?></td>
                        <td id="tdNotation"><?php switchNote($donnees); ?></td>
                    </tr>
                    <tr>
                        <td id="commentaire" colspan="3"><?php echo $donnees['commentaire'];?></td>
                    </tr>
                <?php
                }
                $req->closeCursor();   
                ?>
                </table>
            </div>
        </div>
    </div>
    <div class="panneau-droit">
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
    </div>

</div>
<div class="cadre-bottom">
    <?php 
    require('elements/copyright.php');
    ?>
</div>
<?php
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

