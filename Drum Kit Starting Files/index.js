var buttons = document.querySelectorAll(".drum");
document.addEventListener('keydown', function (event) {
    playSound(event.key);
})

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var key = this.innerText;
        playSound(key);
    });
}
function playSound(key) {
    let path = '';
    switch (key) {
        case 'w':
            path = 'sounds/crash.mp3';
            break;
        case 'a':
            path = 'sounds/kick-bass.mp3';
            break;
        case 's':
            path = 'sounds/snare.mp3';
            break;
        case 'd':
            path = 'sounds/tom-1.mp3';
            break;
        case 'j':
            path = 'sounds/tom-2.mp3';
            break;
        case 'k':
            path = 'sounds/tom-3.mp3';
            break;
        case 'l':
            path = 'sounds/tom-4.mp3';
            break;
        default:
            break;
    }
    if (path != '') {
        const audio = new Audio(path);
        audio.play();
        buttonAnimation(key);
    }
}

function buttonAnimation(key) {
    var buttonClassList = document.querySelector('.' + key).classList;
    buttonClassList.add('pressed');

    setTimeout(function () {
        buttonClassList.remove('pressed');
    }, 100);

}
