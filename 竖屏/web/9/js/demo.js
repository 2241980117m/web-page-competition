/**
 * Created by Won_Gyeol on 2016/11/20.
 */
$(document).ready(function(){
    //首页跳转
    $("#welcome").click(function(){
        location.href="index0.html";
    });
    $("#flipbook").click(function(){
        $(".point").css("display","none");
    });

    //首页
    $("#sub1").mouseover(function () {
        $(".meet").animate({
            opacity:"1",
            top:"42%",
            fontSize:"42px"
        },1500);
        $(".bg1").animate({
            width:"80%",
            left:"10%",
            opacity:"0.7"
        },1500)
    });

    //第二页弹出div
    function fn2(btn,myDiv) {
        $(btn).click(function(){
            $(myDiv).animate({
                opacity:"1"
            },500);
            $("#cvr").css("z-index",5);
            $(myDiv).css("z-index",10);
            $("#cvr").css("background","#cce");
        });
    }
    fn2("#origin>input","#org");
    fn2("#history>input","#hst");
    fn2("#genres>input","#gns");
    fn2("#award>input","#prize");
    $("#sub2 button").click(function(){
        $("#cvr").css("z-index",-5);
        $(".div2").animate({
            opacity:"0"
        },500);
    })

    //第三页
    var json2 = { "width":"22%", "height":"29%", "top":97, "left":"5%"}
    var json3 = { "width":"90%", "height":"84%", "top":16, "left":"5%"}
    var json4 = { "width":"22%", "height":"29%", "top":97, "left":"103%"}
    $(".rbtn").click(
        function(){
            if(!$("#photo li").is(":animated")){
                //先交换位置
                $(".n3").animate(json2,1000);
                $(".n4").animate(json3,1000);
                $(".n2").css(json4);

                //再交换图片
                $(".n2").attr("class","wait");
                $(".n3").attr("class","n2");
                $(".n4").attr("class","n3");
                if($(".n3").next().length != 0){
                    $(".n3").next().attr("class","n4");
                }else{
                    $("#photo li:first").attr("class","n4");
                }
                $(".n4").css(json4);
            }
        }
    );

    $(".lbtn").click(
        function(){
            if(!$("#photo li").is(":animated")){
                $(".n2").animate(json3,1000);
                $(".n3").animate(json4,1000);
                $(".n4").css(json2);

                $(".n4").attr("class","wait");
                $(".n3").attr("class","n4");
                $(".n2").attr("class","n3");

                if($(".n3").prev().length != 0){
                    $(".n3").prev().attr("class","n2");
                }else{
                    $("#photo li:last").attr("class","n2");
                }
                $(".n2").css(json2);
            }
        }
    );

    //第四页跳转
    function go(a,b){
        $(".test"+a).click(function (){
            location.href=b+".html";
        })
    };
    for(var i=0;i<10;i++){
        go(i,i);
    }

    //第五页隐藏显示
    function fn1(up,down){
        $("#up"+up).click(function(){
            $(".down"+down).slideToggle("slow");
        });
    }
    for(var i=0;i<6;i++){
        fn1(i,i);
    }
    //评论区
    var ref = new Wilddog("https://gelina-01.wilddogio.com/message");
    var arr = [];
    //数据提交
    $(".s_send").click(function() {
        var text = $(".s_txt").val();
        ref.child('message').push(text);
        $(".s_txt").val('');
    });
    $(".s_txt").keypress(function(event) {
        if (event.keyCode == "13") {
            $(".s_send").trigger('click');//激活'.lyq_show'的click事件
        }
    });
    $(".s_clear").click(function() {
        ref.remove();
        arr = [];
        $('.lyq_show').empty();
    });
    //监听云端数据
    ref.child('message').on('child_added', function(snapshot) {
        var text = snapshot.val();
        arr.push(text);
        var textObj = $("<div class=\"dm_message\"></div>");
        textObj.text(text);
        $(".lyq_show").append(textObj);//在“。lyq_show”内最后一个添加
        moveObj(textObj);
    });
    ref.on('child_removed', function() {
        arr = [];
        $('.lyq_show').empty();
    });
    var topMin = $('.lyq_mask').offset().top-2550;
    var topMax = topMin + $('.lyq_mask').height();
    var _top = topMin;
    var moveObj = function(obj) {
        var _left = $('.lyq_mask').width() - obj.width();
        _top = _top + 50;
        if (_top > (topMax - 50)) {
            _top = topMin;
        }
        obj.css({
            left: _left,
            top: _top,
            fontFamily:"微软雅黑",
            color: getRandomColor()
        });
        var time = 20000 + 10000 * Math.random();
        obj.animate({
            left: "-" + _left + "px"
        }, time, function() {
            obj.remove();
        });
    }
    var getRandomColor = function() {
        return '#' + (function(h) {
                return new Array(7 - h.length).join("0") + h
            })((Math.random() * 0x1000000 << 0).toString(16))
    }
    var getAndRun = function() {
        if (arr.length > 0) {
            var n = Math.floor(Math.random() * arr.length + 1) - 1;
            var textObj = $("<div>" + arr[n] + "</div>");
            $(".lyq_show").append(textObj);
            moveObj(textObj);
        }

        setTimeout(getAndRun, 3000);
    }
    jQuery.fx.interval = 50;
    getAndRun();
});
