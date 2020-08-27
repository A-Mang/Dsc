// $(function () {
//     // 隐藏栏二级导航
//     $('.tab-h-list').mouseover(function () {
//         $('.categorys-tab-content').show();
//     })
//     $('.tab-h-list').mouseout(function () {
//         $('.categorys-tab-content').hide();
//     })
//     $('.categorys-item').mouseover(function () {
//         $(this).find('.categorys-items-layer').show();
//         // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
//     })
//     $('.categorys-item').mouseout(function () {
//         $(this).find('.categorys-items-layer').hide();
//         // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
//     })
// })


// var ulList=document.querySelector('.tab-h-list');
//  var liItem=ulList.querySelectorAll('li');
//  var divList=document.querySelector('.tab-b').querySelectorAll('.tab-b-item');
//  ulList.addEventListener('mouseover',function(e){  
//  for(let i=0;i<liItem.length;i++){  
//  liItem[i].className='tab-h-item';
//  divList[i].className='tab-b-item';
// }
// var target=e.target;
// console.log(target);
// if(target==ulList){  
//  return ;
// }else if(target.href){
//  let parentLi=target.parentElement;
//  parentLi.className='tab-h-item active';
//  console.log(parentLi.getAttribute('index')) ;
//  divList[parseInt(parentLi.getAttribute('index'))].className='tab-b-item active';
// }
// });
// $(document).ready(function(){
 
//     $titleLi =$(".tabTitle ul li");

//     $contentDiv = $(".tabContent div");

// var time = null;
// $titleLi.mouseover(function()
//  {
//      var _this = $(this);
//      //设置定时器
//      time = setTimeout(function(){
//      //sibling()方法获取所以同辈元素     
//      _this.addClass("current").siblings().removeClass("current");
//      //获取当前元素索引
//      var index=_this.index();
//      //通过索引改变内容
//      $contentDiv.eq(index).show().siblings().hide();
//       },300);

//  });


$(function () {
    $('.tab-h-list ul li').mouseover(function () {
        $('.tab-b-item').eq(index).show().siblings().show();
    })
    $('.tab-h-list').mouseout(function () {
        $('.tab-b-item').eq(index).show().siblings().hide();
    })
    // $('.categorys-item').mouseover(function () {
    //     $(this).find('.categorys-items-layer').show();
    //     // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
    // })
    // $('.categorys-item').mouseout(function () {
    //     $(this).find('.categorys-items-layer').hide();
    //     // $(this).siblings('.categorys-item').find('.categorys-items-layer').hide();
    // })
})
