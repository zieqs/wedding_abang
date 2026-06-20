let instance = null

export function getAudio() {
  if (!instance) {
    instance = new Audio('/audio/song.mp3')
    instance.loop = true
    instance.preload = 'auto'
  }
  return instance
}
