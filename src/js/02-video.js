import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      console.log(seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
});
