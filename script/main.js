/*--------슬라이드 ---------*/

const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)
const slide = _ => {
  const wrap = one('.slide') // .slide 선택
  const target = wrap.children[0] // .slide ul 선택
  const len = target.children.length // .slide li 갯수
  // .slide ul의 너비 조정
  target.style.cssText = `width:calc(100% * ${len});display:flex;transition:1s;`
  // .slide li의 너비 조정
  Array.from(target.children)
  .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
  // 화면 전환 실행
  let pos = 0
  setInterval(() => {
    pos = (pos + 1) % len // 장면 선택
    target.style.marginLeft = `${-pos * 100}%`
  }, 3000) // 3000 = 3000ms = 3sec. 즉, 3초 마다 실행
}
window.onload = function () {
  slide()
}

/*--------마우스 오버시 스크롤 다운 ---------*/
$(document).ready(function(){
  $(".language ul").mouseenter(function(){
    $(".submenu").stop().slideDown();
  })
  $(".language ul").mouseleave(function(){
    $(".submenu").stop().slideUp();
  })
})

/*--------스크롤시 이미지 fade in ---------*/
$(document).ready(function() {
  $(window).scroll( function(){
      $('.hair_acc').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'150px'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.cosmetic').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'20px'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.hair').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'500px'},1000);
          }
          
      }); 
  });
});
$(document).ready(function() {
  $(window).scroll( function(){
      $('.metal').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'150px'},1000);
          }
          
      }); 
  });
});
