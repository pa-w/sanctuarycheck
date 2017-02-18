(function() {
  $(".exit").hide();

  $(".info").hide();

  $(function() {
    var open;
    open = true;
    return $(".info-card").click(function() {
      if (open) {
        $(this).siblings().removeClass("full");
        $(this).addClass("full");
        $(this).removeClass("side");
        $(this).siblings().addClass("side");
        $(this).find(".exit").css("display", "inline");
        $(".info").show();
        return open = !open;
      } else {
        $(this).siblings().removeClass("full");
        $(this).removeClass("full");
        $(this).removeClass("side");
        $(this).siblings().removeClass("side");
        $(this).find(".exit").css("display", "none");
        $(".info").hide();
        return open = !open;
      }
    });
  });

}).call(this);