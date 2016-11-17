if(!window.jQuery){
  throw new Error('必须先引入jQuery.js！！');
}

/*********
*我的标签页插件函数
***********/
jQuery.fn.tabs = function(){
  //console.log(this);  //jQuery对象，封装着tabs-DIV
  this.find('ul li a').click(function(event){
    event.preventDefault();
    //console.log(this);  //a link DOM对象
    //设置标签页头的active
    $(this).parent().addClass('active').siblings('.active').removeClass('active');

    //设置标签页内容的active
    var id = $(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active');
  });
}