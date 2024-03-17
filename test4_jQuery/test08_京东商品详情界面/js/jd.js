/*
 1. 鼠标移入显示,移出隐藏
    目标: 手机京东, 客户服务, 网站导航, 我的京东, 去购物车结算, 全部商品
 2. 鼠标移动切换二级导航菜单的切换显示和隐藏
 3. 输入搜索关键字, 列表显示匹配的结果
 4. 点击显示或者隐藏更多的分享图标
 5. 鼠标移入移出切换地址的显示隐藏
 6. 点击切换地址tab

 7. 鼠标移入移出切换显示迷你购物车
 8. 点击切换产品选项 (商品详情等显示出来)

 9. 点击向右/左, 移动当前展示商品的小图片
 10. 当鼠标悬停在某个小图上,在上方显示对应的中图
 11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
 */

$(function () {
  showHide()
  subMenu()
  search()
  share()
  address()
  minicart()
  products()
  midumImg()
  movePic()
  showBig()

  //1. 鼠标移入显示,移出隐藏
  function showHide() {
    // 1 找到所有name=show_hide的元素，添加悬浮事件
    // 2 找到她下面的后代标签的id为id_item结尾的元素
    // 3 修改其隐藏显示属性
    // console.log($('[name=show_hide]').length)
    $('[name=show_hide]').hover(function(){ // 移入
      var id = this.id //当前元素的id
      // console.log(id)
      $('#' + id + '_items').show()
    }, function(){ // 移出
      var id = this.id
      $('#' + id + '_items').hide()
    })

  }

  //2. 鼠标移动切换二级导航菜单的切换显示和隐藏
  function subMenu() {
    // 1 找到 class=cate_item的div
    // 2 找打class=cate_item的div下的class="sub_cate_box"控制器显示预不显示

    var $div1 = $('div .cate_item')
    // console.log($div1.length)
    
    // 控制$div1的移入移除
    $div1.hover(function(){
      var $target = $(this).find('.sub_cate_box')
      // console.log($target.length)
      $target.show()
    },function(){
      var $target = $(this).find('.sub_cate_box')
      $target.hide()
      // console.log($target.attr('class'))
    })

    // 委派一个点击事件，当对应的项目被点击时输出对应的文字
    // console.log($div1.find('p a').length)
    $div1.delegate("p a","click",function(){
      // console.log(this)
      console.log($(this).html())
    });

  }

  //3. 输入搜索关键字, 列表显示匹配的结果
  function search() {
    // class="search"下面的id="txtSearch"input文本框有输入(键盘抬起事件和获得焦点，并且失去焦点时关闭后面的不显示)，则显示id="search_helper"的div
    // $('#search_helper').show()
    // console.log($('.search #txtSearch'))
    $('.search #txtSearch').on('keyup focus', function(){
      $('#search_helper').show()
    }).blur(function(){
      $('#search_helper').hide()
    })
  
  }
  // if('')
  //   console.log('空串 true')  
  // else  
  //   console.log('空串 false')  
  // if(' ')
  //     console.log('空格 true')  
  // else  
  //   console.log('空格 false')  

  //   console.log(true === '')
  //   console.log(true === ' ')
  //   console.log(new Boolean(' '))
  //4. 点击显示或者隐藏更多的分享图标
  function share() {
    // 找到id="dd"的div显示下面的所有a标签（除了id="shareMore"这个是按钮）
    // 下面的<b class="backword"></b>

    // console.log($('#dd a:not(.share_more):gt(2)').length)
    $('#shareMore b').click(function(){
      // 判断this是不是含有backword类，含有说明是要关闭，否则就是展示更多
      var $has = $(this).hasClass('backword')
      // console.log($has)
      // 遍历显示或不显示
      $('#dd a:not(.share_more):gt(2)').each(function(index, $element){
        // $has===false显示，$has===true隐藏
        if ($has===false){
          $($element).show()
        }else{
          $($element).hide()
        }
      })
      // 有对应的类就删除，没有就添加
      $(this).toggleClass('backword') 
    })


  }

  //5. 鼠标移入移出切换地址的显示隐藏
  function address() {
    // 鼠标悬浮到id="store_select"上面的时候显示id="store_content"和id="store_close"
    $('#store_select').hover(function(){
      $('#store_content').show()
      $('#store_close').show()
    },function(){
      $('#store_content').hide()
      $('#store_close').hide()
    })

    // 点击×隐藏
    $('#store_close').click(function(){
      $('#store_content').hide()
      $('#store_close').hide()
    })


    // 6. 点击切换地址tab
    // id="store_tabs"下的哪个li被点击了就添加class="hover",其他兄弟要删除对应的class
    // 由于li的数量可能回动态变化，所以这里使用事件委托监听li的父元素id="store_tabs"
    // console.log($('#store_tabs>*').length)
    $('#store_tabs>*').click(function(){
      // 先执行所有的移除操作
      $(this).siblings().removeClass('hover') // 找所有兄弟
      // 之后在为但钱对象添加hover
      $(this).addClass('hover')

    })

  }

  //7. 鼠标移入移出切换显示迷你购物车
  function minicart() {
    // 找到id="minicart"鼠标悬浮时为其添加 class="minicart"，并且显示下面的div
    $('#minicart').hover(function(){
        $(this).addClass('minicart')
        $(this).children('div').show()
    },function(){
      $(this).removeClass('minicart')
      $(this).children('div').hide()
    })
  }

  //8. 商品详情的切换显示
  function products() {
    // 找到id="product_detail"下面的class="main_tabs"点击了哪个li就为其添加class="current"
    // console.log($('#product_detail .main_tabs').length)
    // console.log($('#product_detail>.main_tabs>li').length)

    $('#product_detail>.main_tabs>li').click(function(){
      $(this).siblings().removeClass("current");
      $(this).addClass("current");
      // 数据的显示  然后对class="main_tabs"后面的兄弟的显示进行控制
      var index = $(this).index()
      var index2 = $(`#product_detail>.main_tabs~div`).length
      console.log('index ',index)
      console.log('index2 ', index2)
      $(`#product_detail>.main_tabs~div:lt(${index2})`).hide()
      $(`#product_detail>.main_tabs~div:gt(${index})`).show()

    })

  }

  //9. 点击向右/左, 移动当前展示商品的小图片
  function movePic() {
  }

  //10. 当鼠标悬停在某个小图上,在上方显示对应的中图
  function midumImg() {
  }

  //11. 当鼠标在中图上移动时, 显示对应大图的附近部分区域
  function showBig() {
    
  }

})




