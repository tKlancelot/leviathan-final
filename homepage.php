
<body class="myBody" id="accueilBody">

<?php
    session_start();
    session_destroy();
    // var_dump($_SESSION['nom']);

    require('elements/header.php');

    require('elements/main.php');

    require('elements/footer.php');
    
?>

</body>

<script src="js/homepage.js" type="module"></script>
<script src="js/translate-menu.js" type="module"></script>
<script src="js/responsive.js" type="module"></script>