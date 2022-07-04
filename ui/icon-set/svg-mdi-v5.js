const {
  mdiPlay,
  mdiPause,
  mdiVolumeOff,
  mdiVolumeMedium,
  mdiVolumeHigh,
  mdiCog,
  mdiRun,
  mdiClosedCaption,
  mdiCheck,
  mdiFullscreen,
  mdiFullscreenExit
} = require('@quasar/extras/mdi-v5')

module.exports = {
  name: 'svg-mdi-v5',
  mediaPlayer: {
    play: mdiPlay,
    pause: mdiPause,
    volumeOff: mdiVolumeOff,
    volumeDown: mdiVolumeMedium,
    volumeUp: mdiVolumeHigh,
    settings: mdiCog,
    speed: mdiRun,
    language: mdiClosedCaption,
    selected: mdiCheck,
    fullscreen: mdiFullscreen,
    fullscreenExit: mdiFullscreenExit,
    bigPlayButton: mdiPlay
  }
}