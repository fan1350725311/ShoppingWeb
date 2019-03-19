$(document).ready(function() {
    //获取购物车的DOM元素
    var car =document.querySelector(".car_t");
    //判断购物车的显示与隐藏，初始值为隐藏
    var bool =false;
    car.onclick=function(){
        if(!bool){
            //展示购物车
            $("header div.i_car").find("div.last").show();
            bool=true;
        }
        else{
            //隐藏购物车
            $("header div.i_car").find("div.last").hide();
            bool=false;
        }
    }


    /*var num = document.getElementById("abc");
    var a = 1;
    var pri = document.getElementById("aaa");

    function jiahao1() {
        var sum = pri.innerText.substr(1, pri.innerHTML.length);//获取单价
        a++;
        document.getElementById("abc").value = a;
        pri.innerHTML = "￥" + sum / (a - 1) * a;

    }

    function jianhao1() {
        var sum = pri.innerText.substr(1, pri.innerHTML.length);//获取单价
        if (a > 1) {
            a--;
            document.getElementById("abc").value = a;
            pri.innerHTML = "￥" + sum / (a + 1) * a;
        }
        else {
            var bool = window.confirm("商品数量小于1，即将删除")
            if (bool == true) {
                document.getElementById("li1").style.display = "none";
            }
        }
    }*/

});

/**
 * 190      1    190*1
 * 190       2    190*2   380
 * 380      3    380*3
 * 380*3    4    380*3*4
 * 380*3*4  5   380*3*4*5
 *
 *
 *
 * */