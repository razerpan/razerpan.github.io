/**
 * Created by pancan on 2016/11/8.
 */
$(function() {
    $( ".biaoqianye" ).tabs();
    var range = document.querySelector('[name="fangdabeilv2"]');
    range.onchange = function(){
        a.innerHTML = this.value;
    };

    $.ajax({
        url:'http://f.apiplus.cn/bj11x5.json',
        dataType:'jsonp',
        success:function(obj){
            console.log(obj.data);
            var s=obj.data;
            var a=s[0].expect;
            $('.opencode div:nth-child(1) span').html(a);
            a++;
            $('.expect div:nth-child(1) span').html(a);
            var number= s[0].opencode.split(",");
            console.log(number);
            $('.opencode div:nth-child(2) ul').empty();
            var str='<li><span>'+number.join('</span></li><li><span>')+'</span></li>';

            //for(var i=0 ;i<number.length ;i++){
            //       str+="<li><span>"+number[i]+"</span></li>";
            //}
            console.log(str);
            $('.opencode div:nth-child(2) ul').html(str);
            var str2='';
            $('.opentimestamp').empty();
            for(var k=0;k<3;k++) {
                var tm = s[k].opentimestamp;
                var num = s[k].opencode.split(',');
                num.unshift(tm);
                var str1 = '';
                for (var j = 0; j < num.length; j++) {
                    str1 += '<li><span>' + num[j] + '</span></li>';
                }
                 str2 += '<div class="number"><ul>' + str1 + '</ul></div>';
            }
            str2="<div><ul><li><span>期次</span></li><li><span>开奖号码</span></li></ul></div>"+str2;

            $('.opentimestamp').append(str2);
        }
    })
});