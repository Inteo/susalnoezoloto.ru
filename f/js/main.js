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
});
