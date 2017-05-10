(function() {
                $xmlhttp = xmlhttp();
                $xmlhttp.onreadystatechange = function() {
                    if ($xmlhttp.readyState == 4) {
                        if($xmlhttp.status == 200){
                            document.getElementById('id_token').value = $xmlhttp.responseText;
                            console.log($xmlhttp.responseText);
                        } else {
                            alert('get uptoken other than 200 code was returned')
                        }
                    }
                }
               
              //  $upTokenUrl = 'http://123.206.184.46/qiniu/getuptoken.php';
                $upTokenUrl = 'uptoken.php';

                $xmlhttp.open('GET', $upTokenUrl,false);
                $xmlhttp.send(); 
          function xmlhttp() {
                var $xmlhttp;
                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                    $xmlhttp = new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    $xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                return $xmlhttp;
            }
})();