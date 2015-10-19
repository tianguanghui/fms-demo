<?php
    echo $title; 
    echo $PAGE_URL;
    echo $content;
?>
<h1>test.php</h1>

<script src="/fms/?type=fms.js"></script>
<script>
fms.btn('控制 view /test2/ 失败', function () {
    fms.res('/test2/:view:get:error')
})
</script>