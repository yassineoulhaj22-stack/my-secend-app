const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const audioUrlInput = document.getElementById('audioUrl');
const playerCard = document.getElementById('playerCard');
const trackTitle = document.getElementById('trackTitle');

playBtn.addEventListener('click', () => {
  const url = audioUrlInput.value.trim();
  if (!url) return;

  // 1. تشغيل الصوت
  audioPlayer.src = url;
  audioPlayer.play();
  playerCard.style.display = 'block';

  // 2. إعداد Media Session للتشغيل فـ الخلفية و Lock Screen
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: 'YouTube Audio Stream',
      artist: 'Background Player',
      album: 'Web App',
      artwork: [
        { src: 'https://via.placeholder.com/512', sizes: '512x512', type: 'image/png' }
      ]
    });

    // أدوات التحكم فـ شاشة القفل
    navigator.mediaSession.setActionHandler('play', () => audioPlayer.play());
    navigator.mediaSession.setActionHandler('pause', () => audioPlayer.pause());
  }
});
