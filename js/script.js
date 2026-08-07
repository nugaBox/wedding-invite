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

// ============================================================
// 스크롤 애니메이션 (BubbleGum TextAnim / DeviceAnim 대체)
// ============================================================
(function() {
    if (!('IntersectionObserver' in window)) return;

    var observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    // --- 1. TextAnim: data-textanim-1, data-textanim-2 ---
    var textAnimEls = document.querySelectorAll('[data-textanim-1], [data-textanim-2]');
    textAnimEls.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    var textObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('text-anim');
                textObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    textAnimEls.forEach(function(el) { textObserver.observe(el); });

    // --- 2. Section headers & subtitles ---
    var sectionHeaders = document.querySelectorAll('.section-header-headline, .section-header-desc, .typography-site-headline, .typography-site-headline-secondary');
    sectionHeaders.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    });

    var headerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                headerObserver.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -15% 0px', threshold: 0.1 });

    sectionHeaders.forEach(function(el) { headerObserver.observe(el); });

    // --- 3. Gallery card items ---
    var cardItems = document.querySelectorAll('.card-item, .card-viewport-content');
    cardItems.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    var cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    cardItems.forEach(function(el) { cardObserver.observe(el); });

    // --- 4. Stat figures (Date&Time, Place, Parking) ---
    var statFigs = document.querySelectorAll('.stat, .tout');
    statFigs.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
    });

    var statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                statObserver.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -5% 0px', threshold: 0.1 });

    statFigs.forEach(function(el) { statObserver.observe(el); });
})();