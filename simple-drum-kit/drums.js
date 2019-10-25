var kick = document.getElementsByClassName('kick')[0];
var hat = document.getElementsByClassName('hat')[0];
var openhat = document.getElementsByClassName('openhat')[0];
var snare = document.getElementsByClassName('snare')[0];
var clap = document.getElementsByClassName('clap')[0];
var crash = document.getElementsByClassName('crash')[0];

var kick_audio = document.getElementById('key_103');
var hat_audio = document.getElementById('key_104');
var openhat_audio = document.getElementById('key_116');
var snare_audio = document.getElementById('key_117');
var clap_audio = document.getElementById('key_121');
var crash_audio = document.getElementById('key_106');


function playaudio(drum) {
  switch (drum) {
    case 'kick': kick_audio.play();
      break;
    case 'hat': hat_audio.play();
      break;
    case 'openhat': openhat_audio.play();
      break;
    case 'snare': snare_audio.play();
      break;
    case 'clap': clap_audio.play();
      break;
    case 'crash': crash_audio.play();
      break;
  }
}

function stopaudio(drum) {
  switch (drum) {
    case 'kick': kick_audio.pause(); kick_audio.currentTime=0;
      break;
    case 'hat': hat_audio.pause(); hat_audio.currentTime=0;
      break;
    case 'openhat': openhat_audio.pause(); openhat_audio.currentTime=0;
      break;
    case 'snare': snare_audio.pause(); snare_audio.currentTime=0;
      break;
    case 'clap': clap_audio.pause(); clap_audio.currentTime=0;
      break;
    case 'crash': crash_audio.pause(); crash_audio.currentTime=0;
      break;
  }
}

kick.addEventListener('pointerdown', () => {
  playaudio('kick');
});
 kick.addEventListener('pointerup', () => {
  stopaudio('kick');
});

hat.addEventListener('pointerdown', () => {
  playaudio('hat');
});
 hat.addEventListener('pointerup', () => {
  stopaudio('hat');
});

openhat.addEventListener('pointerdown', () => {
  playaudio('openhat');
});
 openhat.addEventListener('pointerup', () => {
  stopaudio('openhat');
});

snare.addEventListener('pointerdown', () => {
  playaudio('snare');
});
 snare.addEventListener('pointerup', () => {
  stopaudio('snare');
});

clap.addEventListener('pointerdown', () => {
  playaudio('clap');
});
 clap.addEventListener('pointerup', () => {
  stopaudio('clap');
});

crash.addEventListener('pointerdown', () => {
  playaudio('crash');
});
 crash.addEventListener('pointerup', () => {
  stopaudio('crash');
});
