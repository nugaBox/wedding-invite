window.onload = function () {
    disableScroll = () => {
        document.querySelector('body').addEventListener('touchmove', this.removeEvent, { passive: false });
        document.querySelector('body').addEventListener('onclick', this.removeEvent, { passive: false });
        document.querySelector('body').addEventListener('mousewheel', this.removeEvent, { passive: false });
    }

    removeEvent = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    enableScroll = () => {
        document.querySelector('body').removeEventListener('touchmove', this.removeEvent);
        document.querySelector('body').removeEventListener('onclick', this.removeEvent);
        document.querySelector('body').removeEventListener('mousewheel', this.removeEvent);
    }
}
function activateCopied(event) {
    event.preventDefault();  // 기본 링크 동작 방지

    const clickedElement = event.target;
    const copiedElement = document.getElementById('copied');

    // a 태그의 텍스트를 클립보드에 복사
    const textToCopy = clickedElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(function () {
        //console.log('텍스트가 클립보드에 복사되었습니다: ', textToCopy);
    }).catch(function (error) {
        //console.error('텍스트를 클립보드에 복사하는 동안 오류가 발생했습니다: ', error);
    });

    if (copiedElement) {
        copiedElement.classList.add('active');

        setTimeout(function () {
            copiedElement.classList.remove('active');
        }, 3000);
    }
}

// 배경음 설정
var currentAudio = null;

function playAudio() {
    var audioSrc = "./audio/bgm.mp3";

    // 기존 오디오 있으면
    if (currentAudio) {
        // 일시정지면 재개
        if (currentAudio.paused) {
            currentAudio.play();
            document.getElementById('globalnav-bgm-on').style.display = 'flex';
            document.getElementById('globalnav-bgm-off').style.display = 'none';
            document.getElementById('menu-bgm-on').style.display = 'flex';
            document.getElementById('menu-bgm-off').style.display = 'none';
            document.getElementById('trigger-bgm-on').style.display = 'flex';
            document.getElementById('trigger-bgm-off').style.display = 'none';
            document.getElementById('mobilenav-bgm-on').style.display = 'flex';
            document.getElementById('mobilenav-bgm-off').style.display = 'none';
        }
        // 재생중이면 일시정지
        else {
            currentAudio.pause();
            document.getElementById('globalnav-bgm-on').style.display = 'none';
            document.getElementById('globalnav-bgm-off').style.display = 'flex';
            document.getElementById('menu-bgm-on').style.display = 'none';
            document.getElementById('menu-bgm-off').style.display = 'flex';
            document.getElementById('trigger-bgm-on').style.display = 'none';
            document.getElementById('trigger-bgm-off').style.display = 'flex';
            document.getElementById('mobilenav-bgm-on').style.display = 'none';
            document.getElementById('mobilenav-bgm-off').style.display = 'flex';
        }
    }
    // 기존 오디오 없으면 새로 재생
    else {
        currentAudio = new Audio(audioSrc);
        currentAudio.loop = true;
        currentAudio.volume = 0.5;
        currentAudio.play();
        document.getElementById('globalnav-bgm-on').style.display = 'flex';
        document.getElementById('globalnav-bgm-off').style.display = 'none';
        document.getElementById('menu-bgm-on').style.display = 'flex';
        document.getElementById('menu-bgm-off').style.display = 'none';
        document.getElementById('trigger-bgm-on').style.display = 'flex';
        document.getElementById('trigger-bgm-off').style.display = 'none';
        document.getElementById('mobilenav-bgm-on').style.display = 'flex';
        document.getElementById('mobilenav-bgm-off').style.display = 'none';
    }
}

window.onload = function () {
    playAudio();
}