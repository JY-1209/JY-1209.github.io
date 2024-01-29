//The following was taken from: Copyright (c) 2019 by Fabio Ottaviani (https://codepen.io/supah/pen/RrzREx)
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function animate() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
  
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

    $('.first').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
    window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, $('.first').width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $('.first').height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
});

// animate();