<?php
    date_default_timezone_set("Shanghai/Asia");
    function __object_array ($array) {
        if(is_object($array)) {  
            $array = (array)$array;  
        }
        if(is_array($array)) {  
            foreach ($array as $key=>$value) {
                $array[$key] = __object_array($value);
            }  
        }
         return $array;  
    }
    $__settings = __object_array(json_decode($_POST['_fms']));
    /*
        template => "/Users/nimojs/Documents/git/fms-demo/simple/view/test.php"
        templateDir => "/Users/nimojs/Documents/git/fms-demo/simple/"
        templatePluginDir => /Users/nimojs/Documents/git/fms-demo/simple/plugin/
        data => {"name":1}
    */
    foreach ($__settings['data'] as $key => $value) {
        $GLOBALS[$key] = $value;
    }
    include($__settings['template'])
?>