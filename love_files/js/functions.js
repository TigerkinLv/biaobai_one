// 功能函数

var $win = $(window); //  获取window对象
var clientWidth = $win.width();
var clientHeight = $win.height();

// 窗口大小变化的处理函数
$(window).resize(function(){
    var newWidth = $win.width();
    var newHeight = $win.height();
    if(newWidth!= clientWidth && newHeight !=clientHeight){
        location.replace(location); // 使用 新文档替换当前文档
    }
});


// 为jquery 添加typewriter 插件
(function($){
    $.fn.typewriter = function(){
        // this 为当前jq对象
        this.each(function(){
            var $ele = $(this), str =$ele.html(),progress =0;// progress 用于记录当前光标的位置
            $ele.html("");
            var timer =setInterval(function(){
                var current =str.substr(progress,1); //  当前字符
                if(current== "<"){   //  如果内容里含有 标签元素 则跳过标签本身  
                    progress= str.indexOf('>',progress)+1;
                }else{
                    progress++;
                }
                // 如果文本内容则设置光标 "_"    没有文本不显示
                $ele.html(str.substring(0,progress)+(progress & 1 ? "_":''));// 设置光标     js中的一个&表示按位与（计算使用）   两个&&表示逻辑与
                if(progress>=str.length){
                    clearInterval(timer);
                }
            },75);
        });
        return this;
    }
})(jQuery)

// 时间流逝的处理函数
function timeElapse(date){ //   date是起始戳 毫秒数
    var current =Date(); //  当前时间
    var seconds = (Date.parse(current)-Date.parse(date))/1000; //  秒
    var days =Math.floor(seconds/(3600*24)); //  天
    seconds =seconds % (3600*24); //  小时取余 （取余数部分）
    var  hours =Math.floor(seconds/3600); //  小时
    // if(hours <10){
    //     hours="0"+hours;
    // }
    seconds =seconds % 3600; //  分钟取余 
    var minutes =Math.floor(seconds/60);  // 分钟
    // if(minutes<10){
    //     minutes= "0"+minutes;
    // }
    seconds = seconds %60; //  秒数取余
    // if(seconds<10){
    //     seconds= "0"+ seconds;
    // }
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
    $("#clock").html(result);
}