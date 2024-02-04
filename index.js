const showPopup = document.querySelector('.envelope-wrapper');
const popupContainer = document.querySelector('.popup-container');
const envelope = document.querySelector('.envelope');
const front = document.querySelector('.front');
const card = document.querySelector('.card');
const shadow = document.querySelector('.shadow');
const frontLeft = document.querySelector('.front-left');
const closeBtn = document.querySelector('.close-btn');
const titleText = document.querySelector('.title');
const envelopeWrapper = document.querySelector('.envelope-wrapper');
const container = document.querySelector('.container');
const audio = document.querySelector('audio');
const valentines = document.querySelector('.valentines');
const popupShadow = document.querySelector('.popup-shadow');
showPopup.onclick = () => {
    popupContainer.classList.add('active');
    popupShadow.classList.add('active');
    front.classList.add('hidden');
    envelope.classList.add('hidden');
    frontLeft.classList.add('hidden');
    shadow.classList.add('hidden');
    card.classList.add('hidden');
    audio.classList.add('hidden');
    titleText.classList.add('hidden');
    envelopeWrapper.classList.add('hidden');
    container.style.setProperty("margin-top", "5vh");
    valentines.style.setProperty("height", "100%");
}
closeBtn.onclick = () => {
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
}

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