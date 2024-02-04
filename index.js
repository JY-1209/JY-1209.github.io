const showPopup = document.querySelector(".envelope-wrapper");
const popupContainer = document.querySelector(".popup-container");
const envelope = document.querySelector(".envelope");
const front = document.querySelector(".front");
const card = document.querySelector(".card");
const shadow = document.querySelector(".shadow");
const frontLeft = document.querySelector(".front-left");
const closeBtn = document.querySelector(".close-btn");
const titleText = document.querySelector(".title");
const envelopeWrapper = document.querySelector(".envelope-wrapper");
const container = document.querySelector(".container");
const audio = document.querySelector("audio");
const valentines = document.querySelector(".valentines");
const popupShadow = document.querySelector(".popup-shadow");
showPopup.onclick = () => {
  popupContainer.classList.add("active");
  popupShadow.classList.add("active");
  front.classList.add("hidden");
  envelope.classList.add("hidden");
  frontLeft.classList.add("hidden");
  shadow.classList.add("hidden");
  card.classList.add("hidden");
  audio.classList.add("hidden");
  titleText.classList.add("hidden");
  envelopeWrapper.classList.add("hidden");
  container.style.setProperty("margin-top", "0");
  valentines.style.setProperty("height", "100%");
};
// closeBtn.onclick = () => {
// popupContainer.classList.remove('active');
// popupShadow.classList.remove('active');
// front.classList.remove('hidden');
// envelope.classList.remove('hidden');
// frontLeft.classList.remove('hidden');
// shadow.classList.remove('hidden');
// card.classList.remove('hidden');
// audio.classList.remove('hidden');
// titleText.classList.remove('hidden');
// envelopeWrapper.classList.remove('hidden');
// container.style.setProperty("margin-top", "20vh");
// valentines.style.setProperty("height", "300px");
// }

$(document).ready(function () {
  $(".envelope-wrapper")
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

$(document).ready(function () {
  var scaleCurve = mojs.easing.path(
    "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0"
  );
  var el = document.querySelector(".button"),
    // mo.js timeline obj
    timeline = new mojs.Timeline(),
    // tweens for the animation:

    // burst animation
    tween1 = new mojs.Burst({
      parent: el,
      radius: { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      radius: 100,
      children: {
        shape: "circle",
        radius: 30,
        fill: ["red", "white"],
        strokeWidth: 15,
        duration: 500,
      },
    });

  tween2 = new mojs.Tween({
    duration: 900,
    onUpdate: function (progress) {
      var scaleProgress = scaleCurve(progress);
      el.style.WebkitTransform = el.style.transform =
        "scale3d(" + scaleProgress + "," + scaleProgress + ",1)";
    },
  });

  tween3 = new mojs.Burst({
    parent: el,
    radius: { 0: 100 },
    angle: { 0: -45 },
    y: -10,
    count: 10,
    radius: 125,
    children: {
      shape: "circle",
      radius: 30,
      fill: ["white", "red"],
      strokeWidth: 15,
      duration: 400,
    },
  });

  // add tweens to timeline:
  timeline.add(tween1, tween2, tween3);
  // when clicking the button start the timeline/animation:
  $(".button").click(function () {
    const button = $(this);
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      timeline.play();
      $(this).addClass("active");

      setTimeout(function() {   //calls click event after a certain time
        popupContainer.classList.remove('active');
        popupShadow.classList.remove('active');
        front.classList.remove('hidden');
        envelope.classList.remove('hidden');
        frontLeft.classList.remove('hidden');
        shadow.classList.remove('hidden');
        card.classList.remove('hidden');
        audio.classList.remove('hidden');
        titleText.classList.remove('hidden');
        envelopeWrapper.classList.remove('hidden');
        container.style.setProperty("margin-top", "20vh");
        valentines.style.setProperty("height", "300px");
        button.removeClass("active");
     }, 800);
    }
  });
});
