<?php 
        $title = "parcours";
        $msg = "mon parcours";

?>


<body class="myBody">
    
    
    <?php require('head.php');?>
    
    <?php

    require('elements/header.php');
    
    // require('elements/comeback-soon.php');

    ?>
    <div class="cadre">
        <div class="sous">
            <div class="content">
                
            </div>
            <div class="bandeSteps">
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
                <div class="step"></div>
            </div>
            <div class="bandeBouton">
                <button class="boutonTk" id="next">action</button>
                <!-- <button class="boutonTk" id="switch">1 per frame</button> -->
            </div>
        </div>
    </div>

</body>
</html>
<script src="js/translate-menu.js" type="module"></script>
<script src="js/slideshow.js" type="module"></script>
<!-- <script src="js/parcours.js" type="module"></script> -->
