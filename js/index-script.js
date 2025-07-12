let heroBg = document.querySelector('.hero');
setInterval(() => {
    heroBg.style.backgroundImage = "url(../images/Light-On.jpg)"

    setTimeout(() => {
    heroBg.style.backgroundImage = "url(../images/Light-Off.jpg)"


    }, 1000);

}, 2200);

