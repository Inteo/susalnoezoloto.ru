
function same_height() {
  $(".same-height").each(function(){
    $(".same-height__row").each(function(){
      var heights = $(this).find(".same-height__item").map(function ()
      {
        return $(this).height();
      }).get(),
      maxHeight = Math.max.apply(null, heights);
      $(this).find(".same-height__item").each(function(){
        var h = maxHeight - $(this).height();
        var content = $(this).find(".same-height__content");
        content.height(content.height() + h);
      });
      $(this).height(maxHeight);
      console.log("msg")
    });
  });
}

$(document).ready(function() {
  $(".header__search input").focus(function() {
    $(this).attr("placeholder", "Введите название товара или услуги")
  }).blur(function() {
      $(this).attr("placeholder", "Поиск товаров")
  });
  same_height();
  $(".switcher__btn").click(function(){
    $(this).closest(".switcher__control").find(".switcher__btn").removeClass("active");
    $(this).addClass("active");
    var holder = $(this).closest(".switcher").find(".switcher__holder");
    holder.removeClass("switcher__holder_active");
    holder.filter('[data-switch-hold='+$(this).data("switch-btn")+']').addClass("switcher__holder_active");
    return false;
  });
  $(".scroll-open__trig").click(function(){ 
    $(this).toggleClass("active");
    $(this).closest(".scroll-open").find(".scroll-open__content").slideToggle();
    return false;
  });
  $('.btn-minuse').on('click', function(){
    if($(this).parent().siblings('input').val() > 1) 
    {
      $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) - 1);
      return false;
    }
  })
  $('.btn-pluss').on('click', function(){            
    $(this).parent().siblings('input').val(parseInt($(this).parent().siblings('input').val()) + 1);
  })
});

    