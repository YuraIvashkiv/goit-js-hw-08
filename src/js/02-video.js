import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const onTimeUpdate = (event) =>  localStorage.setItem(LOCAL_KEY , event.seconds)

player.on('timeupdate', throttle(onTimeUpdate, 1000) );
player.setCurrentTime(localStorage.getItem(LOCAL_KEY ) || 0);