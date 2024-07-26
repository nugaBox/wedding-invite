if(window.console!=undefined){
    setTimeout(console.log.bind(console,"%c Lovely Wedding Invitation '◡'","font:2.5em Arial;color:#A34140;font-weight:bold"),0);
    setTimeout(console.log.bind(console,"%c made by Nuga & Song2","font:2em Arial;color:#7c7c7c;"),0);
}

// 브라우저 터치 및 스크롤 방지
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

// 복사하기 버튼
function activateCopied(event) {
    // 기본 링크 동작 방지
    event.preventDefault();

    const clickedElement = event.target;
    const copiedElement = document.getElementById('copied');
    const textToCopy = clickedElement.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(function () {
        //console.log(textToCopy);
    }).catch(function (error) {
        //console.error(error);
    });

    if (copiedElement) {
        copiedElement.classList.add('active');

        setTimeout(function () {
            copiedElement.classList.remove('active');
        }, 1000);
    }
}

// BGM 설정
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
        promise = currentAudio.play();
        if (promise !== undefined) {
            promise.then(_ => {
                currentAudio.play();
              // Autoplay started!
            }).catch(error => {
                console.warn ("?? : 브라우저 정책으로 인해 음악이 자동으로 재생되지 않습니다.\n  오디오 버튼을 눌러주세요 🔊😅")
              // Autoplay was prevented.
            });
          }
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