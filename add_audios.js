var ADD_DELAY = 1000;

var list = document.querySelectorAll(".audio_row");
console.log(`Total songs: ${list.length}`);

function add(el, audio_obj) {
   setTimeout(function(){
       console.log(`${audio_obj.title} added`);
       AudioUtils.addAudio(el, audio_obj);
   }, ADD_DELAY);
}

list.forEach(function(el, num) {
  let audio_obj = AudioUtils.asObject(AudioUtils.getAudioFromEl(el));
  add(el, audio_obj);
});
