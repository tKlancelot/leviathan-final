<!-- carousel type grafikart partie html -->
<?php 
        $title = "techniques";
        $msg = "objectif : mise en application des tutoriels de grafikart";
?>

<body class="myBody">

<?php require('head.php'); ?>

    <?php

    require('elements/header.php');

    ?>
    <div class="cadreTechnique">
    <?php
        require('elements/menu-grafikart.php');
        require('elements/section-technique.php');
    ?>
    </div>

</body>
</html>
<!-- <script src="js/carousel-grafikart.js" type="module"></script> -->
<script src="js/translate-menu.js" type="module"></script>