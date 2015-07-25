    $(document).on("hover",".tab-head .a",function(){
      $(this).siblings().removeClass("cur").end().addClass("cur");
      var $parent = $(this).parent();
      var index = $parent.find(".a").index($(this));
      $parent.next().find(".tab-cont").eq(index).show().siblings().hide();
    });
