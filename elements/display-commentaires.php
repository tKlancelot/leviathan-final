<div class="section-display" style="color:white">
<?php 
$req = $bdd->query("SELECT * FROM commentaires ORDER BY dateEnvoi DESC");
// lister les commentaires
// echo "ya un problème";
$tri = $_GET['tri'];

?>



<?php

if($tri == "id_pseudo_down")
{
    $req = $bdd->query("SELECT * FROM `commentaires` ORDER BY `commentaires`.`pseudo` ASC");
}
if($tri == "id_pseudo_up")
{
    $req = $bdd->query("SELECT * FROM `commentaires` ORDER BY `commentaires`.`pseudo` DESC");
}
if($tri == "id_up")
{
    $req = $bdd->query("SELECT * FROM commentaires ORDER BY dateEnvoi DESC");
}
if($tri == "id_down")
{
    $req = $bdd->query("SELECT * FROM commentaires ORDER BY dateEnvoi ASC");
}
if($tri == "id_notation_down")
{
    $req = $bdd->query("SELECT * FROM `commentaires` ORDER BY `commentaires`.`notation` ASC");
}
if($tri == "id_notation_up")
{
    $req = $bdd->query("SELECT * FROM `commentaires` ORDER BY `commentaires`.`notation` DESC");
}
?>



<table class="tableauCommentaire">
    <thead>
        <th><a href="admin.php?tri=id_pseudo_up"><div class="aDown"></div></a></th>
        <th><a href="admin.php?tri=id_pseudo_down"><div class="aUp"></div></a></th>
        <th><a href="admin.php?tri=id_down"><div class="aDown"></div></a></th>
        <th><a href="admin.php?tri=id_up"><div class="aUp"></div></a></th>
        <th><a href="admin.php?tri=id_notation_down"><div class="aDown"></div></a></th>
        <th><a href="admin.php?tri=id_notation_up"><div class="aUp"></div></a></th>
        <th class='fillGrey'></th>
        <th class='fillGrey'></th>
    </thead>
<?php
while ($donnees = $req->fetch())
{
?>
    <tr>
        <td width="10%" colspan="2"><?php echo $donnees['pseudo'];?></td>
        <td width="10%" colspan="2"><?php echo $donnees['dateEnvoi'];?></td>
        <td width="10%" id="tdNotation" colspan="2"><?php switchNote($donnees); ?></td>
        <td colspan="1"><?php echo $donnees['reponse1'] ?></td>
        <td colspan="1"><?php echo $donnees['reponse2'] ?></td>
    </tr>
    <tr>
        <td id="commentaire" width="100%" colspan="8"><?php echo $donnees['commentaire'];?></td>
    </tr>
<?php
}
$req->closeCursor();   
?>
</table>
</div>

