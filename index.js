$(document).ready(function () {
  $(".oh")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
  // $(".oh").click(function () {
  //   $(".first").css("display", "none")
  //   $(".second").css("display", "block")
  // });
});